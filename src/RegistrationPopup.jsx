import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "technowings_registration_popup_closed";
const POPUP_DELAY = 6000; // Wait 6 seconds for the intro animation

export default function RegistrationPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Do not show the popup again if the user has already dismissed it.
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      return;
    }

    const timer = setTimeout(() => {
      // Check again before opening, in case another instance saved dismissal.
      if (localStorage.getItem(STORAGE_KEY) !== "true") {
        setIsOpen(true);
      }
    }, POPUP_DELAY);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    // Save dismissal permanently for this browser.
    localStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm"
      onClick={closePopup}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="registration-popup-title"
        className="relative w-full max-w-md rounded-2xl border border-cyan-400/40 bg-slate-950 p-7 text-center text-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close popup"
          className="absolute right-4 top-3 text-3xl text-slate-400 transition hover:text-white"
        >
          &times;
        </button>

        {/* Rocket icon */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-3xl">
          🚀
        </div>

        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
          Techno Wings 2K26
        </p>

        <h2
          id="registration-popup-title"
          className="mb-4 text-3xl font-extrabold leading-tight"
        >
          Registrations
          <br />
          <span className="text-cyan-400">Closing Soon!</span>
        </h2>

        <p className="mb-7 text-sm leading-6 text-slate-300">
          Don't miss your chance to participate in Techno Wings 2K26.
          Complete your registration before registrations close!
        </p>

        {/* Registration button */}
        <Link
          to="/register"
          onClick={closePopup}
          className="block w-full rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 transition duration-300 hover:bg-cyan-300"
        >
          Register Now →
        </Link>

        {/* Dismiss button */}
        <button
          type="button"
          onClick={closePopup}
          className="mt-4 text-sm text-slate-400 transition hover:text-white"
        >
          Maybe Later
        </button>
      </div>
    </div>
  );
}