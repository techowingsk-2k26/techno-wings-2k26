import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Eye,
  Mail,
  MapPin,
  Menu,
  Plane,
  Sparkles,
  Trophy,
  Users,
  Wind,
  Wrench,
  X,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  AnimatePresence,
} from "motion/react";



import IntroAnimation from "./IntroAnimation";
import technoWingsLogo from "./assets/techno-wings-logo.png";
import adateLogo from "./assets/adate-logo1.png";
import aesiLogo from "./assets/aesi-pune-logo.png";
import collegeLogo from "./assets/college-logo.png";
import heroTejas from "./assets/hero-tejas.png";
import heroSkyBackground from "./assets/hero-sky-background.png";


/* =================================================
   EVENT SHOWCASE IMAGES
================================================= */

import event1Image from "./assets/events/event-1.jpeg";
import event2Image from "./assets/events/event-2.jpeg";
import event3Image from "./assets/events/event-3.jpeg";
import event4Image from "./assets/events/event-4.jpeg";
import event5Image from "./assets/events/event-5.jpeg";
import event6Image from "./assets/events/event-6.jpeg";
import event7Image from "./assets/events/event-7.jpeg";


/* =================================================
   AEROMODELING IMAGES
================================================= */
import aeromodelling1 from "./assets/aeromodelling-1.jpeg";
import aeromodelling2 from "./assets/aeromodelling-2.jpeg";

/* =================================================
   AEROMODELLING SLIDESHOW IMAGES
================================================= */

const aeromodellingImages = [
  {
    src: aeromodelling1,
    alt: "Aeromodelling Exhibition and Hands-on Experience",
  },
  {
    src: aeromodelling2,
    alt: "Aeromodelling Hands-on Experience",
  },
];
/* =================================================
   EVENT SHOWCASE DATA
================================================= */

const eventShowcaseImages = [
  {
    image: event1Image,
    number: "01",
    title: "Chuck Glider",
    subtitle: "Flight • Control • Aerodynamics",
  },
  {
    image: event2Image,
    number: "02",
    title: "CAD Master",
    subtitle: "Design • Engineering • Creativity",
  },
  {
    image: event3Image,
    number: "03",
    title: "Paper Presentation",
    subtitle: "Ideas • Analysis • Problem Solving",
  },
  {
    image: event4Image,
    number: "04",
    title: "Drone Expo",
    subtitle: "UAV • Aerial Systems • Technology",
  },
  {
    image: event5Image,
    number: "05",
    title: "Flight Simulator",
    subtitle: "Challenge • Compete • Learn",
  },
  {
    image: event6Image,
    number: "06",
    title: "Water Rocket",
    subtitle: "Create • Experiment • Inspire",
  },
  {
    image: event7Image,
    number: "07",
    title: "Reasoning Rumble",
    subtitle: "Talent • Ideas • Future",
  },
];

/* =================================================
   EVENTS
================================================= */

const events = [
  {
    name: "Drone Expo",
    category: "drone",
    description:
      "Showcase innovative drones, UAVs and aerial systems.",
    icon: Plane,
  },
  {
    name: "Chuck Glider",
    category: "aerospace",
    description:
      "Test your aircraft design, stability and flying skill.",
    icon: Plane,
  },
  {
    name: "Flight Simulator",
    category: "aerospace",
    description:
      "Experience realistic aircraft control and flight simulation.",
    icon: Plane,
  },
  {
    name: "CAD Master",
    category: "design",
    description:
      "Turn engineering ideas into accurate digital designs.",
    icon: Trophy,
  },
  {
    name: "Water Rocket",
    category: "design",
    description:
      "Design, build and launch a water-powered rocket.",
    icon: Trophy,
  },
  {
    name: "Paper Presentation",
    category: "knowledge",
    description:
      "Present innovative technical ideas to an expert audience.",
    icon: Sparkles,
  },
  {
    name: "Reasoning Rumble",
    category: "knowledge",
    description:
      "Challenge your logic, reasoning and problem-solving skills.",
    icon: Users,
  },
];

/* =================================================
   CATEGORIES
================================================= */

const categories = [
  {
    title: "AEROSPACE CHALLENGES",
    description:
      "Experience flight, control, aerodynamics and aviation through exciting hands-on challenges.",
    icon: Plane,
    events: ["Chuck Glider", "Flight Simulator"],
    count: "2 EVENTS",
    slug: "aerospace",
  },
  {
    title: "DESIGN & BUILD",
    description:
      "Design, engineer and build your way through challenges that test creativity and technical skills.",
    icon: Trophy,
    events: ["CAD Master", "Water Rocket"],
    count: "2 EVENTS",
    slug: "design",
  },
  {
    title: "KNOWLEDGE & INNOVATION",
    description:
      "Showcase ideas and challenge your analytical thinking, technical knowledge and problem-solving ability.",
    icon: Sparkles,
    events: ["Paper Presentation", "Reasoning Rumble"],
    count: "2 EVENTS",
    slug: "knowledge",
  },
  {
    title: "DRONE EXPO",
    description:
      "Showcase innovative drones, UAVs and aerial systems and connect with fellow aviation enthusiasts.",
    icon: Plane,
    events: ["Drone Expo"],
    count: "FREE ENTRY",
    slug: "drone",
  },
];

/* =================================================
   REVEAL ANIMATION
================================================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: "blur(7px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

/* =================================================
   STAGGER
================================================= */

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* =================================================
   SECTION LABEL
================================================= */

function SectionLabel({ icon: Icon, children }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-cyan-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
      <Icon size={15} />
      {children}
    </div>
  );
}

/* =================================================
   MAGNETIC CTA
================================================= */

function MagneticLink({
  to,
  children,
  className,
  reducedMotion,
  onClick,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 18,
    mass: 0.5,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 18,
    mass: 0.5,
  });

  const handleMouseMove = (event) => {
    if (reducedMotion) return;

    const rect =
      event.currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const moveX =
      (event.clientX - centerX) * 0.16;

    const moveY =
      (event.clientY - centerY) * 0.16;

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex"
    >
      <Link
        to={to}
        viewTransition
        onClick={onClick}
        className={className}
      >
        {children}
      </Link>
    </motion.div>
  );
}

/* =================================================
   ANIMATED ₹50,000 COUNTER
================================================= */

