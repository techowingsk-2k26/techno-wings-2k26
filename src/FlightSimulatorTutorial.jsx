import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Play,
  Plane,
  Gauge,
  Wind,
  ShieldCheck,
  Lightbulb,
  CheckCircle2,
  Compass,
} from "lucide-react";

export default function FlightSimulatorTutorial() {
  const videoId = "Njwy14EPVMU";

  const components = [
    {
      title: "Flight Controls",
      description:
        "The control inputs let the pilot command pitch, roll, and yaw to change the aircraft's attitude.",
      icon: <Compass size={22} />,
    },
    {
      title: "Flight Instruments",
      description:
        "Instruments display key flight information such as airspeed, altitude, heading, and attitude.",
      icon: <Gauge size={22} />,
    },
    {
      title: "Aircraft and Environment",
      description:
        "The simulator models an aircraft moving through a virtual environment with a runway, terrain, and atmospheric conditions.",
      icon: <Plane size={22} />,
    },
    {
      title: "Aerodynamic Forces",
      description:
        "Lift, drag, thrust, and weight influence the aircraft's motion and performance during flight.",
      icon: <Wind size={22} />,
    },
  ];

  const steps = [
    "Get familiar with the simulator interface, cockpit view, and available controls.",
    "Identify the primary flight instruments and understand the information they display.",
    "Observe how control inputs affect aircraft pitch, roll, heading, and altitude.",
    "Follow the take-off, basic manoeuvring, approach, and landing demonstration.",
  ];

  const safetyRules = [
    "Follow the event coordinator's instructions before starting the simulator.",
    "Use the controls gently and avoid sudden, excessive inputs.",
    "Keep the simulator equipment, keyboard, joystick, and other peripherals handled carefully.",
    "Ask the supervisor for help if the simulator freezes or the controls behave unexpectedly.",
    "Allow the next participant to use the simulator only after the current session has ended.",
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Back Button */}
        <Link
          to="/events?event=flight-simulator"
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600 shadow-sm transition hover:border-blue-200 hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Back to Flight Simulator Event
        </Link>

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-[#06152e] p-6 shadow-xl sm:p-10 lg:p-14">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-20 right-1/3 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-200">
              <Plane size={15} />
              Techno Wings 2K26
            </span>

            <h1 className="mt-6 font-outfit text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Flight Simulator
              <span className="block text-cyan-300">
                Information & Tutorial
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Explore the basics of flight simulation, get familiar with flight
              controls and cockpit instruments, and watch the tutorial before
              taking part in the Flight Simulator event.
            </p>

            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-red-700"
            >
              <Play size={18} fill="currentColor" />
              Watch on YouTube
            </a>
          </div>
        </section>

        {/* Demonstration Video */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-red-50 p-3 text-red-600">
                <Play size={23} fill="currentColor" />
              </div>
              <div>
                <h2 className="font-outfit text-xl font-black text-[#06152e] sm:text-2xl">
                  Flight Simulator Tutorial
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Watch the video to become familiar with the simulator.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Flight Simulator Information and Tutorial"
                className="h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="p-5 text-sm leading-6 text-slate-500 sm:p-7">
            Pay attention to the flight controls, instrument readings, aircraft
            response, and the sequence of basic flight manoeuvres shown in the
            tutorial.
          </div>
        </section>

        {/* Working Principle */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <Lightbulb size={23} />
              </div>
              <h2 className="font-outfit text-2xl font-black text-[#06152e]">
                How Flight Simulation Works
              </h2>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              A flight simulator recreates important aspects of flying in a
              virtual environment. Pilot inputs are processed by the simulator,
              which updates the aircraft's attitude, speed, altitude, and
              position. The displayed instruments and outside view help the
              participant understand how an aircraft responds during different
              phases of flight.
            </p>

            <div className="mt-5 rounded-2xl border border-cyan-100 bg-cyan-50 p-5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-cyan-800">
                Key Concept
              </p>
              <p className="mt-2 text-base font-bold leading-7 text-[#06152e]">
                Control input → Aircraft response → Instrument feedback
              </p>
            </div>
          </div>

          {/* Main Components */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                <Plane size={23} />
              </div>
              <h2 className="font-outfit text-2xl font-black text-[#06152e]">
                Main Elements
              </h2>
            </div>

            <div className="mt-6 space-y-4">
              {components.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#06152e]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Steps */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
              <CheckCircle2 size={23} />
            </div>
            <h2 className="font-outfit text-2xl font-black text-[#06152e]">
              What to Learn from the Tutorial
            </h2>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-2xl bg-slate-50 p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-7 text-slate-600">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Guidelines */}
        <section className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
              <ShieldCheck size={23} />
            </div>
            <h2 className="font-outfit text-2xl font-black text-[#06152e]">
              Participant Guidelines
            </h2>
          </div>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Follow these guidelines to help keep the simulator session safe and
            smooth for everyone.
          </p>

          <ul className="mt-5 space-y-3">
            {safetyRules.map((rule) => (
              <li
                key={rule}
                className="flex gap-3 text-sm leading-6 text-slate-700"
              >
                <ShieldCheck
                  size={18}
                  className="mt-0.5 shrink-0 text-amber-700"
                />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom Action */}
        <section className="mt-8 rounded-3xl bg-[#06152e] p-6 text-center shadow-lg sm:p-8">
          <h2 className="font-outfit text-2xl font-black text-white sm:text-3xl">
            Ready for the Flight Simulator Event?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Review the event details and complete your registration to
            participate in Techno Wings 2K26.
          </p>

          <Link
            to="/register?event=flight-simulator"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-7 py-3.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Register for Flight Simulator
            <Plane size={17} />
          </Link>
        </section>
      </div>
    </main>
  );
}
