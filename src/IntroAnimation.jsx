import { memo, useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import "./IntroAnimation.css";

/* ============================================================
   EVENT CONFIGURATION
============================================================ */

const EVENT_NAME = "TECHNO WINGS";
const EVENT_YEAR = "2K26";
const TAGLINE = "INNOVATE • ELEVATE • INSPIRE";

/* ============================================================
   TIMELINE
============================================================ */

const TIMING = Object.freeze({
  approach: 150,
  converge: 300,
  form: 550,
  logo: 800,
  energy: 1050,
  title: 1200,
  hero: 1500,
  exit: 2000,
  complete: 2400,
});

/* ============================================================
   STATIC DATA
   Created once at module load instead of on every render.
============================================================ */

const PARTICLES = Object.freeze(
  Array.from({ length: 75 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 2 + 1.5,
    delay: Math.random() * 0.8,
    opacity: Math.random() * 0.65 + 0.15,
  }))
);

const SPEED_LINES = Object.freeze(
  Array.from({ length: 14 }, (_, i) => ({
    id: i,
    topLeft: 28 + i * 3.5,
    topRight: 30 + i * 3.5,
    width: 18 + (i % 5) * 7,
    duration: 0.65 + (i % 4) * 0.08,
    delay: (i % 6) * 0.035,
  }))
);

const RADIAL_RAYS = Object.freeze([0, 45, 90, 135]);

/* ============================================================
   BACKGROUND PARTICLES
============================================================ */

const BackgroundParticles = memo(function BackgroundParticles({
  active,
}) {
  return (
    <div
      className={`intro-particles-layer ${
        active ? "intro-particles-active" : ""
      }`}
      aria-hidden="true"
    >
      {PARTICLES.map((particle) => (
        <span
          key={particle.id}
          className="intro-particle"
          style={{
            "--particle-x": `${particle.x}%`,
            "--particle-y": `${particle.y}%`,
            "--particle-size": `${particle.size}px`,
            "--particle-duration": `${particle.duration}s`,
            "--particle-delay": `${particle.delay}s`,
            "--particle-opacity": particle.opacity,
          }}
        />
      ))}
    </div>
  );
});

/* ============================================================
   SPEED LINES
============================================================ */

