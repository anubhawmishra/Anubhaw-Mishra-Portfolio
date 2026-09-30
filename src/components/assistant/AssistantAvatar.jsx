import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Premium 3D cartoon-style futuristic AI assistant avatar for "Anubhaw Assistant".
 * Designed to match the dark theme and emerald green accents of Anubhaw's portfolio.
 * Supports idle breathing, natural blinking, eye tracking, hover reaction, and speaking animations.
 */
export default function AssistantAvatar({
  size = 48,
  isSpeaking = false,
  isThinking = false,
  glow = true,
  className = '',
}) {
  const [isBlinking, setIsBlinking] = useState(false);
  const [glanceX, setGlanceX] = useState(0);

  // Natural blinking interval
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 160);
    }, 3800);
    return () => clearInterval(blinkInterval);
  }, []);

  // Subtle idle eye glancing
  useEffect(() => {
    const glanceInterval = setInterval(() => {
      const randomOffset = (Math.random() - 0.5) * 4;
      setGlanceX(randomOffset);
      setTimeout(() => setGlanceX(0), 1200);
    }, 5500);
    return () => clearInterval(glanceInterval);
  }, []);

  return (
    <motion.div
      animate={{
        y: isSpeaking ? [0, -3, 0] : [0, -2, 0],
      }}
      transition={{
        duration: isSpeaking ? 0.6 : 3.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      whileHover={{ scale: 1.08 }}
      className={`relative inline-flex items-center justify-center select-none flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Anubhaw Assistant 3D Avatar"
    >
      {/* Outer ambient glow */}
      {glow && (
        <div
          className={`absolute inset-0 rounded-full transition-all duration-500 ${
            isSpeaking
              ? 'bg-accent-glow/40 blur-md scale-110'
              : 'bg-accent/25 blur-sm scale-105'
          }`}
        />
      )}

      {/* SVG Avatar Graphic */}
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="relative z-10 drop-shadow-md overflow-visible"
      >
        <defs>
          {/* 3D Head Sphere Gradients */}
          <radialGradient id="avatarHeadGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>

          <radialGradient id="faceplateGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#052e16" />
            <stop offset="70%" stopColor="#021a0c" />
            <stop offset="100%" stopColor="#010e06" />
          </radialGradient>

          <linearGradient id="neonGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#39d353" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>

          <linearGradient id="earFinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#39d353" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          {/* Shadow / highlight filters */}
          <filter id="eyeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Cute Top Antenna / Communication Node */}
        <g>
          <line x1="50" y1="18" x2="50" y2="8" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          <circle
            cx="50"
            cy="7"
            r={isSpeaking || isThinking ? 4 : 3}
            fill="url(#neonGreenGrad)"
            filter="url(#eyeGlow)"
          >
            {(isSpeaking || isThinking) && (
              <animate
                attributeName="opacity"
                values="0.6;1;0.6"
                dur="1s"
                repeatCount="indefinite"
              />
            )}
          </circle>
        </g>

        {/* Ear Nodes / Cyber Headphones */}
        <g>
          {/* Left Ear */}
          <rect x="10" y="42" width="6" height="22" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1" />
          <circle cx="12" cy="53" r="2.5" fill="#39d353" opacity="0.9" />
          {/* Right Ear */}
          <rect x="84" y="42" width="6" height="22" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1" />
          <circle cx="88" cy="53" r="2.5" fill="#39d353" opacity="0.9" />
        </g>

        {/* 3D Rounded Helmet Base */}
        <rect
          x="15"
          y="18"
          width="70"
          height="68"
          rx="32"
          fill="url(#avatarHeadGrad)"
          stroke="#1e3a29"
          strokeWidth="2"
        />

        {/* Specular Highlight on Helmet */}
        <ellipse cx="38" cy="28" rx="14" ry="7" fill="#ffffff" opacity="0.12" transform="rotate(-20 38 28)" />

        {/* Inner Visor / Faceplate */}
        <rect
          x="22"
          y="28"
          width="56"
          height="48"
          rx="20"
          fill="url(#faceplateGrad)"
          stroke="#22c55e"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />

        {/* Visor Glare Curve */}
        <path
          d="M 28 36 Q 50 30 72 36"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.2"
          opacity="0.2"
          strokeLinecap="round"
        />

        {/* Expressive Digital Eyes */}
        <g transform={`translate(${glanceX}, 0)`}>
          {/* Left Eye */}
          {isBlinking ? (
            <line x1="34" y1="50" x2="44" y2="50" stroke="#39d353" strokeWidth="3" strokeLinecap="round" />
          ) : (
            <g>
              <ellipse
                cx="39"
                cy={isSpeaking ? 49 : 50}
                rx={isSpeaking ? 5.5 : 5}
                ry={isSpeaking ? 6.5 : 6}
                fill="#39d353"
                filter="url(#eyeGlow)"
              />
              {/* Catchlight in eye for friendly life-like expression */}
              <circle cx="37" cy="48" r="1.5" fill="#ffffff" />
            </g>
          )}

          {/* Right Eye */}
          {isBlinking ? (
            <line x1="56" y1="50" x2="66" y2="50" stroke="#39d353" strokeWidth="3" strokeLinecap="round" />
          ) : (
            <g>
              <ellipse
                cx="61"
                cy={isSpeaking ? 49 : 50}
                rx={isSpeaking ? 5.5 : 5}
                ry={isSpeaking ? 6.5 : 6}
                fill="#39d353"
                filter="url(#eyeGlow)"
              />
              <circle cx="59" cy="48" r="1.5" fill="#ffffff" />
            </g>
          )}
        </g>

        {/* Cheeks: Cute subtle emerald glow */}
        <ellipse cx="31" cy="58" rx="4" ry="2" fill="#39d353" opacity="0.35" />
        <ellipse cx="69" cy="58" rx="4" ry="2" fill="#39d353" opacity="0.35" />

        {/* Mouth / Speaking Waveform */}
        {isSpeaking ? (
          <g>
            <path
              d="M 43 63 Q 50 68 57 63"
              fill="none"
              stroke="#39d353"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#eyeGlow)"
            >
              <animate
                attributeName="d"
                values="M 43 63 Q 50 68 57 63; M 43 63 Q 50 60 57 63; M 43 64 Q 50 70 57 64; M 43 63 Q 50 68 57 63"
                dur="0.5s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        ) : (
          <path
            d="M 45 64 Q 50 67 55 64"
            fill="none"
            stroke="#39d353"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.85"
          />
        )}
      </svg>
    </motion.div>
  );
}
