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
    name: "SQL Terminal",
    ref: "sql",
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
    "databricks",
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

export const SKILL_NAMES = {
  python: "Python",
  sql: "SQL",
  docker: "Docker",
  linux: "Linux",
  databricks: "Databricks",
  "apache-spark": "Apache Spark",
  "apache-airflow": "Apache Airflow",
  airflow: "Apache Airflow",
  dagster: "Dagster",
  kafka: "Kafka",
  hadoop: "Hadoop",
  dbt: "dbt",
  mysql: "MySQL",
  mongodb: "MongoDB",
  postgresql: "PostgreSQL",
  "minio-light": "MinIO",
  "aws-light": "AWS",
  "amazon-s3": "Amazon S3",
  "github-light": "GitHub",
  streamlit: "Streamlit",
  tableau: "Tableau",
  powerbi: "Power BI",
  git: "Git",
  cursor: "Cursor",
  claude: "Claude",
};

export const getSkillName = (skillKey) => {
  if (SKILL_NAMES[skillKey]) return SKILL_NAMES[skillKey];
  return skillKey
    .replace(/-light$/, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
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
    date: "06/2026 – 09/2026",
    role: "Data Engineer Intern",
    company: "NAB Innovation Centre Vietnam",
    description:
      "Databricks • Banking • Financial Data",
    location: "Ho Chi Minh City",
    image: "/work/nab.png",
    imageAlt: "NAB Innovation Centre Vietnam",
  },
  {
    date: "09/2025 – 03/2026",
    role: "Data Engineer Intern",
    company: "Vietnam Silicon",
    description:
      "Agriculture • Hospitality Data Insights",
    location: "Ho Chi Minh City",
    image: "/work/vns.png",
    imageAlt: "Vietnam Silicon — with us, you can",
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
