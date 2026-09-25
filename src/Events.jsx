import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Phone,
  Plane,
  Sparkles,
  Users,
  X,
  Trophy,
  ShieldCheck,
  Cpu,
  Target,
  FileText,
  Rocket,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import technoWingsLogo from "./assets/techno-wings-logo.png";
import droneExpoImage from "./assets/drone-expo.jpg";
import chuckGliderImage from "./assets/chuck-glider.jpg";
import simulatorImage from "./assets/flight-simulator.jpg";
import cadMasterImage from "./assets/cad-master.jpg";
import waterRocketImage from "./assets/water-rocket.jpg";
import paperPresentationImage from "./assets/paper-presentation.jpg";
import reasoningRumbleImage from "./assets/reasoning-rumble.jpg";
import collegeLogo from "./assets/college-logo.png";

// =====================================================
// EVENTS DATA
// =====================================================

const events = [
  {
    title: "Drone Expo",
    description:
      "Explore Innovation. Experience the Future of Flight.",
    icon: "✈",
    category: "Drone Expo",
    categoryKey: "drone",
    image: droneExpoImage,
    slug: "drone-expo",

    participation: "Team Only",
    teamSize: "Exactly 2 Members",
    registrationFee: "FREE ENTRY",
    prizePool: "Not Applicable",

    studentCoordinator: "Prathmesh Patil",
    studentPhone: "+91 84849 84499",

    rules: null,
  },

  {
    title: "Chuck Glider",
    description:
      "Test your understanding of flight, aerodynamics and aircraft design.",
    icon: "🛩",
    category: "Aerospace Challenges",
    categoryKey: "aerospace",
    image: chuckGliderImage,
    slug: "chuck-glider",

    participation: "Team Only",
    teamSize: "Exactly 2 Members",
    registrationFee: "₹200 Per Team",
    prizePool: "₹6,000/-",

    studentCoordinator: "Chanchal Shelar",
    studentPhone: "+91 70570 04239",

    rules: {
      registration: [
        "Each team must have exactly 2 members and both members must be registered.",
        "Only registered teams may participate and participants must report on time.",
      ],

      competition: [
        "The event includes a glider-making workshop followed by a flying competition.",
        "Gliders must be non-powered, hand-launched chuck gliders made using thermocol and permitted materials.",
        "Motors, batteries, propellers, rubber bands and external launching devices are not allowed.",
        "Each team gets 3 attempts; the best valid flight distance will be considered.",
        "Distance is measured from the launch line to the point where the glider first touches the ground.",
      ],

      disqualification: [
        "Use of prohibited materials, propulsion or launching aids may result in disqualification.",
        "Cheating, interference, unsafe behavior or disobeying officials may result in disqualification.",
      ],

      conduct: [
        "Only the team whose turn it is may enter the flying area.",
        "Repairs or modifications are allowed only in the designated area.",
        "Judges' and organizers' decisions are final.",
      ],
    },
  },

  {
    title: "Flight Simulator",
    description:
      "Experience aviation through an immersive flight simulation challenge.",
    icon: "◈",
    category: "Aerospace Challenges",
    categoryKey: "aerospace",
    image: simulatorImage,
    slug: "Flight-simulator",

    participation: "Individual Only",
    teamSize: "Individual",
    registrationFee: "₹100",
    prizePool: "₹6,000/-",

    studentCoordinator: "Samarth Lomate",
    studentPhone: "+91 9022161641",

    rules: {
      familiarization: [
        "Each participant gets 2 minutes of familiarization before the competition.",
        "The coordinator will explain basic controller operation, take-off and flight control.",
        "Familiarization time is not included in the competition time or score.",
      ],

      round1: [
        "Round 1: Basic Flight — 3 minutes, Ground View.",
        "Complete controlled take-off → flight/basic maneuvers → safe runway landing.",
        "Only a landing on the designated runway counts as valid.",
        "A crash, loss of control or significant aircraft damage makes the flight cycle invalid.",
        "Complete the maximum possible valid flight cycles; each valid cycle earns 1 point.",
        "Highest-scoring participants qualify for Round 2.",
      ],

      round2: [
        "Round 2: Cockpit View & Aerobatics — 3 minutes.",
        "Complete take-off → required aerobatic maneuver(s), such as loops/rolls → runway landing.",
        "A cycle is invalid if the aircraft lands outside the runway, crashes, is significantly damaged or the required maneuver is not completed.",
        "Each valid cycle earns 1 point; the participant with the highest score wins.",
      ],

      tiebreaker: [
        "In case of a tie, a tie-breaker flight will be conducted.",
        "The tie-breaker conditions and task will be decided by the event coordinator.",
      ],
    },
  },

  {
    title: "CAD Master",
    description:
      "Design, model and demonstrate your engineering skills using CAD.",
    icon: "⚙",
    category: "Design & Build",
    categoryKey: "design",
    image: cadMasterImage,
    slug: "cad-master",

    participation: "Individual Only",
    teamSize: "Individual",
    registrationFee: "₹100",
    prizePool: "₹6,000/-",


    studentCoordinator: "Mandar Ghodake",
    studentPhone: "+91 96995 32950",

    rules: {
      registration: [
        "Registration must be completed before the deadline. Late entries will not be accepted.",
        "CAD Master is an individual participation event.",
        "Participants must mention their CAD software during registration.",
      ],

      design: [
        "The design must be created live during the competition. Pre-existing models, templates or downloaded components are not allowed unless provided by the organizers.",
        "Only the approved or provided CAD software and systems may be used.",
        "Internet access is strictly prohibited during the active designing round.",
        "Final submission must include the CAD part/assembly files and a 2D drafting sheet in PDF format with necessary views and dimensions.",
        "Rendering should be provided only if specifically required by the organizers.",
      ],

      disqualification: [
        "Use of pre-built models, external files, copying or unauthorized design resources may lead to disqualification.",
        "Use of unauthorized websites, communication or outside assistance is prohibited.",
        "Taking design assistance from another participant or person is not allowed.",
        "Late or incomplete submission may result in disqualification.",
        "Inappropriate or disrespectful behavior may lead to disqualification.",
      ],

      conduct: [
        "Participants must carry a valid institute ID.",
        "Mobile phones must be switched off or kept silent and away from the workspace during the competition.",
        "Report any technical issue to the coordinator immediately.",
        "Participants must follow all instructions given by the coordinator and judges.",
        "The decision of the organizing committee and judges will be final.",
      ],
    },
  },

  {
    title: "Water Rocket",
    description:
      "Design and launch a rocket while applying real engineering principles.",
    icon: "🚀",
    category: "Design & Build",
    categoryKey: "design",
    image: waterRocketImage,
    slug: "water-rocket",

    participation: "Team Only",
    teamSize: "Exactly 2 Members",
    registrationFee: "₹200 Per Team",
    prizePool: "₹6,000/-",


    studentCoordinator: "Suraj Mali",
    studentPhone: "+91 74994 80831",

    rules: {
      eligibility: [
        "Maximum 2 members per team.",
        "A participant may be part of only one team and must complete registration before the event.",
      ],

      specifications: [
        "Use a PET plastic bottle as the main pressure vessel; maximum bottle capacity is 2 litres.",
        "Bottle must be in good condition and free from cracks or serious damage.",
        "Maximum total rocket length is 80 cm, including fins and nose cone.",
        "Only lightweight fins and a lightweight nose cone are permitted.",
      ],

      safety: [
        "Only water and compressed atmospheric air may be used for propulsion.",
        "Water quantity must be 25–50% of bottle capacity.",
        "Maximum launch pressure is 60 PSI and must never be exceeded.",
        "The organizer-provided launcher and launch procedure must be followed.",
        "Safety goggles are compulsory during launching.",
        "Only authorized officials may operate the launcher and pressure system.",
        "Stay behind the safety line and never approach a pressurized rocket.",
      ],

      attempts: [
        "Each team gets 2 official attempts; the better valid attempt is used for ranking.",
        "The objective is maximum horizontal distance, measured to the rocket's first point of ground contact.",
        "In case of a tie, the better second attempt is used as the tie-breaker.",
      ],

      invalid: [
        "An attempt may be invalid for exceeding the pressure limit, using prohibited materials/propulsion, an unsafe rocket or failure to follow the launch procedure.",
        "Serious or repeated safety violations, launcher tampering, unauthorized propulsion or dangerous misconduct may lead to disqualification.",
      ],

      authority: [
        "Organizers may reject an unsafe rocket, stop a launch or modify the procedure when necessary for safety or technical reasons.",
        "The decision of authorized judges/organizers is final.",
      ],
    },
  },

  {
    title: "Paper Presentation",
    description:
      "Present innovative technical ideas and showcase your knowledge.",
    icon: "◫",
    category: "Knowledge & Innovation",
    categoryKey: "knowledge",
    image: paperPresentationImage,
    slug: "paper-presentation",

    participation: "Team Only",
    teamSize: "Exactly 2 Members",
    registrationFee: "₹200 Per Team",
    prizePool: "₹6,000/-",

    studentCoordinator: "Shweta Raut",
    studentPhone: "+91 78229 16824",

    rules: {
      eligibility: [
        "The event is open to eligible students as specified by the organizing committee.",
        "Participation is limited to a team of exactly 2 members.",
        "Both team members must complete registration.",
      ],

      paper: [
        "The paper must cover a technical, engineering, research, innovation or emerging-technology topic.",
        "Interdisciplinary topics are allowed when they have clear technical relevance.",
        "The topic must be submitted for approval before final paper submission.",
        "Plagiarism is strictly prohibited; proper references are required for external information, figures and data.",
      ],

      submission: [
        "Submit the paper and presentation within the deadline given by the organizing committee.",
        "Follow the prescribed paper format and page limit.",
        "Prepare the presentation from the submitted paper and ensure the presentation file works correctly.",
      ],

      presentation: [
        "Complete the presentation within the allotted time.",
        "Exceeding the prescribed time may attract an evaluation penalty.",
        "Be present at the venue before the allotted presentation slot.",
        "Judges may ask questions about the topic, methodology, results, applications and technical concepts.",
      ],

      conduct: [
        "Maintain discipline and proper decorum throughout the event.",
        "The judging panel's decision is final.",
      ],
    },
  },

  {
    title: "Reasoning Rumble",
    description: 
      "Challenge your logical thinking, observation, analytical ability and problem-solving skills through three exciting rounds.",
    icon: "✦",
    category: "Knowledge & Innovation",
    categoryKey: "knowledge",
    image: reasoningRumbleImage,
    slug: "reasoning-rumble",

    participation: "Team Only",
    teamSize: "Exactly 2 Members",
    registrationFee: "₹200 Per Team",
    prizePool: "₹6,000/-",

    studentCoordinator: "Aznan Shaikh",
    studentPhone: "+91 87937 77579",

    rules: {
      rounds: [
        "Round 1: MCQ-based reasoning challenge testing logical and analytical thinking.",
        "Round 2: Visual and rebus puzzle challenge testing observation and problem-solving skills.",
        "Round 3: Mystery-based final challenge involving clues and logical problem-solving.",
        "Participants qualify for the next round based on their performance."
      ],

      general: [
        "Each round will have a specified time limit and scoring system, announced before the round begins.",
        "Participants must attempt all questions and challenges independently within the allotted time.",
        "Mobile phones, smartwatches, calculators and other unauthorized assistance are not permitted.",
        "Cheating, malpractice or communication with other participants may result in immediate disqualification.",
        "Participants must report on time and follow all instructions given by the event coordinators.",
        "In case of a tie, a tie-breaker challenge may be conducted.",
        "The decision of the event coordinators and judges will be final and binding."
      ]
    },
  },
];


