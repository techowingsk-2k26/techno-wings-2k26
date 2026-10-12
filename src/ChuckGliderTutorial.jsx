import React from "react";
import { ArrowLeft, Play, Rocket, Wind, Ruler, CheckCircle2, Lightbulb } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export default function ChuckGliderTutorial() {
  const navigate = useNavigate();

  const learningPoints = [
    {
      title: "Aerodynamic Design",
      description:
        "Understand how wing shape, wing area, and the centre of gravity influence the glider's flight.",
      icon: <Wind size={22} />,
    },
    {
      title: "Materials and Construction",
      description:
        "Observe the materials, cutting methods, assembly, and finishing techniques used to make the glider.",
      icon: <Ruler size={22} />,
    },
    {
      title: "Flight Stability",
      description:
        "Learn how the wing alignment, tail arrangement, and balance affect stable flight.",
      icon: <Rocket size={22} />,
    },
    {
      title: "Launch Technique",
      description:
        "Observe the launching method and how a smooth, controlled throw influences the flight.",
      icon: <Play size={22} />,
    },
  ];

  const preparationSteps = [
    "Watch the complete tutorial before starting construction.",
    "Identify the major parts of the glider, including the wing, fuselage, and tail.",
    "Pay attention to alignment, symmetry, and the balance of the model.",
    "Test the glider in a safe, open area and observe its flight stability.",
  ];

  const safetyRules = [
    "Conduct flight tests in an open area away from roads, buildings, and crowds.",
    "Never throw the glider toward people or animals.",
    "Use cutting tools carefully and under appropriate supervision.",
    "Follow the official Techno Wings 2K26 event rules and instructions.",
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-100"
        >
          <ArrowLeft size={17} />
          Back to Chuck Glider
        </button>

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-[#06152e] p-6 shadow-xl sm:p-10 lg:p-14">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-200">
              <Rocket size={15} />
              Techno Wings 2K26
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Chuck Glider
              <span className="block text-cyan-300">
                Information & Tutorial
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Explore the basics of chuck glider construction, aerodynamic
              design, and flight stability. Watch the tutorial and prepare
              for the Chuck Glider event at Techno Wings 2K26.
            </p>

            <a
              href="https://www.youtube.com/watch?v=j3IsYkxcng8"
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
                <h2 className="text-xl font-black text-[#06152e] sm:text-2xl">
                  Chuck Glider Making Tutorial
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Watch the reference video before participating in the event.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black">
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/j3IsYkxcng8"
                title="Chuck Glider Making Tutorial"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="p-5 text-sm leading-6 text-slate-500 sm:p-7">
            Use this video as a reference for understanding the construction
            process. Follow the official event rules for the permitted
            materials, dimensions, and competition requirements.
          </div>
        </section>

        {/* Learning Sections */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* What to Learn */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <Lightbulb size={23} />
              </div>

              <h2 className="text-2xl font-black text-[#06152e]">
                What You Will Learn
              </h2>
            </div>

            <div className="mt-6 space-y-5">
              {learningPoints.map((item) => (
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

          {/* Preparation */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <CheckCircle2 size={23} />
              </div>

              <h2 className="text-2xl font-black text-[#06152e]">
                Preparation Checklist
              </h2>
            </div>

            <div className="mt-6 space-y-4">
              {preparationSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl bg-slate-50 p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
                    {index + 1}
                  </span>

                  <p className="text-sm leading-7 text-slate-600">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
              <CheckCircle2 size={23} />
            </div>

            <h2 className="text-2xl font-black text-[#06152e]">
              Safety First
            </h2>
          </div>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Build and test your glider responsibly. Follow the event
            instructions and use tools safely during construction.
          </p>

          <ul className="mt-5 space-y-3">
            {safetyRules.map((rule) => (
              <li
                key={rule}
                className="flex gap-3 text-sm leading-6 text-slate-700"
              >
                <CheckCircle2
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
          <h2 className="text-2xl font-black text-white sm:text-3xl">
            Ready for the Chuck Glider Event?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Review the event requirements and complete your registration
            to participate in Techno Wings 2K26.
          </p>

          <Link
            to="/register?event=chuck-glider"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-7 py-3.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Register for Chuck Glider
            <Rocket size={17} />
          </Link>
        </section>

      </div>
    </main>
  );
}