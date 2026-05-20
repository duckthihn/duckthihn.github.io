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
  dataVisualizations: ["streamlit", "tableau", "powerbi"],
  other: ["git", "cursor", "claude"],
};

export const PROJECTS = [
  {
    name: "Data Lakehouse",
    imageKey: "data-lakehouse",
    description: "A pipeline that collects data from multiple sources, processes it, and stores it in a data lakehouse for analysis and business intelligence purposes.",
    gradient: ["#007BFF", "#66CCFF"],
    url: "https://github.com/duckthihn/job-listings-datalakehouse",
    tech: ["apache-spark", "apache-airflow"],
    category: "Data Pipeline",
  },
  {
    name: "Data Synchronization CDC",
    imageKey: "data-synchronization",
    description: "CDC tool that synchronizes data from multiple sources to a data lakehouse for analysis and business intelligence purposes.",
    gradient: ["#5D4037", "#8D6E63"],
    url: "https://github.com/duckthihn/Data-Synchronization-Pipeline",
    tech: ["apache-spark", "mysql", "mongodb", "kafka", "docker"],
    category: "Data Pipeline",
  },
  {
    name: "Briefly",
    imageKey: "briefly",
    description: "AI that summarize news articles for busy people",
    gradient: ["#F4D03F", "#58D68D"],
    url: "https://gitlab.com/DanTDM2003/grab-bootcamp-ai/-/tree/main?ref_type=heads",
    tech: ["dagster", "mongodb"],
    category: "Data Pipeline",
  },
];

export const WORK_EXPERIENCES = [
  {
    date: "09/2025 – 03/2026",
    role: "Intern -> Fresher Data Engineer",
    company: "Vietnam Silicon",
    description:
      "3 months internship at Vietnam Silicon, where I had the opportunity to work on real-world data engineering projects and gain hands-on experience in building data pipelines and working with big data technologies.",
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
