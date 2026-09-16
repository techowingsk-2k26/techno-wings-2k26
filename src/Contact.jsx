import {
  ArrowLeft,
  MapPin,
  Phone,
  Users,
  Navigation,
  Plane,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

import technoWingsLogo from "./assets/techno-wings-logo.png";
import adateLogo from "./assets/adate-logo.png";
import collegeLogo from "./assets/college-logo.png";

// =====================================================
// COORDINATOR CARD
// =====================================================

function CoordinatorCard({ icon, title, coordinators }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -7 }}
      className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_15px_45px_rgba(30,64,175,0.08)] transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_20px_55px_rgba(14,165,233,0.15)]"
    >
      {/* Aerospace decorative line */}
      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[70px] bg-gradient-to-br from-cyan-50 to-blue-50 opacity-80" />

      <div className="relative">
        {/* Event title */}
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.08 }}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-200 bg-cyan-50 text-2xl shadow-sm"
          >
            {icon}
          </motion.div>

          <h3 className="text-lg font-black tracking-tight text-[#06152e]">
            {title}
          </h3>
        </div>

        {/* Coordinators */}
        <div className="mt-5 space-y-3">
          {coordinators.map(({ role, name, phone }) => {
            const cleanPhone = phone.replace(/\D/g, "");

            return (
              <motion.div
                key={name}
                whileHover={{ x: 3 }}
                className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition hover:border-cyan-200 hover:bg-cyan-50/40"
              >
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-600">
                    {role}
                  </p>

                  <p className="mt-1 font-bold text-[#06152e]">
                    {name}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {phone}
                  </p>
                </div>

                <a
                  href={`tel:+${cleanPhone}`}
                  aria-label={`Call ${name}`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_8px_20px_rgba(37,99,235,0.2)] transition hover:scale-110 hover:shadow-[0_10px_25px_rgba(37,99,235,0.3)]"
                >
                  <Phone size={18} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

// =====================================================
// CONTACT PAGE
// =====================================================

export default function Contact() {
  return (
    <div className="site-scale min-h-screen overflow-x-hidden bg-[#f5f9ff] text-[#06152e]">

      {/* ========================================================= */}
      {/* AEROSPACE BACKGROUND */}
      {/* ========================================================= */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-blue-200/20 blur-3xl" />

        <div className="absolute bottom-0 left-[35%] h-96 w-96 rounded-full bg-indigo-200/10 blur-3xl" />

        {/* Technical circles */}
        <div className="absolute left-[5%] top-[28%] h-44 w-44 rounded-full border border-blue-200/30" />

        <div className="absolute left-[7%] top-[30%] h-36 w-36 rounded-full border border-cyan-200/30" />

        <div className="absolute right-[5%] top-[60%] h-52 w-52 rounded-full border border-blue-200/25" />

        {/* Flight path */}
        <div className="absolute left-0 top-[45%] h-px w-full bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />

        <div className="absolute left-0 top-[75%] h-px w-full bg-gradient-to-r from-transparent via-blue-200/40 to-transparent" />
      </div>

      {/* ========================================================= */}
      {/* NAVIGATION BAR */}
      {/* ========================================================= */}

      <nav className="fixed top-0 z-50 w-full border-b border-blue-100/80 bg-white/85 shadow-[0_4px_25px_rgba(15,23,42,0.05)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3"
          >
            <img
              src={technoWingsLogo}
              alt="Techno Wings 2K26"
              className="h-16 w-auto sm:h-20"
            />

            <div className="hidden leading-tight sm:block">
              <div className="text-lg font-extrabold tracking-wide text-[#06152e]">
                TECHNO WINGS
              </div>

              <div className="text-sm font-bold tracking-[0.25em] text-cyan-600">
                2K26
              </div>
            </div>
          </a>

          {/* Navigation */}
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
              About
            </a>

            <a
              href="/events"
              className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
            >
              Events
            </a>

            <a
              href="/contact"
              className="text-sm font-bold text-blue-600"
            >
              Contact
            </a>

          </div>

          {/* Right buttons */}
          <div className="hidden items-center gap-3 md:flex">

            <a
              href="/verify"
              className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
            >
              Verify Registration
            </a>

            <a
              href="/register"
              className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(37,99,235,0.25)]"
            >
              Register
            </a>

          </div>

          {/* Mobile Register */}
          <a
            href="/register"
            className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-xs font-bold text-white md:hidden"
          >
            Register
          </a>

        </div>
      </nav>

      {/* ========================================================= */}
      {/* MAIN CONTACT PAGE */}
      {/* ========================================================= */}

      <main className="relative z-10 px-5 pb-24 pt-28 sm:px-6">

        <div className="mx-auto max-w-7xl">

          {/* ===================================================== */}
          {/* BACK BUTTON */}
          {/* ===================================================== */}

          <motion.a
            href="/"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            Back to Home
          </motion.a>

          {/* ===================================================== */}
          {/* CONTACT HEADER */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center"
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700"
            >
              <Sparkles size={16} />
              Get in Touch
            </motion.div>

            <h1 className="text-4xl font-black tracking-tight text-[#06152e] sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "90px" }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
            />

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Have questions about Techno Wings 2K26?
              <br />
              Connect directly with our faculty and student coordinators.
            </p>

          </motion.div>

          {/* ===================================================== */}
          {/* LOCATION + MAP */}
          {/* ===================================================== */}

          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.5fr]">

            {/* LOCATION CARD */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-8 shadow-[0_15px_45px_rgba(30,64,175,0.07)]"
            >

              {/* Decorative circle */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border-[18px] border-cyan-50" />

              <div className="relative">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 shadow-sm">
                  <MapPin
                    size={28}
                    className="text-cyan-600"
                  />
                </div>

                <h2 className="mt-7 text-xl font-black tracking-wide text-[#06152e]">
                  OUR LOCATION
                </h2>

                <div className="mt-6 text-sm leading-7 text-slate-500">

                  <p className="font-bold text-[#06152e]">
                    Annasaheb Dange College of
                    <br />
                    Engineering &amp; Technology
                  </p>

                  <p className="mt-3">
                    Ashta, Taluka Walwa,
                    <br />
                    District Sangli,
                    <br />
                    Maharashtra – 416301
                  </p>

                </div>

                {/* Directions button */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Annasaheb+Dange+College+of+Engineering+and+Technology+Ashta+Maharashtra"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(37,99,235,0.25)]"
                >
                  <Navigation size={16} />
                  Get Directions
                </a>

              </div>
            </motion.div>

            {/* GOOGLE MAP */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="overflow-hidden rounded-3xl border border-blue-100 bg-white p-3 shadow-[0_15px_45px_rgba(30,64,175,0.07)]"
            >

              <div className="overflow-hidden rounded-2xl border border-slate-100">

                <iframe
                  title="Annasaheb Dange College of Engineering and Technology"
                  src="https://www.google.com/maps?q=Annasaheb%20Dange%20College%20of%20Engineering%20and%20Technology,%20Ashta,%20Maharashtra&output=embed"
                  className="h-[320px] w-full border-0 sm:h-[350px]"
                  loading="lazy"
                />

                <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 bg-slate-50 px-6 py-4 sm:flex-row">

                  <div>
                    <p className="text-sm font-bold text-[#06152e]">
                      OUR LOCATION
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Annasaheb Dange College of Engineering &amp; Technology
                    </p>
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Annasaheb+Dange+College+of+Engineering+and+Technology+Ashta+Maharashtra"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
                  >
                    <MapPin size={16} />
                    Get Directions
                  </a>

                </div>

              </div>

            </motion.div>

          </div>

          {/* ===================================================== */}
          {/* EVENT COORDINATORS HEADING */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-24 text-center"
          >

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              <Users size={16} />
              Event Support
            </div>

            <h2 className="text-3xl font-black tracking-tight text-[#06152e] sm:text-4xl">
              EVENT COORDINATORS
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
            />

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500">
              Connect directly with the faculty and student coordinators
              <br className="hidden sm:block" />
              for event-related assistance.
            </p>

          </motion.div>

          {/* ===================================================== */}
          {/* COORDINATOR CARDS */}
          {/* ===================================================== */}

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* DRONE EXPO */}

            <CoordinatorCard
              icon="🚁"
              title="DRONE EXPO"
              coordinators={[
                {
                  role: "Faculty Coordinator",
                  name: "Mr. Reju R.",
                  phone: "+91 90953 55087",
                },
                {
                  role: "Student Coordinator",
                  name: "Prathmesh Patil",
                  phone: "+91 84849 84499",
                },
              ]}
            />

            {/* CAD MASTER */}

            <CoordinatorCard
              icon="💻"
              title="CAD MASTER"
              coordinators={[
                {
                  role: "Faculty Coordinator",
                  name: "Mr. Arun Nema",
                  phone: "+91 70222 97404",
                },
                {
                  role: "Student Coordinator",
                  name: "Mandar Ghodake",
                  phone: "+91 96995 32950",
                },
              ]}
            />

            {/* PAPER PRESENTATION */}

            <CoordinatorCard
              icon="📄"
              title="PAPER PRESENTATION"
              coordinators={[
                {
                  role: "Faculty Coordinator",
                  name: "Dr. T. Anand",
                  phone: "+91 97862 92925",
                },
                {
                  role: "Student Coordinator",
                  name: "Shweta Raut",
                  phone: "+91 78229 16824",
                },
              ]}
            />

            {/* WATER ROCKET */}

            <CoordinatorCard
              icon="🚀"
              title="WATER ROCKET"
              coordinators={[
                {
                  role: "Faculty Coordinator",
                  name: "Mr. Sanoj P. Suresh",
                  phone: "+91 97866 79867",
                },
                {
                  role: "Student Coordinator",
                  name: "Shivani Nangre",
                  phone: "+91 85912 55289",
                },
              ]}
            />

            {/* CHUCK GLIDER */}

            <CoordinatorCard
              icon="✈️"
              title="CHUCK GLIDER"
              coordinators={[
                {
                  role: "Faculty Coordinator",
                  name: "Dr. Sendhil Kumar S",
                  phone: "+91 94861 72845",
                },
                {
                  role: "Student Coordinator",
                  name: "Chanchal Shelar",
                  phone: "+91 70570 04239",
                },
              ]}
            />

            {/* Flight SIMULATOR */}

            <CoordinatorCard
              icon="🛫"
              title="Flight SIMULATOR"
              coordinators={[
                {
                  role: "Faculty Coordinator",
                  name: "Mr. Mohammed Hashim Y.",
                  phone: "+91 90612 93705",
                },
                {
                  role: "Student Coordinator",
                  name: "Samarth Lomate",
                  phone: "+91 9022161641",
                },
              ]}
            />

            {/* REASONING RUMBLE */}

            <CoordinatorCard
              icon="🧠"
              title="REASONING RUMBLE"
              coordinators={[
                {
                  role: "Faculty Coordinator",
                  name: "Mr. Yogesh Kumbhar",
                  phone: "+91 70587 00724",
                },
                {
                  role: "Student Coordinator",
                  name: "Aznaan Shaikh",
                  phone: "+91 87937 77579",
                },
              ]}
            />

          </div>

        </div>
      </main>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="relative z-10 border-t border-blue-100 bg-[#010611] px-5 py-12 text-white sm:px-6">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-10 md:flex-row">

            {/* EVENT INFORMATION */}

            <div>

              <div className="flex items-center gap-4">

                <img
                  src={technoWingsLogo}
                  alt="Techno Wings 2K26"
                  className="h-16 w-auto object-contain"
                />

                <div>
                  <p className="text-lg font-extrabold">
                    TECHNO WINGS 2K26
                  </p>

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
                Organized By ADATE Club
              </p>

            </div>

            {/* COLLEGE INFORMATION */}

            <div className="max-w-md">


              <div className="mt-3 flex items-start gap-4">

                <img
                  src={collegeLogo}
                  alt="College Symbol"
                  className="mt-1 h-24 w-24 shrink-0 object-contain"
                />

                <p className="text-sm leading-7 text-white/40">
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

          </div>

          {/* COPYRIGHT */}

          <div className="mt-10 border-t border-white/10 pt-7 text-center text-xs text-white/30">
            © 2026 Techno Wings 2K26 • All Rights Reserved
          </div>

        </div>

      </footer>

    </div>
  );
}