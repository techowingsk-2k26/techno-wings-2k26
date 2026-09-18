import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clipboard,
  CreditCard,
  Lock,
  Send,
  ShieldCheck,
  User,
  Users,
  XCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwW0uZ29XSb6vksrZ2DofEmr043FStn1VB8ygRzG6e1V9araV-XHIl8rbGP6cvGt-J4/exec";

/* ============================================================
   EVENT CONFIGURATION
   ============================================================ */

const events = {
  "chuck-glider": {
    name: "Chuck Glider",
    teamAllowed: true,
    maxTeamSize: 2,
    participationType: "Team",
    fee: 200,
  },

  "Flight-simulator": {
    name: "Flight Simulator",
    teamAllowed: false,
    maxTeamSize: 1,
    participationType: "Individual",
    fee: 100,
  },

  "cad-master": {
    name: "CAD Master",
    teamAllowed: false,
    maxTeamSize: 1,
    participationType: "Individual",
    fee: 100,
  },

  "water-rocket": {
    name: "Water Rocket",
    teamAllowed: true,
    maxTeamSize: 2,
    participationType: "Team",
    fee: 200,
  },

  "paper-presentation": {
    name: "Paper Presentation",
    teamAllowed: true,
    maxTeamSize: 2,
    participationType: "Team",
    fee: 200,
  },

  "reasoning-rumble": {
    name: "Reasoning Rumble",
    teamAllowed: true,
    maxTeamSize: 2,
    participationType: "Team",
    fee: 200,
  },

};

/* ============================================================
   EMPTY MEMBER
   ============================================================ */

const emptyMember = {
  fullName: "",
  email: "",
  mobile: "",
  collegeName: "",
  department: "",
  year: "",
  rollNumber: "",
};

/* ============================================================
   DECORATIVE BACKGROUND
   ============================================================ */

function AerospaceBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#f5f9ff]" />

      <div className="absolute left-[-180px] top-[10%] h-[420px] w-[420px] rounded-full border border-blue-500/10" />
      <div className="absolute left-[-130px] top-[15%] h-[320px] w-[320px] rounded-full border border-cyan-400/10" />

      <div className="absolute right-[-180px] top-[45%] h-[500px] w-[500px] rounded-full border border-blue-500/10" />
      <div className="absolute right-[-120px] top-[51%] h-[380px] w-[380px] rounded-full border border-cyan-400/10" />

      <div className="absolute left-0 top-[28%] h-px w-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
      <div className="absolute left-0 top-[70%] h-px w-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />

      <div className="absolute left-[8%] top-[20%] h-2 w-2 rounded-full bg-cyan-400/30" />
      <div className="absolute right-[12%] top-[30%] h-1.5 w-1.5 rounded-full bg-blue-500/30" />
      <div className="absolute left-[18%] bottom-[18%] h-1.5 w-1.5 rounded-full bg-blue-500/20" />
    </div>
  );
}

/* ============================================================
   INPUT FIELD
   ============================================================ */

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = true,
  placeholder,
  inputMode,
  maxLength,
  autoComplete,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[#17345f]">
        {label}
        {required && <span className="ml-1 text-blue-600">*</span>}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        inputMode={inputMode}
        maxLength={maxLength}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-[#c9d8ec] bg-white px-4 py-3.5 text-[#06152e] outline-none shadow-sm transition duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
      />
    </div>
  );
}

/* ============================================================
   MEMBER FIELDS
   ============================================================ */

