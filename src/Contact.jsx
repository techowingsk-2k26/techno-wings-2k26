import {
  ArrowLeft,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

import technoWingsLogo from "./assets/techno-wings-logo.png";
import adateLogo from "./assets/adate-logo.png";


function CoordinatorCard({ icon, title, coordinators }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-blue-400/15 bg-[#071327] p-6 transition hover:border-cyan-400/35"
    >
      {/* Event title */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-2xl">
          {icon}
        </div>

        <h3 className="text-lg font-black text-white">
          {title}
        </h3>
      </div>

      {/* Coordinators */}
      <div className="mt-5 space-y-3">
        {coordinators.map(({ role, name, phone }) => {
          const cleanPhone = phone.replace(/\D/g, "");

          return (
            <div
              key={name}
              className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#020b1f]/70 p-4"
            >
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {role}
                </p>

                <p className="mt-1 font-semibold text-white">
                  {name}
                </p>

                <p className="mt-1 text-sm text-white/50">
                  {phone}
                </p>
              </div>

              <a
                href={`tel:+${cleanPhone}`}
                aria-label={`Call ${name}`}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.25)] transition hover:scale-110 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]"
              >
                <Phone size={18} />
              </a>
            </div>
          );

        })}
      </div>
    </motion.div>
  );
}


export default function Contact() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020817] text-white">

      {/* ========================================================= */}
      {/* NAVIGATION BAR */}
      {/* ========================================================= */}

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#020817]/90 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3"
          >
            <img
              src={technoWingsLogo}
              alt="Techno Wings 2K26"
              className="h-11 w-auto"
            />

            <div className="hidden leading-tight sm:block">
              <div className="text-lg font-extrabold tracking-wide">
                TECHNO WINGS
              </div>

              <div className="text-sm font-bold tracking-[0.25em] text-cyan-400">
                2K26
              </div>
            </div>
          </a>


          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">

            <a
              href="/"
              className="text-sm text-white/75 transition hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="/#about"
              className="text-sm text-white/75 transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="/#events"
              className="text-sm text-white/75 transition hover:text-cyan-400"
            >
              Events
            </a>

            <a
              href="/contact"
              className="text-sm font-semibold text-cyan-400"
            >
              Contact
            </a>

          </div>


          {/* Right buttons */}
          <div className="hidden items-center gap-3 md:flex">

            <button className="rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20">
              Verify if Registered
            </button>

            <button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:shadow-lg hover:shadow-blue-500/20">
              Register
            </button>

          </div>

        </div>
      </nav>


      {/* ========================================================= */}
      {/* CONTACT PAGE */}
      {/* ========================================================= */}

      <main className="px-6 pb-24 pt-32">

        <div className="mx-auto max-w-7xl">


          {/* ===================================================== */}
          {/* BACK BUTTON */}
          {/* ===================================================== */}

          <a
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/50 transition hover:text-cyan-400"
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>


          {/* ===================================================== */}
          {/* CONTACT HEADER */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              <Phone size={16} />
              Get in Touch
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              Contact Us
            </h1>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/50">
              Have questions about Techno Wings 2K26?
              <br />
              Connect with our student coordinators.
            </p>

          </motion.div>


          {/* ===================================================== */}
          {/* LOCATION + MAP */}
          {/* ===================================================== */}

          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.5fr]">


            {/* LOCATION CARD */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-8"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                <MapPin
                  size={28}
                  className="text-cyan-400"
                />
              </div>

              <h2 className="mt-7 text-xl font-black tracking-wide">
                OUR LOCATION
              </h2>

              <div className="mt-6 text-sm leading-7 text-white/55">

                <p className="font-semibold text-white/90">
                  Annasaheb Dange College of
                  <br />
                  Engineering & Technology
                </p>

                <p className="mt-3">
                  Ashta, Taluka Walwa,
                  <br />
                  District Sangli,
                  <br />
                  Maharashtra – 416301
                </p>

              </div>

            </motion.div>


            {/* GOOGLE MAP */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-3"
            >

              <div className="overflow-hidden rounded-2xl border border-white/10">

                <iframe
                  title="Annasaheb Dange College of Engineering and Technology"
                  src="https://www.google.com/maps?q=Annasaheb%20Dange%20College%20of%20Engineering%20and%20Technology,%20Ashta,%20Maharashtra&output=embed"
                  className="h-[320px] w-full border-0"
                  loading="lazy"
                />

                <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 bg-[#071327] px-6 py-4 sm:flex-row">

                  <div>
                    <p className="text-sm font-bold">
                      OUR LOCATION
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      Annasaheb Dange College of Engineering & Technology
                    </p>
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Annasaheb+Dange+College+of+Engineering+and+Technology+Ashta+Maharashtra"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-bold transition hover:-translate-y-0.5"
                  >
                    <MapPin size={16} />
                    Get Directions
                  </a>

                </div>

              </div>

            </motion.div>

          </div>


          {/* ===================================================== */}
          {/* STUDENT COORDINATORS HEADING */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">
              <Users size={16} />
              Event Support
            </div>

            <h2 className="text-3xl font-black sm:text-4xl">
              EVENT COORDINATORS
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/45">
              Connect directly with the faculty and student coordinators
              <br className="hidden sm:block" />
              for event-related assistance.
            </p>

          </motion.div>


          {/* ===================================================== */}
          {/* COORDINATOR CARDS */}
          {/* ===================================================== */}

          <div className="mt-12 grid gap-5 md:grid-cols-2">


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

            {/* RC SIMULATOR */}
            <CoordinatorCard
              icon="🛫"
              title="RC SIMULATOR"
              coordinators={[
                {
                  role: "Faculty Coordinator",
                  name: "Mr. Mohammed Hashim Y.",
                  phone: "+91 90612 93705",
                },
                {
                  role: "Student Coordinator",
                  name: "Om Jadhav",
                  phone: "+91 79720 75476",
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

      <footer className="border-t border-white/10 bg-[#010611] px-6 py-14">

        <div className="mx-auto max-w-7xl text-center">

          <img
            src={technoWingsLogo}
            alt="Techno Wings 2K26"
            className="mx-auto h-16 w-auto"
          />

          <h2 className="mt-5 text-2xl font-black tracking-wide">
            TECHNO WINGS 2K26
          </h2>

          <p className="mt-4 text-sm text-white/45">
            Organized by Department of Aeronautical Engineering
          </p>

          <p className="mt-1 text-sm text-white/45">
            Annasaheb Dange College of Engineering & Technology
          </p>

          <p className="mt-5 text-sm text-white/40">
            In Collaboration with{" "}
            <span className="font-semibold text-cyan-400">
              ADATE Club
            </span>
          </p>

          <div className="mx-auto mt-8 h-px max-w-xl bg-white/10" />

          <p className="mt-6 text-xs text-white/30">
            © 2026 Techno Wings 2K26 • All Rights Reserved
          </p>

        </div>

      </footer>

    </div>
  );
}