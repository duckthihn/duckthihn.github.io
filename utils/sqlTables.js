import {
  CERTIFICATIONS,
  PROJECTS,
  SKILLS,
  WORK_EXPERIENCES,
} from "../constants";

// 1. Work / Experience table
export const work = WORK_EXPERIENCES.map((w) => ({
  role: w.role,
  company: w.company,
  location: w.location || "N/A",
  date: w.date,
  description: w.description || "",
}));

// 2. Projects table
export const projects = PROJECTS.map((p) => ({
  name: p.name,
  category: p.category || "Data Pipeline",
  description: p.description,
  tech: p.tech ? p.tech.join(", ") : "",
  url: p.url,
}));

// 3. Exploded project_tech junction table (Project x Tool) for JOINs and GROUP BY queries
export const project_tech = PROJECTS.reduce((rows, p) => {
  if (p.tech && Array.isArray(p.tech)) {
    p.tech.forEach((t) => {
      rows.push({
        project: p.name,
        tech: t,
      });
    });
  }
  return rows;
}, []);

// 4. Skills table (Category x Skill)
export const skills = Object.entries(SKILLS).reduce((rows, [category, list]) => {
  if (Array.isArray(list)) {
    list.forEach((skill) => {
      rows.push({
        category,
        skill,
      });
    });
  }
  return rows;
}, []);

// 5. Certifications table
export const certifications = CERTIFICATIONS.map((c) => ({
  name: c.name,
}));

const TABLES = {
  work,
  projects,
  project_tech,
  skills,
  certifications,
};

export const SCHEMA = Object.entries(TABLES).map(([table, rows]) => ({
  table,
  columns: rows.length ? Object.keys(rows[0]) : [],
}));

export const PRESET_QUERIES = [
  {
    label: "Where has he worked?",
    sql: "SELECT role, company, location, date\nFROM work;",
  },
  {
    label: "Most-used tech",
    sql: "SELECT tech, COUNT(*) AS used_in_projects\nFROM project_tech\nGROUP BY tech\nORDER BY used_in_projects DESC;",
  },
  {
    label: "Data Pipeline Projects",
    sql: "SELECT name, tech, url\nFROM projects\nWHERE category = 'Data Pipeline';",
  },
  {
    label: "Big Data Stack",
    sql: "SELECT skill\nFROM skills\nWHERE category = 'bigDataTechnologies';",
  },
  {
    label: "Certifications",
    sql: "SELECT name\nFROM certifications;",
  },
];

/**
 * Registers all memory tables with the AlaSQL engine instance
 */
export const registerTables = (alasql) => {
  if (!alasql) return;
  for (const [name, rows] of Object.entries(TABLES)) {
    if (alasql.tables && alasql.tables[name]) {
      alasql.tables[name].data = rows;
      continue;
    }
    alasql(`CREATE TABLE ${name}`);
    alasql.tables[name].data = rows;
  }
};
