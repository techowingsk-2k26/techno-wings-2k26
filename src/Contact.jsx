import {
  ArrowLeft,
  MapPin,
  Phone,
  Users,
  Navigation,
  Sparkles,
  Headphones,
} from "lucide-react";
import { motion } from "motion/react";

import technoWingsLogo from "./assets/techno-wings-logo.png";
import collegeLogo from "./assets/college-logo.png";

import prathmeshImage from "./assets/coordinators/prathmesh-patil.png";
import mandarImage from "./assets/coordinators/mandar-ghodake.png";
import shwetaImage from "./assets/coordinators/shweta-raut.png";
import surajImage from "./assets/coordinators/suraj-mali.png";
import chanchalImage from "./assets/coordinators/chanchal-shelar.png";
import samarthImage from "./assets/coordinators/samarth-lomate.png";
import aznanImage from "./assets/coordinators/aznan-shaikh.png";
import technicalSupportImage from "./assets/coordinators/technical-support.png";

function CoordinatorCard({ icon, eventName, name, phone, image }) {
  const cleanPhone = phone.replace(/\D/g, "");

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -7 }}
      className="group relative mx-auto w-full max-w-[390px] overflow-hidden rounded-[24px] border border-blue-100 bg-white shadow-[0_15px_45px_rgba(30,64,175,0.09)] transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_22px_55px_rgba(14,165,233,0.16)]"
    >
      <div className="absolute left-0 right-0 top-0 z-20 h-1 bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600" />
      <div className="pointer-events-none absolute -right-12 -top-12 z-10 h-28 w-28 rounded-full border-[12px] border-cyan-50" />

      <div className="relative p-4 sm:p-5">
        <div className="relative z-20 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-200 bg-cyan-50 text-xl shadow-sm">
            {icon}
          </div>
          <div className="min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-600">
              Event
            </p>
            <h3 className="font-outfit truncate text-[15px] font-black tracking-tight text-[#06152e] sm:text-base">
              {eventName}
            </h3>
          </div>
        </div>

        <div className="mt-4">
          <div className="relative mx-auto h-[255px] w-full overflow-hidden rounded-[20px] border border-blue-200 bg-gradient-to-b from-[#071a50] via-[#092b7a] to-[#06152e] shadow-inner sm:h-[270px]">
            <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/15 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-44 w-44 rounded-full bg-blue-500/20 blur-2xl" />
            <div className="pointer-events-none absolute inset-3 rounded-[16px] border border-cyan-300/30" />
            <div className="pointer-events-none absolute left-4 top-4 h-10 w-10 border-l-2 border-t-2 border-cyan-300/80" />
            <div className="pointer-events-none absolute right-4 top-4 h-10 w-10 border-r-2 border-t-2 border-cyan-300/80" />
            <div className="pointer-events-none absolute bottom-4 left-4 h-10 w-10 border-b-2 border-l-2 border-cyan-300/80" />
            <div className="pointer-events-none absolute bottom-4 right-4 h-10 w-10 border-b-2 border-r-2 border-cyan-300/80" />

            <img
              src={image}
              alt={`${name} - ${eventName} coordinator`}
              className="absolute inset-0 h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.025]"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#06152e] to-transparent" />

            <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan-300/30 bg-[#06152e]/85 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur-sm">
              Student Coordinator
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <h4 className="font-outfit text-lg font-black text-[#06152e] sm:text-xl">
            {name}
          </h4>
          <div className="mx-auto mt-2 h-[2px] w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
        </div>

        <a
          href={`tel:+${cleanPhone}`}
          className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-blue-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-blue-700 transition-all hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50"
        >
          <Phone size={15} />
          {phone}
        </a>

        <a
          href={`tel:+${cleanPhone}`}
          className="mt-2.5 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(37,99,235,0.28)]"
        >
          <Phone size={16} />
          Contact Coordinator
        </a>
      </div>
    </motion.article>
  );
}