// =====================================================
// INFO ROW
// =====================================================

function InfoRow({ icon, label, children, last = false }) {
  return (
    <div
      className={`flex items-start gap-3 py-3 ${
        !last ? "border-b border-slate-200" : ""
      }`}
    >
      <div className="mt-0.5 shrink-0 text-blue-600">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
          {label}
        </div>

        <div className="mt-1 text-sm font-semibold text-slate-700">
          {children}
        </div>
      </div>
    </div>
  );
}

// =====================================================
// EVENT CARD
// =====================================================

function EventCard({ event, index, onViewDetails }) {
  const isFree = event.slug === "drone-expo";
  const isTeam = event.participation === "Team Only";

  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-blue-200 hover:shadow-[0_25px_65px_rgba(37,99,235,0.16)]"
    >
      {/* TOP ACCENT */}
      <div className="absolute left-0 right-0 top-0 z-10 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-80" />

      {/* IMAGE */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#06152e]/80 via-[#06152e]/10 to-transparent" />

        {/* CATEGORY */}
        <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-[#06152e]/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
          {event.category}
        </div>

        {/* FREE BADGE */}
        {isFree && (
          <div className="absolute right-4 top-4 rounded-full border border-emerald-300/40 bg-emerald-500/90 px-3 py-1.5 text-[10px] font-extrabold tracking-wider text-white shadow-lg backdrop-blur-md">
            FREE ENTRY
          </div>
        )}

        {/* EVENT NUMBER */}
        <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/15 text-xs font-bold text-white backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* TITLE */}
        <div className="flex items-start gap-3">
          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.08,
            }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-xl shadow-sm"
          >
            {event.icon}
          </motion.div>

          <div className="min-w-0">
            <h3 className="font-outfit text-xl font-black leading-tight tracking-tight text-[#06152e]">
              {event.title}
            </h3>

            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600">
              {event.category}
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-4 min-h-[66px] text-sm leading-6 text-slate-500">
          {event.description}
        </p>

        {/* INFORMATION */}
        <div className="mt-4 border-t border-slate-200">
          <InfoRow
            icon={<Users size={16} />}
            label="Participation"
          >
            {event.participation}
          </InfoRow>

          <InfoRow
            icon={<Users size={16} />}
            label="Team Size"
          >
            {event.teamSize}
          </InfoRow>

          <InfoRow
            icon={
              <span className="text-sm font-bold">
                ₹
              </span>
            }
            label="Registration Fee"
          >
            <span
              className={
                isFree
                  ? "font-extrabold text-emerald-600"
                  : "font-extrabold text-blue-600"
              }
            >
              {event.registrationFee}
            </span>
          </InfoRow>

          <InfoRow
            icon={<Trophy size={16} />}
            label="Prize Pool"
            last
          >
            {event.prizePool}
          </InfoRow>
        </div>

        {/* PARTICIPATION BADGE */}
        <div className="mt-4 flex items-center gap-2">
          <div
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider ${
              isTeam
                ? "bg-indigo-50 text-indigo-700"
                : "bg-cyan-50 text-cyan-700"
            }`}
          >
            {isTeam ? (
              <Users size={13} />
            ) : (
              <Target size={13} />
            )}

            {isTeam
              ? "2 Member Team"
              : "Individual Event"}
          </div>
        </div>

        {/* COORDINATORS */}
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <div className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-blue-600">
              Student Coordinator
            </div>

            <div className="mt-1 text-xs font-bold text-slate-700">
              {event.studentCoordinator}
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-auto flex gap-3 pt-5">
          {event.slug === "drone-expo" ? (
            <div className="flex flex-1 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-3 text-xs font-extrabold tracking-wide text-emerald-700">
              NO REGISTRATION REQUIRED
            </div>
          ) : (
            <motion.a
              href={`/register?event=${event.slug}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-3 text-xs font-extrabold tracking-wide text-white shadow-[0_8px_25px_rgba(37,99,235,0.2)] transition hover:shadow-[0_12px_35px_rgba(37,99,235,0.3)]"
            >
              REGISTER
              <ArrowRight
                size={15}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </motion.a>
          )}

          <motion.button
            type="button"
            onClick={() => onViewDetails(event)}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex flex-1 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-xs font-extrabold tracking-wide text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            DETAILS
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

