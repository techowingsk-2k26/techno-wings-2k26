import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Play,
  Rocket,
  Gauge,
  Wind,
  ShieldCheck,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

export default function WaterRocketTutorial() {
  const videoId = "4b360IfrrxI";

  const components = [
    {
      title: "Rocket Body",
      description:
        "A suitable plastic bottle forms the main body of the water rocket.",
      icon: <Rocket size={22} />,
    },
    {
      title: "Water Propellant",
      description:
        "Water is expelled from the rocket to produce the reaction force that propels it upward.",
      icon: <Wind size={22} />,
    },
    {
      title: "Compressed Air",
      description:
        "Pressurized air stores energy and pushes water out through the nozzle during launch.",
      icon: <Gauge size={22} />,
    },
    {
      title: "Fins and Nose Cone",
      description:
        "Properly designed fins and a nose cone help improve aerodynamic performance and flight stability.",
      icon: <Rocket size={22} />,
    },
  ];

  const steps = [
    "Understand the rocket design and the purpose of each component.",
    "Learn how water and compressed air produce thrust.",
    "Observe the launch sequence and the rocket's flight in the demonstration.",
    "Study how stability, aerodynamic drag, and water quantity can affect performance.",
  ];

  const safetyRules = [
    "Launch only in a large, open area under responsible supervision.",
    "Never point a pressurized rocket toward people, buildings, vehicles, or animals.",
    "Use a suitable launcher and follow its specified pressure limits.",
    "Keep everyone at a safe distance during pressurization and launch.",
    "Never handle a damaged bottle or pressurized launcher.",
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Back Button */}
        <Link
          to="/events?event=water-rocket"
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600 shadow-sm transition hover:border-blue-200 hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Back to Water Rocket Event
        </Link>

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-[#06152e] p-6 shadow-xl sm:p-10 lg:p-14">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-200">
              <Rocket size={15} />
              Techno Wings 2K26
            </span>

            <h1 className="mt-6 font-outfit text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Water Rocket
              <span className="block text-cyan-300">
                Information & Demo
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Explore the working principle of a water rocket, understand
              its basic components, and watch the demonstration video to
              learn how pressurized air and water generate thrust.
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
                  Water Rocket Demonstration
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Watch the video to understand the rocket and its flight.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Water Rocket Information and Demonstration"
                className="h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="p-5 text-sm leading-6 text-slate-500 sm:p-7">
            Observe the launch, the water leaving the rocket, and how the
            rocket moves in the opposite direction.
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
                Working Principle
              </h2>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              A water rocket demonstrates Newton's Third Law of Motion.
              Air is pumped into a partially water-filled rocket, increasing
              the pressure inside it. When the launcher releases the rocket,
              the pressurized air forces water out through the nozzle.
              The downward movement of the water produces an upward reaction
              force, accelerating the rocket into the air.
            </p>

            <div className="mt-5 rounded-2xl border border-cyan-100 bg-cyan-50 p-5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-cyan-800">
                Key Concept
              </p>

              <p className="mt-2 text-base font-bold leading-7 text-[#06152e]">
                Water expelled downward → Reaction force upward → Rocket
                accelerates
              </p>
            </div>
          </div>

          {/* Main Components */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                <Rocket size={23} />
              </div>

              <h2 className="font-outfit text-2xl font-black text-[#06152e]">
                Main Components
              </h2>
            </div>

            <div className="mt-6 space-y-4">
              {components.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-blue-600">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="font-bold text-[#06152e]">
                      {item.title}
                    </h3>
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
              What to Observe in the Demo
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

        {/* Safety Section */}
        <section className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
              <ShieldCheck size={23} />
            </div>

            <h2 className="font-outfit text-2xl font-black text-[#06152e]">
              Safety First
            </h2>
          </div>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Water rockets use stored pressure. Follow these precautions
            during construction, pressurization, and launch.
          </p>

          <ul className="mt-5 space-y-3">
            {safetyRules.map((rule) => (
              <li key={rule} className="flex gap-3 text-sm leading-6 text-slate-700">
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
            Ready for the Water Rocket Event?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Review the event rules and complete your registration to
            participate in Techno Wings 2K26.
          </p>

          <Link
            to="/register?event=water-rocket"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-7 py-3.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Register for Water Rocket
            <Rocket size={17} />
          </Link>
        </section>

      </div>
    </main>
  );
}