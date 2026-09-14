// ============================================================
// DHYUTHI 7.0 — EVENT CONFIGURATION
// IEEE SCT Student Branch
//
// This is the single source of truth for all event data.
// Update these values when official information is confirmed.
// Fields marked [TBA] are placeholders.
// ============================================================

export const eventConfig = {
  // Core identity
  name: "Dhyuthi",
  edition: "7.0",
  fullName: "Dhyuthi 7.0",
  organization: "IEEE SCT Student Branch",
  organizationShort: "IEEE SCT SB",

  // Tagline — update when official tagline is confirmed
  tagline: "Illuminate. Innovate. Inspire.",
  subTagline: "The Annual Technical Symposium of IEEE SCT Student Branch",

  // Event details — update with official information
  date: "TBA",           // e.g. "March 2025"
  dateDetail: "TBA",     // e.g. "15–16 March 2025"
  venue: "TBA",          // e.g. "Sree Chitra Thirunal College of Engineering, Trivandrum"
  venueShort: "TBA",     // e.g. "SCTCE, Trivandrum"
  format: "On-Campus",
  duration: "2 Days",
  edition_number: 7,

  // Registration
  registrationUrl: "#register",    // Update with actual registration link
  registrationOpen: false,         // Toggle to true when open
  registrationDeadline: "TBA",

  // Links
  website: "https://cashiiyy.github.io/hackathon-website/",
  instagram: "https://www.instagram.com/ieee_sct/",
  linkedin: "https://www.linkedin.com/company/ieee-sct-student-branch/",
  email: "ieee@sctce.ac.in",

  // About the college
  college: "Sree Chitra Thirunal College of Engineering",
  collegeShort: "SCTCE",
  collegeLocation: "Trivandrum, Kerala",
};

export type EventConfig = typeof eventConfig;