// =====================================================
// RULE SECTION
// =====================================================

function RuleSection({
  number,
  title,
  icon,
  rules,
}) {
  if (!rules?.length) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-[0_6px_18px_rgba(37,99,235,0.2)]">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="font-extrabold text-[#06152e]">
            <span className="mr-1 text-blue-600">
              {number}.
            </span>
            {title}
          </h4>

          <ul className="mt-3 space-y-2.5">
            {rules.map((rule, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

// =====================================================
// EVENT DETAILS MODAL
// =====================================================

function EventDetailsModal({ event, onClose }) {
  if (!event) return null;

  const isFree = event.slug === "drone-expo";
  const isTeam = event.participation === "Team Only";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020817]/65 px-4 py-5 backdrop-blur-md sm:py-8"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
            y: 25,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.94,
            y: 25,
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_35px_120px_rgba(2,8,23,0.4)]"
        >
          {/* CLOSE */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#06152e]/70 text-white backdrop-blur-md transition hover:bg-blue-600"
            aria-label="Close event details"
          >
            <X size={20} />
          </button>

          {/* HERO IMAGE */}
          <div className="relative h-56 overflow-hidden sm:h-72">
            <img
              src={event.image}
              alt={event.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#06152e] via-[#06152e]/35 to-transparent" />

            {/* TECHNICAL LINES */}
            <div className="absolute left-5 top-5 h-16 w-16 border-l border-t border-cyan-300/40" />

            <div className="absolute bottom-5 right-5 h-16 w-16 border-b border-r border-cyan-300/40" />

            <div className="absolute bottom-5 left-5 right-16 sm:left-7 sm:right-20">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-200 backdrop-blur-md">
                <Sparkles size={13} />
                {event.category}
              </div>

              <h2 className="font-outfit text-3xl font-black tracking-tight text-white sm:text-4xl">
                {event.title}
              </h2>
            </div>
          </div>

          {/* MODAL CONTENT */}
          <div className="max-h-[calc(92vh-18rem)] overflow-y-auto p-5 sm:p-7">
            {/* DESCRIPTION */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5">
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                {event.description}
              </p>
            </div>

            {/* QUICK INFORMATION */}
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                  <Users
                    size={15}
                    className="text-blue-600"
                  />
                  Participation
                </div>

                <p className="mt-2 text-sm font-extrabold text-[#06152e]">
                  {event.participation}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                  <Users
                    size={15}
                    className="text-blue-600"
                  />
                  Team Size
                </div>

                <p className="mt-2 text-sm font-extrabold text-[#06152e]">
                  {event.teamSize}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                  Registration Fee
                </div>

                <p
                  className={`mt-2 text-sm font-extrabold ${
                    isFree
                      ? "text-emerald-600"
                      : "text-blue-600"
                  }`}
                >
                  {event.registrationFee}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                  Prize Pool
                </div>

                <p className="mt-2 text-sm font-extrabold text-[#06152e]">
                  {event.prizePool}
                </p>
              </div>
            </div>

            {/* EVENT TYPE */}
            <div className="mt-4">
              <div
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold ${
                  isTeam
                    ? "bg-indigo-50 text-indigo-700"
                    : "bg-cyan-50 text-cyan-700"
                }`}
              >
                {isTeam ? (
                  <Users size={14} />
                ) : (
                  <Target size={14} />
                )}

                {isTeam
                  ? "Team participation — exactly 2 members"
                  : "Individual participation only"}
              </div>
            </div>

            {/* COORDINATORS */}
            <div className="mt-7">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-7 w-1 rounded-full bg-blue-600" />

                <h3 className="font-outfit text-lg font-black text-[#06152e]">
                  Event Coordinators
                </h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {/* STUDENT */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-blue-600">
                    Student Coordinator
                  </p>

                  <p className="mt-2 font-extrabold text-[#06152e]">
                    {event.studentCoordinator}
                  </p>

                  <a
                    href={`tel:${event.studentPhone.replace(
                      /\s/g,
                      ""
                    )}`}
                    className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
                  >
                    <Phone size={14} />
                    {event.studentPhone}
                  </a>
                </div>
              </div>
            </div>
            {/* RULES */}
            {event.rules && (
              <div className="mt-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-7 w-1 rounded-full bg-blue-600" />

                  <div>
                    <h3 className="font-outfit text-lg font-black text-[#06152e]">
                      Rules & Regulations
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      Please read all event guidelines before participating.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    /* REGISTRATION */
                    event.rules.registration && {
                      title: "Registration",
                      icon: <CheckCircle2 size={17} />,
                      rules: event.rules.registration,
                    },

                    /* ELIGIBILITY */
                    event.rules.eligibility && {
                      title: "Eligibility & Participation",
                      icon: <Users size={17} />,
                      rules: event.rules.eligibility,
                    },

                    /* REASONING RUMBLE — ROUNDS */
                    event.rules.rounds && {
                      title: "Event Rounds",
                      icon: <Target size={17} />,
                      rules: event.rules.rounds,
                    },

                    /* FAMILIARIZATION */
                    event.rules.familiarization && {
                      title: "Participant Familiarization",
                      icon: <Plane size={17} />,
                      rules: event.rules.familiarization,
                    },

                    /* CHUCK GLIDER — COMPETITION */
                    event.rules.competition && {
                      title: "Competition & Flying Guidelines",
                      icon: <Plane size={17} />,
                      rules: event.rules.competition,
                    },

                    /* FLIGHT SIMULATOR — ROUND 1 */
                    event.rules.round1 && {
                      title: "Round 1 — Basic Flight",
                      icon: <Target size={17} />,
                      rules: event.rules.round1,
                    },

                    /* FLIGHT SIMULATOR — ROUND 2 */
                    event.rules.round2 && {
                      title: "Round 2 — Cockpit View & Aerobatics",
                      icon: <Plane size={17} />,
                      rules: event.rules.round2,
                    },

                    /* TIE BREAKER */
                    event.rules.tiebreaker && {
                      title: "Tie-Breaker",
                      icon: <Trophy size={17} />,
                      rules: event.rules.tiebreaker,
                    },

                    /* PAPER */
                    event.rules.paper && {
                      title: "Paper & Topic Guidelines",
                      icon: <FileText size={17} />,
                      rules: event.rules.paper,
                    },

                    /* SUBMISSION */
                    event.rules.submission && {
                      title: "Submission & Presentation File",
                      icon: <FileText size={17} />,
                      rules: event.rules.submission,
                    },

                    /* PRESENTATION */
                    event.rules.presentation && {
                      title: "Presentation & Evaluation",
                      icon: <Target size={17} />,
                      rules: event.rules.presentation,
                    },

                    /* WATER ROCKET — SPECIFICATIONS */
                    event.rules.specifications && {
                      title: "Rocket Specifications",
                      icon: <Rocket size={17} />,
                      rules: event.rules.specifications,
                    },

                    /* SAFETY */
                    event.rules.safety && {
                      title: "Safety Rules",
                      icon: <ShieldCheck size={17} />,
                      rules: event.rules.safety,
                    },

                    /* ATTEMPTS */
                    event.rules.attempts && {
                      title: "Attempts & Scoring",
                      icon: <Target size={17} />,
                      rules: event.rules.attempts,
                    },

                    /* INVALID */
                    event.rules.invalid && {
                      title: "Invalid Attempt & Disqualification",
                      icon: <ShieldCheck size={17} />,
                      rules: event.rules.invalid,
                    },

                    /* DESIGN */
                    event.rules.design && {
                      title: "Design Guidelines",
                      icon: <Cpu size={17} />,
                      rules: event.rules.design,
                    },

                    /* DISQUALIFICATION */
                    event.rules.disqualification && {
                      title: "Disqualification",
                      icon: <ShieldCheck size={17} />,
                      rules: event.rules.disqualification,
                    },

                    /* CONDUCT */
                    event.rules.conduct && {
                      title: "General Conduct",
                      icon: <CheckCircle2 size={17} />,
                      rules: event.rules.conduct,
                    },

                    /* REASONING RUMBLE — GENERAL RULES */
                    event.rules.general && {
                      title: "General Rules & Regulations",
                      icon: <ShieldCheck size={17} />,
                      rules: event.rules.general,
                    },

                    /* AUTHORITY */
                    event.rules.authority && {
                      title: "Final Authority",
                      icon: <ShieldCheck size={17} />,
                      rules: event.rules.authority,
                    },
                  ]
                    .filter(Boolean)
                    .map((section, index) => (
                      <RuleSection
                        key={`${section.title}-${index}`}
                        number={index + 1}
                        title={section.title}
                        icon={section.icon}
                        rules={section.rules}
                      />
                    ))}
                </div>
              </div>
            )}

            {/* NO RULES */}
            {!event.rules && (
              <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />

                  <div>
                    <h3 className="font-outfit text-sm font-extrabold text-[#06152e]">
                      Rules & Regulations
                    </h3>

                    <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                      Event rules and participation guidelines
                      will be added by the organizing committee.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ACTIONS */}
            <div className="mt-7 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row">
              {event.slug === "drone-expo" ? (
                <div className="flex flex-1 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-extrabold text-emerald-700">
                  NO REGISTRATION REQUIRED
                </div>
              ) : (
                <motion.a
                  href={`/register?event=${event.slug}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-sm font-extrabold text-white shadow-[0_8px_25px_rgba(37,99,235,0.2)]"
                >
                  REGISTER NOW
                  <ArrowRight size={17} className="ml-2" />
                </motion.a>
              )}

              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-extrabold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                CLOSE
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// =====================================================
// EVENTS PAGE
// =====================================================

export default function Events() {
  const [selectedEvent, setSelectedEvent] =
    useState(null);

  const allEvents = events;
  
  return (
    <div className="site-scale min-h-screen overflow-x-hidden bg-[#f5f9ff] text-[#06152e]">
      {/* ================================================= */}
      {/* AEROSPACE BACKGROUND */}
      {/* ================================================= */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-blue-200/20 blur-3xl" />

        <div className="absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="absolute bottom-0 left-[35%] h-[450px] w-[450px] rounded-full bg-indigo-200/15 blur-3xl" />

        {/* TECHNICAL GRID */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* AERODYNAMIC LINES */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[28%] h-px w-[50%] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />

        <motion.div
          animate={{
            x: [0, -35, 0],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-10%] top-[62%] h-px w-[55%] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        {/* ================================================= */}
        {/* NAVBAR */}
        {/* ================================================= */}

        <nav className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 shadow-[0_4px_25px_rgba(15,23,42,0.05)] backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
            {/* LOGO */}
            <a
              href="/"
              className="group flex items-center gap-3"
            >
              <img
                src={technoWingsLogo}
                alt="Techno Wings 2K26"
                className="h-16 w-auto transition duration-300 group-hover:scale-105 sm:h-20"
              />

              <div className="hidden leading-tight sm:block">
                <div className="text-lg font-black tracking-wide text-[#06152e]">
                  TECHNO WINGS
                </div>

                <div className="text-sm font-extrabold tracking-[0.25em] text-blue-600">
                  2K26
                </div>
              </div>
            </a>

            {/* NAVIGATION */}
            <div className="hidden items-center gap-8 md:flex">
              <a
                href="/"
                className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
              >
                Home
              </a>

              <a
                href="/#about"
                className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
              >
                About Fest
              </a>

              <a
                href="/events"
                className="relative text-sm font-bold text-blue-600"
              >
                Events

                <span className="absolute -bottom-7 left-0 h-0.5 w-full rounded-full bg-blue-600" />
              </a>

              <a
                href="/contact"
                className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
              >
                Contact
              </a>
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="/verify"
                className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-bold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
              >
                Verify Registration
              </a>

              <a
                href="/register"
                className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_5px_20px_rgba(37,99,235,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(37,99,235,0.28)]"
              >
                Register
              </a>
            </div>

            {/* MOBILE */}
            <a
              href="/register"
              className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-sm md:hidden"
            >
              Register
            </a>
          </div>
        </nav>

        {/* ================================================= */}
        {/* MAIN */}
        {/* ================================================= */}

        <main className="px-5 pb-28 pt-32 sm:px-6">
          <div className="mx-auto max-w-7xl">
            {/* PAGE HEADER */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative text-center"
            >
              {/* DECORATION */}
              <div className="absolute left-1/2 top-[-35px] hidden -translate-x-1/2 items-center gap-3 sm:flex">
                <span className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400" />

                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                <span className="h-px w-16 bg-gradient-to-l from-transparent to-blue-400" />
              </div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600 shadow-[0_5px_20px_rgba(37,99,235,0.08)]">
                <Sparkles size={15} />
                Techno Wings 2K26
              </div>

              <h1 className="font-outfit text-4xl font-black tracking-tight text-[#06152e] sm:text-5xl lg:text-6xl">
                Explore{" "}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                  Events
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Discover Techno Wings 2K26 competitions
                and challenges designed for every
                innovator, designer and aerospace
                enthusiast.
              </p>

              {/* TECHNICAL META */}
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm">
                  <CalendarDays
                    size={14}
                    className="text-blue-600"
                  />
                  15th & 16th October 2026
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm">
                  <Trophy
                    size={14}
                    className="text-blue-600"
                  />
                  7 Events
                </div>
              </div>
            </motion.div>

            {/* RESULT INDICATOR */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="mt-10 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                  Showing All Events
                </p>

                <h2 className="font-outfit mt-1 text-lg font-black text-[#06152e] sm:text-xl">
                  Techno Wings 2K26 Events
                </h2>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
                <CalendarDays size={16} />

                {allEvents.length} Events
              </div>
            </motion.div>

            {/* EVENT GRID */}
            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {allEvents.map(
                  (event, index) => (
                    <EventCard
                      key={event.title}
                      event={event}
                      index={index}
                      onViewDetails={
                        setSelectedEvent
                      }
                    />
                  )
                )}
              </motion.div>
            </AnimatePresence>

            {/* INFORMATION NOTE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="mt-10 overflow-hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.05)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <CheckCircle2 size={20} />
                </div>

                <div>
                  <h3 className="font-outfit text-sm font-black text-[#06152e]">
                    Registration Information
                  </h3>

                  <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                    Chuck Glider, Water Rocket, Paper
                    Presentation, Reasoning Rumble and
                    Drone Expo are team events requiring
                    exactly 2 members. Flight Simulator and
                    CAD Master are individual events.
                    Paid team events are ₹200 per team,
                    while individual events are ₹100.
                    Drone Expo has free entry.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </main>

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <footer className="border-t border-slate-200 bg-[#06152e] px-5 py-12 text-white sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-10 md:flex-row">
              {/* BRAND */}
              <div>
                <img
                  src={technoWingsLogo}
                  alt="Techno Wings 2K26"
                  className="h-14 w-auto object-contain sm:h-16"
                />

                <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
                  A two-day technical and aerospace
                  event celebrating innovation,
                  engineering, creativity and competition.
                </p>

                <p className="mt-4 text-sm font-bold text-cyan-400">
                  Organized By ADATE Club
                </p>
              </div>

              {/* ORGANIZER */}
              <div className="max-w-md">

                <div className="mt-3 flex items-start gap-4">
                  <img
                    src={collegeLogo}
                    alt="College Symbol"
                    className="mt-1 h-24 w-24 shrink-0 object-contain"
                  />

                  <p className="text-sm leading-7 text-white/55">
                    Department of Aeronautical
                    Engineering
                    <br />
                    Annasaheb Dange College of
                    Engineering &amp; Technology
                    <br />
                    Ashta, Taluka Walwa, District Sangli,
                    <br />
                    Maharashtra – 416301
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-7 text-center text-xs text-white/35">
              © 2026 Techno Wings 2K26 • All Rights
              Reserved
            </div>
          </div>
        </footer>

        {/* ================================================= */}
        {/* EVENT DETAILS MODAL */}
        {/* ================================================= */}

        <EventDetailsModal
          event={selectedEvent}
          onClose={() =>
            setSelectedEvent(null)
          }
        />
      </div>
    </div>
  );
}