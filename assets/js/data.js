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

    // Cycles in the hero banner.
    roles: [
      "Technical Program Manager",
      "Systems Engineer",
      "Product & Systems Engineering",
      "Program Manager"
    ],

    pivotRole: "Product Manager",

    location: "Sydney, Australia",
    email: "aurelien.bth@gmail.com",
    phone: "[+61 4XX XXX XXX]",
    linkedinUrl: "https://www.linkedin.com/in/aurelien-bertheaume/",
    linkedinLabel: "linkedin.com/in/aurelien-bertheaume",

    tagline: "Technical Program Manager working at the intersection of systems engineering, product development and commercial decision-making.",

    // Shown as a highlighted callout — the "I can also do this" pivot.
    pivotHeadline: "Open to Product Manager roles",
    pivotNote: "including product marketing — where technical depth and commercial thinking matter as much as roadmap ownership.",

    bio: [
      "Technical decisions have consequences that most people never see. A firmware bug that reaches the field. A cost model that doesn't hold under real deployment. An architecture that works in the lab and fails at scale. I've spent more than three years working at the intersection of those risks, in environments where getting it wrong is expensive and visible.",
      "At Legrand Australia, I was Technical Program Manager on Galaxy, a connected emergency lighting platform for the AU/NZ market — a safety-critical environment with full-stack scope across hardware, firmware, wireless (LoRa/Wi-Fi/Bluetooth), cloud and mobile, coordinated across three international R&D centres.",
      "The work covered the full product lifecycle: stabilising a live platform, shipping new features and security hardening across a distributed field deployment, running formal risk assessments at every NPI milestone, and contributing to technology feasibility studies and Go/No-Go decisions — including business cases presented to international finance stakeholders.",
      "Before that, I designed embedded hardware and firmware from scratch. I know what engineers are actually solving for, which changes how I manage programmes and communicate trade-offs to stakeholders. That combination — technical enough to understand the problem, structured enough to drive the programme, commercial enough to frame the decision — is also what draws me toward Product Management: I'm actively open to roles where I own the \"why\" and the \"so what\", not just the \"how\"."
    ],

    highlights: [
      "Technical Program Management",
      "Systems & Embedded Engineering",
      "NPI & Risk Management",
      "Cross-Functional Leadership",
      "Commercial & Product Thinking"
    ],

    passions: [
      { icon: "running", label: "Running" },
      { icon: "gym", label: "Gym" },
      { icon: "cycling", label: "Cycling" },
      { icon: "growth", label: "Personal Development" },
      { icon: "tech", label: "Tech" }
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
  // 4. IMPACT / KPIs — a handful of headline numbers.
  // --------------------------------------------------------------------
  kpis: [
    { value: "$1.7M", label: "Projected warranty cost avoidance over 10 years (parts only, labour excluded)" },
    { value: "65,000", label: "Units/year production line impacted by managed firmware releases" },
    { value: "3", label: "International R&D centres coordinated on a single programme" },
    { value: "4", label: "Functional domains aligned per programme — R&D, marketing, operations, sales" }
  ],

  // --------------------------------------------------------------------
  // 5. SKILLS — organised by category. Each skill has a unique id used to
  //    link experience bullets <-> skills <-> other bullets.
  // --------------------------------------------------------------------
  skillCategories: [
    { id: "leadership", label: "Program & Leadership" },
    { id: "systems",    label: "Systems & Product Engineering" },
    { id: "hardware",   label: "Hardware & Embedded" },
    { id: "tools",      label: "Tools & Analysis" }
  ],

  skills: [
    { id: "program-management", name: "Technical Program Management", categoryId: "leadership", blurb: "End-to-end delivery ownership across cost, schedule and technical performance." },
    { id: "cross-functional",   name: "Cross-Functional Team Leadership", categoryId: "leadership", blurb: "Aligning R&D, marketing, operations and sales toward one roadmap." },
    { id: "stakeholder-mgmt",   name: "Stakeholder Management", categoryId: "leadership", blurb: "Working directly with international finance and executive stakeholders." },
    { id: "risk-management",    name: "Technical & Programme Risk Management", categoryId: "leadership", blurb: "Formal, multi-dimensional risk assessment at every programme milestone." },
    { id: "business-case",      name: "Business Case Development", categoryId: "leadership", blurb: "Investment recommendations, CAPEX/OPEX evaluation, Go/No-Go decisions." },

    { id: "systems-architecture", name: "Systems Architecture & Feasibility", categoryId: "systems", blurb: "Use-case analysis and architecture design for complex connected systems." },
    { id: "npi",                  name: "New Product Introduction (NPI)", categoryId: "systems", blurb: "Structured milestone process from concept to industrialisation." },
    { id: "product-lifecycle",    name: "Product Lifecycle Management", categoryId: "systems", blurb: "Managing a live product from stabilisation through feature growth." },
    { id: "iot-connected",        name: "IoT & Connected Products", categoryId: "systems", blurb: "Full-stack connected product delivery: device, cloud, mobile." },
    { id: "process-digitalisation", name: "Process Digitalisation", categoryId: "systems", blurb: "Digitalising and automating manual estimation/commercial workflows." },

    { id: "hardware-engineering", name: "Hardware Engineering (PCB / Schematics)", categoryId: "hardware", blurb: "Schematic capture, PCB layout and board bring-up." },
    { id: "embedded-firmware",    name: "Embedded Firmware (STM32 / RTOS)", categoryId: "hardware", blurb: "Real-time, multi-threaded firmware on STM32 with ThreadX RTOS / NetX Duo." },
    { id: "wireless-connectivity", name: "Wireless Connectivity (LoRa / Wi-Fi / BLE)", categoryId: "hardware", blurb: "Connectivity design for field-deployed IoT hardware." },
    { id: "test-automation",      name: "Automated Test & Validation", categoryId: "hardware", blurb: "Standards-compliant automated test platforms and release validation." },

    { id: "python",              name: "Python", categoryId: "tools", blurb: "Automated test tooling and validation scripting." },
    { id: "matlab",               name: "MATLAB & Signal Processing", categoryId: "tools", blurb: "Time/frequency-domain analysis and embedded DSP algorithms." },
    { id: "commercial-analysis",  name: "Commercial & Technical Estimation", categoryId: "tools", blurb: "Turning drawings and specs into scoped, risk-informed commercial deliverables." },
    { id: "cloud-mobile",         name: "Cloud & Mobile Integration", categoryId: "tools", blurb: "Linux/Docker cloud services paired with companion mobile apps." }
  ],

  // --------------------------------------------------------------------
  // 6. EXPERIENCE — the core of the CV, most recent first.
  //    Each bullet has its own "skills" (ids from the list above) — click
  //    a bullet to reveal what it took to deliver it, click a skill to see
  //    everywhere else it shows up.
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
      context: "Galaxy, Legrand's connected emergency lighting platform for the AU/NZ market. Safety-critical environment, full-stack scope across hardware, firmware, wireless (LoRa/Wi-Fi/Bluetooth), Linux/Docker, cloud and mobile — coordinated across 3 international R&D centres and 4 functional domains (R&D, marketing, operations, sales).",
      bullets: [
        { text: "Managed programme delivery and feature release lifecycle: stabilisation, new features and security hardening on a live, distributed field deployment.", skills: ["program-management", "iot-connected", "product-lifecycle"] },
        { text: "Contributed to technology feasibility assessments, Go/No-Go decisions and business case development, including investment recommendations presented to international finance stakeholders.", skills: ["business-case", "stakeholder-mgmt", "systems-architecture"] },
        { text: "Ran formal multi-dimensional risk assessments at each NPI milestone, covering technology maturity, supplier dependencies, multi-sourcing and international stakeholder risk. Managed CAPEX/OPEX evaluation across the programme lifecycle.", skills: ["risk-management", "npi", "business-case"] },
        { text: "Managed firmware release impact on a 65,000-unit/year production line: revised PCB assembly BOMs and updated device programming values to ensure SW/HW coherence at scale.", skills: ["hardware-engineering", "embedded-firmware", "product-lifecycle"] },
        { text: "Implemented an AS/NZS2293-compliant automated test platform and structured release validation processes, supporting ~$1.7M in projected warranty cost avoidance over 10 years (parts only, labour excluded).", skills: ["test-automation", "risk-management", "iot-connected"] }
      ]
    },
    {
      id: "exp-legrand-embedded",
      title: "Embedded Systems Engineer | SPE/PoDL Gateway Integration & Evaluation",
      org: "Legrand",
      period: "Sep 2022 — Dec 2023",
      location: "Limoges, France",
      context: "Designed a distributed connected-device architecture and built a full proof of concept of the gateway node using Single Pair Ethernet / Power over Data Line (SPE/PoDL) technology.",
      bullets: [
        { text: "Performed use-case analysis and system architecture design to assess feasibility, interfaces and deployment relevance.", skills: ["systems-architecture", "iot-connected"] },
        { text: "Delivered hardware design including schematics, PCB layout and bus-powered supply architecture.", skills: ["hardware-engineering"] },
        { text: "Developed embedded firmware on STM32 using ThreadX RTOS and NetX Duo, enabling deterministic task scheduling, communication stack integration and system control.", skills: ["embedded-firmware"] },
        { text: "Architected multi-threaded firmware with real-time constraints, ensuring reliable handling of networking, I/O and control processes.", skills: ["embedded-firmware", "systems-architecture"] },
        { text: "Led performance and robustness evaluation through testing of throughput, latency and system reliability.", skills: ["test-automation"] },
        { text: "Defined and monitored KPIs to assess technical maturity and industrial relevance of the solution.", skills: ["npi", "risk-management"] }
      ]
    },
    {
      id: "exp-legrand-intern",
      title: "Hardware & Firmware Development Engineer | Automated Test Interface",
      org: "Legrand — Internship",
      period: "May 2022 — Sep 2022",
      location: "Limoges, France",
      context: "Designed a representative electronic test interface for MEMS microphone validation.",
      bullets: [
        { text: "Studied MEMS microphone behaviour to support the design of a representative electronic test interface.", skills: ["hardware-engineering"] },
        { text: "Designed and prototyped a custom board, including schematic capture, PCB layout and assembly.", skills: ["hardware-engineering"] },
        { text: "Developed embedded software for advanced board control through UART communication.", skills: ["embedded-firmware"] },
        { text: "Integrated the solution into an automated Python-based test interface for validation activities.", skills: ["python", "test-automation"] }
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
        { text: "Extracted and calculated Signal Quality Indicators (SQIs) using advanced time- and frequency-domain analysis.", skills: ["matlab"] },
        { text: "Developed decision rules based on fuzzy logic and indicator correlation to detect arrhythmias and signal anomalies.", skills: ["matlab"] },
        { text: "Implemented algorithms on an embedded DSP to ensure continuous, reliable, real-time patient monitoring.", skills: ["embedded-firmware", "matlab"] }
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
  // 7. EDUCATION
  // --------------------------------------------------------------------
  education: [
    { school: "ENSIL-ENSCI", degree: "Engineering Degree, Electronics & Telecommunications", period: "2020 — 2023" },
    { school: "IAE Limoges", degree: "Master 2, Management of Administrations and Enterprises", period: "Oct 2021 — Jul 2023" }
  ],

  // --------------------------------------------------------------------
  // 8. BEYOND THE JOB — real personal / community projects, article style.
  // --------------------------------------------------------------------
  personalProjects: [
    {
      id: "unicef-walk",
      title: "37km Overnight Walk — North Sydney to Bondi Beach, for UNICEF",
      date: "2025",
      image: null, // add photos from the LinkedIn post to assets/img/personal/
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
