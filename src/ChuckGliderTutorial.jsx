import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ChuckGliderTutorial() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-5xl">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-100"
        >
          <ArrowLeft size={17} />
          Back to Chuck Glider
        </button>

        {/* Main Card */}
        <div className="rounded-2xl bg-white p-5 shadow-xl">

          {/* Heading */}
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Chuck Glider
            </p>

            <h1 className="mt-1 text-2xl font-black text-slate-900">
              Chuck Glider Making Tutorial
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Watch this reference video before participating in the event.
            </p>
          </div>

          {/* YouTube Video */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/j3IsYkxcng8"
              title="Chuck Glider Making Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

        </div>
      </div>
    </div>
  );
}