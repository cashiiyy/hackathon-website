// ============================================================
// CONTENT CONFIGURATION
// Dhyuthi 7.0 — All section data lives here.
// Update as official content becomes available.
// ============================================================

// ---- HIGHLIGHTS ----
export interface Highlight {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const highlights: Highlight[] = [
  {
    id: "h1",
    icon: "◈",
    title: "Technical Competitions",
    description:
      "Compete across multiple domains — from competitive programming and hardware challenges to design and paper presentations.",
  },
  {
    id: "h2",
    icon: "⟁",
    title: "Expert Sessions",
    description:
      "Attend talks and workshops led by industry practitioners and academic experts from across the country.",
  },
  {
    id: "h3",
    icon: "⬡",
    title: "Networking",
    description:
      "Connect with peers, mentors, and IEEE professionals from student branches across the region.",
  },
  {
    id: "h4",
    icon: "◎",
    title: "Recognition & Prizes",
    description:
      "Winners receive trophies, certificates, and prizes across all events. Every participant earns a participation certificate.",
  },
];

// ---- TIMELINE ----
export interface TimelineItem {
  id: string;
  phase: string;
  title: string;
  description: string;
  date: string;
  status: "upcoming" | "active" | "tba";
}

export const timeline: TimelineItem[] = [
  {
    id: "t1",
    phase: "01",
    title: "Registration Opens",
    description: "Online registration begins. Participants can register individually or as teams depending on the event.",
    date: "TBA",
    status: "tba",
  },
  {
    id: "t2",
    phase: "02",
    title: "Registration Closes",
    description: "Last date to register for all events. Shortlisting begins for events with limited seats.",
    date: "TBA",
    status: "tba",
  },
  {
    id: "t3",
    phase: "03",
    title: "Day 01 — Inauguration",
    description: "Official inauguration of Dhyuthi 7.0 followed by the first wave of technical events.",
    date: "TBA",
    status: "tba",
  },
  {
    id: "t4",
    phase: "04",
    title: "Day 02 — Finals & Valediction",
    description: "Final rounds, results announcement, prize distribution, and valedictory ceremony.",
    date: "TBA",
    status: "tba",
  },
];

// ---- ANNOUNCEMENTS ----
export interface Announcement {
  id: string;
  badge: "NEW" | "UPCOMING" | "UPDATE" | "IMPORTANT";
  title: string;
  date: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

export const announcements: Announcement[] = [
  {
    id: "a1",
    badge: "UPCOMING",
    title: "Dhyuthi 7.0 — Coming Soon",
    date: "September 2025",
    description:
      "Dhyuthi 7.0 is being planned. Stay tuned for event dates, registration links, and the full lineup of competitions and sessions.",
  },
];

// ---- FAQ ----
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "f1",
    question: "Who can participate in Dhyuthi 7.0?",
    answer:
      "Dhyuthi is open to undergraduate and postgraduate engineering students from all colleges. Some events may have additional eligibility criteria — check the individual event pages once announced.",
  },
  {
    id: "f2",
    question: "Is registration free?",
    answer:
      "Registration fees (if any) will be announced with the event details. IEEE members may receive discounted or free entry to select events.",
  },
  {
    id: "f3",
    question: "Can I participate in multiple events?",
    answer:
      "Yes, you may register for multiple events as long as there are no scheduling conflicts. Details will be updated with the full event schedule.",
  },
  {
    id: "f4",
    question: "Will accommodation be provided?",
    answer:
      "Accommodation details will be announced closer to the event date. Outstation participants are encouraged to contact us for assistance.",
  },
  {
    id: "f5",
    question: "How do I stay updated?",
    answer:
      "Follow IEEE SCT Student Branch on Instagram and LinkedIn, or bookmark this website. All announcements will be posted here first.",
  },
  {
    id: "f6",
    question: "What is Dhyuthi?",
    answer:
      "Dhyuthi (Sanskrit: radiance, brilliance) is the annual technical symposium of the IEEE SCT Student Branch at Sree Chitra Thirunal College of Engineering, Trivandrum. Now in its 7th edition, it is one of the flagship technical festivals in the region.",
  },
];

// ---- ABOUT STATS ----
export interface StatItem {
  label: string;
  value: string;
}

export const aboutStats: StatItem[] = [
  { label: "Edition", value: "7th" },
  { label: "Format", value: "On-Campus" },
  { label: "Duration", value: "2 Days" },
  { label: "Organized by", value: "IEEE SCT SB" },
];
