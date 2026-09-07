import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Search,
  XCircle,
} from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwW0uZ29XSb6vksrZ2DofEmr043FStn1VB8ygRzG6e1V9araV-XHIl8rbGP6cvGt-J4/exec";

export default function Verify() {
  const [registrationId, setRegistrationId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

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

  return (
    <main className="min-h-screen bg-[#020817] px-5 py-12 text-white md:px-8">
      <div className="mx-auto max-w-3xl">

        {/* Back */}
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-cyan-300"
        >
          <ArrowLeft size={17} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Techno Wings 2K26
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Verify Registration
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Enter your Registration ID to check whether your
            registration has been successfully recorded.
          </p>
        </div>

        {/* Search Form */}
        <form
          onSubmit={handleVerify}
          className="mt-12 rounded-3xl border border-blue-300/10 bg-[#03112a] p-6 md:p-8"
        >
          <label className="mb-3 block text-sm font-semibold text-blue-100">
            Registration ID
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              value={registrationId}
              onChange={(e) =>
                setRegistrationId(e.target.value)
              }
              placeholder="e.g. TW26-000001"
              className="flex-1 rounded-xl border border-blue-300/15 bg-[#07172f] px-5 py-4 text-white uppercase outline-none placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
            />

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-4 font-black text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Search size={19} />

              {loading ? "Checking..." : "Verify"}
            </button>
          </div>
        </form>

        {/* Result */}
        {result && (
          <div className="mt-8">

            {/* Successful */}
            {result.success ? (
              <div className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#03112a]">

                <div className="border-b border-blue-300/10 p-6 text-center md:p-8">
                  <CheckCircle2
                    size={58}
                    className="mx-auto text-cyan-400"
                  />

                  <h2 className="mt-4 text-2xl font-black text-cyan-300">
                    Registration Verified
                  </h2>

                  <p className="mt-2 text-sm text-slate-400">
                    This registration is successfully recorded.
                  </p>
                </div>

                <div className="grid gap-px bg-blue-300/10 md:grid-cols-2">

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
                      Number(result.data.registrationFee) === 0
                        ? "FREE"
                        : `₹${result.data.registrationFee}`
                    }
                  />

                  <Info
                    label="Payment Status"
                    value={result.data.paymentStatus}
                  />
                </div>
              </div>
            ) : (
              /* Not Found */
              <div className="rounded-3xl border border-red-400/20 bg-red-400/5 p-8 text-center">
                <XCircle
                  size={55}
                  className="mx-auto text-red-400"
                />

                <h2 className="mt-4 text-2xl font-black text-red-300">
                  Registration Not Found
                </h2>

                <p className="mt-2 text-slate-400">
                  {result.message}
                </p>

                <p className="mt-5 text-sm text-slate-500">
                  Please check your Registration ID and try again.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Footer note */}
        <p className="mt-10 text-center text-xs text-slate-600">
          Techno Wings 2K26 • Department of Aeronautical Engineering
        </p>
      </div>
    </main>
  );
}

function Info({ label, value, highlight = false }) {
  return (
    <div className="bg-[#07172f] p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <p
        className={`mt-2 font-bold ${
          highlight
            ? "text-lg text-cyan-300"
            : "text-white"
        }`}
      >
        {value || "—"}
      </p>
    </div>
  );
}