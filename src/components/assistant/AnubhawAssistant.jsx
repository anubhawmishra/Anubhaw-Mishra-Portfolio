import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Minus,
  Send,
  Sparkles,
  ExternalLink,
  Github,
  RefreshCw,
  MessageSquare,
  ChevronDown,
} from 'lucide-react';
import AssistantAvatar from './AssistantAvatar';
import { sendAssistantMessage, getLocalAssistantResponse } from '../../services/assistantService';
import { personal } from '../../data/content';

const SUGGESTED_QUESTIONS = [
  'Tell me about Anubhaw',
  'What projects has he built?',
  'Tell me about JARVIS',
  'Explain JobTrack',
  'What is PITCH™?',
  'Tell me about Deepfake research',
  'What technologies does he know?',
  'What is Anubhaw\'s CGPA?',
  'What was his internship?',
  'How can I contact him?',
];

export default function AnubhawAssistant({ isOpen, setIsOpen }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'init-1',
      role: 'assistant',
      content: `Hi! I'm **Anubhaw Assistant** 👋\n\nI am your interactive AI guide to Anubhaw Mishra's portfolio, full-stack projects, skills, research, and experience. What would you like to explore?`,
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const launcherRef = useRef(null);

  // Initial welcome popup: trigger after 1.8s delay if not previously dismissed
  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem('seen_anubhaw_assistant_welcome');
    if (!hasSeenWelcome && !isOpen) {
      const timer = setTimeout(() => {
        setShowWelcome(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const dismissWelcome = () => {
    setShowWelcome(false);
    sessionStorage.setItem('seen_anubhaw_assistant_welcome', 'true');
  };

  const handleOpenFromWelcome = (initialPrompt = null) => {
    dismissWelcome();
    setIsOpen(true);
    setIsMinimized(false);
    if (initialPrompt) {
      setTimeout(() => {
        handleSendMessage(initialPrompt);
      }, 300);
    }
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen, isMinimized]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen, isMinimized]);

  // Handle ESC key to minimize/close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = async (textToSend = null) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isLoading) return;

    const userMsg = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);
    setIsSpeaking(true);

    try {
      const res = await sendAssistantMessage(query, messages);
      const assistantMsg = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        content: res.reply,
        smartCards: res.smartCards,
        mode: res.mode,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      // Deterministic fallback
      const fallback = getLocalAssistantResponse(query);
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: 'assistant',
          content: fallback.reply,
          smartCards: fallback.smartCards,
          mode: 'grounded-local',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
      // Let avatar speak briefly then return to idle
      setTimeout(() => setIsSpeaking(false), 1400);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `init-${Date.now()}`,
        role: 'assistant',
        content: `Chat session refreshed. How can I help you explore Anubhaw's portfolio?`,
        timestamp: 'Just now',
      },
    ]);
  };

  return (
    <aside aria-label="Anubhaw Assistant AI Guide" className="relative z-50">
      {/* 1. INITIAL WELCOME POPUP */}
      <AnimatePresence>
        {showWelcome && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed bottom-24 right-6 max-w-sm w-[calc(100vw-3rem)] glass-strong p-5 rounded-2xl border border-accent-glow/30 glow-shadow-lg select-none"
            role="dialog"
            aria-modal="false"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <AssistantAvatar size={42} isSpeaking={true} />
                <div>
                  <h3 className="text-sm font-display font-bold text-text-primary flex items-center gap-1.5">
                    Anubhaw Assistant
                    <span className="w-2 h-2 rounded-full bg-accent-glow animate-pulse" />
                  </h3>
                  <p className="text-xs text-text-secondary">Official Portfolio AI Guide</p>
                </div>
              </div>
              <button
                onClick={dismissWelcome}
                className="text-text-secondary hover:text-text-primary p-1 rounded-lg hover:bg-mid-bg transition-colors"
                aria-label="Dismiss welcome popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-text-secondary leading-relaxed mb-4">
              Hi! I'm Anubhaw Assistant 👋 Want to explore Anubhaw's full-stack projects, core technical stack, or research publications?
            </p>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleOpenFromWelcome('What projects has he built?')}
                className="text-xs px-3 py-1.5 rounded-lg bg-accent/20 border border-accent-glow/40 text-accent-glow hover:bg-accent hover:text-dark-bg transition-all font-medium"
              >
                Explore Projects
              </button>
              <button
                onClick={() => handleOpenFromWelcome('What technologies does he use?')}
                className="text-xs px-3 py-1.5 rounded-lg glass border border-border-color text-text-primary hover:border-accent-glow hover:text-accent-glow transition-all"
              >
                Ask About Skills
              </button>
              <button
                onClick={() => handleOpenFromWelcome('Tell me about Anubhaw')}
                className="text-xs px-3 py-1.5 rounded-lg glass border border-border-color text-text-primary hover:border-accent-glow hover:text-accent-glow transition-all"
              >
                About Anubhaw
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. FLOATING LAUNCHER BUTTON */}
      {(!isOpen || isMinimized) && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Subtle helper tooltip */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-accent-glow/30 text-xs text-text-primary shadow-lg pointer-events-none">
            <Sparkles className="w-3.5 h-3.5 text-accent-glow" />
            <span>Ask Anubhaw Assistant</span>
          </div>

          <button
            ref={launcherRef}
            onClick={() => {
              dismissWelcome();
              setIsOpen(true);
              setIsMinimized(false);
            }}
            className="group relative p-2.5 rounded-full glass-strong border-2 border-accent-glow/40 hover:border-accent-glow hover:scale-105 active:scale-95 transition-all duration-300 glow-shadow hover:glow-shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-glow"
            aria-label="Open Anubhaw Assistant AI Guide"
            title="Ask Anubhaw Assistant"
          >
            <AssistantAvatar size={48} isSpeaking={false} />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-accent-glow rounded-full border-2 border-dark-bg animate-pulse" />
          </button>
        </motion.div>
      )}

      {/* 3. MAIN CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] h-[580px] max-h-[88vh] flex flex-col rounded-2xl glass-strong border border-accent-glow/30 glow-shadow-lg overflow-hidden shadow-2xl"
            role="dialog"
            aria-labelledby="assistant-title"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-mid-bg/90 border-b border-border-color flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <AssistantAvatar size={38} isSpeaking={isSpeaking} isThinking={isLoading} />
                <div>
                  <div className="flex items-center gap-2">
                    <h2 id="assistant-title" className="text-sm font-display font-bold text-text-primary">
                      Anubhaw Assistant
                    </h2>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent/20 text-accent-glow border border-accent/40 font-mono">
                      AI Guide
                    </span>
                  </div>
                  <p className="text-[11px] text-text-secondary flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-glow animate-pulse" />
                    Verified Portfolio Grounding
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  className="text-text-secondary hover:text-accent-glow p-1.5 rounded-lg hover:bg-dark-bg transition-colors"
                  title="Clear conversation"
                  aria-label="Restart chat"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsMinimized(true)}
                  className="text-text-secondary hover:text-accent-glow p-1.5 rounded-lg hover:bg-dark-bg transition-colors"
                  title="Minimize"
                  aria-label="Minimize assistant"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-text-secondary hover:text-red-400 p-1.5 rounded-lg hover:bg-dark-bg transition-colors"
                  title="Close"
                  aria-label="Close assistant"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-sm">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <AssistantAvatar size={30} isSpeaking={false} className="mt-1" />
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed text-xs sm:text-sm ${
                      msg.role === 'user'
                        ? 'bg-accent/25 border border-accent-glow/40 text-text-primary rounded-br-none'
                        : 'glass border border-border-color text-text-primary rounded-bl-none'
                    }`}
                  >
                    <div className="whitespace-pre-line">
                      {msg.content.split('\n').map((line, lIdx) => {
                        // Render simple markdown bolding **text**
                        const parts = line.split(/(\*\*.*?\*\*)/g);
                        return (
                          <p key={lIdx} className={line === '' ? 'h-2' : 'my-1'}>
                            {parts.map((p, pIdx) => {
                              if (p.startsWith('**') && p.endsWith('**')) {
                                return (
                                  <strong key={pIdx} className="text-accent-glow font-semibold">
                                    {p.slice(2, -2)}
                                  </strong>
                                );
                              }
                              return p;
                            })}
                          </p>
                        );
                      })}
                    </div>

                    {/* Smart Interactive Project Cards attached to response */}
                    {msg.smartCards && msg.smartCards.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-border-color/60 space-y-2">
                        {msg.smartCards.map((card, cIdx) => (
                          <div
                            key={cIdx}
                            className="p-2.5 rounded-xl bg-dark-bg/80 border border-accent-glow/30"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-semibold text-text-primary text-xs">
                                {card.title}
                              </span>
                              {card.tag && (
                                <span className="text-[10px] text-accent-glow font-mono">
                                  {card.tag}
                                </span>
                              )}
                            </div>
                            {card.tech && (
                              <p className="text-[10.5px] text-text-secondary mb-2">{card.tech}</p>
                            )}
                            <div className="flex flex-wrap gap-2">
                              {card.links?.map((lnk, lIdx) => (
                                <a
                                  key={lIdx}
                                  href={lnk.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md transition-all ${
                                    lnk.primary
                                      ? 'bg-accent text-dark-bg font-semibold hover:bg-accent-glow'
                                      : 'glass border border-border-color text-text-secondary hover:text-accent-glow'
                                  }`}
                                >
                                  {lnk.label.includes('GitHub') ? (
                                    <Github className="w-3 h-3" />
                                  ) : (
                                    <ExternalLink className="w-3 h-3" />
                                  )}
                                  {lnk.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-1 text-[10px] text-text-secondary/60 text-right">
                      {msg.timestamp}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-3"
                >
                  <AssistantAvatar size={30} isSpeaking={true} className="mt-1" />
                  <div className="glass px-4 py-3 rounded-2xl rounded-bl-none border border-border-color flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent-glow animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-accent-glow animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-accent-glow animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggested Prompt Chips */}
            <div className="px-3 py-2 bg-mid-bg/60 border-t border-border-color/50 overflow-x-auto no-scrollbar flex items-center gap-2 flex-shrink-0">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSendMessage(q)}
                  disabled={isLoading}
                  className="whitespace-nowrap text-[11px] px-2.5 py-1 rounded-full glass border border-border-color hover:border-accent-glow text-text-secondary hover:text-accent-glow transition-all flex-shrink-0 disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-mid-bg border-t border-border-color flex items-center gap-2 flex-shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.slice(0, 500))}
                placeholder="Ask about Anubhaw's projects, skills, education..."
                disabled={isLoading}
                maxLength={500}
                className="flex-1 bg-dark-bg border border-border-color rounded-xl px-3.5 py-2 text-xs sm:text-sm text-text-primary placeholder-text-secondary/60 focus:outline-none focus:border-accent-glow transition-colors"
                aria-label="Your question for Anubhaw Assistant"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="p-2.5 rounded-xl bg-accent text-dark-bg hover:bg-accent-glow disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