function TechnicalSupportCard({ name, phone, image }) {
  const cleanPhone = phone.replace(/\D/g, "");

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -7 }}
      className="group relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[28px] border border-indigo-200 bg-white p-5 shadow-[0_18px_55px_rgba(49,46,129,0.11)] transition-all hover:border-indigo-300 hover:shadow-[0_24px_65px_rgba(49,46,129,0.17)] sm:p-6"
    >
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-400" />

      <div className="text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-indigo-700">
          <Headphones size={14} />
          Technical Support
        </div>

        <div className="relative mx-auto h-[285px] w-full overflow-hidden rounded-[22px] border border-indigo-200 bg-gradient-to-b from-[#071a50] via-[#102b78] to-[#06152e]">
          <div className="pointer-events-none absolute inset-3 rounded-[18px] border border-cyan-300/30" />
          <div className="pointer-events-none absolute left-4 top-4 h-10 w-10 border-l-2 border-t-2 border-cyan-300/80" />
          <div className="pointer-events-none absolute right-4 top-4 h-10 w-10 border-r-2 border-t-2 border-cyan-300/80" />
          <div className="pointer-events-none absolute bottom-4 left-4 h-10 w-10 border-b-2 border-l-2 border-cyan-300/80" />
          <div className="pointer-events-none absolute bottom-4 right-4 h-10 w-10 border-b-2 border-r-2 border-cyan-300/80" />

          <img
            src={image}
            alt={`${name} - Technical Support`}
            className="absolute inset-0 h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.025]"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#06152e] to-transparent" />

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-indigo-300/40 bg-[#06152e]/85 px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur-sm">
            Website & Event Support
          </div>
        </div>

        <h3 className="font-outfit mt-5 text-xl font-black text-[#06152e] sm:text-2xl">
          {name}
        </h3>
        <div className="mx-auto mt-2 h-[2px] w-14 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />

        <a
          href={`tel:+${cleanPhone}`}
          className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-100"
        >
          <Phone size={15} />
          {phone}
        </a>

        <a
          href={`tel:+${cleanPhone}`}
          className="mt-2.5 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(79,70,229,0.20)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(79,70,229,0.30)]"
        >
          <Phone size={16} />
          Contact Technical Support
        </a>
      </div>
    </motion.article>
  );
}