function MemberFields({ number, member, onChange }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      className="mt-6 rounded-2xl border border-blue-100 bg-[#f8fbff] p-5 md:p-6"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10">
          <User size={19} className="text-blue-600" />
        </div>

        <div>
          <h4 className="font-black text-[#06152e]">
            Team Member {String(number).padStart(2, "0")}
          </h4>

          <p className="text-xs text-slate-500">
            Enter the details of your team member.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <InputField
          label="Full Name"
          name="fullName"
          value={member.fullName}
          onChange={onChange}
          placeholder="Enter full name"
        />

        <InputField
          label="Email Address"
          name="email"
          type="email"
          value={member.email}
          onChange={onChange}
          placeholder="Enter email"
        />

        <InputField
          label="Mobile Number"
          name="mobile"
          type="tel"
          value={member.mobile}
          onChange={onChange}
          placeholder="10-digit mobile number"
          inputMode="numeric"
          maxLength={10}
        />

        <InputField
          label="College Name"
          name="collegeName"
          value={member.collegeName}
          onChange={onChange}
          placeholder="Enter college name"
        />

        <InputField
          label="Department / Branch"
          name="department"
          value={member.department}
          onChange={onChange}
          placeholder="e.g. Aeronautical Engineering"
        />

        <InputField
          label="Year of Study"
          name="year"
          value={member.year}
          onChange={onChange}
          placeholder="e.g. 2nd Year"
        />

        <InputField
          label="Roll Number / PRN"
          name="rollNumber"
          value={member.rollNumber}
          onChange={onChange}
          placeholder="Enter Roll No. / PRN"
        />
      </div>
    </motion.div>
  );
}

/* ============================================================
   SECTION HEADER
   ============================================================ */

function SectionHeader({ number, title, description }) {
  return (
    <div className="mb-7">
      <div className="flex items-center gap-3">
        <span className="rounded-lg bg-blue-600/10 px-2.5 py-1 text-xs font-black tracking-widest text-blue-600">
          {number}
        </span>

        <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent" />
      </div>

      <h2 className="font-outfit mt-4 text-2xl font-black text-[#06152e] md:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-sm leading-6 text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}

/* ============================================================
   FORM CARD
   ============================================================ */

function FormCard({ children, className = "" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.45 }}
      className={`rounded-3xl border border-[#dbe6f4] bg-white p-6 shadow-[0_15px_45px_rgba(20,60,120,0.07)] md:p-8 ${className}`}
    >
      {children}
    </motion.section>
  );
}

/* ============================================================
   REGISTER COMPONENT
   ============================================================ */

