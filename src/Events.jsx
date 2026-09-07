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

    participation: "Individual or Team",
    teamSize: "Up to 3 Members",
    registrationFee: "FREE ENTRY",
    prizePool: "Not Applicable",

    facultyCoordinator: "Mr. Reju R.",
    facultyPhone: "+91 90953 55087",

    studentCoordinator: "Prathmesh Patil",
    studentPhone: "+91 84849 84499",
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

    participation: "Individual or Team",
    teamSize: "Up to 2 Members",
    registrationFee: "₹100 Individual / ₹200 Team",
    prizePool: "₹10,000/-",

    facultyCoordinator: "Dr. Sendhil Kumar S",
    facultyPhone: "+91 94861 72845",

    studentCoordinator: "Chanchal Shelar",
    studentPhone: "+91 70570 04239",
  },

  {
    title: "RC Simulator",
    description:
      "Experience aviation through an immersive flight simulation challenge.",
    icon: "◈",
    category: "Aerospace Challenges",
    categoryKey: "aerospace",
    image: simulatorImage,
    slug: "flight-simulator",

    participation: "Individual Only",
    teamSize: "Individual",
    registrationFee: "₹100",
    prizePool: "₹10,000/-",

    facultyCoordinator: "Mr. Mohammed Hashim Y.",
    facultyPhone: "+91 90612 93705",

    studentCoordinator: "Om Jadhav",
    studentPhone: "+91 79720 75476",
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
    prizePool: "₹10,000/-",

    facultyCoordinator: "Mr. Arun Nema",
    facultyPhone: "+91 70222 97404",

    studentCoordinator: "Mandar Ghodake",
    studentPhone: "+91 96995 32950",
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

    participation: "Individual or Team",
    teamSize: "Up to 2 Members",
    registrationFee: "₹100 Individual / ₹200 Team",
    prizePool: "₹10,000/-",

    facultyCoordinator: "Mr. Sanoj P. Suresh",
    facultyPhone: "+91 97866 79867",

    studentCoordinator: "Shivani Nangre",
    studentPhone: "+91 85912 55289",
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

    participation: "Individual or Team",
    teamSize: "Up to 2 Members",
    registrationFee: "₹100 Individual / ₹200 Team",
    prizePool: "₹10,000/-",

    facultyCoordinator: "Dr. T. Anand",
    facultyPhone: "+91 97862 92925",

    studentCoordinator: "Shweta Raut",
    studentPhone: "+91 78229 16824",
  },

  {
    title: "Reasoning Rumble",
    description:
      "Challenge your analytical thinking, logic and problem-solving ability.",
    icon: "✦",
    category: "Knowledge & Innovation",
    categoryKey: "knowledge",
    image: reasoningRumbleImage,
    slug: "reasoning-rumble",

    participation: "Individual or Team",
    teamSize: "Up to 2 Members",
    registrationFee: "₹100 Individual / ₹200 Team",
    prizePool: "₹10,000/-",

    facultyCoordinator: "Mr. Yogesh Kumbhar",
    facultyPhone: "+91 70587 00724",

    studentCoordinator: "Aznaan Shaikh",
    studentPhone: "+91 87937 77579",
  },
];

// =====================================================
// CATEGORIES
// =====================================================

const categories = [
  {
    key: "aerospace",
    label: "Aerospace Challenges",
  },
  {
    key: "design",
    label: "Design & Build",
  },
  {
    key: "knowledge",
    label: "Knowledge & Innovation",
  },
  {
    key: "drone",
    label: "Drone Expo",
  },
];

// =====================================================
// GET CATEGORY FROM URL
// =====================================================

const getInitialCategory = () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  if (
    ["aerospace", "design", "knowledge", "drone"].includes(category)
  ) {
    return category;
  }

  return "aerospace";
};

// =====================================================
// INFO ROW
// =====================================================

function InfoRow({ icon, label, children, last = false }) {
  return (
    <div
      className={`flex items-start gap-3 py-3 ${
        !last ? "border-b border-white/10" : ""
      }`}
    >
      <div className="mt-0.5 shrink-0 text-cyan-400">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-xs font-medium uppercase tracking-wider text-white/35">
          {label}
        </div>

        <div className="mt-1 text-sm font-semibold text-white/85">
          {children}
        </div>
      </div>
    </div>
  );
}