export default function Contact() {
  const coordinators = [
    { icon: "🚁", eventName: "DRONE EXPO", name: "Prathmesh Patil", phone: "+91 84849 84499", image: prathmeshImage },
    { icon: "💻", eventName: "CAD MASTER", name: "Mandar Ghodake", phone: "+91 96995 32950", image: mandarImage },
    { icon: "📄", eventName: "PAPER PRESENTATION", name: "Shweta Raut", phone: "+91 78229 16824", image: shwetaImage },
    { icon: "🚀", eventName: "WATER ROCKET", name: "Suraj Mali", phone: "+91 74994 80831", image: surajImage },
    { icon: "✈️", eventName: "CHUCK GLIDER", name: "Chanchal Shelar", phone: "+91 70570 04239", image: chanchalImage },
    { icon: "🛫", eventName: "FLIGHT SIMULATOR", name: "Samarth Lomate", phone: "+91 90221 61641", image: samarthImage },
    { icon: "🧠", eventName: "REASONING RUMBLE", name: "Aznan Shaikh", phone: "+91 87937 77579", image: aznanImage },
  ];

  // Replace these with your actual technical-support details.
  const technicalSupport = {
    name: "Mayur Patil",
    phone: "+91 75593 26923",
    image: technicalSupportImage,
  };

  return (
    <div className="site-scale min-h-screen overflow-x-hidden bg-[#f5f9ff] text-[#06152e]">

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute bottom-0 left-[35%] h-96 w-96 rounded-full bg-indigo-200/10 blur-3xl" />
        <div className="absolute left-[5%] top-[28%] h-44 w-44 rounded-full border border-blue-200/30" />
        <div className="absolute left-[7%] top-[30%] h-36 w-36 rounded-full border border-cyan-200/30" />
        <div className="absolute right-[5%] top-[60%] h-52 w-52 rounded-full border border-blue-200/25" />
        <div className="absolute left-0 top-[45%] h-px w-full bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
        <div className="absolute left-0 top-[75%] h-px w-full bg-gradient-to-r from-transparent via-blue-200/40 to-transparent" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-blue-100/80 bg-white/85 shadow-[0_4px_25px_rgba(15,23,42,0.05)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
          <a href="/" className="flex items-center gap-3">
            <img src={technoWingsLogo} alt="Techno Wings 2K26" className="h-16 w-auto sm:h-20" />
            <div className="hidden leading-tight sm:block">
              <div className="text-lg font-extrabold tracking-wide text-[#06152e]">TECHNO WINGS</div>
              <div className="text-sm font-bold tracking-[0.25em] text-cyan-600">2K26</div>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="/" className="text-sm font-medium text-slate-500 transition hover:text-blue-600">Home</a>
            <a href="/#about" className="text-sm font-medium text-slate-500 transition hover:text-blue-600">About</a>
            <a href="/events" className="text-sm font-medium text-slate-500 transition hover:text-blue-600">Events</a>
            <a href="/contact" className="text-sm font-bold text-blue-600">Contact</a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a href="/verify" className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100">
              Verify Registration
            </a>
            <a href="/register" className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.18)] transition hover:-translate-y-0.5">
              Register
            </a>
          </div>

          <a href="/register" className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-xs font-bold text-white md:hidden">
            Register
          </a>
        </div>
      </nav>

      <main className="relative z-10 px-5 pb-24 pt-28 sm:px-6">
        <div className="mx-auto max-w-7xl">

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

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700">
              <Sparkles size={16} />
              Get in Touch
            </div>

            <h1 className="font-outfit text-4xl font-black tracking-tight text-[#06152e] sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>

            <div className="mx-auto mt-5 h-1 w-[90px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Have questions about Techno Wings 2K26?
              <br />
              Connect directly with our student coordinators.
            </p>
          </motion.div>

          {/* Event Coordinators */}
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              <Users size={16} />
              Event Support
            </div>

            <h2 className="font-outfit text-3xl font-black tracking-tight text-[#06152e] sm:text-4xl">
              EVENT COORDINATORS
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500">
              Connect directly with the student coordinators
              <br className="hidden sm:block" />
              for event-related assistance.
            </p>
          </div>

          {/* Three cards per row on desktop */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {coordinators.map((coordinator) => (
              <CoordinatorCard key={coordinator.eventName} {...coordinator} />
            ))}
          </div>

          {/* Technical Support */}
          <div className="mb-8 mt-20 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700">
              <Headphones size={16} />
              Need Website Help?
            </div>

            <h2 className="font-outfit text-3xl font-black tracking-tight text-[#06152e] sm:text-4xl">
              TECHNICAL SUPPORT
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600" />

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-500">
              For registration, website, technical, or other online-event
              related issues, contact the technical support coordinator.
            </p>
          </div>

          <TechnicalSupportCard {...technicalSupport} />

          {/* Location */}
          <div className="mt-24 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700">
              <MapPin size={16} />
              Visit Us
            </div>

            <h2 className="font-outfit text-3xl font-black tracking-tight text-[#06152e] sm:text-4xl">
              OUR LOCATION
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500">
              Find us at Annasaheb Dange College of Engineering &amp; Technology, Ashta.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.5fr]">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65 }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-8 shadow-[0_15px_45px_rgba(30,64,175,0.07)]"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border-[18px] border-cyan-50" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 shadow-sm">
                  <MapPin size={28} className="text-cyan-600" />
                </div>

                <h2 className="font-outfit mt-7 text-xl font-black tracking-wide text-[#06152e]">
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

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Annasaheb+Dange+College+of+Engineering+and+Technology+Ashta+Maharashtra"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.18)] transition hover:-translate-y-0.5"
                >
                  <Navigation size={16} />
                  Get Directions
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65 }}
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
                    <p className="text-sm font-bold text-[#06152e]">OUR LOCATION</p>
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
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-blue-100 bg-[#010611] px-5 py-12 text-white sm:px-6">
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
                Organized By ADATE Club
              </p>
            </div>

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

          <div className="mt-10 border-t border-white/10 pt-7 text-center text-xs text-white/30">
            © 2026 Techno Wings 2K26 • All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
