export const myProjects = [
  {
    id: 6,
    title: "Aura Vibe Lock",
    description:
      "A Gen Z-focused gamified habit-tracking and journaling app built with modern Android (Jetpack Compose).",
    subDescription: [
      "Transforms daily check-ins into an addictive, RPG-style experience with dynamic 3D visuals.",
      "Features personalized AI-driven 'Aura' analysis using Google's Gemini AI."
    ],
    href: "https://github.com/evilsaurav/Aura-Vibe_Lock",
    logo: "",
    image: "/assets/projects/dashboard.jpg",
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
  },
  {
    id: 1,
    title: "BCABuddy (AI Student Assistant)",
    description:
      "An AI-powered full-stack application designed to streamline academic workflows for students.",
    subDescription: [
      "Features include automated syllabus tracking, intelligent exam preparation tools, and resource management.",
      "Streamlines academic workflows through modern UI/UX."
    ],
    href: "https://kind-sea-0b41fb700.2.azurestaticapps.net",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/javascript.svg", // fallback
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/react.svg", // fallback
      },
      {
        id: 3,
        name: "React.js",
        path: "/assets/logos/react.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Tuberculosis M&E Analytics Dashboard",
    description:
      "A robust data visualization dashboard engineered to monitor critical health indicators.",
    subDescription: [
      "Aggregates complex datasets to track project impact and improve field-level efficiency.",
      "Integrates with NIKSHAY for real-time monitoring and advanced insights."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/dashboard.jpg",
    tags: [
      {
        id: 1,
        name: "Power BI",
        path: "/assets/logos/microsoftsqlserver.svg",
      },
      {
        id: 2,
        name: "SQL",
        path: "/assets/logos/microsoftsqlserver.svg",
      },
    ],
  },
  {
    id: 3,
    title: "National TB Elimination Program (NTEP)",
    description:
      "A comprehensive monitoring and evaluation framework to sustain Treatment Success Rates across 22 districts in Bihar.",
    subDescription: [
      "Designed and operated a NIKSHAY-based M&E tracking system covering 53 blocks, managing ~45 patient cases daily.",
      "Conducted rigorous data audits ensuring 100% program compliance with zero flags in government review."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/dashboard.jpg",
    tags: [
      { id: 1, name: "NIKSHAY", path: "/assets/socials/github.svg" }, // fallback icon
      { id: 2, name: "HMIS", path: "/assets/socials/github.svg" },
      { id: 3, name: "DQA", path: "/assets/socials/github.svg" },
    ],
  },
  {
    id: 4,
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
    id: 5,
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
    name: "Linkedin",
    href: "https://www.linkedin.com/in/saurav-kumar-79b34b67",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/7903770587",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/insomniac_vibe_/",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "Email",
    href: "mailto:souravkumarsk@gmail.com",
    icon: "/assets/socials/github.svg", // Fallback, update if email icon exists
  }
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
