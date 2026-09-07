import IntroAnimation from "./IntroAnimation";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plane,
  Sparkles,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { motion } from "motion/react";

import technoWingsLogo from "./assets/techno-wings-logo.png";
import adateLogo from "./assets/adate-logo.png";
import wingsBackground from "./assets/wings-background.png";


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(() => {
    return sessionStorage.getItem("technoWingsIntroShown") !== "true";
  });

  const handleIntroComplete = useCallback(() => {
    console.log("🔥 INTRO COMPLETE");

    sessionStorage.setItem("technoWingsIntroShown", "true");
    setShowIntro(false);
  }, []);   
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-09-14T09:00:00");

    const updateCountdown = () => {
      const difference = target.getTime() - Date.now();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const eventCategories = [
    {
      title: "AEROSPACE CHALLENGES",
      description:
        "Experience flight, control, aerodynamics and aviation through exciting hands-on challenges.",
      icon: Plane,
      events: ["Chuck Glider", "RC Simulator"],
      count: "2 Events",
    },

    {
      title: "DESIGN & BUILD",
      description:
        "Design, engineer and build your way through exciting challenges that test creativity, innovation and technical skills.",
      icon: Trophy,
      events: ["CAD Master", "Water Rocket"],
      count: "2 Events",
    },

    {
      title: "KNOWLEDGE & INNOVATION",
      description:
        "Showcase your ideas and challenge your analytical thinking, technical knowledge and problem-solving ability.",
      icon: Sparkles,
      events: ["Paper Presentation", "Reasoning Rumble"],
      count: "2 Events",
    },

    {
      title: "DRONE EXPO",
      description:
        "Showcase your innovative drones, UAVs and aerial systems and share your ideas with fellow aviation enthusiasts.",
      icon: Plane,
      events: ["Drone Expo"],
      count: "FREE ENTRY",
    },
  ];
  const contactCards = [
    {
      title: "EMAIL",
      icon: Mail,
      value: "techowingsk@gmail.com",
      detail: "Official Event Enquiries",
      href: "mailto:techowingsk@gmail.com",
    },
    {
      title: "LOCATION",
      icon: MapPin,
      value: "Annasaheb Dange College of Engineering and Technology, Ashta",
      detail: "Taluka Walwa, District Sangli, Maharashtra – 416301",
    },
  ];

  return (
    <>
      {showIntro && (
        <IntroAnimation onComplete={handleIntroComplete}
        />
      )}
      <div className="min-h-screen overflow-x-hidden bg-[#020b1f] text-white">
        {/* FIXED WINGS BACKGROUND */}
        <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden">
          <img
            src={wingsBackground}
            alt=""
            className="w-[1200px] max-w-[120vw] object-contain opacity-[0.12]"
          />
        </div>
        {/* ================= NAVBAR ================= */}
        <nav className="fixed top-0 z-50 w-full border-b border-blue-400/10 bg-[#020817]/90 backdrop-blur-xl">

          <div className="mx-auto flex h-[76px] max-w-[1450px] items-center justify-between px-4 sm:px-5 lg:px-10">

            {/* ================= LEFT LOGO ================= */}
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 sm:gap-3"
            >
              <img
                src={technoWingsLogo}
                alt="Techno Wings 2K26"
                className="h-12 w-auto object-contain sm:h-14 lg:h-19"
              />

              <div className="hidden leading-none sm:block">
                <div className="text-base font-extrabold tracking-wide text-white lg:text-lg">
                  TECHNO WINGS
                </div>

                <div className="mt-1 text-xs font-bold tracking-[0.3em] text-cyan-400">
                  2K26
                </div>
              </div>
            </a>


            {/* ================= DESKTOP MENU ================= */}
            <div className="hidden items-center gap-2 md:flex">

              {[
                ["Home", "#home"],
                ["About Fest", "#about"],
                ["Events", "/events?category=aerospace"],
                ["Contact", "/contact"],
              ].map(([label, href], index) => (

                <a
                  key={label}
                  href={href}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                    index === 0
                      ? "border border-blue-500/70 bg-blue-500/10 text-blue-300"
                      : "text-white/80 hover:bg-white/5 hover:text-cyan-300"
                  }`}
                >
                  {label}
                </a>

              ))}

            </div>


            {/* ================= DESKTOP VERIFY ================= */}
            <div className="hidden md:block">
              <Link
                to="/verify"
                className="rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-600 px-7 py-3.5 text-sm font-bold shadow-[0_0_30px_rgba(37,99,235,0.25)] transition hover:scale-[1.02]"
              >
                Verify if Registered
              </Link>

            </div>


            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/15 md:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={25} />
              ) : (
                <Menu size={25} />
              )}
            </button>

          </div>


          {/* ================= MOBILE MENU ================= */}
          {mobileMenuOpen && (

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-blue-400/10 bg-[#020817]/98 px-4 pb-5 pt-3 shadow-[0_15px_40px_rgba(0,0,0,0.35)] md:hidden"
            >

              <div className="mx-auto flex max-w-[1450px] flex-col gap-2">

                {/* HOME */}
                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-3.5 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/15"
                >
                  Home
                </a>

                {/* ABOUT */}
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-cyan-300"
                >
                  About Fest
                </a>

                {/* EVENTS */}
                <a
                  href="/events?category=aerospace"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-cyan-300"
                >
                  Events
                </a>

                {/* CONTACT */}
                <a
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-cyan-300"
                >
                  Contact
                </a>

                {/* VERIFY */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 px-4 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(37,99,235,0.2)]"
                >
                  Verify if Registered
                </button>

              </div>

            </motion.div>

          )}

        </nav>

        {/* ================= ADATE LOGO ================= */}
        <div className="pointer-events-none absolute inset-x-0 top-[92px] z-30 hidden lg:block">
          <div className="mx-auto flex max-w-[1450px] justify-end px-5 lg:px-10">
            
            <img
              src={adateLogo}
              alt="ADATE Club"
              className="h-20-auto object-contain xl:h-16"
            />
            
          </div>
        </div>

        {/* ================= HERO ================= */}
        <section
          id="home"
          className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-14 pt-28"
          style={{
            background:
              "radial-gradient(circle at 50% 48%, rgba(9,79,155,0.28), transparent 42%), linear-gradient(180deg, #020817 0%, #03132d 58%, #020b1f 100%)",
          }}
        >
          
          {/* Circuit/grid atmosphere */}
          
          <div className="absolute inset-x-0 top-20 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,119,255,0.12),transparent_65%)]" />

          {/* Blue glow behind title */}
          <div className="pointer-events-none absolute left-1/2 top-[42%] h-[650px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

          <div className="relative z-20 mx-auto w-full max-w-[1200px] px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300"
            >
              <Sparkles size={16} />
              A 2-Day Technical & Aerospace Event
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-3xl font-semibold tracking-wide text-white sm:text-4xl md:text-5xl"
            >
              Welcome to
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-3 text-[13vw] font-black leading-[0.95] tracking-[-0.04em] sm:text-[10vw] md:whitespace-nowrap md:text-[clamp(3.2rem,7vw,6.5rem)]"
            >
              <span className="block sm:inline">TECHNO WINGS</span>{" "}
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-500 bg-clip-text text-transparent">
                2K26
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mx-auto mt-6 max-w-4xl text-xl font-medium text-white/90 sm:text-2xl md:text-3xl"
            >
              A 2-Day National Level Technical Fest
            </motion.p>

            {/* ADATE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-7 flex flex-col items-center"
            >
              <div className="w-full max-w-xl rounded-2xl border border-blue-400/70 bg-[#071a35]/80 px-4 py-3 shadow-[0_0_30px_rgba(0,119,255,0.15)] sm:rounded-full sm:px-8 sm:py-2.5">
                <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
                  <img
                    src={adateLogo}
                    alt="ADATE Club"
                    className="h-12 w-auto object-contain"
                  />
                  <span className="text-base font-semibold text-white/90 sm:text-lg">
                    In Collaboration with{" "}
                    <span className="text-cyan-300">ADATE CLUB</span>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* DATE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-7 flex justify-center"
            >
              <div className="flex items-center gap-3 text-xl font-bold text-blue-400 sm:text-2xl">
                <CalendarDays size={27} className="text-white" />
                <span>14th &amp; 15th September</span>
              </div>
            </motion.div>

            {/* ORGANIZER */}
            <div className="mt-7">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-400">
                Organized By
              </p>
              <p className="mt-3 text-xl font-bold text-blue-400 sm:text-2xl md:text-3xl">
                Department of Aeronautical Engineering
              </p>
              <p className="mt-1 text-base text-white/90 sm:text-lg md:text-xl">
                Annasaheb Dange College of Engineering &amp; Technology
              </p>
            </div>

            {/* COUNTDOWN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mx-auto mt-8 grid max-w-2xl grid-cols-4 gap-2 sm:gap-5"
            >
              {[
                ["days", timeLeft.days],
                ["hours", timeLeft.hours],
                ["minutes", timeLeft.minutes],
                ["seconds", timeLeft.seconds],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-blue-400/20 bg-[#06172f]/80 px-2 py-3 shadow-[0_0_25px_rgba(0,119,255,0.08)] backdrop-blur-sm sm:rounded-2xl sm:px-5 sm:py-5"
                >
                  <div className="text-3xl font-bold text-blue-400 sm:text-5xl">
                    {String(value).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/70 sm:text-xs">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"
            >
              <a
                href="/events?category=aerospace"
                className="group flex min-w-[240px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-bold shadow-[0_0_30px_rgba(37,99,235,0.3)] transition hover:-translate-y-1"
              >
                <Plane size={23} />
                Explore Events
                <ArrowRight size={19} className="transition group-hover:translate-x-1" />
              </a>

              <button
                onClick={() => (window.location.href = "/register")}
                className="min-w-[240px] rounded-xl border border-white/15 bg-black/25 px-8 py-4 text-lg font-bold transition hover:border-blue-400/50 hover:bg-blue-500/10"
              >
                Register
              </button>
              <Link
                to="/verify"
                className="min-w-[240px] rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-bold shadow-[0_0_30px_rgba(37,99,235,0.25)] transition hover:-translate-y-1"
              >
                Verify if Registered
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="relative overflow-hidden border-t border-blue-400/10 bg-[#020b1f]/45 px-6 py-28"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,119,255,0.07),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                <Plane size={16} />
                About Techno Wings 2K26
              </div>

              <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
                Welcome to the Biggest
                <span className="block text-cyan-400">
                  Aerospace &amp; Technical Event
                </span>
              </h2>

              <p className="mt-7 max-w-4xl text-base leading-8 text-white/60 sm:text-lg">
                Techno Wings 2K26 is a two-day technical and aerospace event
                organized by the Department of Aeronautical Engineering,
                Annasaheb Dange College of Engineering and Technology, in
                collaboration with ADATE Club. It brings together innovation,
                engineering, creativity, and competition through exciting
                technical activities designed to challenge and inspire students.
              </p>

              <button className="mt-7 flex items-center gap-2 font-semibold text-cyan-400 transition hover:gap-3">
                Learn More <ArrowRight size={17} />
              </button>
            </motion.div>

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [CalendarDays, "2 DAYS", "Technical Fest"],
                [Trophy, "7 EVENTS", "Exciting Competitions"],
                [CalendarDays, "14–15", "September"],
                [Plane, "AEROSPACE", "Technology & Innovation"],
              ].map(([Icon, title, subtitle], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-blue-400/10 bg-[#071327] p-7 transition hover:border-cyan-400/30"
                >
                  <Icon className="mb-6 text-cyan-400" size={29} />
                  <div className="text-2xl font-black">{title}</div>
                  <div className="mt-2 text-sm text-white/45">{subtitle}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= EXPLORE EVENTS ================= */}
        <section
          id="events"
          className="relative overflow-hidden border-y border-blue-400/10 bg-[#03112a]/45 px-6 py-28"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(0,119,255,0.10),transparent_40%)]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-300">
                <Plane size={16} />
                Explore Events
              </div>

              <h2 className="text-4xl font-black sm:text-5xl md:text-6xl">
                Discover Exciting Events
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/55 sm:text-lg">
                From aerospace challenges to engineering design and technical
                problem-solving — there&apos;s something for every innovator.
              </p>
            </div>

            <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
              {eventCategories.map((category, index) => {
                const Icon = category.icon;

                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    whileHover={{ y: -8 }}
                    className="group flex h-full flex-col rounded-3xl border border-blue-300/15 bg-[#07172f] p-8 shadow-[0_15px_60px_rgba(0,0,0,0.18)] transition hover:border-cyan-400/40 hover:bg-[#0a1d3c]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
                      <Icon size={31} />
                    </div>

                    <div className="mt-7 min-h-[72px]">
                      <h3 className="text-2xl font-black leading-tight">
                        {category.title}
                      </h3>

                      {category.title === "DRONE EXPO" && (
                        <span className="mt-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold leading-tight text-cyan-300">
                          FREE ENTRY • REGISTRATION REQUIRED
                        </span>
                      )}
                    </div>


                    <p className="mt-4 min-h-[108px] text-sm leading-6 text-white/55">
                      {category.description}
                    </p>

                    <div className="mt-5 space-y-3 border-t border-white/10 pt-5">
                      {category.events.map((event) => (
                        <div
                          key={event}
                          className="flex items-center gap-3 text-sm font-medium text-white/80"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {event}
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center justify-between">
                      <span className="text-sm font-semibold text-cyan-400">
                        {category.count}
                      </span>

                      <a
                        href={`/events?category=${
                          category.title === "AEROSPACE CHALLENGES"
                            ? "aerospace"
                            : category.title === "DESIGN & BUILD"
                            ? "design"
                            : category.title === "KNOWLEDGE & INNOVATION"
                            ? "knowledge"
                            : "drone"
                        }`}
                        className="flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-cyan-300"
                      >
                        View All
                        <ChevronRight size={17} />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <a
                href="/events?category=aerospace"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 px-7 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
              >
                View All 7 Events
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ================= GET IN TOUCH ================= */}
        <section
          id="contact"
          className="relative overflow-hidden bg-[#020b1f]/45 px-6 py-28"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,119,255,0.06),transparent_38%)]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-300">
                <Mail size={16} />
                Get in Touch
              </div>

              <h2 className="text-4xl font-black sm:text-5xl md:text-6xl">
                Contact Us
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
                Have questions about Techno Wings 2K26? Reach out to our team
                using the details below.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-4xl gap-7 md:grid-cols-2">
              {contactCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.a
                    key={card.title}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -7 }}
                    className="rounded-3xl border border-blue-300/15 bg-[#071327] p-8 text-center transition hover:border-cyan-400/35"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                      <Icon className="text-cyan-400" size={30} />
                    </div>

                    <h3 className="mt-6 text-lg font-black tracking-wide">
                      {card.title}
                    </h3>

                    <p className="mt-4 font-semibold text-cyan-300">
                      {card.value}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/50">
                      {card.detail}
                    </p>
                  </motion.a>
                );
              })}
            </div>

            {/* Follow us */}
            <div className="mt-16 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">
                Follow Us
              </p>

              <div className="mt-5 flex justify-center gap-4">
                <a
                  href="https://www.instagram.com/astra_aero_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/20 bg-[#071327] text-white/80 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300"
                  aria-label="Instagram"
                >
                  <span className="text-lg font-bold">IG</span>
                </a>


                <a
                  href="https://www.linkedin.com/company/aeroadcetashta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/20 bg-[#071327] text-white/80 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300"
                  aria-label="LinkedIn"
                >
                  <span className="text-lg font-bold">in</span>
                </a>
              </div>

              <a
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-bold shadow-[0_0_30px_rgba(37,99,235,0.25)] transition hover:-translate-y-1"
              >
                Contact Us
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-blue-400/10 solid bg-[#010611] px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-10 md:flex-row">
              <div>
                <div className="flex items-center gap-4">
                  <img
                    src={technoWingsLogo}
                    alt="Techno Wings 2K26"
                    className="h-16 w-auto object-contain"
                  />
                  <div>
                    <p className="text-lg font-extrabold">TECHNO WINGS 2K26</p>
                    <p className="mt-1 text-xs tracking-[0.2em] text-cyan-400">
                      TECHNICAL &amp; AEROSPACE EVENT
                    </p>
                  </div>
                </div>

                <p className="mt-5 max-w-md text-sm leading-6 text-white/40">
                  A two-day technical and aerospace event celebrating innovation,
                  engineering, creativity and competition.
                </p>

                <p className="mt-4 text-sm font-semibold text-cyan-400">
                  In Collaboration with ADATE Club
                </p>
              </div>

              <div className="max-w-md">
                <div className="text-sm font-bold uppercase tracking-widest text-white/70">
                  Organized By
                </div>

                <p className="mt-3 text-sm leading-7 text-white/40">
                  Department of Aeronautical Engineering
                  <br />
                  Annasaheb Dange College of Engineering &amp; Technology
                  <br />
                  Ashta, Taluka Walwa, District Sangli,
                  <br />
                  Maharashtra – 416301
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-7 text-center text-xs text-white/30">
              © 2026 Techno Wings 2K26 • All Rights Reserved
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
