import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  CheckCircle2,
  Search,
  ShieldCheck,
  XCircle,
  Plane,
  ScanLine,
} from "lucide-react";

import technoWingsLogo from "./assets/techno-wings-logo.png";
import adateLogo from "./assets/adate-logo.png";
import collegeLogo from "./assets/college-logo.png";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwW0uZ29XSb6vksrZ2DofEmr043FStn1VB8ygRzG6e1V9araV-XHIl8rbGP6cvGt-J4/exec";

/* ============================================================
   INFO CARD
   ============================================================ */

function Info({
  label,
  value,
  highlight = false,
}) {
  return (
    <div className="bg-white p-5 transition hover:bg-blue-50/50">
      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>

      <p
        className={`mt-2 break-words font-bold ${
          highlight
            ? "text-lg text-blue-700"
            : "text-[#06152e]"
        }`}
      >
        {value || "—"}
      </p>
    </div>
  );
}

/* ============================================================
   VERIFY PAGE
   ============================================================ */

export default function Verify() {
  const [registrationId, setRegistrationId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ==========================================================
     VERIFY REGISTRATION
     ========================================================== */

  async function handleVerify(e) {
    e.preventDefault();

    const id = registrationId.trim().toUpperCase();

    if (!id) {
      setResult({
        success: false,
        message: "Please enter your Registration ID.",
      });

      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        `${GOOGLE_SCRIPT_URL}?registrationId=${encodeURIComponent(id)}`
      );

      const data = await response.json();

      if (data.registered) {
        setResult({
          success: true,
          data,
        });
      } else {
        setResult({
          success: false,
          message: "Registration ID not found.",
        });
      }
    } catch (error) {
      setResult({
        success: false,
        message:
          "Unable to verify registration. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  /* ==========================================================
     PAGE
     ========================================================== */

  return (
    <main className="site-scale min-h-screen overflow-hidden bg-[#f5f9ff] text-[#06152e]">

      {/* ======================================================
          AEROSPACE BACKGROUND
          ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Large circles */}
        <div className="absolute -left-40 top-24 h-[420px] w-[420px] rounded-full border border-blue-200/40" />

        <div className="absolute -left-24 top-40 h-[300px] w-[300px] rounded-full border border-cyan-200/40" />

        <div className="absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full border border-blue-200/30" />

        {/* Grid lines */}
        <div className="absolute left-0 top-[28%] h-px w-full bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />

        <div className="absolute left-0 top-[72%] h-px w-full bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />

        <div className="absolute left-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-100/60 to-transparent" />

        <div className="absolute right-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-100/50 to-transparent" />

        {/* Decorative dots */}
        <div className="absolute left-[12%] top-[20%] h-2 w-2 rounded-full bg-cyan-400/50" />

        <div className="absolute right-[15%] top-[30%] h-2 w-2 rounded-full bg-blue-500/40" />

        <div className="absolute left-[20%] bottom-[18%] h-1.5 w-1.5 rounded-full bg-blue-400/50" />

        {/* Soft glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />

      </div>

      {/* ======================================================
          NAVBAR
          ====================================================== */}

      <nav className="relative z-20 border-b border-blue-100/80 bg-white/90 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={technoWingsLogo}
              alt="Techno Wings 2K26"
              className="h-16 w-auto object-contain sm:h-20"
            />

            <div className="hidden border-l border-blue-200 pl-3 sm:block">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-500">
                Aerospace Technical Fest
              </p>

              <p className="mt-0.5 text-xs font-bold text-[#06152e]">
                Techno Wings 2K26
              </p>
            </div>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">

            <Link
              to="/register"
              className="hidden rounded-xl border border-blue-200 bg-white px-4 py-2.5 text-sm font-black text-[#06152e] transition hover:border-blue-400 hover:bg-blue-50 sm:inline-flex"
            >
              Register
            </Link>

            <Link
              to="/events"
              className="rounded-xl bg-[#06152e] px-4 py-2.5 text-sm font-black text-white transition hover:bg-blue-900"
            >
              Events
            </Link>

          </div>
        </div>
      </nav>

      {/* ======================================================
          MAIN CONTENT
          ====================================================== */}

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-16">

        {/* Back */}
        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-blue-600"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>
        </motion.div>

        {/* ====================================================
            HEADER
            ==================================================== */}

        <motion.header
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            delay: 0.08,
          }}
          className="mt-10 text-center"
        >

          {/* Status */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-cyan-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
            Registration Verification System
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-[#06152e] sm:text-5xl md:text-6xl">
            Verify Registration
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Enter your Techno Wings 2K26 Registration ID to
            verify your registration details and participation
            status.
          </p>

          {/* Aerospace status */}
          <div className="mx-auto mt-6 flex max-w-xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">

            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={14} className="text-cyan-500" />
              Secure Verification
            </span>

            <span className="hidden h-3 w-px bg-slate-300 sm:block" />

            <span className="inline-flex items-center gap-2">
              <ScanLine size={14} className="text-blue-500" />
              Live Database Check
            </span>

          </div>
        </motion.header>

        {/* ====================================================
            SEARCH PANEL
            ==================================================== */}

        <motion.form
          onSubmit={handleVerify}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            delay: 0.18,
          }}
          className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-[28px] border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,55,110,0.10)] sm:p-8"
        >

          {/* Top accent */}
          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400" />

          <div className="mb-6 flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
              <Search
                size={22}
                className="text-blue-600"
              />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">
                Registration Lookup
              </p>

              <h2 className="mt-1 text-xl font-black text-[#06152e]">
                Enter Registration ID
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Example: TW26-000001
              </p>
            </div>

          </div>

          <label className="mb-2 block text-sm font-bold text-[#06152e]">
            Registration ID
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">

            <input
              type="text"
              value={registrationId}
              onChange={(e) =>
                setRegistrationId(
                  e.target.value.toUpperCase()
                )
              }
              placeholder="TW26-000001"
              autoComplete="off"
              spellCheck="false"
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 font-bold tracking-wide text-[#06152e] outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            />

            <button
              type="submit"
              disabled={loading}
              className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 font-black text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/25 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Checking...
                </>
              ) : (
                <>
                  <Search size={19} />
                  Verify
                </>
              )}
            </button>

          </div>

          <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck
              size={14}
              className="text-cyan-500"
            />

            Your Registration ID is checked against the
            Techno Wings 2K26 registration database.
          </div>

        </motion.form>

        {/* ====================================================
            RESULT
            ==================================================== */}

        {result && (
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
              duration: 0.55,
            }}
            className="mt-8"
          >

            {/* ==================================================
                SUCCESS
                ================================================== */}

            {result.success ? (
              <div className="overflow-hidden rounded-[28px] border border-cyan-200 bg-white shadow-[0_20px_70px_rgba(15,120,160,0.12)]">

                {/* Success Header */}
                <div className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 px-6 py-10 text-center sm:px-8">

                  {/* Decorative */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-cyan-200/60" />

                  <div className="pointer-events-none absolute -left-16 bottom-[-80px] h-48 w-48 rounded-full border border-blue-200/60" />

                  <div className="relative">

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-cyan-200 bg-white shadow-lg shadow-cyan-500/10">

                      <CheckCircle2
                        size={48}
                        className="text-cyan-500"
                      />

                    </div>

                    <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-cyan-600">
                      Verification Successful
                    </p>

                    <h2 className="mt-2 text-3xl font-black text-[#06152e] sm:text-4xl">
                      Registration Verified
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
                      This registration is successfully recorded
                      in the Techno Wings 2K26 database.
                    </p>

                  </div>
                </div>

                {/* Information */}
                <div className="grid gap-px bg-slate-100 md:grid-cols-2">

                  <Info
                    label="Registration ID"
                    value={result.data.registrationId}
                    highlight
                  />

                  <Info
                    label="Registration Status"
                    value={result.data.registrationStatus}
                    highlight
                  />

                  <Info
                    label="Participant Name"
                    value={result.data.fullName}
                  />

                  <Info
                    label="College"
                    value={result.data.collegeName}
                  />

                  <Info
                    label="Department"
                    value={result.data.department}
                  />

                  <Info
                    label="Year"
                    value={result.data.year}
                  />

                  <Info
                    label="Event"
                    value={result.data.event}
                  />

                  <Info
                    label="Participation"
                    value={result.data.participationType}
                  />

                  {result.data.teamName && (
                    <Info
                      label="Team Name"
                      value={result.data.teamName}
                    />
                  )}

                  <Info
                    label="Registration Fee"
                    value={
                      Number(
                        result.data.registrationFee
                      ) === 0
                        ? "FREE"
                        : `₹${result.data.registrationFee}`
                    }
                  />

                  <Info
                    label="Payment Status"
                    value={result.data.paymentStatus}
                  />

                </div>

                {/* Bottom status */}
                <div className="border-t border-slate-100 bg-slate-50 px-6 py-5 sm:px-8">

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100">
                        <CheckCircle2
                          size={19}
                          className="text-cyan-600"
                        />
                      </div>

                      <div>
                        <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                          Verification Status
                        </p>

                        <p className="mt-0.5 text-sm font-black text-cyan-700">
                          Registration Successfully Verified
                        </p>
                      </div>

                    </div>

                    <Link
                      to="/events"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#06152e] px-5 py-3 text-sm font-black text-white transition hover:bg-blue-900"
                    >
                      View Events
                      <Plane size={16} />
                    </Link>

                  </div>

                </div>

              </div>
            ) : (

              /* ==================================================
                 NOT FOUND
                 ================================================== */

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="rounded-[28px] border border-red-200 bg-white p-8 text-center shadow-[0_20px_60px_rgba(160,30,30,0.08)] sm:p-10"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-red-200 bg-red-50">
                  <XCircle
                    size={48}
                    className="text-red-500"
                  />
                </div>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-red-500">
                  Verification Failed
                </p>

                <h2 className="mt-2 text-3xl font-black text-[#06152e]">
                  Registration Not Found
                </h2>

                <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">
                  {result.message}
                </p>

                <div className="mx-auto mt-6 max-w-lg rounded-2xl border border-red-100 bg-red-50/70 p-4 text-sm text-red-700">
                  Please check the Registration ID carefully
                  and make sure there are no extra spaces.
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setRegistrationId("");
                    setResult(null);
                  }}
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[#06152e] px-6 py-3.5 text-sm font-black text-white transition hover:bg-blue-900"
                >
                  <Search size={17} />
                  Try Again
                </button>

              </motion.div>
            )}

          </motion.div>
        )}

        {/* ====================================================
            HELPFUL NOTE
            ==================================================== */}

        {!result && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="mx-auto mt-8 max-w-3xl rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm"
          >

            <div className="flex items-start gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                <ShieldCheck
                  size={18}
                  className="text-blue-600"
                />
              </div>

              <div>
                <p className="text-sm font-black text-[#06152e]">
                  Keep your Registration ID safe
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Your Registration ID is provided after
                  successful registration. You can use it
                  anytime to check your registration status.
                </p>
              </div>

            </div>

          </motion.div>
        )}

        {/* ====================================================
            BOTTOM NAVIGATION
            ==================================================== */}

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/events"
            className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-6 py-3 text-sm font-black text-[#06152e] transition hover:border-blue-400 hover:bg-blue-50"
          >
            Explore Events
          </Link>

          <Link
            to="/register"
            className="inline-flex items-center justify-center rounded-xl bg-[#06152e] px-6 py-3 text-sm font-black text-white transition hover:bg-blue-900"
          >
            Register Now
          </Link>

        </div>

      </div>

      {/* ======================================================
          SOLID FOOTER
          ====================================================== */}

      <footer className="relative z-10 mt-8 bg-[#010611] px-5 py-10 text-white md:px-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">

          {/* Techno Wings */}
          <div className="flex items-center gap-4">

            <img
              src={technoWingsLogo}
              alt="Techno Wings 2K26"
              className="h-12 w-auto object-contain"
            />

            <div className="hidden h-10 w-px bg-white/10 sm:block" />

            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
                Department of Aeronautical Engineering
              </p>

              <p className="mt-1 text-xs text-white/50">
                Techno Wings 2K26
              </p>
            </div>

          </div>

          {/* College */}
          <div className="flex items-center gap-4">

            <img
              src={collegeLogo}
              alt="Annasaheb Dange College of Engineering and Technology"
              className="h-12 w-12 object-contain"
            />

            <div>
              <p className="text-sm font-bold text-white">
                Annasaheb Dange College of Engineering &amp;
                Technology
              </p>

              <p className="mt-1 text-xs text-white/50">
                Ashta, Sangli, Maharashtra
              </p>
            </div>

          </div>

          {/* ADATE */}
          <img
            src={adateLogo}
            alt="ADATE Club"
            className="h-12 w-auto object-contain"
          />

        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-center text-xs text-white/40">
          Techno Wings 2K26 • Innovate • Elevate • Inspire
        </div>

      </footer>

    </main>
  );
}