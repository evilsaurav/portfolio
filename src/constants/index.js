export const myProjects = [
  {
    id: 1,
    title: "Doctors For You (DFY) - TB Field MIS & Analytics System",
    category: "CLINICAL ENTERPRISE MIS",
    description:
      "An enterprise-grade, offline-first Management Information System (MIS) and Clinical Analytics Platform built for Doctors For You (DFY) to monitor, evaluate, and accelerate Tuberculosis (TB) elimination operations across 22+ districts in Bihar, India.",
    subDescription: [
      "100% Offline-First Mobile PWA with encrypted local PIN vault (SHA-256 Web Crypto) and IndexedDB auto-sync, enabling uninterrupted clinical reporting in remote zero-network field zones.",
      "Executive Analytics & Reports Studio cutting PostgreSQL database query overhead by 95% via in-memory TTL caching and pre-aggregated district rollups.",
      "Real-time Clinical Cascade tracking, Patient Dropout Radar, and Nikshay ID deduplication across 20+ clinical indicators with direct 1-tap patient calling.",
      "High-density 17-Indicator 33-Sheet District KPI Excel Engine with Render 512MB RAM anti-OOM spooling, plus relational Travel Allowance & Bike Log engine with atomic bulk transactions."
    ],
    href: "https://dfy-frontend.vercel.app/",
    liveUrl: "https://dfy-frontend.vercel.app/",
    github: "https://github.com/evilsaurav/dfy-mis-app",
    logo: "",
    image: "/assets/projects/dashboard.jpg",
    tags: [
      {
        id: 1,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 2,
        name: "Python 3.10+",
        path: "/assets/logos/python.svg",
      },
      {
        id: 3,
        name: "React 19",
        path: "/assets/logos/react.svg",
      },
      {
        id: 4,
        name: "Supabase PostgreSQL",
        path: "/assets/logos/supabase.svg",
      },
      {
        id: 5,
        name: "Tailwind CSS v4",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 6,
        name: "Offline PWA / IndexedDB",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 7,
        name: "Pandas & OpenPyXL",
        path: "/assets/logos/microsoftsqlserver.svg",
      },
    ],
    metrics: [
      { label: "SCALE", value: "22+ Districts of Bihar" },
      { label: "OFFLINE VAULT", value: "100% Offline-First (PIN & IndexedDB)" },
      { label: "QUERY EFFICIENCY", value: "95% Database Read Cut" },
      { label: "EXCEL STUDIO", value: "17-Indicator 33-Sheet Engine" },
      { label: "STATUS", value: "v2.9.1 Active Production" },
    ],
  },
  {
    id: 2,
    title: "DFY Tracker — Enterprise Healthcare Analytics & Intelligence Platform",
    category: "CLINICAL INTELLIGENCE & GIS",
    description:
      "Enterprise-grade clinical analytics, vector GIS mapping, and strategic performance monitoring platform engineered for India's National Tuberculosis Elimination Program (NTEP / Nikshay) across all 38 districts of Bihar.",
    subDescription: [
      "NPY Financial Audit & DBT Disbursal Intelligence engine auditing beneficiary entitlements, PFMS bank rejections, and backlog gaps across all 38 districts.",
      "100% Native Vector GIS Bihar Choropleth Map rendered via QPainter with sub-second lazy loading (<0.5s across 115k+ records) and zero-Chromium overhead.",
      "Modern 'VS Mode' Comparative Analytics Hub featuring trajectory scoring, dual-bar care cascade, and Groq LLaMA 3.3 70B AI strategic narratives.",
      "Multi-Format Executive Presentation Studio generating McKinsey-style 16:9 PowerPoint decks, automated openpyxl Excel workbooks, and formal ReportLab PDF briefings."
    ],
    href: "https://github.com/evilsaurav/DFY-Tracker-",
    github: "https://github.com/evilsaurav/DFY-Tracker-",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Python 3.10+",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "PySide6 / Qt6",
        path: "/assets/logos/qt.svg",
      },
      {
        id: 3,
        name: "Vector GIS / QPainter",
        path: "/assets/logos/python.svg",
      },
      {
        id: 4,
        name: "LLaMA 3.3 AI",
        path: "/assets/socials/github.svg",
      },
      {
        id: 5,
        name: "NumPy & Pandas",
        path: "/assets/logos/python.svg",
      },
      {
        id: 6,
        name: "PowerPoint & OpenPyXL",
        path: "/assets/logos/microsoft.svg",
      },
      {
        id: 7,
        name: "HMAC-SHA256 Security",
        path: "/assets/logos/auth0.svg",
      },
    ],
    metrics: [
      { label: "GIS COVERAGE", value: "38 Districts of Bihar" },
      { label: "ENGINE & UI", value: "Native PySide6 (Qt6) + QThread" },
      { label: "DATA SCALE", value: "115k+ Records (<0.5s Load)" },
      { label: "TEST SUITE", value: "351/351 Tests Passed (100%)" },
      { label: "VERSION & STATUS", value: "v3.6.0 Production Release" },
    ],
  },
  {
    id: 3,
    title: "BCABuddy (AI Student Assistant)",
    description:
      "An AI-powered full-stack application designed to streamline academic workflows for students.",
    subDescription: [
      "Features include automated syllabus tracking, intelligent exam preparation tools, and resource management.",
      "Streamlines academic workflows through modern UI/UX."
    ],
    href: "https://kind-sea-0b41fb700.2.azurestaticapps.net",
    liveUrl: "https://kind-sea-0b41fb700.2.azurestaticapps.net",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 3,
        name: "React.js",
        path: "/assets/logos/react.svg",
      },
    ],
    metrics: [
      { label: "CLOUD", value: "Azure Static Web Apps" },
      { label: "AI WORKFLOW", value: "Automated Syllabus & Exam Prep" },
      { label: "STATUS", value: "Live Production" },
    ],
  },
  {
    id: 4,
    title: "Aura Vibe Lock",
    description:
      "A Gen Z-focused gamified habit-tracking and journaling app built with modern Android (Jetpack Compose).",
    subDescription: [
      "Transforms daily check-ins into an addictive, RPG-style experience with dynamic 3D visuals.",
      "Features personalized AI-driven 'Aura' analysis using Google's Gemini AI."
    ],
    href: "https://github.com/evilsaurav/Aura-Vibe_Lock",
    github: "https://github.com/evilsaurav/Aura-Vibe_Lock",
    logo: "",
    image: "/assets/projects/aura-vibe-lock.jpg",
    tags: [
      {
        id: 1,
        name: "Kotlin",
        path: "/assets/socials/github.svg",
      },
      {
        id: 2,
        name: "Firebase",
        path: "/assets/socials/github.svg",
      },
      {
        id: 3,
        name: "Gemini AI",
        path: "/assets/socials/github.svg",
      },
    ],
    metrics: [
      { label: "PLATFORM", value: "Android (Jetpack Compose)" },
      { label: "AI ENGINE", value: "Google Gemini AI" },
      { label: "STATUS", value: "Open Source" },
    ],
  },
  {
    id: 5,
    title: "Mobile Medical Unit (MMU) Project",
    description:
      "Data management and HMIS reporting system for a patient database averaging 400 daily records across Bhojpur district.",
    subDescription: [
      "Reduced duplicate and erroneous data entries by 35% through standardized data entry protocols.",
      "Generated performance reports covering patient demographics, treatment outcomes, and service delivery KPIs."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      { id: 1, name: "Data Auditing", path: "/assets/socials/github.svg" },
      { id: 2, name: "MIS", path: "/assets/socials/github.svg" },
    ],
  },
  {
    id: 6,
    title: "COVID-19 Community Response",
    description:
      "Coordinated logistics and public health response operations across 36 villages, resulting in 40,000 vaccinations administered.",
    subDescription: [
      "Managed a 29-member field team to execute community health activities.",
      "Planned and executed 95 community engagement activities driving behavioral change."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/dashboard.jpg",
    tags: [
      { id: 1, name: "Coordination", path: "/assets/socials/github.svg" },
      { id: 2, name: "Logistics", path: "/assets/socials/github.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/evilsaurav",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/saurav-kumar-79b34b67",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/insomniac_vibe_/",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/7903770587",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Email",
    href: "mailto:souravkumarsk@gmail.com",
    icon: "/assets/socials/github.svg",
  },
];

export const experiences = [
  {
    title: "Monitoring & Evaluation (M&E) Executive",
    job: "Doctors For You",
    date: "Jul 2024 - Present",
    contents: [
      "Sustain a 70% Treatment Success Rate (TSR) across 6 TB program KPIs by designing and operating a NIKSHAY-based M&E tracking system covering 53 blocks across 6 districts.",
      "Improve stakeholder visibility of ground realities by producing up to 5 monthly and ad-hoc performance reports for internal leadership and government authorities.",
      "Reduce field-level data entry errors by 40% by designing and delivering M&E protocol and DQA training to 40 project staff.",
      "Ensure 100% program compliance with national TB control guidelines by coordinating directly with District TB Officers and State TB Cell across 22 districts."
    ],
  },
  {
    title: "Data Manager (MMU Project)",
    job: "Doctors For You",
    date: "Sep 2023 - Jun 2024",
    contents: [
      "Maintained data confidentiality and integrity across the complete M&E data lifecycle for a patient database averaging 400 daily records.",
      "Reduced duplicate and erroneous data entries by 35% by rolling out standardized data entry protocols for a 2-member team.",
      "Ensured zero data loss across 2 project databases by establishing a structured weekly backup and maintenance schedule.",
      "Enabled data-driven decision-making by generating 30 daily, 4 weekly, and 1 monthly performance report."
    ],
  },
  {
    title: "Block Coordinator (COVID-19 Project)",
    job: "Doctors For You",
    date: "Feb 2022 - Nov 2022",
    contents: [
      "Achieved 75% of program targets, including 40,000 COVID-19 vaccinations administered across 36 villages.",
      "Met COVID-19 outreach KPIs by managing and capacity building a 29-member field team.",
      "Delivered measurable behavioral change in prevention practices among 4,500 community members by executing 95 engagement activities."
    ],
  },
  {
    title: "NOC Room In-charge",
    job: "MC4 Manpower Pvt. Ltd.",
    date: "2021 - 2022",
    contents: [
      "Maintained zero major security incidents by supervising an 80-person surveillance team and monitoring 14 CCTV checkpoints.",
      "Prevented security escalations by establishing a structured daily risk briefing and reporting protocol, resolving ~30 flagged risk incidents per month."
    ],
  },
  {
    title: "Information Technology Support",
    job: "Sunset Infrasoft Pvt. Ltd.",
    date: "2020 - 2021",
    contents: [
      "Maintained IT operational continuity for 100+ staff by managing end-to-end IT operations.",
      "Supported management decision-making by generating 10 MIS reports tracking system performance and IT asset status."
    ],
  },
  {
    title: "Field Officer (Malnutrition Project)",
    job: "Doctors For You",
    date: "2019 - 2020",
    contents: [
      "Improved nutritional health outcomes for 350 beneficiaries by implementing community-level malnutrition intervention strategies.",
      "Accelerated program target achievement by coordinating with Anganwadi and ASHA workers across 7 kendras."
    ],
  },
  {
    title: "Service Engineer (IT Assets)",
    job: "East Central Railway (NITT)",
    date: "2015 - 2016",
    contents: [
      "Maintained same-day resolution for all technical support requests by diagnosing and resolving hardware/software faults.",
      "Improved system reliability by implementing a preventive maintenance schedule for IT assets."
    ],
  },
  {
    title: "B.Sc. in Mathematics",
    job: "Magadh University",
    date: "2015 - 2018",
    contents: [
      "Higher Secondary (I.Sc.) — Bihar Board (2013-2015)",
      "Diploma in Computer Application (DCA)"
    ],
  }
];

export const reviews = []; // Kept empty or removed, will remove component rendering.
