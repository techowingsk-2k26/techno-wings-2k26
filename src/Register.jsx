import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Clipboard,
  CreditCard,
  Lock,
  Send,
  User,
  Users,
  XCircle,
} from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwW0uZ29XSb6vksrZ2DofEmr043FStn1VB8ygRzG6e1V9araV-XHIl8rbGP6cvGt-J4/exec";

const events = {
  "chuck-glider": {
    name: "Chuck Glider",
    teamAllowed: true,
    maxTeamSize: 2,
    feeIndividual: 100,
    feeTeam: 200,
  },

  "flight-simulator": {
    name: "RC Simulator",
    teamAllowed: false,
    maxTeamSize: 1,
    feeIndividual: 100,
    feeTeam: 100,
  },

  "cad-master": {
    name: "CAD Master",
    teamAllowed: false,
    maxTeamSize: 1,
    feeIndividual: 100,
    feeTeam: 100,
  },

  "water-rocket": {
    name: "Water Rocket",
    teamAllowed: true,
    maxTeamSize: 2,
    feeIndividual: 100,
    feeTeam: 200,
  },

  "paper-presentation": {
    name: "Paper Presentation",
    teamAllowed: true,
    maxTeamSize: 2,
    feeIndividual: 100,
    feeTeam: 200,
  },

  "reasoning-rumble": {
    name: "Reasoning Rumble",
    teamAllowed: true,
    maxTeamSize: 2,
    feeIndividual: 100,
    feeTeam: 200,
  },

  "drone-expo": {
    name: "Drone Expo",
    teamAllowed: true,
    maxTeamSize: 3,
    feeIndividual: 0,
    feeTeam: 0,
    free: true,
  },
};

const emptyMember = {
  fullName: "",
  email: "",
  mobile: "",
  collegeName: "",
  department: "",
  year: "",
  rollNumber: "",
};

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
      <label className="mb-2 block text-sm font-semibold text-blue-100">
        {label}
        {required && <span className="text-cyan-400"> *</span>}
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
        className="w-full rounded-xl border border-blue-300/15 bg-[#07172f] px-4 py-3.5 text-white outline-none transition duration-200 placeholder:text-slate-500 focus:border-cyan-400/60 focus:bg-[#0a1d3d] focus:ring-2 focus:ring-cyan-400/10"
      />
    </div>
  );
}

function MemberFields({ number, member, onChange, optional = false }) {
  return (
    <div className="mt-6 rounded-2xl border border-blue-300/10 bg-[#041126] p-5 md:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
          <User size={19} className="text-cyan-300" />
        </div>

        <div>
          <h4 className="font-bold text-cyan-300">
            Team Member {String(number).padStart(2, "0")}
            {optional && (
              <span className="ml-2 text-xs font-semibold text-slate-500">
                OPTIONAL
              </span>
            )}
          </h4>

          <p className="text-xs text-slate-500">
            {optional
              ? "Add a third member if your team has one."
              : "Enter the details of your team member."}
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
          required={!optional}
        />

        <InputField
          label="Email Address"
          name="email"
          type="email"
          value={member.email}
          onChange={onChange}
          placeholder="Enter email"
          required={!optional}
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
          required={!optional}
        />

        <InputField
          label="College Name"
          name="collegeName"
          value={member.collegeName}
          onChange={onChange}
          placeholder="Enter college name"
          required={!optional}
        />

        <InputField
          label="Department / Branch"
          name="department"
          value={member.department}
          onChange={onChange}
          placeholder="e.g. Aeronautical Engineering"
          required={!optional}
        />

        <InputField
          label="Year of Study"
          name="year"
          value={member.year}
          onChange={onChange}
          placeholder="e.g. 2nd Year"
          required={!optional}
        />

        <InputField
          label="Roll Number / PRN"
          name="rollNumber"
          value={member.rollNumber}
          onChange={onChange}
          placeholder="Enter Roll No. / PRN"
          required={!optional}
        />
      </div>
    </div>
  );
}

