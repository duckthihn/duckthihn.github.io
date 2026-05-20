export const METADATA = {
  author: "Thinh Pham",
  title: "Portfolio | Duc Thinh Pham",
  description:
    "Shubh Porwal is a passionate Product Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@shubhporwal24",
  keywords: [
    "Shubh Porwal",
    "Product Engineer",
    "Frontend Engineer",
    "React Native Engineer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Certifications",
    ref: "certifications",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A Data Engineer",
  "I create data pipelines",
  "I make data insights",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:thinhpham1807@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/duc-thinh-pham-8705b0249/",
  },
  {
    name: "github",
    url: "https://github.com/duckthihn",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/duckthihnn/",
  },
  // {
  //   name: "twitter",
  //   url: "https://x.com/shubhporwal24",
  // },
];

export const SKILLS = {
  languagesAndTools: [
    "python",
    "sql",
    "docker",
    "linux",
  ],
  bigDataTechnologies: [
    "apache-spark",
    "apache-airflow",
    "dagster",
    "kafka",
    "hadoop",
    "dbt"
  ],
  databases: ["mysql", "mongodb", "postgresql", "minio-light"],
  dataVisualizations: ["streamlit","tableau", "powerbi"],
  other: ["git", "cursor", "claude"],
};

export const PROJECTS = [
  {
    name: "Data Synchronization",
    imageKey: "nextboss",
    description: "Get hired through DMs not resumes 🤝",
    gradient: ["#FF69B4", "#FFB6C1"], // hot pink to light pink (cherry blossom inspired)
    url: null,
    tech: ["apache-spark", "mysql", "mongodb", "kafka", "docker"],
  },
  {
    name: "Briefly",
    imageKey: "ready-ai",
    description: "AI that gets you interview ready 🎯",
    gradient: ["#F4D03F", "#58D68D"], // warm gold to fresh green
    url: "https://play.google.com/store/apps/details?id=com.app.readyai",
    tech: ["typescript", "react"],
  },
  // {
  //   name: "Grapevine Round1 AI",
  //   imageKey: "round1",
  //   description: "Ace your round one in 9 minutes  💼",
  //   gradient: ["#5D4037", "#8D6E63"], // dark brown to medium brown
  //   url: "https://play.google.com/store/apps/details?id=com.app.gvine",
  //   tech: ["typescript", "react", "react-query"],
  // },
  // {
  //   name: "React Native Directory",
  //   imageKey: "react-native-directory",
  //   description: "Search & filter React Native libraries via Raycast ⌨️",
  //   gradient: ["#000000", "#1A1A1A"], // pure black to dark gray
  //   url: "https://www.raycast.com/shubh_porwal/react-native-directory",
  //   tech: ["typescript", "react", "expo", "raycast"],
  // },
  // {
  //   name: "Buywow",
  //   imageKey: "buywow",
  //   description: "Official Wow Skin Science app 🌿",
  //   gradient: ["#FFD54F", "#FFB300"], // bright golden yellow to deep orange
  //   url: "https://play.google.com/store/apps/details?id=co.tapcart.app.id_99G6QNo3nu",
  //   tech: ["typescript", "react", "react-query"],
  // },
  // {
  //   name: "Bot9",
  //   imageKey: "bot9",
  //   description: "Automate support with AI 🤖",
  //   gradient: ["#3F51B5", "#7986CB"], // indigo to medium blue
  //   url: "https://bot9.ai/",
  //   tech: ["typescript", "react", "nextjs", "tailwindcss"],
  // },
  // {
  //   name: "Dukaan",
  //   imageKey: "dukaan",
  //   description: "Shopify for India 🛍️",
  //   gradient: ["#1976D2", "#1565C0"], // material blue to deep blue
  //   url: "https://play.google.com/store/apps/details?id=com.dukaan.app",
  //   tech: ["typescript", "react", "firebase", "tailwindcss", "react-query"],
  // },
  // {
  //   name: "Tesla",
  //   imageKey: "tesla",
  //   description: "Built with Expo 🏎️",
  //   gradient: ["#0F172A", "#1E293B"], // midnight blue to dark slate (electric/tech feel)
  //   url: "https://github.com/shubh73/tesla",
  //   tech: ["javascript", "expo"],
  // },
  // {
  //   name: "Airbnb",
  //   imageKey: "airbnb",
  //   description: "Built with NextJS + Tailwind CSS 🛏️",
  //   gradient: ["#1F2937", "#6B7280"], // dark gray to medium gray
  //   url: "https://shubh73-airbnb.vercel.app/",
  //   tech: ["javascript", "react", "nextjs", "mapbox", "tailwindcss"],
  // },
  // {
  //   name: "Medium",
  //   imageKey: "medium",
  //   description: "Built with NextJS + Tailwind CSS ✍🏻",
  //   gradient: ["#FF9800", "#F57C00"], // warm orange to deep orange
  //   url: "https://shubh73-medium.vercel.app/",
  //   tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity"],
  // },
  // {
  //   name: "Inshorts",
  //   imageKey: "inshorts",
  //   description: "Voice-enabled news using Alan AI 🎙",
  //   gradient: ["#6366F1", "#4F46E5"], // indigo to deep indigo
  //   url: "https://shubh73-inshorts.netlify.app/",
  //   tech: ["javascript", "react", "chakra-ui", "alan"],
  // },
];

export const WORK_EXPERIENCES = [
    {
      date: "01/2026 – 03/2026",
      role: "Fresher Data Engineer",
      company: "Vietnam Silicon",
      description:
        "Grapevine is your anonymous office chat, letting coworkers speak openly, share gossip and connect without filters. Building on that same belief, Round1 AI brings it to hiring using AI-driven interviews to replace guesswork with genuine and meaningful conversations.",
      location: "HCM, Vietnam",
      image: "/work/vietnam-silicon.png",
      imageAlt: "Vietnam Silicon — connect and collaborate",
    },
    {
      date: "09/2025 – 12/2025",
      role: "Intern Data Engineer",
      company: "Vietnam Silicon",
      description:
        "Grapevine is your anonymous office chat, letting coworkers speak openly, share gossip and connect without filters. Building on that same belief, Round1 AI brings it to hiring using AI-driven interviews to replace guesswork with genuine and meaningful conversations.",
      location: "HCM, Vietnam",
      image: "/work/vietnam-silicon.png",
      imageAlt: "Vietnam Silicon — connect and collaborate",
    },
];

export const CERTIFICATIONS = [
  {
    name: "Google Data Analytics Professional Certificate",
    image: "/certifications/google-data-analytics.png",
    imageAlt: "Google Data Analytics Professional Certificate",
  },
  {
    name: "HackerRank SQL Intermediate",
    image: "/certifications/hackerrank-sql.png",
    imageAlt: "HackerRank SQL Intermediate certificate",
  },
  {
    name: "Grab Tech Bootcamp 2025 Certificate",
    image: "/certifications/grab-tech-bootcamp.png",
    imageAlt: "Grab Tech Bootcamp 2025 Certificate",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
