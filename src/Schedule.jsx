import React from "react";
import { CalendarDays, MapPin, Clock3, Plane, ArrowRight } from "lucide-react";

const dayOne = [
  { time: "09:00 AM – 09:30 AM", event: "Registration", venue: "Ground Floor CSE Department" },
  { time: "09:30 AM – 10:00 AM", event: "Inauguration & Opening Ceremony", venue: "Auditorium hall" },
  { time: "10:00 AM – 10:30 AM", event: "Aeronautical Society of India (AeSI) Inaugural – Guest Speaker", venue: "Auditorium hall" },
  { time: "10:30 AM – 12:00 PM", event: "DRDO Scientist – Invited Guest Speaker", venue: "Auditorium hall" },
  { time: "12:00 PM – 01:15 PM", event: "Aeromodelling", venue: "Aero Seminar Hall" },
  { time: "11:30 AM – 01:00 PM", event: "Water Rocket", venue: "College Ground" },
  { time: "10:00 AM – 01:00 PM", event: "Flight Simulator", venue: "UAV Lab" },
  { time: "02:00 PM – 04:00 PM", event: "Paper Presentation", venue: "Collaborative Classroom" },
  { time: "01:15 PM – 02:00 PM", event: "Lunch Break", venue: "—" },
  { time: "02:00 PM – 04:00 PM", event: "Aero Expo", venue: "Aero Department" },
  { time: "04:30 PM – 05:00 PM", event: "Day 1 Results / Announcements", venue: "Aero Seminar Hall" },
];

const dayTwo = [
  { time: "09:00 AM – 09:30 AM", event: "Registration", venue: "Ground Floor CSE Department" },
  { time: "10:00 AM – 04:00 PM", event: "Aero Expo", venue: "Aero Department" },
  { time: "09:30 PM – 05:00 PM", event: "Aeromodelling", venue: "Aero Seminar Hall" },
  { time: "09:30 AM – 01:00 PM", event: "Paper Presentation", venue: "Collaborative Classroom" },
  { time: "09:30 AM – 01:00 PM", event: "Chuck Glider", venue: "Aerodynamics Lab" },
  { time: "01:00 PM – 02:00 PM", event: "Lunch Break", venue: "—" },
  { time: "02:00 PM – 04:30 PM", event: "CAD Master", venue: "CAD Lab" },
  { time: "02:00 PM – 04:30 PM", event: "Reasoning Rumble", venue: "Collaborative Classroom" },
  { time: "04:30 PM – 05:00 PM", event: "Judges’ Evaluation and Finalization", venue: "—" },
  { time: "05:00 PM – 06:00 PM", event: "Valedictory and Prize Distribution", venue: "Auditorium hall" },
];