const SpeedLines = memo(function SpeedLines({ active }) {
  const className = active
    ? "intro-speed-lines intro-speed-lines-active"
    : "intro-speed-lines";

  return (
    <div className={className} aria-hidden="true">
      <div className="intro-speed-lines-left">
        {SPEED_LINES.map((line) => (
          <span
            key={`left-${line.id}`}
            className="intro-speed-line intro-speed-line-left"
            style={{
              "--line-top": `${line.topLeft}%`,
              "--line-width": `${line.width}vw`,
              "--line-duration": `${line.duration}s`,
              "--line-delay": `${line.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="intro-speed-lines-right">
        {SPEED_LINES.map((line) => (
          <span
            key={`right-${line.id}`}
            className="intro-speed-line intro-speed-line-right"
            style={{
              "--line-top": `${line.topRight}%`,
              "--line-width": `${line.width}vw`,
              "--line-duration": `${line.duration}s`,
              "--line-delay": `${line.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
});

/* ============================================================
   ENERGY CORE
============================================================ */

const EnergyCore = memo(function EnergyCore({ phase }) {
  const coreActive = phase >= 2;
  const beamActive = phase >= 2;
  const beamStrong = phase >= 3;

  return (
    <>
      {/* Large soft glow */}

      <motion.div
        className="intro-energy-glow absolute left-1/2 top-[40%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[70px]"
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: coreActive ? [0.5, 1, 1.08] : 0.5,
          opacity: coreActive ? [0, 0.7, 0.3] : 0,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      />

      {/* Core */}

      <motion.div
        className="absolute left-1/2 top-[40%] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: coreActive ? [0, 1.4, 1] : 0,
          opacity: coreActive ? [0, 1, 0.9] : 0,
        }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* Core blue ring */}

      <motion.div
        className="absolute left-1/2 top-[40%] h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: coreActive ? [0, 1.5, 2.5] : 0,
          opacity: coreActive ? [0, 0.9, 0] : 0,
        }}
        transition={{
          duration: 0.65,
          ease: "easeOut",
        }}
      />

      {/* Vertical beam */}

      <motion.div
        className="intro-energy-beam absolute left-1/2 top-[8%] h-[64%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-300 to-transparent"
        initial={{
          scaleY: 0,
          opacity: 0,
        }}
        animate={{
          scaleY: beamActive ? 1 : 0,
          opacity: beamStrong
            ? [0.15, 1, 0.2]
            : beamActive
              ? 0.7
              : 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      />
    </>
  );
});

/* ============================================================
   METALLIC WING
============================================================ */

const Wing = memo(function Wing({ side, phase }) {
  const isLeft = side === "left";

  const transformOrigin = "600px 210px";

  const initialX = isLeft ? -430 : 430;
  const initialRotate = isLeft ? -18 : 18;

  const x =
    phase >= 1
      ? phase >= 2
        ? 0
        : isLeft
          ? -18
          : 18
      : initialX;

  const y =
    phase >= 2
      ? 0
      : phase >= 1
        ? 4
        : 30;

  const rotate =
    phase >= 2
      ? 0
      : phase >= 1
        ? isLeft
          ? -2
          : 2
        : initialRotate;

  const scale =
    phase >= 2
      ? 1
      : phase >= 1
        ? 0.9
        : 0.65;

  return (
    <motion.g
      className="intro-wing"
      style={{
        transformOrigin,
      }}
      initial={{
        x: initialX,
        y: 30,
        rotate: initialRotate,
        scale: 0.65,
        opacity: 0,
      }}
      animate={{
        x,
        y,
        rotate,
        scale,
        opacity: phase >= 1 ? 1 : 0,
      }}
      transition={{
        duration: phase >= 2 ? 0.45 : 0.65,
        delay: isLeft ? 0 : 0.035,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <g
        transform={
          isLeft
            ? undefined
            : "translate(1200 0) scale(-1 1)"
        }
      >
        {/* =====================================================
            PRIMARY WING ROOT
        ===================================================== */}

        <path
          d="
            M610 206
            C570 193 532 175 490 151
            C435 119 382 91 322 72
            C259 52 193 48 118 58
            C163 83 211 112 260 139
            C318 171 380 195 444 207
            C500 218 555 218 610 214
            Z
          "
          fill="url(#metalDark)"
          stroke="#64748b"
          strokeWidth="1.2"
        />

        {/* =====================================================
            MAIN SILVER AERODYNAMIC SURFACE
        ===================================================== */}

        <path
          d="
            M603 202
            C548 182 496 154 444 125
            C382 91 316 67 252 58
            C205 51 162 52 118 58
            C186 72 248 97 306 127
            C375 163 443 192 509 207
            C543 214 576 216 603 212
            Z
          "
          fill="url(#metalSilver)"
        />

        {/* =====================================================
            FEATHER 1
        ===================================================== */}

        <path
          d="
            M520 190
            C461 147 398 99 330 68
            C276 43 218 35 151 45
            C207 66 258 95 310 127
            C377 167 441 194 520 202
            Z
          "
          fill="url(#metalBright)"
          stroke="#cbd5e1"
          strokeWidth="1"
        />

        <path
          d="
            M151 45
            C218 35 276 43 330 68
            C398 99 461 147 520 190
          "
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2.2"
          filter="url(#blueGlow)"
        />

        {/* =====================================================
            FEATHER 2
        ===================================================== */}

        <path
          d="
            M535 199
            C470 168 404 131 339 104
            C290 84 240 77 192 82
            C245 105 294 132 343 161
            C408 198 471 208 535 208
            Z
          "
          fill="url(#metalSilver)"
          stroke="#64748b"
          strokeWidth="1"
        />

        <path
          d="
            M192 82
            C245 105 294 132 343 161
            C408 198 471 208 535 208
          "
          fill="none"
          stroke="#38bdf8"
          strokeWidth="1.8"
        />

        {/* =====================================================
            FEATHER 3
        ===================================================== */}

        <path
          d="
            M548 207
            C485 191 422 168 360 148
            C315 133 274 130 235 137
            C283 157 327 176 374 192
            C433 211 492 215 548 212
            Z
          "
          fill="url(#metalBright)"
          stroke="#475569"
          strokeWidth="1"
        />

        {/* =====================================================
            FEATHER 4
        ===================================================== */}

        <path
          d="
            M555 212
            C493 207 435 196 380 184
            C337 175 299 176 267 185
            C314 201 358 211 407 216
            C459 221 510 219 555 216
            Z
          "
          fill="url(#metalDark)"
          stroke="#475569"
          strokeWidth="1"
        />

        <path
          d="
            M267 185
            C314 201 358 211 407 216
            C459 221 510 219 555 216
          "
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="1.4"
          opacity="0.8"
        />

        {/* =====================================================
            FEATHER 5
        ===================================================== */}

        <path
          d="
            M552 217
            C495 221 442 220 396 216
            C362 213 331 216 307 226
            C356 238 409 241 460 235
            C497 231 528 225 552 220
            Z
          "
          fill="url(#metalSilver)"
          stroke="#64748b"
          strokeWidth="1"
        />

        {/* =====================================================
            FEATHER 6
        ===================================================== */}

        <path
          d="
            M532 220
            C487 230 445 239 410 247
            C445 252 484 250 519 238
            C535 233 548 226 557 220
            Z
          "
          fill="url(#metalDark)"
          stroke="#475569"
          strokeWidth="1"
        />

        {/* =====================================================
            PANEL SEAMS
        ===================================================== */}

        <path
          d="M331 69 C391 104 447 148 503 190"
          fill="none"
          stroke="#020617"
          strokeWidth="2"
          opacity="0.8"
        />

        <path
          d="M240 137 C320 160 397 192 478 207"
          fill="none"
          stroke="#020617"
          strokeWidth="2"
          opacity="0.7"
        />

        <path
          d="M307 226 C377 226 443 223 511 216"
          fill="none"
          stroke="#0f172a"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {/* =====================================================
            OUTER AERODYNAMIC TIP
        ===================================================== */}

        <path
          d="
            M118 58
            C140 46 165 41 193 41
            C175 33 149 34 126 42
            C116 46 108 52 101 59
            Z
          "
          fill="url(#metalBright)"
          stroke="#cbd5e1"
          strokeWidth="0.8"
        />

        <path
          d="
            M101 59
            C126 43 158 38 193 41
          "
          fill="none"
          stroke="#67e8f9"
          strokeWidth="2"
          filter="url(#blueGlow)"
        />

        {/* =====================================================
            INNER STRUCTURAL RIBS
        ===================================================== */}

        <path
          d="M438 122 L478 192"
          stroke="#e2e8f0"
          strokeWidth="1"
          opacity="0.35"
        />

        <path
          d="M380 94 L431 181"
          stroke="#e2e8f0"
          strokeWidth="1"
          opacity="0.25"
        />

        <path
          d="M318 75 L369 166"
          stroke="#e2e8f0"
          strokeWidth="1"
          opacity="0.2"
        />
      </g>
    </motion.g>
  );
});

/* ============================================================
   CENTER AIRCRAFT / SYMBOL
============================================================ */

const CenterAircraft = memo(function CenterAircraft({ phase }) {
  return (
    <motion.g
      className="intro-aircraft"
      initial={{
        opacity: 0,
        scale: 0.2,
      }}
      animate={{
        opacity: phase >= 2 ? 1 : 0,
        scale:
          phase >= 2
            ? phase >= 3
              ? [0.8, 1.08, 1]
              : 1
            : 0.2,
      }}
      transition={{
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        transformOrigin: "600px 205px",
      }}
    >
      <path
        d="
          M600 62
          L628 180
          L615 229
          L600 253
          L585 229
          L572 180
          Z
        "
        fill="url(#metalBright)"
        stroke="#f8fafc"
        strokeWidth="1.2"
      />

      <path
        d="
          M600 76
          L612 181
          L600 226
          L588 181
          Z
        "
        fill="#020617"
      />

      <path
        d="
          M600 78
          L607 181
          L600 215
          L593 181
          Z
        "
        fill="url(#energyBlue)"
        filter="url(#strongBlueGlow)"
      />

      <path
        d="
          M585 177
          L548 215
          L585 205
          Z
        "
        fill="url(#metalDark)"
        stroke="#94a3b8"
        strokeWidth="1"
      />

      <path
        d="
          M615 177
          L652 215
          L615 205
          Z
        "
        fill="url(#metalDark)"
        stroke="#94a3b8"
        strokeWidth="1"
      />

      <path
        d="
          M600 214
          L622 260
          L600 244
          L578 260
          Z
        "
        fill="url(#metalDark)"
        stroke="#94a3b8"
        strokeWidth="1"
      />

      <circle
        cx="600"
        cy="178"
        r="6"
        fill="#ffffff"
        filter="url(#strongBlueGlow)"
      />

      <path
        d="M600 64 L606 177"
        stroke="#ffffff"
        strokeWidth="1.5"
        opacity="0.8"
      />
    </motion.g>
  );
});

/* ============================================================
   WING ASSEMBLY
============================================================ */

const WingAssembly = memo(function WingAssembly({ phase }) {
  return (
    <div className="absolute left-1/2 top-[37%] h-[340px] w-[min(1100px,100vw)] -translate-x-1/2 -translate-y-1/2 sm:top-[38%]">
      <svg
        viewBox="0 0 1200 420"
        className="h-full w-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          {/* ==================================================
              METAL GRADIENTS
          ================================================== */}

          <linearGradient
            id="metalSilver"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="14%" stopColor="#cbd5e1" />
            <stop offset="27%" stopColor="#ffffff" />
            <stop offset="43%" stopColor="#64748b" />
            <stop offset="60%" stopColor="#f8fafc" />
            <stop offset="78%" stopColor="#475569" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient
            id="metalBright"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="20%" stopColor="#94a3b8" />
            <stop offset="38%" stopColor="#ffffff" />
            <stop offset="52%" stopColor="#f8fafc" />
            <stop offset="68%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient
            id="metalDark"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#020617" />
            <stop offset="28%" stopColor="#334155" />
            <stop offset="48%" stopColor="#0f172a" />
            <stop offset="70%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* ==================================================
              ENERGY
          ================================================== */}

          <linearGradient
            id="energyBlue"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#67e8f9" />
            <stop offset="60%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>

          {/* ==================================================
              FILTERS
          ================================================== */}

          <filter
            id="blueGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="3"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter
            id="strongBlueGlow"
            x="-200%"
            y="-200%"
            width="400%"
            height="400%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="5"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <Wing side="left" phase={phase} />

        <Wing side="right" phase={phase} />

        <CenterAircraft phase={phase} />
      </svg>

      {/* ======================================================
          HUD RINGS
      ====================================================== */}

      <div
        className={`intro-hud-ring intro-hud-ring-large ${
          phase >= 2 ? "intro-hud-active" : ""
        }`}
        aria-hidden="true"
      >
        <span className="intro-hud-marker intro-hud-marker-top" />
        <span className="intro-hud-marker intro-hud-marker-bottom" />
        <span className="intro-hud-marker intro-hud-marker-left" />
        <span className="intro-hud-marker intro-hud-marker-right" />
      </div>

      <div
        className={`intro-hud-ring intro-hud-ring-small ${
          phase >= 2 ? "intro-hud-active" : ""
        }`}
        aria-hidden="true"
      />
    </div>
  );
});

/* ============================================================
   ENERGY BURST
============================================================ */

const EnergyBurst = memo(function EnergyBurst({ phase }) {
  return (
    <>
      {/* Shockwave */}

      <motion.div
        className="absolute left-1/2 top-[38%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale:
            phase >= 3
              ? [0, 2.5, 5]
              : 0,
          opacity:
            phase >= 3
              ? [0, 0.9, 0]
              : 0,
        }}
        transition={{
          duration: 0.65,
          ease: "easeOut",
        }}
      />

      {/* Horizontal flash */}

      <motion.div
        className="absolute left-1/2 top-[38%] h-px w-[80vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        animate={{
          scaleX:
            phase >= 3
              ? [0, 1, 0]
              : 0,
          opacity:
            phase >= 3
              ? [0, 1, 0]
              : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      />

      {/* Radial rays */}

      {RADIAL_RAYS.map((rotation) => (
        <motion.div
          key={rotation}
          className="absolute left-1/2 top-[38%] h-px w-[30vw] origin-left bg-gradient-to-r from-white via-cyan-300/70 to-transparent"
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          animate={{
            scaleX:
              phase >= 3
                ? [0, 1, 0]
                : 0,
            opacity:
              phase >= 3
                ? [0, 0.8, 0]
                : 0,
          }}
          transition={{
            duration: 0.5,
            delay: rotation * 0.0005,
            ease: "easeOut",
          }}
        />
      ))}
    </>
  );
});

/* ============================================================
   EVENT TITLE
============================================================ */

const EventTitle = memo(function EventTitle({ phase }) {
  const visible = phase >= 4;

  return (
    <div className="absolute left-1/2 top-[61%] z-30 w-full -translate-x-1/2 px-5 text-center sm:top-[62%]">
      {/* Scan line */}

      <motion.div
        className="mx-auto mb-3 h-px w-[min(500px,70vw)] bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        animate={{
          scaleX: visible ? [0, 1, 0] : 0,
          opacity: visible ? [0, 1, 0] : 0,
        }}
        transition={{
          duration: 0.55,
          ease: "easeOut",
        }}
      />

      {/* Department */}

      <motion.p
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : 12,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="mb-3 text-[7px] font-bold uppercase tracking-[0.45em] text-cyan-300 sm:text-xs"
      >
        Department of Aeronautical
        Engineering
      </motion.p>

      {/* Main title */}

      <motion.h1
        initial={{
          opacity: 0,
          y: 24,
          scale: 0.9,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : 24,
          scale: visible ? 1 : 0.9,
          filter: visible
            ? "blur(0px)"
            : "blur(8px)",
        }}
        transition={{
          duration: 0.55,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="intro-title whitespace-nowrap text-[clamp(2rem,7vw,6rem)] font-black leading-none tracking-[-0.05em]"
      >
        <span className="text-white">
          {EVENT_NAME}
        </span>
      </motion.h1>

      {/* Year */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
          scale: 0.7,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : 15,
          scale: visible ? 1 : 0.7,
        }}
        transition={{
          duration: 0.45,
          delay: 0.08,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="mt-2 text-[clamp(1.7rem,5vw,4rem)] font-black tracking-[0.22em] text-cyan-200"
      >
        {EVENT_YEAR}
      </motion.div>

      {/* Tagline */}

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : 10,
        }}
        transition={{
          duration: 0.4,
          delay: 0.16,
          ease: "easeOut",
        }}
        className="mt-4 text-[7px] font-semibold tracking-[0.32em] text-white/60 sm:text-xs"
      >
        {TAGLINE}
      </motion.div>
    </div>
  );
});

/* ============================================================
   TRANSITION
============================================================ */

const TransitionEffect = memo(function TransitionEffect({
  phase,
}) {
  return (
    <>
      {/* Center flash */}

      <motion.div
        className="absolute left-1/2 top-[40%] z-50 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale:
            phase >= 5
              ? [0, 3, 15]
              : 0,
          opacity:
            phase >= 5
              ? [0, 0.7, 0]
              : 0,
        }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
      />

      {/* Final fade */}

      <motion.div
        className="absolute inset-0 z-[60] bg-[#01040a]"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity:
            phase >= 5
              ? [0, 0.25, 1]
              : 0,
        }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
      />
    </>
  );
});