// =====================================================
// COORDINATOR
// =====================================================

function Coordinator({
  label,
  name,
  phone,
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-400">
        {label}
      </div>

      <div className="mt-1 text-sm font-semibold text-white">
        {name}
      </div>

      <a
        href={`tel:${phone.replace(/\s/g, "")}`}
        className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-white/45 transition hover:text-cyan-300"
      >
        <Phone size={12} />
        {phone}
      </a>
    </div>
  );
}

// =====================================================
// EVENT CARD
// =====================================================

function EventCard({ event, index, onViewDetails }) {
  const isFree = event.slug === "drone-expo";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
      }}
      whileHover={{ y: -7 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#07142d]/90 shadow-[0_15px_50px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(14,165,233,0.14)]"
    >
      {/* IMAGE */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/20 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full border border-cyan-400/30 bg-[#020817]/75 px-3 py-1.5 text-[11px] font-semibold text-cyan-300 backdrop-blur-md">
          {event.category}
        </div>

        {isFree && (
          <div className="absolute bottom-4 right-4 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-bold text-emerald-300 backdrop-blur-md">
            FREE ENTRY
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-5">
        {/* TITLE */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-xl">
            {event.icon}
          </div>

          <div className="min-w-0">
            <h3 className="text-xl font-extrabold leading-tight tracking-tight text-white">
              {event.title}
            </h3>

            <p className="mt-1 text-xs font-medium text-cyan-400/70">
              {event.category}
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-4 min-h-[66px] text-sm leading-6 text-white/55">
          {event.description}
        </p>

        {/* EVENT INFORMATION */}
        <div className="mt-4 border-t border-white/10">
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
            icon={<span className="text-sm font-bold">₹</span>}
            label="Registration Fee"
          >
            <span
              className={
                isFree
                  ? "text-emerald-300"
                  : "text-cyan-300"
              }
            >
              {event.registrationFee}
            </span>
          </InfoRow>

          <InfoRow
            icon={<span className="text-sm">🏆</span>}
            label="Prize Pool"
            last
          >
            {event.prizePool}
          </InfoRow>
        </div>

        {/* COORDINATORS */}
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
            <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-400">
              Faculty Coordinator
            </div>

            <div className="mt-1 text-sm font-semibold text-white">
              {event.facultyCoordinator}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
            <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-400">
              Student Coordinator
            </div>

            <div className="mt-1 text-sm font-semibold text-white">
              {event.studentCoordinator}
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-auto flex gap-3 pt-5">
          <a
            href={`/register?event=${event.slug}`}
            className="flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 px-3 py-3 text-xs font-bold text-white shadow-[0_0_25px_rgba(37,99,235,0.18)] transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]"
          >
            REGISTER
            <ArrowRight size={15} className="ml-2" />
          </a>

          <button
            type="button"
            onClick={() => onViewDetails(event)}
            className="flex flex-1 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-3 py-3 text-xs font-bold text-white/80 transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
          >
            DETAILS
          </button>
        </div>
      </div>
    </motion.article>
  );
}

// =====================================================
// EVENT DETAILS MODAL
// =====================================================

function EventDetailsModal({ event, onClose }) {
  if (!event) return null;

  const isFree = event.slug === "drone-expo";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.94,
            y: 20,
          }}
          transition={{
            duration: 0.25,
          }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-cyan-400/20 bg-[#06122a] shadow-[0_30px_100px_rgba(0,0,0,0.65)]"
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/70 backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            aria-label="Close event details"
          >
            <X size={20} />
          </button>

          {/* IMAGE */}
          <div className="relative h-56 overflow-hidden sm:h-72">
            <img
              src={event.image}
              alt={event.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#06122a] via-[#06122a]/20 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 sm:left-7 sm:right-7">
              <div className="mb-2 inline-flex items-center rounded-full border border-cyan-400/30 bg-[#020817]/75 px-3 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md">
                {event.category}
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                {event.title}
              </h2>
            </div>
          </div>

          {/* MODAL CONTENT */}
          <div className="p-5 sm:p-7">
            {/* DESCRIPTION */}
            <div>
              <p className="text-sm leading-7 text-white/60 sm:text-base">
                {event.description}
              </p>
            </div>

            {/* QUICK INFORMATION */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/35">
                  <Users size={15} className="text-cyan-400" />
                  Participation
                </div>

                <p className="mt-2 text-sm font-bold text-white">
                  {event.participation}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/35">
                  <Users size={15} className="text-cyan-400" />
                  Team Size
                </div>

                <p className="mt-2 text-sm font-bold text-white">
                  {event.teamSize}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-white/35">
                  Registration Fee
                </div>

                <p
                  className={`mt-2 text-sm font-bold ${
                    isFree
                      ? "text-emerald-300"
                      : "text-cyan-300"
                  }`}
                >
                  {event.registrationFee}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-white/35">
                  Prize Pool
                </div>

                <p className="mt-2 text-sm font-bold text-white">
                  {event.prizePool}
                </p>
              </div>
            </div>

            {/* COORDINATORS */}
            <div className="mt-7">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                Event Coordinators
              </h3>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-400">
                    Faculty Coordinator
                  </p>

                  <p className="mt-2 font-bold text-white">
                    {event.facultyCoordinator}
                  </p>

                  <a
                    href={`tel:${event.facultyPhone.replace(/\s/g, "")}`}
                    className="mt-2 inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-cyan-300"
                  >
                    <Phone size={14} />
                    {event.facultyPhone}
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-400">
                    Student Coordinator
                  </p>

                  <p className="mt-2 font-bold text-white">
                    {event.studentCoordinator}
                  </p>

                  <a
                    href={`tel:${event.studentPhone.replace(/\s/g, "")}`}
                    className="mt-2 inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-cyan-300"
                  >
                    <Phone size={14} />
                    {event.studentPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* RULES PLACEHOLDER */}
            <div className="mt-7 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-cyan-400"
                />

                <div>
                  <h3 className="text-sm font-bold text-white">
                    Event Information
                  </h3>

                  <p className="mt-1 text-xs leading-6 text-white/45 sm:text-sm">
                    Official event rules, schedule and
                    participation guidelines will be provided
                    by the event coordinators.
                  </p>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={`/register?event=${event.slug}`}
                className="flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-[0_0_30px_rgba(37,99,235,0.2)] transition hover:scale-[1.01]"
              >
                REGISTER NOW
                <ArrowRight size={17} className="ml-2" />
              </a>

              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-white/70 transition hover:border-cyan-400/30 hover:text-cyan-300"
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
  const [selectedCategory, setSelectedCategory] =
    useState(getInitialCategory);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = events.filter(
    (event) => event.categoryKey === selectedCategory
  );

  const selectedCategoryName =
    categories.find(
      (category) => category.key === selectedCategory
    )?.label || "Aerospace Challenges";

  // =====================================================
  // CHANGE CATEGORY
  // =====================================================

  const handleCategoryChange = (categoryKey) => {
    setSelectedCategory(categoryKey);

    window.history.replaceState(
      {},
      "",
      `/events?category=${categoryKey}`
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020817] text-white">
      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#020817]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
          {/* LOGO */}
          <a
            href="/"
            className="flex items-center gap-3"
          >
            <img
              src={technoWingsLogo}
              alt="Techno Wings 2K26"
              className="h-10 w-auto sm:h-11"
            />

            <div className="hidden leading-tight sm:block">
              <div className="text-lg font-extrabold tracking-wide text-white">
                TECHNO WINGS
              </div>

              <div className="text-sm font-bold tracking-[0.25em] text-cyan-400">
                2K26
              </div>
            </div>
          </a>

          {/* NAVIGATION */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className="text-sm text-white/70 transition hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="/#about"
              className="text-sm text-white/70 transition hover:text-cyan-400"
            >
              About Fest
            </a>

            <a
              href="/events"
              className="text-sm font-semibold text-cyan-400"
            >
              Events
            </a>

            <a
              href="/contact"
              className="text-sm text-white/70 transition hover:text-cyan-400"
            >
              Contact
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/verify"
              className="rounded-full border border-cyan-400/40 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
            >
              Verify Registration
            </a>

            <a
              href="/register"
              className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
            >
              Register
            </a>
          </div>

          {/* MOBILE REGISTER */}
          <a
            href="/register"
            className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-xs font-bold text-white md:hidden"
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
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              <Sparkles size={16} />
              Techno Wings 2K26
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Explore Events
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
              Discover Techno Wings 2K26 competitions and
              challenges designed for every innovator.
            </p>
          </motion.div>

          {/* CATEGORY FILTER */}
          <div className="mt-10 flex justify-center sm:mt-12">
            <div className="flex max-w-full flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.025] p-2">
              {categories.map((category) => {
                const active =
                  selectedCategory === category.key;

                return (
                  <button
                    key={category.key}
                    onClick={() =>
                      handleCategoryChange(category.key)
                    }
                    className={`rounded-xl px-4 py-2.5 text-xs font-semibold transition duration-300 sm:px-5 sm:py-3 sm:text-sm ${
                      active
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.25)]"
                        : "text-white/55 hover:bg-white/[0.06] hover:text-cyan-300"
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RESULT INDICATOR */}
          <div className="mt-10 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/35">
                Showing Events
              </p>

              <h2 className="mt-1 text-lg font-bold text-white sm:text-xl">
                {selectedCategoryName}
              </h2>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/5 px-4 py-2 text-sm font-semibold text-cyan-400">
              <CalendarDays size={16} />

              {filteredEvents.length}

              {" "}

              {filteredEvents.length === 1
                ? "Event"
                : "Events"}
            </div>
          </div>

          {/* EVENT GRID */}
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredEvents.map((event, index) => (
                <EventCard
                  key={event.title}
                  event={event}
                  index={index}
                  onViewDetails={setSelectedEvent}
                />
              ))}
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
            className="mt-10 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-5"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-cyan-400"
              />

              <div>
                <h3 className="text-sm font-bold text-white">
                  Registration Information
                </h3>

                <p className="mt-1 text-xs leading-6 text-white/45 sm:text-sm">
                  Individual participation is available for
                  all events. Team participation is available
                  where specified above. Paid event registration
                  is ₹100 for an individual or ₹200 for a team.
                  Drone Expo has free entry.
                </p>
              </div>
            </div>
          </motion.div>

          {/* NO EVENTS */}
          {filteredEvents.length === 0 && (
            <div className="py-20 text-center">
              <Plane
                size={42}
                className="mx-auto text-cyan-400"
              />

              <p className="mt-5 text-white/50">
                No events found in this category.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <footer className="border-t border-white/10 bg-[#010611] px-5 py-12 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            {/* BRAND */}
            <div>
              <img
                src={technoWingsLogo}
                alt="Techno Wings 2K26"
                className="h-14 w-auto object-contain sm:h-16"
              />

              <p className="mt-4 max-w-md text-sm leading-6 text-white/40">
                A two-day technical and aerospace event
                celebrating innovation, engineering,
                creativity and competition.
              </p>

              <p className="mt-4 text-sm font-semibold text-cyan-400">
                In Collaboration with ADATE Club
              </p>
            </div>

            {/* ORGANIZER */}
            <div className="max-w-sm">
              <div className="text-sm font-bold uppercase tracking-widest text-white/70">
                Organized By
              </div>

              <p className="mt-3 text-sm leading-6 text-white/40">
                Department of Aeronautical Engineering
                <br />
                Annasaheb Dange College of Engineering &
                Technology
                <br />
                Ashta, Taluka Walwa, District Sangli,
                Maharashtra – 416301
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-7 text-center text-xs text-white/30">
            © 2026 Techno Wings 2K26 • All Rights Reserved
          </div>
        </div>
      </footer>
      {/* ================================================= */}
      {/* EVENT DETAILS MODAL */}
      {/* ================================================= */}

      <EventDetailsModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />      
    </div>
  );
}