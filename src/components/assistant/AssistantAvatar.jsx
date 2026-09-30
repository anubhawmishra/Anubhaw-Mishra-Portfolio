import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Anubhaw Mishra — Personalized 3D Cartoon AI Avatar.
 * Modeled after Anubhaw's real appearance from his official profile photo:
 * - Young South Asian/Indian software engineer
 * - Modern dark textured side-swept quiff hairstyle
 * - Neat groomed short beard & mustache
 * - Expressive warm eyes with blinking and glancing
 * - Friendly confident smile (with speaking mouth animation)
 * - Software engineer attire: black overshirt over crisp white crewneck tee
 * - Subtle emerald green tech accent matching the portfolio design
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
  const prefersReduced = useReducedMotion();

  // Natural blinking interval (every ~3.8 seconds)
  useEffect(() => {
    if (prefersReduced) return;
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 160);
    }, 3800);
    return () => clearInterval(blinkInterval);
  }, [prefersReduced]);

  // Subtle idle eye glancing
  useEffect(() => {
    if (prefersReduced) return;
    const glanceInterval = setInterval(() => {
      const offset = (Math.random() - 0.5) * 3;
      setGlanceX(offset);
      setTimeout(() => setGlanceX(0), 1200);
    }, 5200);
    return () => clearInterval(glanceInterval);
  }, [prefersReduced]);

  return (
    <motion.div
      animate={
        prefersReduced
          ? {}
          : {
              y: isSpeaking ? [0, -2.5, 0] : [0, -1.8, 0],
            }
      }
      transition={{
        duration: isSpeaking ? 0.5 : 3.6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      whileHover={prefersReduced ? {} : { scale: 1.08 }}
      className={`relative inline-flex items-center justify-center select-none flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Anubhaw Mishra 3D Cartoon Avatar"
    >
      {/* Outer ambient glow */}
      {glow && (
        <div
          className={`absolute inset-0 rounded-full transition-all duration-500 pointer-events-none ${
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
          {/* Skin 3D Gradients */}
          <radialGradient id="anubhawSkin" cx="42%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#E2B184" />
            <stop offset="60%" stopColor="#CE9868" />
            <stop offset="100%" stopColor="#B37E50" />
          </radialGradient>
          <radialGradient id="anubhawEar" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#D9A375" />
            <stop offset="100%" stopColor="#A87245" />
          </radialGradient>

          {/* Hair 3D Gradients (matching his modern dark textured cut) */}
          <linearGradient id="anubhawHair" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#32241A" />
            <stop offset="45%" stopColor="#22170F" />
            <stop offset="100%" stopColor="#140D08" />
          </linearGradient>
          <linearGradient id="anubhawHairHighlight" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#4A3628" />
            <stop offset="100%" stopColor="#23170F" />
          </linearGradient>

          {/* Beard / Stubble Gradient */}
          <linearGradient id="anubhawBeard" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2A1E15" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1C130D" stopOpacity="0.95" />
          </linearGradient>

          {/* Clothing Gradients (Black open overshirt + white crewneck tee) */}
          <linearGradient id="anubhawShirt" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A303C" />
            <stop offset="50%" stopColor="#181D24" />
            <stop offset="100%" stopColor="#0F1216" />
          </linearGradient>
          <linearGradient id="anubhawTee" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#DDE1E7" />
          </linearGradient>

          {/* Eye Catchlight Filter */}
          <filter id="eyeCatchGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Tech Earbud Accent (Emerald Green) */}
          <radialGradient id="emeraldTech" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#58E070" />
            <stop offset="70%" stopColor="#39D353" />
            <stop offset="100%" stopColor="#1E8233" />
          </radialGradient>
        </defs>

        {/* 1. CLOTHING (Shoulders, open overshirt, white crewneck tee) */}
        <g id="body">
          {/* Black Casual Overshirt */}
          <path
            d="M 16 98 L 22 84 C 28 80 40 79 50 79 C 60 79 72 80 78 84 L 84 98 Z"
            fill="url(#anubhawShirt)"
            stroke="#0b0e12"
            strokeWidth="1.2"
          />

          {/* White Crewneck T-Shirt Inset */}
          <path
            d="M 39 80 C 43 86 57 86 61 80 C 58 92 42 92 39 80 Z"
            fill="url(#anubhawTee)"
            stroke="#cbd5e1"
            strokeWidth="0.8"
          />

          {/* Overshirt Collar Flaps */}
          <path
            d="M 33 80 L 39 88 L 44 80 Z"
            fill="#1f242d"
            stroke="#0d1117"
            strokeWidth="0.8"
          />
          <path
            d="M 67 80 L 61 88 L 56 80 Z"
            fill="#1f242d"
            stroke="#0d1117"
            strokeWidth="0.8"
          />
        </g>

        {/* 2. NECK */}
        <path
          d="M 42 70 L 42 81 C 45 83 55 83 58 81 L 58 70 Z"
          fill="#B58153"
        />

        {/* 3. EARS */}
        {/* Left Ear */}
        <ellipse cx="25" cy="53" rx="4.5" ry="6.5" fill="url(#anubhawEar)" />
        <ellipse cx="25.5" cy="53" rx="2.5" ry="3.8" fill="#996035" opacity="0.6" />
        {/* Right Ear + Discreet Emerald Tech Earbud */}
        <ellipse cx="75" cy="53" rx="4.5" ry="6.5" fill="url(#anubhawEar)" />
        <ellipse cx="74.5" cy="53" rx="2.5" ry="3.8" fill="#996035" opacity="0.6" />
        {/* Sleek wireless tech earpiece representing AI assistant mode */}
        <circle cx="76" cy="54" r="2.2" fill="url(#emeraldTech)" stroke="#0f172a" strokeWidth="0.5" />
        <circle cx="75.6" cy="53.4" r="0.7" fill="#ffffff" />

        {/* 4. HEAD / FACE BASE */}
        <rect
          x="28"
          y="26"
          width="44"
          height="48"
          rx="21"
          fill="url(#anubhawSkin)"
          stroke="#9E693B"
          strokeWidth="0.8"
        />

        {/* 5. WELL-GROOMED BEARD & MUSTACHE (modeled after his photo) */}
        {/* Jawline Beard */}
        <path
          d="M 28 56 C 28 72 36 76 50 76 C 64 76 72 72 72 56 C 70 65 62 72 50 72 C 38 72 30 65 28 56 Z"
          fill="url(#anubhawBeard)"
        />
        {/* Chin Stubble Accent */}
        <ellipse cx="50" cy="72" rx="6.5" ry="3" fill="#20150E" opacity="0.85" />
        {/* Trimmed Mustache */}
        <path
          d="M 42 63 Q 50 61 58 63 Q 50 65.5 42 63 Z"
          fill="url(#anubhawBeard)"
        />

        {/* 6. EYEBROWS (defined, modern, naturally arched) */}
        <path
          d="M 33 43 Q 40 40 46 42.5"
          fill="none"
          stroke="#20150E"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M 54 42.5 Q 60 40 67 43"
          fill="none"
          stroke="#20150E"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* 7. EXPRESSIVE EYES (with natural blinking and glancing) */}
        <g transform={`translate(${glanceX}, 0)`}>
          {/* Left Eye */}
          {isBlinking ? (
            <path
              d="M 35 49 Q 40 52 45 49"
              fill="none"
              stroke="#20150E"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          ) : (
            <g>
              {/* Eye Sclera */}
              <ellipse cx="40" cy="48.5" rx="4.5" ry="3.8" fill="#F8FAFC" />
              {/* Warm Brown Iris */}
              <circle cx="40.5" cy="48.5" r="2.8" fill="#3D2617" />
              {/* Deep Pupil */}
              <circle cx="40.5" cy="48.5" r="1.7" fill="#150E09" />
              {/* Sparkle Catchlight */}
              <circle cx="39.6" cy="47.5" r="0.9" fill="#FFFFFF" />
              <circle cx="41.5" cy="49.3" r="0.45" fill="#FFFFFF" />
            </g>
          )}

          {/* Right Eye */}
          {isBlinking ? (
            <path
              d="M 55 49 Q 60 52 65 49"
              fill="none"
              stroke="#20150E"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          ) : (
            <g>
              {/* Eye Sclera */}
              <ellipse cx="60" cy="48.5" rx="4.5" ry="3.8" fill="#F8FAFC" />
              {/* Warm Brown Iris */}
              <circle cx="59.5" cy="48.5" r="2.8" fill="#3D2617" />
              {/* Deep Pupil */}
              <circle cx="59.5" cy="48.5" r="1.7" fill="#150E09" />
              {/* Sparkle Catchlight */}
              <circle cx="58.6" cy="47.5" r="0.9" fill="#FFFFFF" />
              <circle cx="60.5" cy="49.3" r="0.45" fill="#FFFFFF" />
            </g>
          )}
        </g>

        {/* 8. NOSE */}
        <path
          d="M 50 48 L 48.5 56 C 49 57.5 51 57.5 51.5 56 Z"
          fill="#BD8557"
          opacity="0.8"
        />

        {/* 9. MOUTH / SPEAKING EXPRESSION */}
        {isSpeaking ? (
          <g>
            {/* Animated Talking Mouth */}
            <path
              d="M 44 65 Q 50 71 56 65 Q 50 63 44 65 Z"
              fill="#521C16"
              stroke="#2E0E0A"
              strokeWidth="0.8"
            >
              <animate
                attributeName="d"
                values="M 44 65 Q 50 71 56 65 Q 50 63 44 65 Z; M 44 65 Q 50 67 56 65 Q 50 64 44 65 Z; M 43 65 Q 50 73 57 65 Q 50 62 43 65 Z; M 44 65 Q 50 71 56 65 Q 50 63 44 65 Z"
                dur="0.4s"
                repeatCount="indefinite"
              />
            </path>
            {/* Teeth highlight */}
            <path d="M 46 64.5 Q 50 65.5 54 64.5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
          </g>
        ) : (
          /* Subtle Confident Smile */
          <path
            d="M 44 66 Q 50 69.5 56 66"
            fill="none"
            stroke="#5A241C"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        )}

        {/* 10. MODERN TEXTURED QUIRK / HAIRSTYLE (Inspired by his photo) */}
        {/* Sides & Back */}
        <path
          d="M 27 48 C 24 35 30 20 50 18 C 70 20 76 35 73 48 C 71 34 68 25 50 24 C 32 25 29 34 27 48 Z"
          fill="url(#anubhawHair)"
        />
        {/* Styled Voluminous Top & Fringe with Natural Sweep */}
        <path
          d="M 26 36 C 26 22 34 14 48 13 C 58 12 70 15 74 25 C 76 29 74 35 72 37 C 69 31 66 27 58 26 C 46 25 36 29 31 35 C 29 37 27 38 26 36 Z"
          fill="url(#anubhawHairHighlight)"
        />
        {/* Tousled textured locks swept up and slightly right (matching his photo hair) */}
        <path
          d="M 38 17 C 42 12 48 11 52 14 C 47 14 43 16 38 17 Z"
          fill="#4A3628"
        />
        <path
          d="M 48 13 C 55 9 64 12 67 17 C 61 15 54 14 48 13 Z"
          fill="#4A3628"
        />
        <path
          d="M 60 15 C 67 13 72 17 73 22 C 69 19 64 18 60 15 Z"
          fill="#3E2C20"
        />

        {/* 11. SUBTLE LIVE ASSISTANT STATUS BADGE (Small emerald dot when thinking/speaking) */}
        {(isSpeaking || isThinking) && (
          <g transform="translate(8, 8)">
            <circle cx="4" cy="4" r="3.5" fill="#39D353" filter="url(#eyeCatchGlow)">
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        )}
      </svg>
    </motion.div>
  );
}