function ScheduleTable({ rows }) {
  return (
    <div className="tw-schedule-table-wrap">
      <table className="tw-schedule-table">
        <thead>
          <tr><th>Time</th><th>Event</th><th>Venue</th></tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row.event}-${index}`}>
              <td className="tw-time"><Clock3 size={15} aria-hidden="true" /> <span>{row.time}</span></td>
              <td className="tw-event">{row.event}</td>
              <td className={row.venue === "Aerodynamics Lab" ? "tw-venue tw-highlight-venue" : "tw-venue"}>
                {row.venue === "Aerodynamics Lab" && <MapPin size={15} aria-hidden="true" />}
                {row.venue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Schedule() {
  return (
    <main className="tw-schedule-page">
      <style>{`
        .tw-schedule-page{--tw-navy:#082f5f;--tw-blue:#0c4b86;--tw-gold:#e4b84f;--tw-ink:#18334f;--tw-muted:#60758b;min-height:100vh;padding:clamp(20px,4vw,54px) clamp(14px,4vw,42px) 60px;background:radial-gradient(circle at 90% 0%,#e9f5ff 0,transparent 32%),linear-gradient(180deg,#f7fbff 0%,#fff 62%,#f8fbff 100%);color:var(--tw-ink);font-family:inherit}
        .tw-schedule-container{max-width:1180px;margin:0 auto}
        .tw-schedule-hero{position:relative;overflow:hidden;text-align:center;padding:clamp(28px,5vw,54px) 20px 32px;border:1px solid #d7e5f2;border-radius:24px;background:linear-gradient(135deg,rgba(255,255,255,.97),rgba(235,246,255,.94));box-shadow:0 14px 40px rgba(8,47,95,.08)}
        .tw-schedule-hero:before,.tw-schedule-hero:after{content:"";position:absolute;width:220px;height:220px;border:1px solid rgba(228,184,79,.45);border-radius:50%;pointer-events:none}.tw-schedule-hero:before{left:-135px;top:-145px}.tw-schedule-hero:after{right:-135px;bottom:-155px}
        .tw-schedule-kicker{display:inline-flex;align-items:center;gap:8px;color:var(--tw-blue);font-size:.8rem;font-weight:800;letter-spacing:.15em;text-transform:uppercase}
        .tw-schedule-title{margin:12px 0 8px;color:var(--tw-navy);font-size:clamp(2.1rem,5.2vw,4rem);line-height:1.05;font-weight:900;letter-spacing:-.04em}.tw-schedule-title span{color:#b88619}
        .tw-schedule-subtitle{margin:0;color:var(--tw-muted);font-size:clamp(1rem,2vw,1.18rem)}
        .tw-schedule-meta{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:24px auto 0;max-width:900px;text-align:left}
        .tw-meta-card{display:flex;align-items:center;gap:12px;min-width:0;padding:14px 16px;border:1px solid #e0eaf3;border-radius:14px;background:rgba(255,255,255,.9)}.tw-meta-icon{display:grid;place-items:center;flex:0 0 42px;width:42px;height:42px;border-radius:12px;background:#eaf3fc;color:var(--tw-blue)}.tw-meta-label{display:block;margin-bottom:3px;color:var(--tw-muted);font-size:.75rem;font-weight:700}.tw-meta-value{display:block;color:var(--tw-navy);font-size:.9rem;font-weight:800;line-height:1.35}
        .tw-schedule-nav{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin:22px 0 30px}.tw-schedule-nav a{display:inline-flex;align-items:center;gap:8px;padding:11px 17px;border-radius:999px;border:1px solid #d9e5f1;background:#fff;color:var(--tw-navy);font-weight:800;font-size:.9rem;text-decoration:none;transition:transform .2s,background .2s}.tw-schedule-nav a:hover{transform:translateY(-2px);background:#edf6ff}
        .tw-day-section{margin-top:28px;scroll-margin-top:90px}.tw-day-heading{display:flex;align-items:center;gap:14px;margin:0 0 14px}.tw-day-badge{display:grid;place-items:center;flex:0 0 48px;width:48px;height:48px;border-radius:15px;background:var(--tw-navy);color:#fff;font-size:1.1rem;font-weight:900;box-shadow:4px 4px 0 var(--tw-gold)}.tw-day-heading h2{margin:0;color:var(--tw-navy);font-size:clamp(1.25rem,2.5vw,1.8rem);font-weight:900}.tw-day-heading p{margin:4px 0 0;color:var(--tw-muted);font-size:.9rem}
        .tw-schedule-table-wrap{overflow:hidden;border:1px solid #dbe6f0;border-radius:17px;background:#fff;box-shadow:0 8px 24px rgba(8,47,95,.055)}.tw-schedule-table{width:100%;border-collapse:collapse;text-align:left}.tw-schedule-table th{padding:15px 17px;background:linear-gradient(90deg,#082f5f,#104c83);color:#fff;font-size:.78rem;letter-spacing:.08em;text-transform:uppercase}.tw-schedule-table td{padding:13px 17px;border-bottom:1px solid #eaf0f5;font-size:.91rem;line-height:1.4}.tw-schedule-table tbody tr:last-child td{border-bottom:0}.tw-schedule-table tbody tr:nth-child(even){background:#f8fbfe}.tw-schedule-table tbody tr:hover{background:#edf6ff}.tw-time{white-space:nowrap;color:#42627f;font-size:.82rem!important;font-weight:700}.tw-time svg{display:none;vertical-align:middle;margin-right:5px}.tw-event{color:#153a61;font-weight:800}.tw-venue{color:#526b83}
        .tw-schedule-footer{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;margin-top:30px;padding:22px 24px;border-radius:18px;background:var(--tw-navy);color:#fff}.tw-schedule-footer h3{margin:0 0 5px;font-size:1.2rem}.tw-schedule-footer p{margin:0;color:#d5e5f4;font-size:.9rem}.tw-schedule-register{display:inline-flex;align-items:center;gap:9px;padding:12px 17px;border-radius:999px;background:var(--tw-gold);color:#142d47;font-weight:900;text-decoration:none;white-space:nowrap}.tw-schedule-register:hover{filter:brightness(1.05)}
        @media(max-width:760px){.tw-schedule-meta{grid-template-columns:1fr}.tw-schedule-table th,.tw-schedule-table td{padding:11px 10px}.tw-schedule-table th{font-size:.68rem}.tw-schedule-table td{font-size:.82rem}.tw-time{font-size:.74rem!important;white-space:normal;min-width:118px}.tw-schedule-table th:first-child{width:31%}.tw-schedule-table th:last-child{width:27%}.tw-schedule-table td:nth-child(2){min-width:140px}.tw-schedule-table td:nth-child(3){min-width:110px}.tw-schedule-footer{padding:20px}}
        @media(max-width:460px){.tw-schedule-page{padding-left:10px;padding-right:10px}.tw-schedule-hero{padding-left:12px;padding-right:12px}.tw-schedule-table th,.tw-schedule-table td{padding:10px 7px}.tw-time{min-width:105px;font-size:.7rem!important}.tw-schedule-table td:nth-child(2){min-width:128px}.tw-schedule-table td:nth-child(3){min-width:95px}.tw-schedule-table{font-size:.8rem}.tw-schedule-table-wrap{overflow-x:auto}.tw-schedule-table{min-width:570px}}
      `}</style>

      <div className="tw-schedule-container">
        <header className="tw-schedule-hero">
          <div className="tw-schedule-kicker"><Plane size={18} /> ADCET · ADATE Club</div>
          <h1 className="tw-schedule-title">TECHNO WINGS <span>2K26</span></h1>
          <p className="tw-schedule-subtitle">Two-Day Event Schedule</p>
          <div className="tw-schedule-meta">
            <div className="tw-meta-card"><span className="tw-meta-icon"><CalendarDays size={21} /></span><div><span className="tw-meta-label">Event Dates</span><span className="tw-meta-value">15 &amp; 16 October 2026</span></div></div>
            <div className="tw-meta-card"><span className="tw-meta-icon"><MapPin size={21} /></span><div><span className="tw-meta-label">Venue</span><span className="tw-meta-value">ADCET, Ashta</span></div></div>
            <div className="tw-meta-card"><span className="tw-meta-icon"><Plane size={21} /></span><div><span className="tw-meta-label">Aero Expo</span><span className="tw-meta-value">15 &amp; 16 October</span></div></div>
          </div>
        </header>

        <nav className="tw-schedule-nav" aria-label="Jump to schedule day">
          <a href="#day-1"><CalendarDays size={17} /> Day 1 · 15 October</a>
          <a href="#day-2"><CalendarDays size={17} /> Day 2 · 16 October</a>
        </nav>

        <section className="tw-day-section" id="day-1">
          <div className="tw-day-heading"><span className="tw-day-badge">01</span><div><h2>Day 1 — 15 October 2026</h2><p>Opening ceremony, guest sessions, competitions and expo</p></div></div>
          <ScheduleTable rows={dayOne} />
        </section>

        <section className="tw-day-section" id="day-2">
          <div className="tw-day-heading"><span className="tw-day-badge">02</span><div><h2>Day 2 — 16 October 2026</h2><p>Technical events, evaluation and prize distribution</p></div></div>
          <ScheduleTable rows={dayTwo} />
        </section>


        <footer className="tw-schedule-footer">
          <div><h3>Ready for Techno Wings 2K26?</h3><p>Check your event details and complete your registration.</p></div>
          <a className="tw-schedule-register" href="/register">Register Now <ArrowRight size={18} /></a>
        </footer>
      </div>
    </main>
  );
}