function AnimatedPrizeCounter({
  reducedMotion,
}) {
  const [amount, setAmount] = useState(
    reducedMotion ? 50000 : 0
  );

  useEffect(() => {
    if (reducedMotion) {
      setAmount(50000);
      return;
    }

    const duration = 1800;
    const startTime = performance.now();

    let frame;

    const update = (currentTime) => {
      const progress = Math.min(
        1,
        (currentTime - startTime) / duration
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      setAmount(
        Math.floor(50000 * eased)
      );

      if (progress < 1) {
        frame =
          requestAnimationFrame(update);
      }
    };

    frame =
      requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  return (
    <>
      ₹{amount.toLocaleString("en-IN")}
    </>
  );
}

/* =================================================
   MAIN APP
================================================= */

function App() {
  const reducedMotion = useReducedMotion();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);
  
  const [aeromodellingSlide, setAeromodellingSlide] =
    useState(0);

  const [showIntro, setShowIntro] = useState(() => {
    return (
      sessionStorage.getItem(
        "technoWingsIntroShown"
      ) !== "true"
    );
  });

  const [scrollProgress, setScrollProgress] =
    useState(0);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [activeEventSlide, setActiveEventSlide] =
    useState(0);

  /* =================================================
    AUTO AEROMODELLING SLIDESHOW
  ================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setAeromodellingSlide((current) => {
        return (
          (current + 1) %
          aeromodellingImages.length
        );
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* =================================================
     AUTO EVENT SLIDESHOW
  ================================================= */

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const interval = setInterval(() => {
      setActiveEventSlide((current) => {
        return (
          (current + 1) %
          eventShowcaseImages.length
        );
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  /* =================================================
     INTRO COMPLETE
  ================================================= */

  const handleIntroComplete =
    useCallback(() => {
      sessionStorage.setItem(
        "technoWingsIntroShown",
        "true"
      );

      setShowIntro(false);
    }, []);

  /* =================================================
     SCROLL PROGRESS
  ================================================= */

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setScrollProgress(
        scrollable > 0
          ? Math.min(
              100,
              (window.scrollY / scrollable) *
                100
            )
          : 0
      );
    };

    updateScrollProgress();

    window.addEventListener(
      "scroll",
      updateScrollProgress,
      {
        passive: true,
      }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateScrollProgress
      );
  }, []);

  /* =================================================
     COUNTDOWN
  ================================================= */

  useEffect(() => {
    const target = new Date(
      "2026-10-15T09:00:00"
    ).getTime();

    const update = () => {
      const diff =
        target - Date.now();

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTimeLeft({
        days: Math.floor(
          diff / 86400000
        ),

        hours: Math.floor(
          (diff / 3600000) % 24
        ),

        minutes: Math.floor(
          (diff / 60000) % 60
        ),

        seconds: Math.floor(
          (diff / 1000) % 60
        ),
      });
    };

    update();

    const timer =
      setInterval(update, 1000);

    return () =>
      clearInterval(timer);
  }, []);

  /* =================================================
     NAVIGATION
  ================================================= */

  const navItems = useMemo(
    () => [
      ["Home", "#home"],
      ["About Fest", "#about"],
      [
        "Events",
        "/events?category=aerospace",
      ],
      ["Contact", "/contact"],
    ],
    []
  );

  /* =================================================
     MOTION PROPS
  ================================================= */

  const motionProps =
    reducedMotion
      ? {
          initial: false,
          whileInView: undefined,
        }
      : {
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            once: true,
            amount: 0.22,
          },
        };

  return (
    <>
      {/* =================================================
          INTRO ANIMATION
      ================================================= */}

      {showIntro && (
        <IntroAnimation
          onComplete={
            handleIntroComplete
          }
        />
      )}

      <div className="site-scale min-h-screen overflow-x-hidden bg-[#f5f9ff] text-[#06152e]">

        {/* =================================================
            TOP PROGRESS
        ================================================= */}

        <motion.div
          className="fixed left-0 top-0 z-[80] h-1 origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"
          style={{
            width: `${scrollProgress}%`,
          }}
        />


        {/* =================================================
            BLUEPRINT ATMOSPHERE
        ================================================= */}

        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-60">
          <div className="absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full border border-blue-300/20" />

          <div className="absolute left-[-115px] top-[27%] h-[290px] w-[290px] rounded-full border border-cyan-300/20" />

          <div className="absolute right-[-210px] top-[55%] h-[520px] w-[520px] rounded-full border border-blue-300/15" />

          <div className="absolute right-[-110px] top-[63%] h-[320px] w-[320px] rounded-full border border-cyan-300/20" />

          <div className="absolute left-0 right-0 top-[38%] h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" />

          <div className="absolute left-0 right-0 top-[72%] h-px bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent" />
        </div>

        {/* =========================================================
            FLOATING AEROSPACE NAVBAR
        ========================================================= */}

        <nav className="fixed left-3 right-3 top-4 z-[70] sm:left-5 sm:right-5 sm:top-5 lg:left-8 lg:right-8">
          <div className="relative mx-auto max-w-[1450px]">

            {/* Outer floating frame */}
            <div className="relative overflow-hidden rounded-[22px] border border-blue-200/80 bg-white/90 shadow-[0_18px_55px_rgba(6,21,46,0.14)] backdrop-blur-2xl">

              {/* Subtle aerospace grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(37,99,235,0.8) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(37,99,235,0.8) 1px, transparent 1px)
                  `,
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Top glowing flight-line */}
              <div className="pointer-events-none absolute left-[8%] right-[8%] top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

              {/* Left cockpit accent */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-16">
                <div className="absolute left-0 top-0 h-7 w-px bg-blue-500" />
                <div className="absolute left-0 top-0 h-px w-7 bg-blue-500" />
              </div>

              {/* Right cockpit accent */}
              <div className="pointer-events-none absolute right-0 bottom-0 h-full w-16">
                <div className="absolute bottom-0 right-0 h-7 w-px bg-cyan-500" />
                <div className="absolute bottom-0 right-0 h-px w-7 bg-cyan-500" />
              </div>

              {/* Navbar content */}
              <div className="relative flex h-[72px] items-center justify-between px-4 sm:h-[76px] sm:px-6 lg:px-10">

                {/* Logo / Brand */}
                <Link
                  to="/"
                  className="group flex items-center gap-3"
                >
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 shadow-sm transition duration-300 group-hover:border-blue-400 group-hover:bg-blue-600 group-hover:text-white">
                    <Plane size={21} />

                    {/* Small radar dot */}
                    <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-cyan-400" />
                  </div>

                  <div className="hidden sm:block">
                    <p className="font-outfit text-sm font-black tracking-tight text-[#06152e]">
                      TECHNOWINGS
                      <span className="text-blue-600"> 2K26</span>
                    </p>

                    <div className="mt-0.5 flex items-center gap-2">
                      <span className="h-px w-5 bg-cyan-400" />
                      <p className="text-[8px] font-black uppercase tracking-[0.22em] text-slate-400">
                        Aerospace Symposium
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-1 lg:flex">

                  <Link
                    to="/"
                    className="group relative rounded-xl px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#52657d] transition duration-300 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Home
                    <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-5/6" />
                  </Link>

                  <a
                    href="#events"
                    className="group relative rounded-xl px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#52657d] transition duration-300 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Events
                    <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-5/6" />
                  </a>

                  <a
                    href="#aeromodelling"
                    className="group relative rounded-xl px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#52657d] transition duration-300 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Aeromodelling
                    <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-5/6" />
                  </a>

                  <a
                    href="#association"
                    className="group relative rounded-xl px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#52657d] transition duration-300 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Associations
                    <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-5/6" />
                  </a>

                  <Link
                    to="/contact"
                    className="group relative rounded-xl px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#52657d] transition duration-300 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Contact
                    <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-5/6" />
                  </Link>
                </div>

                {/* CTA */}
                <div className="hidden sm:block">
                  <Link
                    to="/events"
                    className="group relative flex items-center gap-2 overflow-hidden rounded-xl border border-blue-600 bg-blue-600 px-5 py-3 text-[10px] font-black uppercase tracking-[0.15em] text-white shadow-[0_8px_25px_rgba(37,99,235,0.22)] transition duration-300 hover:bg-blue-700 hover:shadow-[0_12px_35px_rgba(37,99,235,0.30)]"
                  >
                    <span className="relative z-10">Explore Events</span>
                    <ArrowRight
                      size={14}
                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                    />

                    {/* Moving scan effect */}
                    <span className="absolute inset-y-0 -left-10 w-8 rotate-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-[180px]" />
                  </Link>
                </div>

                {/* Mobile menu button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition hover:border-blue-300 hover:bg-blue-100 lg:hidden"
                  aria-label="Toggle navigation"
                >
                  {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
                </button>
              </div>

              {/* Mobile navigation */}
              {mobileMenuOpen && (
                <div className="relative border-t border-blue-100 bg-white/95 px-4 pb-4 pt-3 backdrop-blur-xl lg:hidden">
                  <div className="grid gap-1">
                    <Link
                      to="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-xl px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#52657d] transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      Home
                    </Link>

                    <a
                      href="#events"
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-xl px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#52657d] transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      Events
                    </a>

                    <a
                      href="#aeromodelling"
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-xl px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#52657d] transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      Aeromodelling
                    </a>

                    <a
                      href="#association"
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-xl px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#52657d] transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      Associations
                    </a>

                    <Link
                      to="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-xl px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#52657d] transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      Contact
                    </Link>

                    <Link
                      to="/events"
                      onClick={() => setMobileMenuOpen(false)}
                      className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-white"
                    >
                      Explore Events
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Floating shadow / separation from page */}
            <div className="pointer-events-none absolute -bottom-3 left-[8%] right-[8%] -z-10 h-5 rounded-full bg-blue-900/10 blur-xl" />

            {/* Tiny aerospace status indicators */}
            <div className="pointer-events-none absolute -bottom-2 left-8 hidden items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 shadow-sm sm:flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-[7px] font-black uppercase tracking-[0.2em] text-slate-400">
                REGISTRATIONS LIVE
              </span>
            </div>

            <div className="pointer-events-none absolute -bottom-2 right-8 hidden items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 shadow-sm sm:flex">
              <span className="text-[7px] font-black uppercase tracking-[0.2em] text-slate-400">
                TW / 2K26
              </span>
            </div>

          </div>
        </nav>

        {/* =================================================
            HERO
        ================================================= */}

        <section
          id="home"
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-28"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,184,255,0.15),transparent_30%),linear-gradient(180deg,#ffffff_0%,#edf7ff_58%,#f5f9ff_100%)]" />

          <div className="absolute left-1/2 top-[42%] h-[620px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-[120px]" />

          {/* HERO SKY / CLOUD BACKGROUND */}

          <div
            className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
            aria-hidden="true"
          >
            <img
              src={heroSkyBackground}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          {/* LEFT ADCET LOGO */}

          <div className="pointer-events-none absolute left-[3%] top-[15%] z-[4] hidden lg:block">
            <div className="flex h-[190px] w-[190px] items-center justify-center rounded-3xl border border-blue-100/80 bg-white p-6 shadow-[0_15px_45px_rgba(6,21,46,0.04)] backdrop-blur-[2px]">
              <img
                src={collegeLogo}
                alt="Annasaheb Dange College of Engineering and Technology"
                className="h-[145px] w-[145px] object-contain drop-shadow-[0_8px_18px_rgba(37,99,235,0.12)]"
              />
            </div>
          </div>

          {/* RIGHT AESI LOGO */}

          <div className="pointer-events-none absolute right-[3%] top-[13%] z-[4] hidden lg:block">
            <div className="flex h-[190px] w-[190px] items-center justify-center rounded-3xl border border-blue-100/80 bg-white p-6 shadow-[0_15px_45px_rgba(6,21,46,0.04)] backdrop-blur-[2px]">
              <img
                src={aesiLogo}
                alt="AESI Pune"
                className="h-[145px] w-[145px] object-contain drop-shadow-[0_8px_18px_rgba(37,99,235,0.12)]"
              />
            </div>
          </div>

          {/* STATIONARY TEJAS-STYLE AIRCRAFT */}

          <div className="pointer-events-none absolute right-[-5%] top-[30%] z-[3] hidden w-[68%] max-w-[1000px] lg:block">
            <img
              src={heroTejas}
              alt=""
              className="w-full object-contain drop-shadow-[0_20px_70px_rgba(0,174,255,0.35)]"
            />
          </div>

          {/* ENGINE / EXHAUST GLOW */}

          <div className="pointer-events-none absolute right-[10%] top-[54%] z-[2] hidden h-32 w-52 rounded-full bg-cyan-400/30 blur-[55px] lg:block" />

          {/* MOBILE HERO LOGOS */}

          <div className="relative z-10 mb-7 flex w-full items-center justify-center gap-5 lg:hidden">

            {/* ADCET */}

            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-100 bg-white/80 p-2 shadow-[0_10px_30px_rgba(6,21,46,0.08)] backdrop-blur-sm">
              <img
                src={collegeLogo}
                alt="Annasaheb Dange College of Engineering and Technology"
                className="h-full w-full object-contain"
              />
            </div>

            {/* AESI */}

            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-100 bg-white/80 p-2 shadow-[0_10px_30px_rgba(6,21,46,0.08)] backdrop-blur-sm">
              <img
                src={aesiLogo}
                alt="The Aeronautical Society of India"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* HERO CONTENT */}

          <div className="relative z-10 mx-auto w-full max-w-[1220px] text-center">

            {/* LABEL */}

            <motion.div
              {...motionProps}
              variants={reveal}
              transition={{
                duration: 0.7,
              }}
            >
              <SectionLabel icon={Sparkles}>
                A 2-Day National-Level Technical Symposium
              </SectionLabel>
            </motion.div>

            {/* WELCOME */}

            <motion.p
              {...motionProps}
              variants={reveal}
              transition={{
                delay: 0.08,
                duration: 0.65,
              }}
              className="font-hero-script text-3xl text-blue-900 sm:text-4xl md:text-5xl"
            >
              Welcome to
            </motion.p>

            {/* TITLE */}

            <div className="mt-3 overflow-hidden">
              <motion.div
                initial={
                  reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 70,
                        filter: "blur(14px)",
                      }
                }
                animate={
                  reducedMotion
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      }
                }
                transition={{
                  delay: 0.16,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-center"
              >
                <h1
                  className="
                    font-hero-title
                    text-[13vw]
                    font-black
                    uppercase
                    italic
                    leading-[0.78]
                    tracking-[-0.065em]
                    text-[#082b73]
                    sm:text-[10vw]
                    md:text-[clamp(4rem,7.2vw,7rem)]
                  "
                >
                  TECHNO WINGS
                </h1>

                <div
                  className="
                    font-hero-number
                    mt-3
                    text-[15vw]
                    font-black
                    italic
                    leading-[0.68]
                    tracking-[-0.04em]
                    text-cyan-500
                    sm:text-[12vw]
                    md:text-[clamp(4.8rem,7.5vw,7.5rem)]
                  "
                >
                  2K26
                </div>
              </motion.div>
            </div>

            {/* TITLE LINE */}

            <motion.div
              initial={
                reducedMotion
                  ? false
                  : {
                      scaleX: 0,
                      opacity: 0,
                    }
              }
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                delay: 0.62,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="mx-auto mt-5 h-[2px] w-44 origin-center bg-gradient-to-r from-transparent via-cyan-400 to-blue-600 sm:w-64"
            />

            {/* DESCRIPTION */}

            <motion.p
              {...motionProps}
              variants={reveal}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
              className="mx-auto mt-6 max-w-4xl text-lg font-medium text-[#3b5572] sm:text-2xl md:text-3xl"
            >
              Two Days of Innovation, Technology & Aerospace Excellence
            </motion.p>

            {/* ADATE */}

            <motion.div
              {...motionProps}
              variants={reveal}
              transition={{
                delay: 0.46,
                duration: 0.7,
              }}
              className="mx-auto mt-7"
            >
              <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
                <img
                  src={adateLogo}
                  alt="ADATE Club"
                  className="h-32 w-auto object-contain sm:h-[115px]"
                />

                <div className="text-center sm:text-left">
                  <span className="block text-lg font-semibold text-[#415a75] sm:text-[22px]">
                    Organized by{" "}
                    <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 bg-clip-text font-black text-transparent drop-shadow-[0_2px_8px_rgba(0,174,255,0.25)]">
                      ADATE CLUB
                    </span>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* DATE */}

            <motion.div
              {...motionProps}
              variants={reveal}
              transition={{
                delay: 0.55,
                duration: 0.7,
              }}
              className="mt-7 flex justify-center"
            >
              <div className="flex items-center gap-3 text-lg font-black text-blue-700 sm:text-2xl">
                <CalendarDays
                  size={25}
                  className="text-cyan-500"
                />

                15th & 16th October 2026
              </div>
            </motion.div>

            {/* ORGANIZED BY */}

            <motion.div
              {...motionProps}
              variants={reveal}
              transition={{
                delay: 0.64,
                duration: 0.7,
              }}
              className="mt-6"
            >
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#637b96]">
                From the Department of
              </p>

              <p className="mt-2 text-lg font-black text-blue-700 sm:text-2xl md:text-3xl">
                Aeronautical Engineering
              </p>

              <p className="mt-1 text-sm font-medium text-[#506a84] sm:text-base md:text-lg">
                Annasaheb Dange College of Engineering & Technology
              </p>
            </motion.div>

            {/* COUNTDOWN */}

            <motion.div
              {...motionProps}
              variants={reveal}
              transition={{
                delay: 0.72,
                duration: 0.7,
              }}
              className="mx-auto mt-8 grid max-w-2xl grid-cols-4 gap-2 sm:gap-4"
            >
              {[
                ["days", timeLeft.days],
                ["hours", timeLeft.hours],
                ["minutes", timeLeft.minutes],
                ["seconds", timeLeft.seconds],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="group rounded-2xl border border-blue-100 bg-white/90 px-2 py-3 shadow-[0_15px_40px_rgba(6,21,46,0.07)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_20px_50px_rgba(0,184,255,0.12)] sm:px-5 sm:py-4"
                >
                  <motion.div
                    key={value}
                    initial={
                      reducedMotion
                        ? false
                        : {
                            y: -7,
                            opacity: 0.45,
                          }
                    }
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    className="text-3xl font-black text-blue-600 sm:text-5xl"
                  >
                    {String(value).padStart(2, "0")}
                  </motion.div>

                  <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#71849b] sm:text-xs">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* HERO CTA */}

            <motion.div
              {...motionProps}
              variants={reveal}
              transition={{
                delay: 0.84,
                duration: 0.7,
              }}
              className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
            >
              {/* EXPLORE */}

              <MagneticLink
                to="/events?category=aerospace"
                reducedMotion={reducedMotion}
                className="group relative flex min-w-[210px] items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-4 text-base font-black text-white shadow-[0_12px_35px_rgba(37,99,235,0.25)] transition hover:-translate-y-1"
              >
                <span className="absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-white/25 transition-all duration-700 group-hover:left-[120%]" />

                <Plane size={20} />

                Explore Events

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </MagneticLink>

              {/* REGISTER */}

              <MagneticLink
                to="/register"
                reducedMotion={reducedMotion}
                className="group relative flex min-w-[210px] items-center justify-center gap-2 overflow-hidden rounded-xl border border-blue-200 bg-white px-7 py-4 text-base font-black text-blue-700 shadow-[0_10px_30px_rgba(6,21,46,0.06)] transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-50"
              >
                <span className="absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-cyan-300/30 transition-all duration-700 group-hover:left-[120%]" />

                Register Now

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </MagneticLink>
            </motion.div>

            {/* SCROLL */}

            <motion.a
              href="#about"
              initial={
                reducedMotion
                  ? false
                  : {
                      opacity: 0,
                    }
              }
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.2,
              }}
              className="mx-auto mt-10 flex w-fit flex-col items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#7890a9]"
            >
              Scroll to explore

              <motion.span
                animate={
                  reducedMotion
                    ? {}
                    : {
                        y: [0, 7, 0],
                      }
                }
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
                className="h-8 w-px bg-gradient-to-b from-cyan-400 to-transparent"
              />
            </motion.a>
          </div>
        </section>

        {/* =================================================
            ABOUT
        ================================================= */}

        <section
          id="about"
          className="relative overflow-hidden border-t border-blue-100 bg-white/80 px-6 py-24 sm:py-28 lg:py-32"
        >
          {/* BACKGROUND ATMOSPHERE */}

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_35%,rgba(0,119,255,0.10),transparent_30%),radial-gradient(circle_at_85%_50%,rgba(0,212,255,0.10),transparent_32%)]" />

          <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-cyan-300/10 blur-[110px]" />

          <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-400/10 blur-[110px]" />

          {/* BLUEPRINT CIRCLES */}

          <div className="pointer-events-none absolute left-[4%] top-24 h-36 w-36 rounded-full border border-blue-200/40" />

          <div className="pointer-events-none absolute left-[5.5%] top-[6.5rem] h-24 w-24 rounded-full border border-cyan-200/30" />

          <div className="pointer-events-none absolute bottom-20 right-[5%] h-48 w-48 rounded-full border border-blue-200/30" />

          <div className="pointer-events-none absolute bottom-28 right-[6.5%] h-32 w-32 rounded-full border border-cyan-200/25" />

          <div className="relative mx-auto max-w-7xl">

            {/* MAIN ABOUT GRID */}

            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

              {/* LEFT CONTENT */}

              <motion.div
                {...motionProps}
                variants={reveal}
                transition={{
                  duration: 0.75,
                }}
              >
                <SectionLabel icon={Plane}>
                  About Techno Wings 2K26
                </SectionLabel>

                {/* NATIONAL LEVEL BADGE */}

                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-[11px] font-black tracking-[0.18em] text-blue-700 shadow-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />

                  NATIONAL LEVEL

                  <span className="text-blue-300">
                    •
                  </span>

                  STUDENT POWERED
                </div>

                {/* HEADING */}

                <h2 className="font-outfit mt-6 text-4xl font-black leading-[1.12] tracking-tight text-[#06152e] sm:text-5xl md:text-6xl">
                  Welcome to

                  <span className="mt-3 block bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    Biggest Aerospace
                  </span>

                  <span className="mt-1 block text-[#06152e]">
                    & Technical Event
                  </span>
                </h2>

                {/* DECORATIVE LINE */}

                <div className="mt-7 flex items-center gap-2">
                  <div className="h-1 w-20 rounded-full bg-blue-600" />
                  <div className="h-1 w-8 rounded-full bg-cyan-400" />
                  <div className="h-1 w-3 rounded-full bg-indigo-400" />
                </div>

                {/* DESCRIPTION */}

                <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-[#60758e] sm:text-lg">
                  Techno Wings 2K26 is a two-day technical and aerospace event
                  organized by the Department of Aeronautical Engineering,
                  Annasaheb Dange College of Engineering and Technology, in
                  collaboration with ADATE Club. It brings together innovation,
                  engineering, creativity and competition through exciting
                  technical activities designed to challenge and inspire students.
                </p>

                {/* HIGHLIGHT PILLS */}

                <div className="mt-8 flex flex-wrap gap-3">

                  <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-[#334b68] shadow-[0_8px_25px_rgba(6,21,46,0.05)]">
                    <Plane
                      size={17}
                      className="text-cyan-500"
                    />
                    Aerospace
                  </div>

                  <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-[#334b68] shadow-[0_8px_25px_rgba(6,21,46,0.05)]">
                    <Trophy
                      size={17}
                      className="text-blue-500"
                    />
                    Competitions
                  </div>

                  <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-[#334b68] shadow-[0_8px_25px_rgba(6,21,46,0.05)]">
                    <Sparkles
                      size={17}
                      className="text-indigo-500"
                    />
                    Innovation
                  </div>

                </div>
              </motion.div>

              {/* RIGHT EVENT SLIDESHOW */}

              <motion.div
                initial={
                  reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 40,
                      }
                }
                whileInView={
                  reducedMotion
                    ? undefined
                    : {
                        opacity: 1,
                        x: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="relative"
              >
                <div className="relative mx-auto w-full max-w-[620px]">

                  {/* Main image frame */}

                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_30px_80px_rgba(6,21,46,0.14)]">

                    {/* Event image */}

                    <motion.img
                      key={activeEventSlide}
                      src={
                        eventShowcaseImages[
                          activeEventSlide
                        ].image
                      }
                      alt={
                        eventShowcaseImages[
                          activeEventSlide
                        ].title
                      }
                      initial={
                        reducedMotion
                          ? false
                          : {
                              opacity: 0,
                              scale: 1.06,
                            }
                      }
                      animate={
                        reducedMotion
                          ? {
                              opacity: 1,
                              scale: 1,
                            }
                          : {
                              opacity: 1,
                              scale: 1,
                            }
                      }
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* Image overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#06152e]/90 via-[#06152e]/15 to-transparent" />

                    {/* Event number */}

                    <div className="absolute left-6 top-6">
                      <div className="rounded-full border border-white/30 bg-[#06152e]/60 px-4 py-2 text-xs font-black tracking-[0.25em] text-white backdrop-blur-md">
                        EVENT{" "}
                        {
                          eventShowcaseImages[
                            activeEventSlide
                          ].number
                        }
                      </div>
                    </div>

                    {/* Event information */}

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <motion.div
                        key={`text-${activeEventSlide}`}
                        initial={
                          reducedMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 15,
                              }
                        }
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.6,
                          delay: 0.1,
                        }}
                      >
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
                          Techno Wings 2K26
                        </p>

                        <h3 className="font-outfit mt-2 text-2xl font-black text-white sm:text-3xl">
                          {
                            eventShowcaseImages[
                              activeEventSlide
                            ].title
                          }
                        </h3>

                        <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">
                          {
                            eventShowcaseImages[
                              activeEventSlide
                            ].subtitle
                          }
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* AUTO SLIDESHOW INDICATORS */}

                  <div className="mt-5 flex items-center justify-center gap-2">
                    {eventShowcaseImages.map(
                      (event, index) => (
                        <button
                          key={event.number}
                          type="button"
                          onClick={() =>
                            setActiveEventSlide(
                              index
                            )
                          }
                          aria-label={`Show event ${event.number}`}
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            index ===
                            activeEventSlide
                              ? "w-10 bg-blue-600"
                              : "w-2.5 bg-blue-200"
                          }`}
                        />
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* STAT CARDS */}

            <motion.div
              {...motionProps}
              variants={stagger}
              className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                [
                  CalendarDays,
                  "2 DAYS",
                  "Technical Fest",
                ],
                [
                  Trophy,
                  "7 EVENTS",
                  "Exciting Competitions",
                ],
                [
                  CalendarDays,
                  "15 – 16",
                  "October 2026",
                ],
                [
                  Users,
                  <AnimatedPrizeCounter
                    reducedMotion={reducedMotion}
                  />,
                  "Total rewards & opportunities",
                ],
              ].map(
                (
                  [Icon, title, subtitle],
                  index
                ) => (
                  <motion.div
                    key={`stat-${index}`}
                    variants={reveal}
                    whileHover={
                      reducedMotion
                        ? {}
                        : {
                            y: -9,
                            scale: 1.02,
                          }
                    }
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[24px]
                      border
                      border-blue-100
                      bg-white
                      p-7
                      shadow-[0_14px_45px_rgba(6,21,46,0.07)]
                      transition-all
                      duration-300
                      hover:border-cyan-300
                      hover:shadow-[0_22px_60px_rgba(0,184,255,0.15)]
                    "
                  >
                    {/* TOP GRADIENT */}

                    <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 opacity-80" />

                    {/* HOVER GLOW */}

                    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl transition duration-500 group-hover:bg-cyan-300/25" />

                    {/* ICON */}

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-cyan-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon
                        size={29}
                        strokeWidth={2}
                      />
                    </div>

                    {/* NUMBER / TITLE */}

                    <div className="relative mt-6 text-2xl font-black tracking-tight text-[#06152e] sm:text-3xl">
                      {title}
                    </div>

                    {/* SUBTITLE */}

                    <div className="relative mt-2 text-sm font-semibold leading-5 text-[#71839a]">
                      {subtitle}
                    </div>

                    {/* BOTTOM MARKER */}

                    <div className="mt-5 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                      <span className="h-1.5 w-6 rounded-full bg-blue-100 transition-all duration-300 group-hover:w-10 group-hover:bg-blue-300" />
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </section>

        {/* =================================================
            KEYNOTE TALKS HIGHLIGHT
        ================================================= */}

        <section className="relative overflow-hidden border-y border-cyan-200/80 bg-gradient-to-r from-cyan-50/70 via-white/90 to-blue-50/70 px-6 py-9 shadow-[0_8px_35px_rgba(37,99,235,0.08)] sm:py-10">

          <div className="pointer-events-none absolute left-0 top-1/2 h-px w-24 bg-gradient-to-r from-transparent to-cyan-300 opacity-70 sm:w-40" />

          <div className="pointer-events-none absolute right-0 top-1/2 h-px w-24 bg-gradient-to-l from-transparent to-blue-300 opacity-70 sm:w-40" />

          <motion.div
            {...motionProps}
            variants={reveal}
            transition={{
              duration: 0.7,
            }}
            className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5"
          >
            {/* Icon */}

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300 bg-white text-cyan-600 shadow-[0_0_22px_rgba(6,182,212,0.18)]">
              <Sparkles size={19} />
            </div>

            {/* Content */}

            <div>
              <p className="bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-600 bg-clip-text text-xs font-black uppercase tracking-[0.3em] text-transparent sm:text-sm">
                Keynote Talks
              </p>

              <p className="mt-1.5 text-sm font-semibold leading-6 text-[#506a84] sm:text-base">
                Eminent professionals and industry experts from leading
                Aerospace & Defence organizations will share their
                knowledge, experiences and insights during Techno Wings 2K26.
              </p>
            </div>
          </motion.div>
        </section>

        {/* =================================================
            EVENTS SECTION
        ================================================= */}

        <section
          id="events"
          className="relative overflow-hidden border-y border-blue-100 bg-[#edf6ff]/80 px-5 py-24 sm:px-6 sm:py-28"
        >
          {/* BACKGROUND ATMOSPHERE */}

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(0,119,255,0.12),transparent_38%)]" />

          <div className="pointer-events-none absolute left-1/2 top-[35%] h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[140px]" />

          {/* BLUEPRINT CIRCLES */}

          <div className="pointer-events-none absolute inset-0 opacity-50">
            <div className="absolute left-[6%] top-20 h-40 w-40 rounded-full border border-blue-300/20" />

            <div className="absolute left-[7.5%] top-[5.8rem] h-28 w-28 rounded-full border border-cyan-300/15" />

            <div className="absolute bottom-20 right-[5%] h-52 w-52 rounded-full border border-cyan-300/20" />

            <div className="absolute bottom-[7.5rem] right-[6.5%] h-36 w-36 rounded-full border border-blue-300/15" />
          </div>

          <div className="relative mx-auto max-w-[1500px]">

            {/* HEADER */}

            <motion.div
              {...motionProps}
              variants={reveal}
              transition={{
                duration: 0.75,
              }}
              className="text-center"
            >
              <SectionLabel icon={Sparkles}>
                Explore Events
              </SectionLabel>

              <h2 className="font-outfit mt-5 text-4xl font-black tracking-tight text-[#06152e] sm:text-5xl md:text-6xl">
                Discover Exciting Events
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-[#61758e] sm:text-lg sm:leading-8">
                From aerospace challenges to engineering design and technical
                problem-solving — there is something for every innovator.
              </p>

              <motion.div
                initial={
                  reducedMotion
                    ? false
                    : {
                        width: 0,
                        opacity: 0,
                      }
                }
                whileInView={{
                  width: 120,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.7,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="mx-auto mt-7 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"
              />
            </motion.div>

            {/* EVENT CARDS */}

            <div className="mt-16 grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-4">
              {categories.map(
                (category, index) => {
                  const Icon = category.icon;

                  const visualData = [
                    {
                      label:
                        "FLIGHT • CONTROL • AEROSPACE",
                      code: "AERO-01",
                      gradient:
                        "from-blue-100 via-cyan-50 to-white",
                    },
                    {
                      label:
                        "DESIGN • ENGINEERING • BUILD",
                      code: "DESIGN-02",
                      gradient:
                        "from-indigo-100 via-blue-50 to-white",
                    },
                    {
                      label:
                        "IDEAS • ANALYSIS • INNOVATION",
                      code: "TECH-03",
                      gradient:
                        "from-cyan-100 via-sky-50 to-white",
                    },
                    {
                      label:
                        "UAV • DRONE • AERIAL SYSTEMS",
                      code: "UAV-04",
                      gradient:
                        "from-blue-100 via-indigo-50 to-white",
                    },
                  ][index];

                  return (
                    <motion.article
                      key={category.title}
                      initial={
                        reducedMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 60,
                              scale: 0.97,
                            }
                      }
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.12,
                      }}
                      transition={{
                        delay: reducedMotion
                          ? 0
                          : index * 0.12,
                        duration: 0.7,
                        ease: [
                          0.16,
                          1,
                          0.3,
                          1,
                        ],
                      }}
                      whileHover={
                        reducedMotion
                          ? undefined
                          : {
                              y: -10,
                              transition: {
                                duration: 0.25,
                              },
                            }
                      }
                      className="
                        group
                        relative
                        flex
                        min-h-[610px]
                        h-full
                        flex-col
                        overflow-hidden
                        rounded-[30px]
                        border
                        border-blue-100
                        bg-white
                        shadow-[0_20px_65px_rgba(6,21,46,0.08)]
                        transition-all
                        duration-500
                        hover:border-cyan-300
                        hover:shadow-[0_30px_90px_rgba(0,157,255,0.18)]
                      "
                    >
                      {/* TOP GLOW */}

                      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 opacity-70" />

                      {/* EVENT NUMBER */}

                      <div className="absolute right-7 top-6 z-20 text-xs font-black tracking-[0.3em] text-blue-200">
                        0{index + 1}
                      </div>

                      {/* ATTRACTIVE VISUAL / IMAGE AREA */}

                      <div
                        className={`
                          relative
                          mx-5
                          mt-5
                          h-[225px]
                          shrink-0
                          overflow-hidden
                          rounded-[24px]
                          border
                          border-blue-100
                          bg-gradient-to-br
                          ${visualData.gradient}
                        `}
                      >
                        {/* TECHNICAL GRID */}

                        <div
                          className="
                            absolute
                            inset-0
                            opacity-60
                            [background-image:linear-gradient(rgba(37,99,235,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.07)_1px,transparent_1px)]
                            [background-size:26px_26px]
                          "
                        />

                        {/* LARGE RADAR CIRCLES */}

                        <div className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30" />

                        <div className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/30" />

                        <div className="absolute left-1/2 top-1/2 h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/25" />

                        {/* RADIAL LINES */}

                        <div className="absolute left-1/2 top-0 h-full w-px bg-blue-400/10" />

                        <div className="absolute left-0 top-1/2 h-px w-full bg-blue-400/10" />

                        <div className="absolute left-1/2 top-1/2 h-[270px] w-px origin-center -translate-x-1/2 -translate-y-1/2 rotate-45 bg-cyan-400/10" />

                        <div className="absolute left-1/2 top-1/2 h-[270px] w-px origin-center -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-blue-400/10" />

                        {/* FLIGHT PATH */}

                        <motion.div
                          initial={
                            reducedMotion
                              ? false
                              : {
                                  x: "-120%",
                                }
                          }
                          whileInView={{
                            x: "120%",
                          }}
                          viewport={{
                            once: true,
                            amount: 0.2,
                          }}
                          transition={{
                            delay: reducedMotion
                              ? 0
                              : index * 0.15,
                            duration: 1.4,
                            ease: "easeInOut",
                          }}
                          className="
                            absolute
                            left-[-30%]
                            top-[58%]
                            h-[2px]
                            w-[160%]
                            rotate-[-10deg]
                            bg-gradient-to-r
                            from-transparent
                            via-cyan-400
                            to-transparent
                          "
                        />

                        {/* CATEGORY-SPECIFIC CENTRAL VISUAL */}

                        <motion.div
                          initial={
                            reducedMotion
                              ? false
                              : {
                                  opacity: 0,
                                  scale: 0.7,
                                  rotate: -8,
                                }
                          }
                          whileInView={{
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                          }}
                          viewport={{
                            once: true,
                            amount: 0.2,
                          }}
                          transition={{
                            delay: reducedMotion
                              ? 0
                              : index * 0.12 + 0.2,
                            duration: 0.65,
                            ease: [
                              0.16,
                              1,
                              0.3,
                              1,
                            ],
                          }}
                          className="
                            absolute
                            left-1/2
                            top-1/2
                            flex
                            h-[112px]
                            w-[112px]
                            -translate-x-1/2
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white
                            bg-white/90
                            text-blue-600
                            shadow-[0_18px_45px_rgba(37,99,235,0.2)]
                            backdrop-blur-md
                            transition-all
                            duration-500
                            group-hover:scale-110
                            group-hover:border-cyan-300
                            group-hover:text-cyan-600
                          "
                        >
                          <Icon
                            size={56}
                            strokeWidth={1.7}
                          />
                        </motion.div>

                        {/* CORNER TECH MARKERS */}

                        <div className="absolute left-5 top-5 flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />

                          <span className="text-[9px] font-black tracking-[0.2em] text-blue-500/70">
                            {visualData.code}
                          </span>
                        </div>

                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                          <span className="text-[8px] font-black tracking-[0.18em] text-blue-500/60">
                            {visualData.label}
                          </span>

                          <span className="h-2 w-2 rounded-full bg-blue-500" />
                        </div>
                      </div>

                      {/* CARD CONTENT */}

                      <div className="flex flex-1 flex-col px-7 pb-8 pt-7 sm:px-8">

                        {/* EVENT LABEL */}

                        <div className="text-[11px] font-black uppercase tracking-[0.28em] text-cyan-600">
                          Event{" "}
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </div>

                        {/* TITLE */}

                        <h3 className="font-outfit mt-2 min-h-[58px] max-w-[300px] text-[26px] font-black leading-[1.05] tracking-tight text-[#06152e] sm:text-[28px]">
                          {category.title}
                        </h3>

                        {/* DRONE BADGE */}

                        {category.slug === "drone" && (
                          <span className="mt-3 inline-flex w-fit rounded-full bg-cyan-50 px-4 py-2 text-xs font-black tracking-wide text-cyan-700">
                            FREE ENTRY • REGISTRATION REQUIRED
                          </span>
                        )}

                        {/* DESCRIPTION */}

                        <p className="mt-5 min-h-[105px] text-[15px] font-medium leading-6 text-[#61758e]">
                          {category.description}
                        </p>

                        {/* DIVIDER */}

                        <div className="my-5 h-px w-full bg-slate-100" />

                        {/* EVENT LIST */}

                        <div className="space-y-3.5">
                          {category.events.map(
                            (event) => (
                              <div
                                key={event}
                                className="flex items-center gap-3 text-[15px] font-bold text-[#334b68]"
                              >
                                <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-500" />

                                <span>
                                  {event}
                                </span>
                              </div>
                            )
                          )}
                        </div>

                        {/* BOTTOM INFORMATION */}

                        <div className="mt-auto pt-8">
                          <div className="flex items-center justify-between rounded-xl border border-blue-50 bg-blue-50/50 px-4 py-3">
                            <span className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                              {category.count}
                            </span>

                            <span className="text-xs font-bold text-[#7890a9]">
                              Technical Event
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  );
                }
              )}
            </div>

            {/* HIGHLIGHTED VIEW ALL 7 EVENTS */}

            <motion.div
              initial={
                reducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
                      scale: 0.94,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
              className="mt-16 flex justify-center"
            >
              <Link
                to="/events?category=aerospace"
                viewTransition
                className="
                  group
                  relative
                  flex
                  min-w-[260px]
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-2xl
                  border
                  border-blue-400/40
                  bg-gradient-to-r
                  from-blue-600
                  via-indigo-600
                  to-blue-700
                  px-10
                  py-5
                  text-base
                  font-black
                  text-white
                  shadow-[0_15px_45px_rgba(37,99,235,0.28)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_22px_60px_rgba(37,99,235,0.38)]
                  sm:min-w-[300px]
                  sm:px-12
                  sm:py-5
                  sm:text-lg
                "
              >
                {!reducedMotion && (
                  <span
                    className="
                      absolute
                      inset-y-0
                      -left-24
                      w-16
                      skew-x-[-20deg]
                      bg-white/25
                      transition-all
                      duration-700
                      group-hover:left-[120%]
                    "
                  />
                )}

                <span className="absolute inset-0 rounded-2xl ring-1 ring-cyan-300/30" />

                <span className="relative">
                  View All 7 Events
                </span>

                <ArrowRight
                  size={21}
                  className="relative transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* =================================================
            EVENT STRIP
        ================================================= */}

        <section className="relative overflow-hidden bg-[#06152e] px-6 py-12 text-white">
          {/* subtle background glow */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(0,200,255,0.08),transparent)]" />

          {/* rotating / moving event track */}
          <div className="relative overflow-hidden">
            <motion.div
              animate={
                reducedMotion
                  ? {}
                  : {
                      x: ["0%", "-50%"],
                    }
              }
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max items-center"
            >
              {/* FIRST SET */}
              <div className="flex shrink-0 items-center gap-10 pr-10">
                {events.map((event) => (
                  <span
                    key={`first-${event.name}`}
                    className="whitespace-nowrap text-lg font-black uppercase tracking-[0.18em] text-white sm:text-xl lg:text-2xl"
                  >
                    {event.name}
                  </span>
                ))}
              </div>

              {/* SECOND SET — creates seamless loop */}
              <div className="flex shrink-0 items-center gap-10 pr-10">
                {events.map((event) => (
                  <span
                    key={`second-${event.name}`}
                    className="whitespace-nowrap text-lg font-black uppercase tracking-[0.18em] text-white sm:text-xl lg:text-2xl"
                  >
                    {event.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        {/* =========================================================
            AEROMODELLING EXPERIENCE
        ========================================================= */}

        <section
          id="aeromodelling"
          className="relative overflow-hidden border-t border-blue-100 bg-white/80 px-6 py-24 sm:py-28 lg:py-32"
        >
          {/* =====================================================
              BACKGROUND ATMOSPHERE
          ===================================================== */}

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_30%,rgba(37,99,235,0.08),transparent_28%),radial-gradient(circle_at_92%_65%,rgba(0,200,255,0.08),transparent_30%)]" />

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(37,99,235,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(37,99,235,0.8) 1px, transparent 1px)
              `,
              backgroundSize: "42px 42px",
            }}
          />

          {/* Decorative aerospace rings */}

          <motion.div
            animate={
              reducedMotion
                ? {}
                : {
                    rotate: 360,
                  }
            }
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full border border-blue-200/50"
          />

          <motion.div
            animate={
              reducedMotion
                ? {}
                : {
                    rotate: -360,
                  }
            }
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full border border-cyan-200/40"
          />

          <div className="relative mx-auto max-w-7xl">

            {/* =====================================================
                SECTION HEADER
            ===================================================== */}

            <motion.div
              {...motionProps}
              variants={reveal}
              transition={{
                duration: 0.7,
              }}
              className="mb-14 text-center"
            >
              <SectionLabel icon={Plane}>
                Aero-Modelling Experience
              </SectionLabel>

              <h2 className="font-outfit text-4xl font-black tracking-tight text-[#06152e] sm:text-5xl md:text-6xl">
                SEE IT.
                <span className="text-blue-600"> BUILD IT.</span>
                <span className="text-[#06152e]"> FLY IT.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#63778e] sm:text-base">
                Explore aircraft models, understand the fundamentals of flight,
                build your own model and experience the world of aeromodelling
                through a hands-on aerospace experience.
              </p>
            </motion.div>


            {/* =====================================================
                MAIN GRID
            ===================================================== */}

            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">


              {/* ===================================================
                  LEFT — UNIQUE AEROMODELLING SHOWCASE
              =================================================== */}

              <motion.div
                {...motionProps}
                variants={reveal}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                className="relative"
              >

                <div className="relative mx-auto w-full max-w-[610px]">


                  {/* ===============================================
                      DECORATIVE FLIGHT PATH
                  =============================================== */}

                  <div className="pointer-events-none absolute -inset-8 hidden sm:block">

                    <motion.div
                      animate={
                        reducedMotion
                          ? {}
                          : {
                              rotate: 360,
                            }
                      }
                      transition={{
                        duration: 28,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 rounded-[3rem] border border-dashed border-blue-200/70"
                    />

                    <motion.div
                      animate={
                        reducedMotion
                          ? {}
                          : {
                              rotate: -360,
                            }
                      }
                      transition={{
                        duration: 38,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-8 rounded-[2.5rem] border border-cyan-200/50"
                    />

                  </div>


                  {/* ===============================================
                      IMAGE FRAME — AUTOMATIC SLIDESHOW
                      
                      ADD MORE IMAGES ONLY IN THE ARRAY BELOW.
                      ALL IMAGES USE THIS SAME LOCATION.
                  =============================================== */}

                  <div className="relative z-10 overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-2 shadow-[0_30px_80px_rgba(6,21,46,0.12)]">

                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] bg-[#edf6ff]">

                      {/* =================================================
                          SLIDESHOW IMAGES

                          ADD FUTURE IMAGES HERE:

                          {
                            src: "/images/aeromodelling/your-image.jpg",
                            alt: "Your image description",
                          },

                          The images will automatically rotate in the
                          SAME frame. No additional location is created.
                      ================================================= */}

                      <div className="absolute inset-0 overflow-hidden rounded-[1.5rem]">
                        <AnimatePresence initial={false} mode="sync">
                          <motion.img
                            key={aeromodellingSlide}
                            src={aeromodellingImages[aeromodellingSlide].src}
                            alt={aeromodellingImages[aeromodellingSlide].alt}
                            initial={{
                              opacity: 0,
                              scale: 1.06,
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              scale: 0.98,
                            }}
                            transition={{
                              duration: 0.8,
                              ease: "easeInOut",
                            }}
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        </AnimatePresence>
                      </div>


                      {/* =========================================
                          SLIDESHOW ANIMATION
                      ========================================= */}

                      {!reducedMotion && (
                        <style>
                          {`
                            @keyframes aeroModellingSlide {
                              0% {
                                opacity: 0;
                              }

                              3% {
                                opacity: 1;
                              }

                              30% {
                                opacity: 1;
                              }

                              34% {
                                opacity: 0;
                              }

                              100% {
                                opacity: 0;
                              }
                            }
                          `}
                        </style>
                      )}


                      {/* =========================================
                          LIGHT IMAGE OVERLAY
                      ========================================= */}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#06152e]/70 via-transparent to-transparent" />


                      {/* =========================================
                          MOVING SCAN LINE
                      ========================================= */}

                      <motion.div
                        animate={
                          reducedMotion
                            ? {}
                            : {
                                y: ["-120%", "220%"],
                              }
                        }
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="pointer-events-none absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-cyan-300/15 to-transparent"
                      />


                      {/* =========================================
                          TOP STATUS
                      ========================================= */}

                      <div className="absolute left-5 top-5">

                        <div className="flex items-center gap-2 rounded-full border border-white/30 bg-[#06152e]/60 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">

                          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                          Aero Experience

                        </div>

                      </div>


                      {/* =========================================
                          BOTTOM IMAGE INFORMATION
                      ========================================= */}

                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">

                        <div className="flex items-end justify-between gap-4">

                          <div>

                            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-300">
                              Techno Wings 2K26
                            </p>

                            <h3 className="font-outfit mt-2 text-2xl font-black text-white sm:text-3xl">
                              Aero-Modelling
                            </h3>

                            <p className="mt-1 text-xs font-medium text-white/75 sm:text-sm">
                              Explore • Build • Understand • Fly
                            </p>

                          </div>

                          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-md sm:flex">
                            <Plane size={22} />
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>


                  {/* ===============================================
                      FLOATING FLIGHT DATA
                  =============================================== */}

                  <motion.div
                    animate={
                      reducedMotion
                        ? {}
                        : {
                            y: [0, -8, 0],
                          }
                    }
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-6 -left-2 z-20 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-[0_15px_40px_rgba(6,21,46,0.12)] sm:-left-6"
                  >

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Wind size={19} />
                      </div>

                      <div>

                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                          Experience
                        </p>

                        <p className="mt-0.5 text-sm font-black text-[#06152e]">
                          Explore & Learn
                        </p>

                      </div>

                    </div>

                  </motion.div>


                  {/* ===============================================
                      FLOATING AIRCRAFT
                  =============================================== */}

                  <motion.div
                    animate={
                      reducedMotion
                        ? {}
                        : {
                            x: [-12, 12, -12],
                            y: [0, -7, 0],
                            rotate: [-4, 4, -4],
                          }
                    }
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-3 top-[38%] z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-cyan-200 bg-white text-blue-600 shadow-[0_12px_35px_rgba(6,21,46,0.12)] sm:flex"
                  >
                    <Plane size={20} />
                  </motion.div>


                  {/* ===============================================
                      SMALL FLIGHT COORDINATES
                  =============================================== */}

                  <div className="absolute -right-2 -top-7 z-20 hidden rounded-xl border border-blue-100 bg-white px-4 py-2 shadow-sm sm:block">

                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Flight Deck
                    </p>

                    <p className="mt-0.5 font-mono text-xs font-bold text-blue-600">
                      AERO / 2K26
                    </p>

                  </div>

                </div>

              </motion.div>


              {/* ===================================================
                  RIGHT — EVENT INFORMATION
              =================================================== */}

              <div>


                {/* ===============================================
                    DATE / TIME
                =============================================== */}

                <div className="grid gap-4 sm:grid-cols-2">

                  <motion.div
                    {...motionProps}
                    variants={reveal}
                    transition={{
                      duration: 0.6,
                      delay: 0.12,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 shadow-[0_15px_45px_rgba(6,21,46,0.06)] transition hover:border-blue-200 hover:shadow-[0_20px_55px_rgba(37,99,235,0.10)]"
                  >

                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-50 blur-2xl transition group-hover:bg-blue-100" />

                    <div className="relative">

                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <CalendarDays size={21} />
                      </div>

                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                        Event Dates
                      </p>

                      <p className="mt-1 font-outfit text-2xl font-black text-[#06152e]">
                        15 & 16
                      </p>

                      <p className="mt-1 text-xs font-medium text-slate-500">
                        Two-day aeromodelling experience
                      </p>

                    </div>

                  </motion.div>


                  <motion.div
                    {...motionProps}
                    variants={reveal}
                    transition={{
                      duration: 0.6,
                      delay: 0.18,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 shadow-[0_15px_45px_rgba(6,21,46,0.06)] transition hover:border-cyan-200 hover:shadow-[0_20px_55px_rgba(0,184,255,0.10)]"
                  >

                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-50 blur-2xl transition group-hover:bg-cyan-100" />

                    <div className="relative">

                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                        <Clock3 size={21} />
                      </div>

                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                        Experience Time
                      </p>

                      <p className="mt-1 font-outfit text-2xl font-black text-[#06152e]">
                        10 AM – 4 PM
                      </p>

                      <p className="mt-1 text-xs font-medium text-slate-500">
                        Open experience hours
                      </p>

                    </div>

                  </motion.div>

                </div>


                {/* ===============================================
                    INTRODUCTION
                =============================================== */}

                <motion.div
                  {...motionProps}
                  variants={reveal}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                  }}
                  className="mt-8"
                >

                  <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-600">
                    What awaits you
                  </p>

                  <h3 className="font-outfit mt-3 text-2xl font-black tracking-tight text-[#06152e] sm:text-3xl">
                    Experience aircraft beyond the classroom.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#63778e] sm:text-base">
                    Discover the principles of flight through real models,
                    practical demonstrations and hands-on aeromodelling
                    activities designed to connect engineering theory with
                    the experience of building and flying an aircraft.
                  </p>

                </motion.div>


                {/* ===============================================
                    EXPERIENCE CARDS
                =============================================== */}

                <div className="mt-7 space-y-3">

                  {[
                    {
                      icon: Eye,
                      title: "Aircraft Models on Display",
                      text: "Explore different aircraft models and understand their design, structure and flying principles.",
                    },
                    {
                      icon: Wrench,
                      title: "Hands-on Model Building",
                      text: "Learn the fundamentals of constructing lightweight aircraft models using practical techniques.",
                    },
                    {
                      icon: Wind,
                      title: "Make & Fly",
                      text: "Build a model aircraft and experience the fundamentals of flight through a practical flying activity.",
                    },
                    {
                      icon: Sparkles,
                      title: "Learn • Build • Fly",
                      text: "Turn curiosity into practical aerospace learning through an engaging aeromodelling experience.",
                    },
                  ].map((item, index) => {

                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        {...motionProps}
                        variants={reveal}
                        transition={{
                          duration: 0.5,
                          delay: 0.22 + index * 0.07,
                        }}
                        whileHover={{
                          x: 5,
                        }}
                        className="group flex gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm transition duration-300 hover:border-blue-200 hover:shadow-[0_12px_35px_rgba(37,99,235,0.08)]"
                      >

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                          <Icon size={19} />
                        </div>

                        <div>

                          <h4 className="text-sm font-black text-[#06152e] sm:text-base">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-xs leading-6 text-[#708198] sm:text-sm">
                            {item.text}
                          </p>

                        </div>

                      </motion.div>
                    );

                  })}

                </div>


                {/* ===============================================
                    RESOURCE PERSON
                =============================================== */}

                <motion.div
                  {...motionProps}
                  variants={reveal}
                  transition={{
                    duration: 0.7,
                    delay: 0.5,
                  }}
                  className="mt-7 overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-5 shadow-sm"
                >

                  <div className="flex items-center justify-between gap-4">

                    <div>

                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600">
                        Special Hands-on Session
                      </p>

                      <p className="mt-1 font-outfit text-lg font-black text-[#06152e]">
                        Shri. Madhav Khare
                      </p>

                      <p className="mt-1 text-xs font-medium text-[#708198]">
                        Aero-Modeller & Key Resource Person
                      </p>

                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-100 bg-white text-cyan-600 shadow-sm">
                      <Plane size={21} />
                    </div>

                  </div>

                </motion.div>


                {/* ===============================================
                    EXPERIENCE BADGE
                =============================================== */}

                <motion.div
                  {...motionProps}
                  variants={reveal}
                  transition={{
                    duration: 0.6,
                    delay: 0.58,
                  }}
                  className="mt-6"
                >

                  <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-5 py-3 text-xs font-black uppercase tracking-[0.15em] text-blue-700 shadow-sm">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />

                    Open for all curious minds

                    <ArrowUpRight size={15} />

                  </div>

                </motion.div>

              </div>

            </div>

          </div>
        </section>
        {/* =================================================
            SPONSOR
        ================================================= */}

        <section
          id="association"
          className="relative overflow-hidden bg-white/80 px-6 py-24"
        >
          <div className="mx-auto max-w-6xl text-center">

            <motion.div
              {...motionProps}
              variants={reveal}
              transition={{
                duration: 0.7,
              }}
            >
              <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-600">
                In Association With
              </p>

              <h2 className="font-outfit mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                The Aeronautical Society of India
              </h2>

              <p className="mt-3 text-sm font-bold uppercase tracking-[0.25em] text-[#6d8096]">
                Pune Branch
              </p>
            </motion.div>

            <motion.div
              {...motionProps}
              variants={reveal}
              transition={{
                delay: 0.15,
                duration: 0.8,
              }}
              className="mx-auto mt-12 max-w-3xl rounded-3xl border border-blue-100 bg-white p-8 shadow-[0_20px_60px_rgba(6,21,46,0.08)] sm:p-12"
            >
              <motion.div
                animate={
                  reducedMotion
                    ? {}
                    : {
                        y: [
                          0,
                          -7,
                          0,
                        ],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-white p-5 shadow-[0_18px_55px_rgba(6,21,46,0.1)] sm:h-52 sm:w-52"
              >
                <img
                  src={aesiLogo}
                  alt="The Aeronautical Society of India, Pune Branch"
                  className="h-full w-full object-contain"
                />
              </motion.div>

              <h3 className="font-outfit mt-8 text-xl font-black sm:text-2xl">
                The Aeronautical Society of India
              </h3>

              <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
                Pune Branch
              </p>

              <div className="mx-auto mt-7 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#63778e]">
                Supporting innovation, knowledge and excellence in the field of aeronautical and aerospace engineering.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          id="contact"
          className="relative overflow-hidden bg-[#edf6ff]/80 px-6 py-24 sm:py-28"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(0,119,255,0.07),transparent_36%)]" />

          <div className="relative mx-auto max-w-7xl">

            <motion.div
              {...motionProps}
              variants={reveal}
              transition={{
                duration: 0.7,
              }}
              className="text-center"
            >
              <SectionLabel icon={Mail}>
                Get in Touch
              </SectionLabel>

              <h2 className="font-outfit text-4xl font-black sm:text-5xl md:text-6xl">
                Contact Us
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#61758e] sm:text-lg">
                Have questions about Techno Wings 2K26? Reach out to our team using the details below.
              </p>
            </motion.div>

            <motion.div
              {...motionProps}
              variants={stagger}
              className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2"
            >
              {/* EMAIL */}

              <motion.a
                variants={reveal}
                href="mailto:techowingsk@gmail.com"
                className="group rounded-3xl border border-blue-100 bg-white p-8 text-center shadow-[0_16px_50px_rgba(6,21,46,0.06)] transition hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_24px_60px_rgba(0,184,255,0.12)]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-600">
                  <Mail size={29} />
                </div>

                <h3 className="font-outfit mt-6 text-lg font-black tracking-wide">
                  EMAIL
                </h3>

                <p className="mt-4 font-bold text-blue-700">
                  techowingsk@gmail.com
                </p>

                <p className="mt-2 text-sm text-[#708198]">
                  Official Event Enquiries
                </p>
              </motion.a>

              {/* LOCATION */}

              <motion.div
                variants={reveal}
                className="group rounded-3xl border border-blue-100 bg-white p-8 text-center shadow-[0_16px_50px_rgba(6,21,46,0.06)] transition hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_24px_60px_rgba(0,184,255,0.12)]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-600">
                  <MapPin size={29} />
                </div>

                <h3 className="font-outfit mt-6 text-lg font-black tracking-wide">
                  LOCATION
                </h3>

                <p className="mt-4 font-bold text-blue-700">
                  Annasaheb Dange College of Engineering and Technology, Ashta
                </p>

                <p className="mt-2 text-sm leading-6 text-[#708198]">
                  Taluka Walwa, District Sangli, Maharashtra – 416301
                </p>
              </motion.div>
            </motion.div>

            {/* CONTACT PAGE */}

            <motion.div
              {...motionProps}
              variants={reveal}
              transition={{
                delay: 0.15,
              }}
              className="mt-12 text-center"
            >
              <Link
                to="/contact"
                viewTransition
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-black text-white shadow-[0_12px_35px_rgba(37,99,235,0.25)] transition hover:-translate-y-1"
              >
                Open Contact Page

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* =================================================
            FOOTER
        ================================================= */}

        <footer className="relative z-10 border-t border-white/10 bg-[#010611] px-6 py-12 text-white">
          <div className="mx-auto max-w-7xl">

            <div className="flex flex-col justify-between gap-10 md:flex-row">

              {/* FOOTER BRAND */}

              <div>
                <div className="flex items-center gap-4">
                  <img
                    src={technoWingsLogo}
                    alt="Techno Wings 2K26"
                    className="h-16 w-auto object-contain"
                  />

                  <div>
                    <p className="text-lg font-black">
                      TECHNO WINGS 2K26
                    </p>

                    <p className="mt-1 text-[10px] font-bold tracking-[0.25em] text-cyan-400">
                      TECHNICAL & AEROSPACE EVENT
                    </p>
                  </div>
                </div>

                <p className="mt-5 max-w-md text-sm leading-6 text-[#8999ad]">
                  A two-day technical and aerospace event celebrating innovation, engineering, creativity and competition.
                </p>

                <p className="mt-4 text-sm font-bold text-cyan-400">
                  Organized by ADATE Club
                </p>
              </div>

              {/* ORGANIZED BY */}

              <div className="max-w-md">
                <div className="mt-4 flex items-start gap-4">
                  <img
                    src={collegeLogo}
                    alt="College Symbol"
                    className="h-20 w-20 shrink-0 object-contain"
                  />

                  <p className="text-sm leading-7 text-[#8999ad]">
                    Department of Aeronautical Engineering
                    <br />
                    Annasaheb Dange College of Engineering & Technology
                    <br />
                    Ashta, Taluka Walwa, District Sangli,
                    <br />
                    Maharashtra – 416301
                  </p>
                </div>
              </div>
            </div>

            {/* FOOTER BOTTOM */}

            <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center text-xs text-[#71839a] sm:flex-row sm:text-left">
              <span>
                © 2026 Techno Wings 2K26 • All Rights Reserved
              </span>

              <div className="flex gap-5 font-semibold">
                <Link
                  to="/events"
                  viewTransition
                  className="transition hover:text-cyan-400"
                >
                  Events
                </Link>

                <Link
                  to="/register"
                  viewTransition
                  className="transition hover:text-cyan-400"
                >
                  Register
                </Link>

                <Link
                  to="/verify"
                  viewTransition
                  className="transition hover:text-cyan-400"
                >
                  Verify
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;