/* ============================================================
   MAIN INTRO
============================================================ */

export default function IntroAnimation({
  onComplete,
}) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let completeTimer;

    const timers = [
      window.setTimeout(
        () => setPhase(1),
        TIMING.approach
      ),

      window.setTimeout(
        () => setPhase(2),
        TIMING.converge
      ),

      window.setTimeout(
        () => setPhase(3),
        TIMING.form
      ),

      window.setTimeout(
        () => setPhase(4),
        TIMING.title
      ),

      window.setTimeout(
        () => setPhase(5),
        TIMING.exit
      ),

      (completeTimer = window.setTimeout(
        () => {
          onComplete?.();
        },
        TIMING.complete
      )),
    ];

    return () => {
      timers.forEach((timer) =>
        window.clearTimeout(timer)
      );

      if (completeTimer) {
        window.clearTimeout(completeTimer);
      }
    };
  }, [onComplete]);

  const activeParticles = phase >= 1;
  const activeSpeedLines = phase >= 1;

  return (
    <motion.div
      className="intro-root"
      initial={{
        opacity: 1,
        scale: 1,
      }}
      animate={{
        opacity: phase >= 5 ? 0 : 1,
        scale: phase >= 5 ? 1.04 : 1,
      }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 bg-[#01040a]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(0,140,255,0.14),transparent_42%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]" />

      {/* ======================================================
          PARTICLES
      ====================================================== */}

      <BackgroundParticles active={activeParticles} />

      {/* ======================================================
          SPEED LINES
      ====================================================== */}

      <SpeedLines active={activeSpeedLines} />

      {/* ======================================================
          CENTRAL ENERGY
      ====================================================== */}

      <EnergyCore phase={phase} />

      {/* ======================================================
          WINGS
      ====================================================== */}

      <WingAssembly phase={phase} />

      {/* ======================================================
          ENERGY BURST
      ====================================================== */}

      <EnergyBurst phase={phase} />

      {/* ======================================================
          TITLE
      ====================================================== */}

      <EventTitle phase={phase} />

      {/* ======================================================
          FINAL TRANSITION
      ====================================================== */}

      <TransitionEffect phase={phase} />

      {/* ======================================================
          HORIZON
      ====================================================== */}

      <motion.div
        className="absolute bottom-[-90px] left-1/2 h-[180px] w-[75vw] -translate-x-1/2 rounded-[50%] border-t border-cyan-400/30 bg-[radial-gradient(ellipse_at_center,rgba(0,120,255,0.18),transparent_65%)]"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: phase >= 4 ? 0.7 : 0,
          scale: phase >= 4 ? 1 : 0.8,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      />

      {/* ======================================================
          HUD CORNERS
      ====================================================== */}

      <div className="absolute left-5 top-5 text-[7px] font-bold uppercase tracking-[0.35em] text-white/20">
        TW // 2K26
      </div>

      <div className="absolute right-5 top-5 text-[7px] font-bold uppercase tracking-[0.35em] text-white/20">
        AEROSPACE // SYSTEM 01
      </div>

      <div className="absolute bottom-5 left-5 text-[7px] font-bold uppercase tracking-[0.35em] text-white/15">
        FLIGHT INITIALIZATION
      </div>

      <div
        className={`intro-system-ready ${
          phase >= 4
            ? "intro-system-ready-active"
            : ""
        }`}
      >
        SYSTEM READY
      </div>
    </motion.div>
  );
}