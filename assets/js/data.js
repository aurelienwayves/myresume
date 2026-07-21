/**
 * ============================================================================
 *  CV CONTENT — this is the ONLY file you should need to edit.
 *  The layout (HTML/CSS) doesn't need to change: everything below renders
 *  automatically.
 *
 *  Anything written as [LIKE THIS] is still a placeholder to fill in.
 * ============================================================================
 */

const SITE_DATA = {

  // --------------------------------------------------------------------
  // 1. PROFILE
  // --------------------------------------------------------------------
  profile: {
    name: "Aurélien Bertheaume",
    initials: "AB",

    // Cycles in the hero banner. Kept to roles that are a natural fit —
    // not a scattergun list.
    roles: [
      "Technical Program Manager",
      "Systems Engineer",
      "Program Manager"
    ],

    pivotRole: "Product Manager",

    location: "Sydney, Australia",
    email: "aurelien.bertheaume@gmail.com",
    phone: "[+61 4XX XXX XXX]",
    linkedinUrl: "https://www.linkedin.com/in/aurelien-bertheaume/",
    linkedinLabel: "linkedin.com/in/aurelien-bertheaume",

    tagline: "I build and ship safety-critical connected products — from embedded firmware to cloud — and run the programme, budget and stakeholders around them.",

    // Shown as a highlighted callout.
    pivotHeadline: "Open to Technical Program Manager, Systems Engineer or Product roles",
    pivotNote: "particularly where embedded/IoT systems, applied AI and business strategy intersect.",

    bio: [
      "Technical decisions have consequences most people never see. A firmware signature that fails silently in the field. A cost model that doesn't survive contact with a real deployment. An architecture that works on the bench and falls over at scale. Most of what I've built over the last few years sits at exactly that intersection — where getting it wrong is expensive, and visible.",
      "At Legrand Australia, I ran Galaxy — a safety-critical, connected emergency-lighting platform with 250+ SKUs live in the field — reporting to the R&D Director. Full-stack, end to end: embedded firmware on connected nodes talking LoRa and BLE, gateways, a companion iOS app, and a Linux/Docker cloud backend, delivered across three international R&D centres.",
      "Day to day that meant owning the backlog and release governance — RASCI, AS/NZS2293 compliance — and building the tools the team actually needed: a field diagnostic tool that replaced manual node-by-node analysis, an automated regression platform to catch issues before they reached a live site, and, after Australia's Cybersecurity Act came into force, a certificate-management pipeline to roll out HTTPS across the whole fleet.",
      "I paired that with a Master's in Business Administration (IAE Limoges) alongside the engineering degree — finance, strategy and cross-cultural leadership, not just circuits and firmware. That combination is why Technical Program Manager and Systems Engineer roles fit naturally, and why I'm increasingly drawn to Product roles and to work where embedded systems meet applied AI: I can sit in the technical detail and still make the business case."
    ],

    highlights: [
      "Technical Program Management",
      "Systems & Embedded Engineering",
      "Cross-Functional Leadership",
      "IoT & Applied AI",
      "Business & Strategy"
    ],

    passions: [
      { icon: "tech", label: "Tech" },
      { icon: "art", label: "Art & Vinyls" },
      { icon: "tennis", label: "Tennis" },
      { icon: "cycling", label: "Bike" }
    ]
  },

  // --------------------------------------------------------------------
  // 2. PHOTO — set src once you have a file in assets/img/photo/
  // --------------------------------------------------------------------
  photo: {
    src: "assets/img/photo/fb726ef0-cb87-423b-9146-da62ddc668b9-enhanced.jpg",
    alt: "Portrait of Aurélien Bertheaume"
  },

  // --------------------------------------------------------------------
  // 3. INTRO VIDEO — leave url: "" until you have one. Accepts a YouTube
  //    or Vimeo link.
  // --------------------------------------------------------------------
  video: {
    url: "", // e.g. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
    caption: "60–90 second intro: who I am, what I'm good at, what I'm looking for next."
  },

  // --------------------------------------------------------------------
  // 4. IMPACT / KPIs — a handful of headline numbers, each traceable to a
  //    specific bullet below (nothing here that isn't backed by a story).
  // --------------------------------------------------------------------
  kpis: [
    { value: "$1.7M", label: "Projected warranty cost avoidance over 10 years (parts only, labour excluded)" },
    { value: "250+", label: "SKUs under live ownership on a safety-critical connected platform" },
    { value: "65,000", label: "Units/year production line impacted by managed firmware releases" },
    { value: "6", label: "Functional domains aligned per programme — R&D, Sales, Tech Service, Marketing, Ops, Finance" },
    { value: "3", label: "International R&D centres coordinated on a single programme" },
    { value: "27", label: "Stakeholders aligned in a single workshop that fast-tracked a confidential programme" }
  ],

  // --------------------------------------------------------------------
  // 5. SKILLS — organised by category. Each skill has a unique id used to
  //    link experience bullets <-> skills <-> education <-> other bullets.
  //    A skill grounded only in coursework (not paid work) is labelled
  //    "Coursework" wherever it shows up — no skill claims a track record
  //    it doesn't have.
  // --------------------------------------------------------------------
  skillCategories: [
    { id: "leadership", label: "Program & Leadership" },
    { id: "systems",    label: "Systems & Product Engineering" },
    { id: "hardware",   label: "Hardware & Embedded" },
    { id: "ai",         label: "AI & Data" },
    { id: "business",   label: "Business & Strategy" },
    { id: "tools",      label: "Tools & Platforms" }
  ],

  skills: [
    { id: "program-management", name: "Technical Program Management", categoryId: "leadership", blurb: "End-to-end delivery ownership across cost, schedule and technical performance." },
    { id: "cross-functional",   name: "Cross-Functional Team Leadership", categoryId: "leadership", blurb: "Aligning R&D, marketing, operations and sales toward one roadmap." },
    { id: "stakeholder-mgmt",   name: "Stakeholder Management", categoryId: "leadership", blurb: "Working directly with international finance, directors and executive stakeholders." },
    { id: "risk-management",    name: "Technical & Programme Risk Management", categoryId: "leadership", blurb: "Formal, multi-dimensional risk assessment at every programme milestone." },
    { id: "business-case",      name: "Business Case Development", categoryId: "leadership", blurb: "Investment recommendations, CAPEX/OPEX evaluation, Go/No-Go decisions." },
    { id: "governance-rasci",   name: "Governance & RASCI", categoryId: "leadership", blurb: "Structured accountability frameworks that close ownership gaps before release." },

    { id: "systems-architecture", name: "Systems Architecture & Feasibility", categoryId: "systems", blurb: "Use-case analysis and architecture design for complex connected systems." },
    { id: "npi",                  name: "New Product Introduction (NPI)", categoryId: "systems", blurb: "Structured milestone process from concept to industrialisation." },
    { id: "product-lifecycle",    name: "Product Lifecycle Management", categoryId: "systems", blurb: "Managing a live product from stabilisation through feature growth." },
    { id: "iot-connected",        name: "IoT & Connected Products", categoryId: "systems", blurb: "Full-stack connected product delivery: device, cloud, mobile." },
    { id: "process-digitalisation", name: "Process Digitalisation", categoryId: "systems", blurb: "Digitalising and automating manual estimation/commercial and field workflows." },
    { id: "cybersecurity-compliance", name: "Cybersecurity Compliance", categoryId: "systems", blurb: "Fleet-wide HTTPS/TLS rollout, certificate lifecycle management, encrypted backups." },
    { id: "international-certification", name: "International Certification & Market Entry", categoryId: "systems", blurb: "Lab testing and local certification to launch a regulated product in a new market." },

    { id: "hardware-engineering", name: "Hardware Engineering (PCB / Schematics)", categoryId: "hardware", blurb: "Schematic capture, PCB layout and board bring-up." },
    { id: "embedded-firmware",    name: "Embedded Firmware (STM32 / nRF52 / RTOS)", categoryId: "hardware", blurb: "Real-time, multi-threaded firmware with ThreadX RTOS / NetX Duo." },
    { id: "wireless-connectivity", name: "Wireless Connectivity (LoRa / BLE)", categoryId: "hardware", blurb: "Low-power connectivity design for field-deployed IoT hardware." },
    { id: "protocol-design",      name: "Protocol Design", categoryId: "hardware", blurb: "Defining custom communication protocols between hardware and firmware." },
    { id: "test-automation",      name: "Automated Test & Validation", categoryId: "hardware", blurb: "Standards-compliant automated test platforms and release validation." },

    { id: "edge-ai-tinyml",  name: "Edge AI & TinyML", categoryId: "ai", blurb: "Coursework: deploying and optimising ML models on embedded targets (ENSIL-ENSCI)." },
    { id: "signal-processing", name: "Signal Processing & MATLAB", categoryId: "ai", blurb: "Time/frequency-domain analysis and embedded DSP algorithms." },
    { id: "computer-vision", name: "Computer Vision & Image Processing", categoryId: "ai", blurb: "Coursework: digital image processing and computer vision fundamentals (ENSIL-ENSCI)." },

    { id: "financial-control",  name: "Financial Control & ROI Analysis", categoryId: "business", blurb: "Cost accounting, budgeting and technology ROI calculations (MAE + applied on the job)." },
    { id: "strategic-management", name: "Strategic & Innovation Management", categoryId: "business", blurb: "Strategic diagnostics, innovation and change management (MAE + applied on the job)." },
    { id: "cross-cultural-leadership", name: "Cross-Cultural Leadership", categoryId: "business", blurb: "Leading multicultural, multi-site teams across France and Australia." },
    { id: "ip-protection",      name: "IP Protection & Technology Contracts", categoryId: "business", blurb: "Filed a Soleau envelope to protect an original hardware design; grounded in IP law and contracts coursework (MAE)." },
    { id: "b2b-marketing",      name: "B2B Technology Marketing", categoryId: "business", blurb: "Coursework: positioning, negotiation and go-to-market for technical products (MAE)." },

    { id: "python",              name: "Python", categoryId: "tools", blurb: "Automated test tooling and validation scripting." },
    { id: "commercial-analysis",  name: "Commercial & Technical Estimation", categoryId: "tools", blurb: "Turning drawings and specs into scoped, risk-informed commercial deliverables." },
    { id: "cloud-mobile",         name: "Cloud & Web Platform", categoryId: "tools", blurb: "Linux/Docker services, Kotlin/Java + React, Azure/WebSocket across dev/QA/prod." },
    { id: "mobile-app-delivery",  name: "Mobile App Delivery", categoryId: "tools", blurb: "Shipped a React Native iOS app for secure device commissioning — live on the App Store." }
  ],

  // --------------------------------------------------------------------
  // 6. EXPERIENCE — the core of the CV, most recent first.
  //    Each bullet has its own "skills" (ids from the list above) — click
  //    a bullet to reveal what it took to deliver it, click a skill to see
  //    everywhere else it shows up. One paragraph of confidential-project
  //    detail is intentionally kept generic (no product name, no partner
  //    names) — see exp-legrand-tpm, bullet 8.
  // --------------------------------------------------------------------
  experience: [
    {
      id: "exp-legrand-dcs",
      title: "Technical Estimator | Process Digitalisation",
      org: "Legrand Data Center Solutions",
      period: "Jan 2026 — Present",
      location: "Sydney, Australia",
      context: "Data centre infrastructure estimation and process digitalisation for the APAC region.",
      bullets: [
        { text: "Driving an initiative to digitalise and automate estimation-to-quote workflows, targeting integration with Legrand's group Salesforce ecosystem.", skills: ["process-digitalisation", "commercial-analysis"] },
        { text: "Applying systems thinking to translate complex technical scope into structured, risk-informed commercial deliverables for large-scale data centre infrastructure projects.", skills: ["systems-architecture", "risk-management", "commercial-analysis"] },
        { text: "Analysing project drawings, BOQs and specifications to define scope, interfaces, technical risks and commercial assumptions across APAC markets.", skills: ["commercial-analysis", "risk-management", "stakeholder-mgmt"] }
      ]
    },
    {
      id: "exp-legrand-tpm",
      title: "Technical Program Manager | Product & Systems Engineering",
      org: "Legrand Australia",
      period: "Jan 2024 — Dec 2025",
      location: "Sydney, Australia",
      context: "Galaxy, Legrand's connected emergency-lighting platform for the AU/NZ market — 250+ SKUs live in the field, reporting to the R&D Director. Full-stack, safety-critical scope: embedded nodes (firmware over LoRa/BLE), gateways, a companion <a href=\"https://apps.apple.com/au/app/galaxy-cels/id1403414890\" target=\"_blank\" rel=\"noopener\">iOS app</a>, and a Linux/Docker cloud backend, delivered across three international R&D centres.",
      bullets: [
        { text: "Owned programme delivery for two years across R&D, Sales, Technical Service, Marketing, Operations and Finance — feature roadmap, sprint prioritisation, field validation and release governance (RASCI) — for a safety-critical connected platform.", skills: ["governance-rasci", "program-management", "stakeholder-mgmt", "iot-connected"] },
        { text: "Built a small technical team, including two direct-report interns, and a full release-readiness matrix aligned to the AS/NZS2293 emergency-lighting standard — working with Quality/Compliance on battery, electrical safety, radio and EMC test reports for every board/firmware variant before release.", skills: ["cross-functional", "npi", "risk-management"] },
        { text: "Designed and shipped Galaxy Toolbox, an internal diagnostic tool that reads a unit's serial number on site, flags known PCB/firmware issues with a fix, and routes only genuinely new problems back to R&D — replacing manual node-by-node analysis and meaningfully cutting on-site diagnostic time and unnecessary parts/labour cost.", skills: ["process-digitalisation", "systems-architecture", "product-lifecycle"] },
        { text: "Built a full automated regression test platform (Robot Framework / Python) covering every state and feature, raising release confidence and catching edge cases — I/O faults, disconnects — before they reached the field.", skills: ["test-automation", "python"] },
        { text: "Led security hardening in response to Australia's Cybersecurity Act: rolled out HTTPS/TLS across the fleet, built a production tool to securely provision and rotate device certificates at scale, and implemented tiered encrypted cloud backups.", skills: ["cybersecurity-compliance", "cloud-mobile", "risk-management"] },
        { text: "Managed firmware release impact on a 65,000-unit/year production line — revising PCB assembly BOMs and device programming values to keep hardware and firmware coherent at scale — supporting ~$1.7M in projected warranty cost avoidance over 10 years (parts only).", skills: ["hardware-engineering", "embedded-firmware", "wireless-connectivity", "product-lifecycle"] },
        { text: "Supported Galaxy's expansion into Singapore, a new and heavily regulated market, coordinating lab testing and local certification alongside the core programme team.", skills: ["international-certification", "stakeholder-mgmt"] },
        { text: "Led feasibility and market assessment for a second, confidential programme: technology scouting and field testing across building topologies, plus CAPEX/OPEX modelling and ROI analysis with international finance stakeholders.", skills: ["business-case", "systems-architecture", "financial-control", "strategic-management"] },
        { text: "Facilitated a week-long workshop with 27 stakeholders — directors, engineers, managers — to align scope, ownership (RASCI) and phasing across retrocompatibility, commissioning, and wired/wireless technology tracks; travelled to France with the R&D Director and Product Marketing Manager to align outcomes with core teams.", skills: ["governance-rasci", "cross-functional", "stakeholder-mgmt"] },
        { text: "Coordinated regularly with development teams in France — firmware, software, and a shared hardware platform (motherboard and communication board reused across programmes for volume economies) — through on-site workshops, keeping cross-timezone execution unblocked.", skills: ["cross-cultural-leadership", "stakeholder-mgmt"] },
        { text: "Oversaw the platform's cloud and mobile stack — Linux/Docker services, a Kotlin/Java backend with a React web app on Azure, and the companion iOS app (React Native) for secure device commissioning and maintenance — across dev/QA/prod environments.", skills: ["cloud-mobile", "mobile-app-delivery", "systems-architecture"] }
      ]
    },
    {
      id: "exp-legrand-embedded",
      title: "Embedded Systems Engineer | SPE/PoDL Gateway Integration & Evaluation",
      org: "Legrand",
      period: "Sep 2022 — Dec 2023",
      location: "Limoges, France",
      context: "Designed a distributed connected-device architecture and built a full proof of concept using Single Pair Ethernet / Power over Data Line (SPE/PoDL) — a 2-wire cable carrying both power and an IP network, daisy-chained across devices.",
      bullets: [
        { text: "Coordinated stakeholders across standardisation (10BASE-T1L / 10BASE-T1S), mechanical (connector prototyping), electronics (power/loss budget) and silicon vendors (Analog Devices, Microchip, NXP) to align the technology direction.", skills: ["stakeholder-mgmt", "systems-architecture"] },
        { text: "Designed the hardware from scratch around 10BASE-T1L, and filed a Soleau envelope — working with the IP department — to protect the original design.", skills: ["hardware-engineering", "ip-protection"] },
        { text: "Wrote a C driver connecting the NetX Duo IP stack to custom hardware — wiring buffers and packet handling between an STM32L4 microcontroller and the SPE hardware on a ThreadX RTOS — and integrated it into a working end-to-end demo (switching a light on/off over SPE).", skills: ["embedded-firmware", "protocol-design"] },
        { text: "Ran robustness and performance testing — cable distance, signal loss, and live video calls over the IP link — and wrote a full technical report on results and KPIs to assess technical maturity.", skills: ["test-automation", "npi", "risk-management"] },
        { text: "Proposed an SPE-based architecture to address real building use cases, documented in a detailed corporate report; followed formal schematic, routing and code review processes with git-based version control throughout.", skills: ["systems-architecture", "hardware-engineering"] }
      ]
    },
    {
      id: "exp-legrand-intern",
      title: "Hardware & Firmware Development Engineer | Automated Test Interface",
      org: "Legrand — Internship",
      period: "May 2022 — Sep 2022",
      location: "Limoges, France",
      context: "Designed a representative electronic test interface for MEMS microphone validation — the algorithm under test needed clean, repeatable audio input rather than raw ambient sound.",
      bullets: [
        { text: "Defined a custom UART command protocol to remotely trigger PDM-modulated test signals, reproducing real microphone output on demand.", skills: ["protocol-design", "hardware-engineering"] },
        { text: "Designed and prototyped a custom test board — schematic capture, PCB layout, assembly — to generate controlled, repeatable audio stimuli for sound-detection algorithm validation.", skills: ["hardware-engineering"] },
        { text: "Developed the board's embedded control firmware and integrated it into an automated Python-based test interface for validation activities.", skills: ["embedded-firmware", "python", "test-automation"] }
      ]
    },
    {
      id: "exp-ensil-ecg",
      title: "Academic Project — Classification of Physiological Signals (ECG)",
      org: "ENSIL-ENSCI",
      period: "Sep 2021 — Apr 2022",
      location: "Limoges, France",
      context: "Designed real-time algorithms to assess and classify ECG signal quality, in collaboration with a PhD researcher specialising in physiological signals.",
      bullets: [
        { text: "Extracted and calculated Signal Quality Indicators (SQIs) using advanced time- and frequency-domain analysis.", skills: ["signal-processing"] },
        { text: "Developed decision rules based on fuzzy logic and indicator correlation to detect arrhythmias and signal anomalies.", skills: ["signal-processing"] },
        { text: "Implemented algorithms on an embedded DSP to ensure continuous, reliable, real-time patient monitoring.", skills: ["embedded-firmware", "signal-processing"] }
      ]
    },
    {
      id: "exp-barilla",
      title: "Internship — Technical Service",
      org: "Barilla Group",
      period: "Jul 2021 — Aug 2021",
      location: "Montierchaume, France",
      context: "Short technical operations internship supporting maintenance and inventory on an industrial production site.",
      bullets: [
        { text: "Managed spare parts inventory.", skills: ["commercial-analysis"] },
        { text: "Carried out maintenance operations on production machines.", skills: ["hardware-engineering"] }
      ]
    }
  ],

  // --------------------------------------------------------------------
  // 7. EDUCATION — "focus" is a list of skill ids (from section 5). It
  //    renders as clickable chips, so a skill that's only ever backed by
  //    coursework (not paid work) still has somewhere honest to point to.
  // --------------------------------------------------------------------
  education: [
    {
      school: "ENSIL-ENSCI",
      degree: "Engineering Degree, Electronics & Telecommunications",
      period: "2020 — 2023",
      focus: ["edge-ai-tinyml", "signal-processing", "computer-vision", "wireless-connectivity"]
    },
    {
      school: "IAE Limoges",
      degree: "Master 2, Management of Administrations and Enterprises (MBA-equivalent)",
      period: "Oct 2021 — Jul 2023",
      focus: ["financial-control", "strategic-management", "cross-cultural-leadership", "ip-protection", "b2b-marketing"]
    }
  ],

  // --------------------------------------------------------------------
  // 8. BEYOND THE JOB — real personal / community projects, article style.
  // --------------------------------------------------------------------
  personalProjects: [
    {
      id: "seeburg-jukebox",
      title: "Restoring a Seeburg Jukebox Console — Back to Life, Standalone",
      date: "Completed restoration",
      image: null, // 2-3 photos available — add to assets/img/personal/
      excerpt: "A dead 1960s-style jukebox console, rebuilt from scratch into a fully standalone, working music player.",
      content: [
        "The console arrived dead — blown speakers, no working electronics. I replaced the speakers and rebuilt the electronics from scratch around an Arduino, reading MP3s off an SD card.",
        "I designed and routed three custom boards: one to reuse the jukebox's original selector buttons, one to rebuild the matrix keypad for track selection, and one tying together the I/Os, volume control and LEDs — plus the firmware to drive all of it.",
        "I also built a small companion tool that downloads tracks and auto-generates the labels and file names to match each selector position, so loading new music is a five-minute job, not a rewiring job. Fully functional today: pick a number, and it plays."
      ],
      skills: ["hardware-engineering", "embedded-firmware"],
      url: null
    },
    {
      id: "airplay-vinyl",
      title: "Streaming Vinyl to Every Room, Over Wi-Fi",
      date: "In progress",
      image: null,
      excerpt: "A simple AirPlay bridge to stream a turntable to every speaker in the house — no app, no extra step.",
      content: [
        "The idea is simple: play a record downstairs, hear it in every room, over Wi-Fi, without touching a phone or an app. The simple part is the hard part — anyone can add friction; the goal is removing all of it.",
        "Currently in progress: turntable input, an AirPlay-compatible bridge, and getting multi-room sync tight enough that it feels instant rather than a beta feature."
      ],
      skills: [],
      url: null
    },
    {
      id: "unicef-walk",
      title: "37km Overnight Walk — North Sydney to Bondi Beach, for UNICEF",
      date: "2025",
      image: "assets/img/photo/walk.jpg",
      excerpt: "An overnight solidarity walk with Legrand colleagues, raising support for UNICEF.",
      content: [
        "We left at 8PM and arrived at 5AM, just in time to watch the sunrise over the ocean — 37 kilometres on foot, from North Sydney to Bondi Beach via Vaucluse.",
        "The walk was part of Ellegrand, a Legrand initiative promoting equality, diversity and inclusion, done in solidarity to support UNICEF. A collective effort, a bit crazy, deeply human.",
        "It was a small way of putting the same things I bring to my day job — commitment, teamwork, pushing through when it gets hard — into something outside of work."
      ],
      skills: [],
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7314836828144951298/"
    }
  ],

  // --------------------------------------------------------------------
  // 9. FEATURED ON LINKEDIN
  // --------------------------------------------------------------------
  linkedinPosts: [
    {
      id: "post-vie-2yr",
      title: "Two Years in Australia: What My V.I.E Taught Me",
      date: "English · 269 reactions · 16 comments",
      excerpt: "Two years ago, I arrived in Australia for my V.I.E with many ideas. Today, as this chapter comes to an end, I can clearly see how much it shaped my approach to engineering...",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7427252707255652352/",
      image: null
    },
    {
      id: "post-vie-1yr",
      title: "A Year Abroad: Reshaping the Way I Work",
      date: "English · 55 reactions · 6 comments",
      excerpt: "I didn't expect this experience to reshape the way I work so profoundly. A year ago, I moved to Australia as part of the V.I.E program — it's been a fast-track journey, both professionally and personally...",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7340607902618927104/",
      image: null
    },
    {
      id: "post-wootch",
      title: "Wootch: Designing a Locator Watch for Kids",
      date: "French · 31 reactions · 3 comments",
      excerpt: "As part of a professional-insertion project, we designed and pitched Wootch, a locatable watch for kids — concept, product thinking and a 3-minute pitch to defend it...",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:6878655761619279872/",
      image: null
    }
  ],

  // --------------------------------------------------------------------
  // 10. REFERENCES
  // --------------------------------------------------------------------
  references: {
    testimonials: [
      {
        name: "Vahid Meghdadi",
        role: "Professor, University of Limoges",
        relationship: "Was Aurélien's teacher at ENSIL-ENSCI",
        date: "July 2023",
        quote: "I had Aurélien as a student in several courses at ENSIL-ENSCI. He is curious, thoughtful, and always sees the deeper purpose behind what he's taught. As a teacher, I really valued his presence in class, his relevant contributions, and his open-mindedness. I have no doubt he will succeed — and help lift up those around him.",
        quoteNote: "Translated from French — original recommendation on LinkedIn.",
        linkedinUrl: "https://www.linkedin.com/in/vahid-meghdadi-b890168/"
      }
      // Add former managers/colleagues here once you confirm with them:
      // { name: "[Name]", role: "[Role, Company]", relationship: "[e.g. Direct manager at Legrand Australia, 2024-2025]",
      //   date: "[Month Year]", quote: "[Their words]", linkedinUrl: "[optional]" }
    ],
    // Rather than publishing personal emails/phone numbers on a public page,
    // list who's willing to vouch for you and let recruiters ask for contact
    // details directly — safer, and standard practice.
    note: "Several former managers and colleagues have agreed to be references. Names, roles and contact details available on request."
  }
};