export default function Register() {
  const [searchParams] = useSearchParams();

  const eventSlug = searchParams.get("event");
  const selectedEvent = eventSlug ? events[eventSlug] : null;

  /* ==========================================================
     FORM
     ========================================================== */

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    gender: "",
    collegeName: "",
    department: "",
    year: "",
    rollNumber: "",
    city: "",

    participationType:
      selectedEvent?.participationType || "Individual",

    teamName: "",

    member2: {
      ...emptyMember,
    },

    declarationAccepted: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  /* ==========================================================
     AUTOMATIC PARTICIPATION TYPE
     ========================================================== */

  useEffect(() => {
    if (!selectedEvent) return;

    setForm((prev) => ({
      ...prev,

      participationType: selectedEvent.teamAllowed
        ? "Team"
        : "Individual",

      teamName: selectedEvent.teamAllowed
        ? prev.teamName
        : "",

      member2: selectedEvent.teamAllowed
        ? prev.member2
        : { ...emptyMember },
    }));
  }, [eventSlug]);

  /* ==========================================================
     FEE
     ========================================================== */

  const fee = useMemo(() => {
    if (!selectedEvent) return 0;

    return selectedEvent.fee || 0;
  }, [selectedEvent]);

  /* ==========================================================
     EVENT NOT FOUND
     ========================================================== */

  if (!selectedEvent) {
    return (
      <main className="site-scale min-h-screen overflow-hidden bg-[#f5f9ff] px-5 py-10 text-[#06152e] md:px-8 md:py-16">
        <AerospaceBackground />

        <div className="relative z-10 mx-auto max-w-6xl">
          <Link
            to="/events"
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-blue-600"
          >
            <ArrowLeft size={17} />
            Back to Events
          </Link>

          <div className="mb-12 text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-blue-600">
              <Sparkles size={14} />
              Techno Wings 2K26
            </div>

            <h1 className="font-outfit mt-5 text-4xl font-black tracking-tight md:text-6xl">
              Select Your Event
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Choose the event you want to participate in to continue with
              registration.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(events).map(([slug, event], index) => {
              const isFree = event.free === true;

              return (
                <motion.button
                  key={slug}
                  type="button"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  whileHover={{ y: -6 }}
                  onClick={() => {
                    window.location.href = `/register?event=${slug}`;
                  }}
                  className="group rounded-3xl border border-[#dbe6f4] bg-white p-6 text-left shadow-[0_12px_35px_rgba(20,60,120,0.06)] transition hover:border-blue-300 hover:shadow-[0_20px_45px_rgba(20,80,180,0.12)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-blue-600">
                        Technical Event
                      </p>

                      <h2 className="font-outfit mt-3 text-xl font-black text-[#06152e]">
                        {event.name}
                      </h2>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-black ${
                        isFree
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {isFree ? "FREE" : `₹${event.fee}`}
                    </span>
                  </div>

                  <div className="mt-6 space-y-2 text-sm text-slate-500">
                    <p>
                      <span className="font-bold text-[#17345f]">
                        Participation:
                      </span>{" "}
                      {event.teamAllowed
                        ? "Team Only"
                        : "Individual Only"}
                    </p>

                    <p>
                      <span className="font-bold text-[#17345f]">
                        {event.teamAllowed
                          ? "Team Size:"
                          : "Participation:"}
                      </span>{" "}
                      {event.teamAllowed
                        ? "Exactly 2 Members"
                        : "Individual"}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center gap-2 text-sm font-black text-blue-600">
                    Select Event
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </main>
    );
  }

  /* ==========================================================
     MAIN FIELD UPDATE
     ========================================================== */

  function updateMainField(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  /* ==========================================================
     MOBILE UPDATE
     ========================================================== */

  function updateMobileField(e) {
    const value = e.target.value
      .replace(/\D/g, "")
      .slice(0, 10);

    setForm((prev) => ({
      ...prev,
      mobile: value,
    }));
  }

  /* ==========================================================
     MEMBER UPDATE
     ========================================================== */

  function updateMember(memberName, field, value) {
    let cleanValue = value;

    if (field === "mobile") {
      cleanValue = value
        .replace(/\D/g, "")
        .slice(0, 10);
    }

    setForm((prev) => ({
      ...prev,

      [memberName]: {
        ...prev[memberName],
        [field]: cleanValue,
      },
    }));
  }

  /* ==========================================================
     FORM SUBMIT
     ========================================================== */

  async function handleSubmit(e) {
    e.preventDefault();

    /* --------------------------------------------------------
       DECLARATION
       -------------------------------------------------------- */

    if (!form.declarationAccepted) {
      setResult({
        success: false,
        message:
          "Please accept the declaration before submitting.",
      });

      return;
    }

    /* --------------------------------------------------------
       MAIN PARTICIPANT MOBILE
       -------------------------------------------------------- */

    if (!/^[6-9][0-9]{9}$/.test(form.mobile)) {
      setResult({
        success: false,
        message:
          "Please enter a valid 10-digit mobile number.",
      });

      return;
    }

    /* --------------------------------------------------------
       TEAM VALIDATION
       -------------------------------------------------------- */

    if (selectedEvent.teamAllowed) {
      if (!form.teamName.trim()) {
        setResult({
          success: false,
          message: "Please enter your team name.",
        });

        return;
      }

      if (!form.member2.fullName.trim()) {
        setResult({
          success: false,
          message: "Please enter Member 2 full name.",
        });

        return;
      }

      if (!form.member2.email.trim()) {
        setResult({
          success: false,
          message:
            "Please enter Member 2 email address.",
        });

        return;
      }

      if (
        !/^[6-9][0-9]{9}$/.test(
          form.member2.mobile
        )
      ) {
        setResult({
          success: false,
          message:
            "Please enter a valid mobile number for Member 2.",
        });

        return;
      }

      if (!form.member2.collegeName.trim()) {
        setResult({
          success: false,
          message:
            "Please enter Member 2 college name.",
        });

        return;
      }

      if (!form.member2.department.trim()) {
        setResult({
          success: false,
          message:
            "Please enter Member 2 department.",
        });

        return;
      }

      if (!form.member2.year.trim()) {
        setResult({
          success: false,
          message:
            "Please enter Member 2 year of study.",
        });

        return;
      }

      if (!form.member2.rollNumber.trim()) {
        setResult({
          success: false,
          message:
            "Please enter Member 2 roll number / PRN.",
        });

        return;
      }
    }

    /* --------------------------------------------------------
       START SUBMISSION
       -------------------------------------------------------- */

    setSubmitting(true);
    setResult(null);

    /* --------------------------------------------------------
       TEAM SIZE
       -------------------------------------------------------- */

    const teamSize = selectedEvent.teamAllowed
      ? 2
      : 1;

    /* --------------------------------------------------------
       PAYLOAD
       -------------------------------------------------------- */

    const payload = {
      fullName: form.fullName,
      email: form.email,
      mobile: form.mobile,
      gender: form.gender,
      collegeName: form.collegeName,
      department: form.department,
      year: form.year,
      rollNumber: form.rollNumber,
      city: form.city,

      event: selectedEvent.name,

      participationType: selectedEvent.teamAllowed
        ? "Team"
        : "Individual",

      teamName: selectedEvent.teamAllowed
        ? form.teamName
        : "",

      teamSize,

      member2Name: selectedEvent.teamAllowed
        ? form.member2.fullName
        : "",

      member2Email: selectedEvent.teamAllowed
        ? form.member2.email
        : "",

      member2Mobile: selectedEvent.teamAllowed
        ? form.member2.mobile
        : "",

      member2College: selectedEvent.teamAllowed
        ? form.member2.collegeName
        : "",

      member2Department: selectedEvent.teamAllowed
        ? form.member2.department
        : "",

      member2Year: selectedEvent.teamAllowed
        ? form.member2.year
        : "",

      member2RollNumber: selectedEvent.teamAllowed
        ? form.member2.rollNumber
        : "",

      registrationFee: fee,

      declarationAccepted:
        form.declarationAccepted
          ? "Yes"
          : "No",
    };

    /* ========================================================
       API REQUEST
       ======================================================== */

    try {
      /* ------------------------------------------------------
         STEP 1: CREATE REGISTRATION / RAZORPAY ORDER
         ------------------------------------------------------ */

      const response = await fetch(
        GOOGLE_SCRIPT_URL,
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!data.success) {
        throw new Error(
          data.message ||
            "Registration failed."
        );
      }

      /* ------------------------------------------------------
         FREE EVENT
         ------------------------------------------------------ */

      if (!data.paymentRequired) {
        setResult({
          success: true,
          registrationId:
            data.registrationId,
          paymentStatus:
            data.paymentStatus,
          registrationStatus:
            data.registrationStatus,
        });

        setSubmitting(false);
        return;
      }

      /* ------------------------------------------------------
         PAID EVENT
         ------------------------------------------------------ */

      if (!window.Razorpay) {
        throw new Error(
          "Razorpay Checkout failed to load. Please refresh the page and try again."
        );
      }

      const options = {
        key: data.razorpay.keyId,

        amount: data.razorpay.amount,

        currency: data.razorpay.currency,

        name: "Techno Wings 2K26",

        description:
          `${selectedEvent.name} Registration`,

        order_id:
          data.razorpay.orderId,

        prefill: {
          name: form.fullName,
          email: form.email,
          contact: form.mobile,
        },

        notes: {
          registration_id:
            data.registrationId,

          event: selectedEvent.name,

          participationType:
            selectedEvent.teamAllowed
              ? "Team"
              : "Individual",

          teamSize: String(teamSize),
        },

        theme: {
          color: "#2563eb",
        },

        /* ----------------------------------------------------
           PAYMENT SUCCESS
           ---------------------------------------------------- */

        handler: async function (
          paymentResponse
        ) {
          try {
            setSubmitting(true);

            const verifyResponse =
              await fetch(
                GOOGLE_SCRIPT_URL,
                {
                  method: "POST",

                  body: JSON.stringify({
                    action:
                      "verifyPayment",

                    razorpay_order_id:
                      paymentResponse.razorpay_order_id,

                    razorpay_payment_id:
                      paymentResponse.razorpay_payment_id,

                    razorpay_signature:
                      paymentResponse.razorpay_signature,
                  }),
                }
              );

            const verifyData =
              await verifyResponse.json();

            if (!verifyData.success) {
              throw new Error(
                verifyData.message ||
                  "Payment verification failed."
              );
            }

            setResult({
              success: true,

              registrationId:
                verifyData.registrationId ||
                data.registrationId,

              paymentStatus: "Paid",

              registrationStatus:
                "Confirmed",
            });
          } catch (error) {
            setResult({
              success: false,

              message:
                error.message ||
                "Payment verification failed.",
            });
          } finally {
            setSubmitting(false);
          }
        },

        /* ----------------------------------------------------
           PAYMENT MODAL DISMISS
           ---------------------------------------------------- */

        modal: {
          ondismiss: function () {
            setSubmitting(false);

            setResult({
              success: false,

              message:
                "Payment was cancelled. Your registration is still pending payment.",
            });
          },
        },
      };

      const razorpay =
        new window.Razorpay(options);

      /* ------------------------------------------------------
         PAYMENT FAILED
         ------------------------------------------------------ */

      razorpay.on(
        "payment.failed",
        function () {
          setSubmitting(false);

          setResult({
            success: false,

            message:
              "Payment failed. Please try again.",
          });
        }
      );

      razorpay.open();
    } catch (error) {
      setResult({
        success: false,

        message:
          error.message ||
          "Something went wrong.",
      });

      setSubmitting(false);
    }
  }

  /* ==========================================================
     COPY REGISTRATION ID
     ========================================================== */

  async function copyRegistrationId() {
    if (!result?.registrationId) return;

    try {
      await navigator.clipboard.writeText(
        result.registrationId
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  }

  /* ==========================================================
     SUCCESS SCREEN
     ========================================================== */

  if (result?.success) {
    return (
      <main className="site-scale min-h-screen overflow-hidden bg-[#f5f9ff] px-5 py-12 text-[#06152e] md:px-8 md:py-20">
        <AerospaceBackground />

        <div className="relative z-10 mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 shadow-lg shadow-emerald-900/5">
              <CheckCircle2
                size={52}
                className="text-emerald-500"
              />
            </div>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-emerald-600">
              <ShieldCheck size={15} />
              Registration Confirmed
            </div>

            <h1 className="font-outfit mt-5 text-4xl font-black tracking-tight md:text-6xl">
              You're Officially Registered!
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-slate-500">
              Your registration for{" "}
              <span className="font-black text-[#06152e]">
                {selectedEvent.name}
              </span>{" "}
              has been successfully confirmed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-10 overflow-hidden rounded-3xl border border-[#dbe6f4] bg-white shadow-[0_20px_60px_rgba(20,60,120,0.1)]"
          >
            <div className="border-b border-blue-100 bg-gradient-to-r from-blue-50 via-white to-cyan-50 p-7 text-center md:p-9">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">
                Your Registration ID
              </p>

              <p className="mt-4 break-all text-3xl font-black tracking-wider text-blue-600 md:text-4xl">
                {result.registrationId}
              </p>

              <button
                type="button"
                onClick={copyRegistrationId}
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-black text-blue-600 transition hover:bg-blue-100"
              >
                {copied ? (
                  <>
                    <Check size={17} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Clipboard size={17} />
                    Copy Registration ID
                  </>
                )}
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-blue-100 bg-[#f8fbff] p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Event
                  </p>

                  <p className="mt-2 font-black text-[#06152e]">
                    {selectedEvent.name}
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-[#f8fbff] p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Participation
                  </p>

                  <p className="mt-2 font-black text-[#06152e]">
                    {selectedEvent.teamAllowed
                      ? "Team"
                      : "Individual"}
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-[#f8fbff] p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Team Size
                  </p>

                  <p className="mt-2 font-black text-[#06152e]">
                    {selectedEvent.teamAllowed
                      ? "2 Members"
                      : "1 Participant"}
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-[#f8fbff] p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Payment
                  </p>

                  <p className="mt-2 flex items-center gap-2 font-black text-emerald-600">
                    <Check size={17} />
                    {result.paymentStatus}
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 md:col-span-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-600/70">
                    Registration Status
                  </p>

                  <p className="mt-2 flex items-center gap-2 font-black text-emerald-600">
                    <CheckCircle2 size={18} />
                    {result.registrationStatus}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-7 rounded-2xl border border-blue-100 bg-white p-5 text-center shadow-sm">
            <p className="text-sm leading-6 text-slate-500">
              Please save your Registration ID. You will need it
              to verify your registration later.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/verify"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-black text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Verify Registration
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#cbd9eb] bg-white px-6 py-3.5 font-black text-[#17345f] transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  /* ==========================================================
     REGISTRATION FORM
     ========================================================== */

  return (
    <main className="site-scale min-h-screen overflow-hidden bg-[#f5f9ff] px-5 py-8 text-[#06152e] md:px-8 md:py-12">
      <AerospaceBackground />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* ==================================================
            BACK
            ================================================== */}

        <Link
          to="/events"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Back to Events
        </Link>

        {/* ==================================================
            HEADER
            ================================================== */}

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-blue-600">
            <Sparkles size={14} />
            Techno Wings 2K26
          </div>

          <h1 className="font-outfit mt-5 text-4xl font-black tracking-tight md:text-6xl">
            Register for{" "}
            <span className="text-blue-600">
              Techno Wings 2K26
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
            Secure your spot and take part in an exciting
            aerospace and technical challenge.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500">
            <span className="rounded-full border border-blue-100 bg-white px-3 py-1.5">
              15th & 16th October 2026
            </span>

            <span className="rounded-full border border-blue-100 bg-white px-3 py-1.5">
              Aeronautical Engineering
            </span>

            <span className="rounded-full border border-blue-100 bg-white px-3 py-1.5">
              ADCET, Ashta
            </span>
          </div>
        </motion.header>

        {/* ==================================================
            PROGRESS
            ================================================== */}

        <div className="mb-8 overflow-x-auto rounded-2xl border border-[#dbe6f4] bg-white p-4 shadow-sm">
          <div className="flex min-w-[620px] items-center justify-between">
            {[
              ["01", "Participant"],
              ["02", "Participation"],
              ["03", "Payment"],
              ["04", "Declaration"],
            ].map(([number, title], index) => (
              <div
                key={number}
                className="flex flex-1 items-center"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-xs font-black text-blue-600">
                    {number}
                  </div>

                  <span className="text-sm font-bold text-[#17345f]">
                    {title}
                  </span>
                </div>

                {index < 3 && (
                  <div className="mx-4 h-px flex-1 bg-blue-100" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ==================================================
            SELECTED EVENT
            ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-[#06152e] via-[#0b2550] to-[#0b4c72] p-6 text-white shadow-[0_20px_55px_rgba(10,50,110,0.18)] md:p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-300">
                <Sparkles size={13} />
                Selected Event
              </div>

              <h2 className="font-outfit mt-4 text-3xl font-black md:text-4xl">
                {selectedEvent.name}
              </h2>

              <p className="mt-2 text-sm text-blue-100/70">
                {selectedEvent.teamAllowed
                  ? "Team participation • Exactly 2 members"
                  : "Individual participation only"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 px-7 py-5 text-center backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-100/60">
                Entry Fee
              </p>

              <p className="mt-1 text-3xl font-black text-cyan-300">
                {selectedEvent.free
                  ? "FREE"
                  : `₹${fee}`}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ==================================================
            FORM
            ================================================== */}

        <form
          onSubmit={handleSubmit}
          className="space-y-7"
        >
          {/* ==================================================
              PARTICIPANT / MEMBER 1
              ================================================== */}

          <FormCard>
            <SectionHeader
              number="01"
              title={
                selectedEvent.teamAllowed
                  ? "Team Member 01"
                  : "Participant Details"
              }
              description={
                selectedEvent.teamAllowed
                  ? "Enter the details of the first team member."
                  : "Enter your personal and academic information."
              }
            />

            <div className="grid gap-5 md:grid-cols-2">
              <InputField
                label="Full Name"
                name="fullName"
                value={form.fullName}
                onChange={updateMainField}
                placeholder="Enter your full name"
                autoComplete="name"
              />

              <InputField
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={updateMainField}
                placeholder="example@email.com"
                autoComplete="email"
              />

              {/* Mobile */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#17345f]">
                  Mobile Number
                  <span className="ml-1 text-blue-600">
                    *
                  </span>
                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={updateMobileField}
                  required
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[6-9][0-9]{9}"
                  placeholder="10-digit mobile number"
                  className="w-full rounded-xl border border-[#c9d8ec] bg-white px-4 py-3.5 text-[#06152e] outline-none shadow-sm transition duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#17345f]">
                  Gender
                  <span className="ml-1 text-blue-600">
                    *
                  </span>
                </label>

                <select
                  name="gender"
                  value={form.gender}
                  onChange={updateMainField}
                  required
                  className="w-full rounded-xl border border-[#c9d8ec] bg-white px-4 py-3.5 text-[#06152e] outline-none shadow-sm transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value="">
                    Select Gender
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              <InputField
                label="College Name"
                name="collegeName"
                value={form.collegeName}
                onChange={updateMainField}
                placeholder="Enter college name"
              />

              <InputField
                label="Department / Branch"
                name="department"
                value={form.department}
                onChange={updateMainField}
                placeholder="e.g. Aeronautical Engineering"
              />

              <InputField
                label="Year of Study"
                name="year"
                value={form.year}
                onChange={updateMainField}
                placeholder="e.g. 2nd Year"
              />

              <InputField
                label="Roll Number / PRN"
                name="rollNumber"
                value={form.rollNumber}
                onChange={updateMainField}
                placeholder="Enter Roll No. / PRN"
              />

              <InputField
                label="City"
                name="city"
                value={form.city}
                onChange={updateMainField}
                placeholder="Enter city"
              />
            </div>
          </FormCard>

          {/* ==================================================
              PARTICIPATION
              ================================================== */}

          <FormCard>
            <SectionHeader
              number="02"
              title="Participation"
              description={
                selectedEvent.teamAllowed
                  ? "This event requires a team of exactly 2 members."
                  : "This event is for individual participants only."
              }
            />

            {/* AUTOMATIC PARTICIPATION */}
            <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/10">
                  {selectedEvent.teamAllowed ? (
                    <Users
                      size={23}
                      className="text-blue-600"
                    />
                  ) : (
                    <User
                      size={23}
                      className="text-blue-600"
                    />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-black text-[#06152e]">
                        {selectedEvent.teamAllowed
                          ? "Team Participation"
                          : "Individual Participation"}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {selectedEvent.teamAllowed
                          ? "This event requires exactly 2 members."
                          : "You are registering individually for this event."}
                      </p>
                    </div>

                    <span className="inline-flex w-fit rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-black uppercase tracking-wider text-blue-600">
                      {selectedEvent.teamAllowed
                        ? "TEAM"
                        : "INDIVIDUAL"}
                    </span>
                  </div>

                  <p className="mt-4 font-black text-blue-600">
                    {selectedEvent.free
                      ? "FREE ENTRY"
                      : `₹${fee}`}
                  </p>
                </div>
              </div>
            </div>

            {/* TEAM FIELDS */}
            {selectedEvent.teamAllowed && (
              <div className="mt-7">
                <InputField
                  label="Team Name"
                  name="teamName"
                  value={form.teamName}
                  onChange={updateMainField}
                  placeholder="Enter your team name"
                  required
                />

                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <Users size={14} />
                  Exactly 2 members required
                </div>

                <MemberFields
                  number={2}
                  member={form.member2}
                  onChange={(e) =>
                    updateMember(
                      "member2",
                      e.target.name,
                      e.target.value
                    )
                  }
                />
              </div>
            )}
          </FormCard>

          {/* ==================================================
              PAYMENT
              ================================================== */}

          <FormCard>
            <SectionHeader
              number="03"
              title="Payment"
              description={
                selectedEvent.free
                  ? "No payment is required for this event."
                  : "Review your registration fee before continuing."
              }
            />

            <div className="overflow-hidden rounded-2xl border border-blue-100 bg-[#f8fbff]">
              <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10">
                    <CreditCard
                      size={23}
                      className="text-blue-600"
                    />
                  </div>

                  <div>
                    <p className="font-black text-[#06152e]">
                      Registration Fee
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {selectedEvent.name} •{" "}
                      {selectedEvent.teamAllowed
                        ? "Team"
                        : "Individual"}
                    </p>
                  </div>
                </div>

                <p className="text-3xl font-black text-blue-600">
                  {fee === 0
                    ? "FREE"
                    : `₹${fee}`}
                </p>
              </div>

              <div className="border-t border-blue-100 bg-white px-6 py-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  {selectedEvent.free ? (
                    <>
                      <Check
                        size={14}
                        className="text-emerald-500"
                      />
                      No payment required
                    </>
                  ) : (
                    <>
                      <Lock
                        size={14}
                        className="text-blue-600"
                      />
                      Secure payment powered by Razorpay
                    </>
                  )}
                </div>
              </div>
            </div>
          </FormCard>

          {/* ==================================================
              DECLARATION
              ================================================== */}

          <FormCard>
            <SectionHeader
              number="04"
              title="Declaration"
              description="Please confirm your information before submitting."
            />

            <label
              className={`flex cursor-pointer gap-4 rounded-2xl border p-5 transition ${
                form.declarationAccepted
                  ? "border-blue-300 bg-blue-50"
                  : "border-blue-100 bg-[#f8fbff]"
              }`}
            >
              <input
                type="checkbox"
                checked={
                  form.declarationAccepted
                }
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,

                    declarationAccepted:
                      e.target.checked,
                  }))
                }
                className="mt-1 h-5 w-5 shrink-0 accent-blue-600"
              />

              <span className="text-sm leading-6 text-slate-600">
                I confirm that all the information provided by me
                is correct and complete, and I agree to follow the
                rules and regulations of Techno Wings 2K26.
              </span>
            </label>
          </FormCard>

          {/* ==================================================
              ERROR
              ================================================== */}

          {result?.success === false && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-600"
            >
              <XCircle
                size={21}
                className="mt-0.5 shrink-0"
              />

              <div>
                <p className="font-black">
                  Unable to complete registration
                </p>

                <p className="mt-1 text-sm leading-6 text-red-500/80">
                  {result.message}
                </p>
              </div>
            </motion.div>
          )}

          {/* ==================================================
              SUBMIT
              ================================================== */}

          <div className="pb-8">
            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={
                !submitting
                  ? { y: -2, scale: 1.005 }
                  : {}
              }
              whileTap={
                !submitting
                  ? { scale: 0.995 }
                  : {}
              }
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 text-lg font-black text-white shadow-xl shadow-blue-600/20 transition duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Processing...
                </>
              ) : selectedEvent.free ? (
                <>
                  Complete Free Registration
                  <Send size={19} />
                </>
              ) : (
                <>
                  Proceed to Secure Payment
                  <Lock size={18} />
                </>
              )}
            </motion.button>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
              <ShieldCheck
                size={14}
                className="text-blue-600"
              />

              {selectedEvent.free
                ? "Your registration will be confirmed immediately."
                : "You will be redirected to Razorpay's secure checkout."}
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}