function SectionHeader({ number, title, description }) {
  return (
    <div className="mb-7">
      <div className="flex items-center gap-3">
        <span className="text-sm font-black tracking-widest text-cyan-400">
          {number}
        </span>

        <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/20 to-transparent" />
      </div>

      <h2 className="mt-2 text-2xl font-black text-white">{title}</h2>

      {description && (
        <p className="mt-2 text-sm text-slate-400">{description}</p>
      )}
    </div>
  );
}

export default function Register() {
  const [searchParams] = useSearchParams();
  const eventSlug = searchParams.get("event");

  const eventKey = searchParams.get("event") || "drone-expo";
  const selectedEvent = eventSlug ? events[eventSlug] : null;

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
    participationType: "Individual",
    teamName: "",
    member2: { ...emptyMember },
    member3: { ...emptyMember },
    declarationAccepted: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const fee = useMemo(() => {
    if (!selectedEvent || selectedEvent.free) return 0;

    return form.participationType === "Team"
      ? selectedEvent.feeTeam
      : selectedEvent.feeIndividual;
  }, [selectedEvent, form.participationType]);

  if (!selectedEvent) {
    return (
      <div className="min-h-screen bg-[#020817] px-4 py-10 text-white">
        <div className="mx-auto max-w-5xl">

          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Techno Wings 2K26
            </p>

            <h1 className="mt-3 text-3xl font-black sm:text-5xl">
              Select Your Event
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Choose the event you want to participate in to continue with
              registration.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(events).map(([slug, event]) => {
              const isFree = event.free === true;

              return (
                <button
                  key={slug}
                  type="button"
                  onClick={() => {
                    window.location.href = `/register?event=${slug}`;
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                        TECHNICAL EVENT
                      </p>

                      <h2 className="mt-3 text-xl font-black">
                        {event.name}
                      </h2>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
                        isFree
                          ? "bg-green-400/10 text-green-300"
                          : "bg-blue-400/10 text-blue-300"
                      }`}
                    >
                      {isFree
                        ? "FREE"
                        : event.teamAllowed
                          ? "₹100 / ₹200"
                          : "₹100"}
                    </span>
                  </div>

                  <div className="mt-5 space-y-2 text-sm text-white/60">
                    <p>
                      <span className="text-white/80">Participation:</span>{" "}
                      {event.teamAllowed
                        ? "Individual / Team"
                        : "Individual Only"}
                    </p>

                    <p>
                      <span className="text-white/80">Team Size:</span>{" "}
                      {event.maxTeamSize}{" "}
                      {event.maxTeamSize === 1 ? "Member" : "Members"}
                    </p>
                  </div>

                  <div className="mt-6 text-sm font-bold text-cyan-300">
                    Select Event →
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    );
}


  function updateMainField(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function updateMobileField(e) {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);

    setForm((prev) => ({
      ...prev,
      mobile: value,
    }));
  }

  function updateMember(memberName, field, value) {
    let cleanValue = value;

    if (field === "mobile") {
      cleanValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setForm((prev) => ({
      ...prev,
      [memberName]: {
        ...prev[memberName],
        [field]: cleanValue,
      },
    }));
  }

  function handleParticipationChange(e) {
    const value = e.target.value;

    setForm((prev) => ({
      ...prev,
      participationType: value,
      teamName: value === "Individual" ? "" : prev.teamName,
      member2:
        value === "Individual" ? { ...emptyMember } : prev.member2,
      member3:
        value === "Individual" ? { ...emptyMember } : prev.member3,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.declarationAccepted) {
      setResult({
        success: false,
        message: "Please accept the declaration before submitting.",
      });
      return;
    }

    if (!/^[6-9][0-9]{9}$/.test(form.mobile)) {
      setResult({
        success: false,
        message: "Please enter a valid 10-digit mobile number.",
      });
      return;
    }

    if (
      form.participationType === "Team" &&
      !form.teamName.trim()
    ) {
      setResult({
        success: false,
        message: "Please enter your team name.",
      });
      return;
    }

    if (
      form.participationType === "Team" &&
      !/^[6-9][0-9]{9}$/.test(form.member2.mobile)
    ) {
      setResult({
        success: false,
        message: "Please enter a valid mobile number for Member 2.",
      });
      return;
    }

    if (
      form.participationType === "Team" &&
      selectedEvent.maxTeamSize === 3 &&
      form.member3.fullName.trim() &&
      !/^[6-9][0-9]{9}$/.test(form.member3.mobile)
    ) {
      setResult({
        success: false,
        message: "Please enter a valid mobile number for Member 3.",
      });
      return;
    }

    setSubmitting(true);
    setResult(null);

    let teamSize = 1;

    if (form.participationType === "Team") {
      teamSize = 2;

      if (
        selectedEvent.maxTeamSize === 3 &&
        form.member3.fullName.trim()
      ) {
        teamSize = 3;
      }
    }

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
      participationType: form.participationType,

      teamName:
        form.participationType === "Team"
          ? form.teamName
          : "",

      teamSize,

      member2Name:
        form.participationType === "Team"
          ? form.member2.fullName
          : "",

      member2Email:
        form.participationType === "Team"
          ? form.member2.email
          : "",

      member2Mobile:
        form.participationType === "Team"
          ? form.member2.mobile
          : "",

      member2College:
        form.participationType === "Team"
          ? form.member2.collegeName
          : "",

      member2Department:
        form.participationType === "Team"
          ? form.member2.department
          : "",

      member2Year:
        form.participationType === "Team"
          ? form.member2.year
          : "",

      member2RollNumber:
        form.participationType === "Team"
          ? form.member2.rollNumber
          : "",

      member3Name:
        form.participationType === "Team" &&
        selectedEvent.maxTeamSize === 3
          ? form.member3.fullName
          : "",

      member3Email:
        form.participationType === "Team" &&
        selectedEvent.maxTeamSize === 3
          ? form.member3.email
          : "",

      member3Mobile:
        form.participationType === "Team" &&
        selectedEvent.maxTeamSize === 3
          ? form.member3.mobile
          : "",

      member3College:
        form.participationType === "Team" &&
        selectedEvent.maxTeamSize === 3
          ? form.member3.collegeName
          : "",

      member3Department:
        form.participationType === "Team" &&
        selectedEvent.maxTeamSize === 3
          ? form.member3.department
          : "",

      member3Year:
        form.participationType === "Team" &&
        selectedEvent.maxTeamSize === 3
          ? form.member3.year
          : "",

      member3RollNumber:
        form.participationType === "Team" &&
        selectedEvent.maxTeamSize === 3
          ? form.member3.rollNumber
          : "",

      registrationFee: fee,

      declarationAccepted:
        form.declarationAccepted ? "Yes" : "No",
    };

    try {
      // ============================================
      // STEP 1: CREATE REGISTRATION / RAZORPAY ORDER
      // ============================================

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(
          data.message || "Registration failed."
        );
      }

      // ============================================
      // FREE EVENT
      // ============================================

      if (!data.paymentRequired) {
        setResult({
          success: true,
          registrationId: data.registrationId,
          paymentStatus: data.paymentStatus,
          registrationStatus: data.registrationStatus,
        });

        setSubmitting(false);
        return;
      }

      // ============================================
      // PAID EVENT
      // ============================================

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

        order_id: data.razorpay.orderId,

        prefill: {
          name: form.fullName,
          email: form.email,
          contact: form.mobile,
        },

        notes: {
          registration_id: data.registrationId,
          event: selectedEvent.name,
        },

        theme: {
          color: "#22d3ee",
        },

        handler: async function (paymentResponse) {
          try {
            setSubmitting(true);

            const verifyResponse = await fetch(
              GOOGLE_SCRIPT_URL,
              {
                method: "POST",

                body: JSON.stringify({
                  action: "verifyPayment",

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

              registrationStatus: "Confirmed",
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

  // ============================================
  // SUCCESS SCREEN
  // ============================================

  if (result?.success) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#020817] px-5 py-12 text-white md:px-8 md:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">
              <CheckCircle2
                size={48}
                className="text-cyan-300"
              />
            </div>

            <p className="mt-7 text-xs font-black uppercase tracking-[0.35em] text-cyan-400">
              Registration Confirmed
            </p>

            <h1 className="mt-3 text-4xl font-black md:text-5xl">
              You're Officially Registered!
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-slate-400">
              Your registration for{" "}
              <span className="font-bold text-white">
                {selectedEvent.name}
              </span>{" "}
              has been successfully confirmed.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-[#07172f] p-6 shadow-2xl shadow-cyan-950/20 md:p-8">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                Your Registration ID
              </p>

              <p className="mt-4 break-all text-3xl font-black tracking-wider text-cyan-300 md:text-4xl">
                {result.registrationId}
              </p>

              <button
                type="button"
                onClick={copyRegistrationId}
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2.5 text-sm font-bold text-cyan-300 transition hover:bg-cyan-400/20"
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

            <div className="my-8 h-px bg-blue-300/10" />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-300/10 bg-[#041126] p-5">
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Event
                </p>

                <p className="mt-2 font-bold text-white">
                  {selectedEvent.name}
                </p>
              </div>

              <div className="rounded-2xl border border-blue-300/10 bg-[#041126] p-5">
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Participation
                </p>

                <p className="mt-2 font-bold text-white">
                  {form.participationType}
                </p>
              </div>

              <div className="rounded-2xl border border-blue-300/10 bg-[#041126] p-5">
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Payment
                </p>

                <p className="mt-2 flex items-center gap-2 font-bold text-cyan-300">
                  <Check size={17} />
                  {result.paymentStatus}
                </p>
              </div>

              <div className="rounded-2xl border border-blue-300/10 bg-[#041126] p-5">
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Status
                </p>

                <p className="mt-2 flex items-center gap-2 font-bold text-cyan-300">
                  <Check size={17} />
                  {result.registrationStatus}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-300/10 bg-[#03112a] p-5 text-center">
            <p className="text-sm leading-6 text-slate-400">
              Please save your Registration ID. You will need it
              to verify your registration later.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/verify"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Verify Registration
            </Link>

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-300/15 px-6 py-3.5 font-bold text-white transition hover:border-cyan-400/30 hover:text-cyan-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] px-5 py-8 text-white md:px-8 md:py-12">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Back */}
        <Link
          to="/events"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-cyan-300"
        >
          <ArrowLeft size={17} />
          Back to Events
        </Link>

        {/* Header */}
        <header className="mb-10">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-400">
            Techno Wings 2K26
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Register for Techno Wings 2K26
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            Secure your spot and take part in an exciting
            aerospace challenge.
          </p>
        </header>

        {/* Progress */}
        <div className="mb-8 overflow-x-auto rounded-2xl border border-blue-300/10 bg-[#03112a]/80 p-4">
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
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-xs font-black text-cyan-300">
                    {number}
                  </div>

                  <span className="text-sm font-bold text-slate-300">
                    {title}
                  </span>
                </div>

                {index < 3 && (
                  <div className="mx-4 h-px flex-1 bg-blue-300/10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Event */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#07172f] to-[#041126] p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-400">
                Selected Event
              </p>

              <h2 className="mt-2 text-3xl font-black">
                {selectedEvent.name}
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                {selectedEvent.free
                  ? "Individual or Team • Up to 3 members"
                  : selectedEvent.teamAllowed
                  ? `Individual or Team • Maximum ${selectedEvent.maxTeamSize} members`
                  : "Individual participation only"}
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-6 py-4 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Entry Fee
              </p>

              <p className="mt-1 text-3xl font-black text-cyan-300">
                {selectedEvent.free
                  ? "FREE"
                  : `₹${fee}`}
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-7">
          {/* Participant Details */}
          <section className="rounded-3xl border border-blue-300/10 bg-[#03112a]/80 p-6 md:p-8">
            <SectionHeader
              number="01"
              title="Participant Details"
              description="Enter your personal and academic information."
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

              <div>
                <label className="mb-2 block text-sm font-semibold text-blue-100">
                  Mobile Number
                  <span className="text-cyan-400"> *</span>
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
                  className="w-full rounded-xl border border-blue-300/15 bg-[#07172f] px-4 py-3.5 text-white outline-none transition duration-200 placeholder:text-slate-500 focus:border-cyan-400/60 focus:bg-[#0a1d3d] focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-blue-100">
                  Gender <span className="text-cyan-400">*</span>
                </label>

                <select
                  name="gender"
                  value={form.gender}
                  onChange={updateMainField}
                  required
                  className="w-full rounded-xl border border-blue-300/15 bg-[#07172f] px-4 py-3.5 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
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
          </section>

          {/* Participation */}
          <section className="rounded-3xl border border-blue-300/10 bg-[#03112a]/80 p-6 md:p-8">
            <SectionHeader
              number="02"
              title="Participation"
              description="Choose how you want to participate in this event."
            />

            {selectedEvent.teamAllowed ? (
              <div className="grid gap-4 md:grid-cols-2">
                {/* Individual */}
                <label
                  className={`group cursor-pointer rounded-2xl border p-6 transition duration-200 ${
                    form.participationType === "Individual"
                      ? "border-cyan-400/60 bg-cyan-400/10 shadow-lg shadow-cyan-950/20"
                      : "border-blue-300/10 bg-[#07172f] hover:border-cyan-400/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="participationType"
                    value="Individual"
                    checked={
                      form.participationType === "Individual"
                    }
                    onChange={handleParticipationChange}
                    className="sr-only"
                  />

                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                          form.participationType === "Individual"
                            ? "bg-cyan-400/20"
                            : "bg-blue-300/5"
                        }`}
                      >
                        <User
                          size={23}
                          className={
                            form.participationType === "Individual"
                              ? "text-cyan-300"
                              : "text-slate-400"
                          }
                        />
                      </div>

                      <div>
                        <p className="font-black">
                          Individual
                        </p>

                        <p className="mt-1 text-sm text-slate-400">
                          Participate independently
                        </p>
                      </div>
                    </div>

                    {form.participationType === "Individual" && (
                      <Check
                        size={20}
                        className="text-cyan-300"
                      />
                    )}
                  </div>

                  <p className="mt-6 text-xl font-black text-cyan-300">
                    {selectedEvent.free
                      ? "FREE"
                      : `₹${selectedEvent.feeIndividual}`}
                  </p>
                </label>

                {/* Team */}
                <label
                  className={`group cursor-pointer rounded-2xl border p-6 transition duration-200 ${
                    form.participationType === "Team"
                      ? "border-cyan-400/60 bg-cyan-400/10 shadow-lg shadow-cyan-950/20"
                      : "border-blue-300/10 bg-[#07172f] hover:border-cyan-400/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="participationType"
                    value="Team"
                    checked={
                      form.participationType === "Team"
                    }
                    onChange={handleParticipationChange}
                    className="sr-only"
                  />

                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                          form.participationType === "Team"
                            ? "bg-cyan-400/20"
                            : "bg-blue-300/5"
                        }`}
                      >
                        <Users
                          size={23}
                          className={
                            form.participationType === "Team"
                              ? "text-cyan-300"
                              : "text-slate-400"
                          }
                        />
                      </div>

                      <div>
                        <p className="font-black">
                          Team
                        </p>

                        <p className="mt-1 text-sm text-slate-400">
                          Compete together
                        </p>
                      </div>
                    </div>

                    {form.participationType === "Team" && (
                      <Check
                        size={20}
                        className="text-cyan-300"
                      />
                    )}
                  </div>

                  <p className="mt-6 text-xl font-black text-cyan-300">
                    {selectedEvent.free
                      ? "FREE"
                      : `₹${selectedEvent.feeTeam}`}
                  </p>
                </label>
              </div>
            ) : (
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
                    <User
                      size={23}
                      className="text-cyan-300"
                    />
                  </div>

                  <div>
                    <p className="font-black">
                      Individual Participation Only
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      This event is available only for individual
                      participants.
                    </p>

                    <p className="mt-3 font-black text-cyan-300">
                      {selectedEvent.free
                        ? "FREE ENTRY"
                        : `₹${selectedEvent.feeIndividual}`}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {form.participationType === "Team" && (
              <div className="mt-7">
                <InputField
                  label="Team Name"
                  name="teamName"
                  value={form.teamName}
                  onChange={updateMainField}
                  placeholder="Enter your team name"
                />

                <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                  <Users size={14} />
                  Maximum {selectedEvent.maxTeamSize} members
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

                {selectedEvent.maxTeamSize === 3 && (
                  <MemberFields
                    number={3}
                    member={form.member3}
                    optional
                    onChange={(e) =>
                      updateMember(
                        "member3",
                        e.target.name,
                        e.target.value
                      )
                    }
                  />
                )}
              </div>
            )}
          </section>

          {/* Payment */}
          <section className="rounded-3xl border border-blue-300/10 bg-[#03112a]/80 p-6 md:p-8">
            <SectionHeader
              number="03"
              title="Payment"
              description={
                selectedEvent.free
                  ? "No payment is required for this event."
                  : "Review your registration fee before continuing."
              }
            />

            <div className="overflow-hidden rounded-2xl border border-blue-300/10 bg-[#07172f]">
              <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                    <CreditCard
                      size={23}
                      className="text-cyan-300"
                    />
                  </div>

                  <div>
                    <p className="font-black">
                      Registration Fee
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      {selectedEvent.name} •{" "}
                      {form.participationType}
                    </p>
                  </div>
                </div>

                <p className="text-3xl font-black text-cyan-300">
                  {fee === 0 ? "FREE" : `₹${fee}`}
                </p>
              </div>

              <div className="border-t border-blue-300/10 bg-[#041126] px-6 py-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  {selectedEvent.free ? (
                    <>
                      <Check size={14} className="text-cyan-400" />
                      No payment required
                    </>
                  ) : (
                    <>
                      <Lock size={14} className="text-cyan-400" />
                      Secure payment powered by Razorpay
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Declaration */}
          <section className="rounded-3xl border border-blue-300/10 bg-[#03112a]/80 p-6 md:p-8">
            <SectionHeader
              number="04"
              title="Declaration"
              description="Please confirm your information before submitting."
            />

            <label
              className={`flex cursor-pointer gap-4 rounded-2xl border p-5 transition ${
                form.declarationAccepted
                  ? "border-cyan-400/30 bg-cyan-400/5"
                  : "border-blue-300/10 bg-[#07172f]"
              }`}
            >
              <input
                type="checkbox"
                checked={form.declarationAccepted}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    declarationAccepted:
                      e.target.checked,
                  }))
                }
                className="mt-1 h-5 w-5 shrink-0 accent-cyan-400"
              />

              <span className="text-sm leading-6 text-slate-300">
                I confirm that all the information provided by me
                is correct and complete, and I agree to follow the
                rules and regulations of Techno Wings 2K26.
              </span>
            </label>
          </section>

          {/* Error */}
          {result?.success === false && (
            <div className="flex items-start gap-3 rounded-2xl border border-red-400/20 bg-red-400/10 p-5 text-red-300">
              <XCircle
                size={21}
                className="mt-0.5 shrink-0"
              />

              <div>
                <p className="font-bold">
                  Unable to complete registration
                </p>

                <p className="mt-1 text-sm leading-6 text-red-200/70">
                  {result.message}
                </p>
              </div>
            </div>
          )}

          {/* Submit */}
          <div className="pb-6">
            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-6 py-4 text-lg font-black text-slate-950 shadow-lg shadow-cyan-950/20 transition duration-200 hover:bg-cyan-300 hover:shadow-cyan-950/30 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950" />
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
            </button>

            <p className="mt-4 text-center text-xs text-slate-500">
              {selectedEvent.free
                ? "Your registration will be confirmed immediately."
                : "You will be redirected to Razorpay's secure checkout."}
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}