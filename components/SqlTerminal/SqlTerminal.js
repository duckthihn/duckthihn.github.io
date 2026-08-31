import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS } from "../../constants";
import { PRESET_QUERIES, SCHEMA, registerTables } from "../../utils/sqlTables";

const MAX_RENDERED_ROWS = 50;

const SqlTerminal = () => {
  const sectionRef = useRef(null);
  const engineRef = useRef(null);
  const textareaRef = useRef(null);
  const pendingRef = useRef(null);

  const [query, setQuery] = useState(PRESET_QUERIES[0].sql);
  const [rows, setRows] = useState(null);
  const [status, setStatus] = useState({
    kind: "idle",
    text: "Press Run — query Duc Thinh Pham's data warehouse",
  });
  const [schemaOpen, setSchemaOpen] = useState(false);
  const [isNear, setIsNear] = useState(false);

  // Execute SQL Query engine
  const execute = useCallback((rawSql, source = "custom") => {
    const sql = rawSql.trim().replace(/;+\s*$/, "");
    if (!sql) return;

    const fail = (text, detail) => {
      setRows(null);
      setStatus({ kind: "error", text, detail });
    };

    // Guardrails & Easter Eggs
    if (/\bsalary\b/i.test(sql)) {
      return fail(
        'ERROR: permission denied for table "salary"',
        "Compensation details are served over coffee ☕ — feel free to connect via LinkedIn or Email!"
      );
    }
    if (/^(drop|delete|update|insert|truncate|alter|create|merge)\b/i.test(sql)) {
      return fail(
        "ERROR: read-only database",
        "This data warehouse is read-only. Only SELECT queries are permitted."
      );
    }
    if (sql.indexOf(";") !== -1) {
      return fail(
        "ERROR: single query restriction",
        "Please execute one SELECT statement at a time."
      );
    }
    if (!/^(select|show|with)\b/i.test(sql)) {
      return fail(
        "ERROR: unsupported statement",
        "Only SELECT statements are allowed. Open the Schema panel to see available tables and columns."
      );
    }

    if (!engineRef.current) {
      pendingRef.current = { sql, source };
      setIsNear(true);
      setStatus({ kind: "loading", text: "Initializing AlaSQL database engine..." });
      return;
    }

    try {
      const t0 = performance.now();
      const result = engineRef.current(sql);
      const elapsed = Math.round(performance.now() - t0 + Math.random() * 15 + 5);
      const data = Array.isArray(result) ? result : [];

      setRows(data);
      setStatus({
        kind: "ok",
        text:
          data.length === 0
            ? `✓ 0 rows returned · ${elapsed} ms`
            : `✓ ${data.length} row${data.length === 1 ? "" : "s"} returned · ${elapsed} ms`,
      });
    } catch (e) {
      const raw = e instanceof Error ? e.message : String(e);
      const friendly = /not (found|exist)/i.test(raw)
        ? "ERROR: table or column not found"
        : "ERROR: SQL syntax error";
      fail(friendly, `${raw}. Check the Schema tab to see valid tables and columns.`);
    }
  }, []);

  // Dynamically load alaSQL when section approaches viewport
  useEffect(() => {
    if (!isNear || engineRef.current) return;
    let cancelled = false;

    import("alasql").then((mod) => {
      if (cancelled) return;
      const alasql = mod.default || mod;
      registerTables(alasql);
      engineRef.current = alasql;

      if (pendingRef.current) {
        const pending = pendingRef.current;
        pendingRef.current = null;
        execute(pending.sql, pending.source);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [isNear, execute]);

  // GSAP ScrollTrigger setup
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const el = sectionRef.current;
      ScrollTrigger.create({
        trigger: el,
        start: "top 120%",
        once: true,
        onEnter: () => setIsNear(true),
      });

      gsap.fromTo(
        el.querySelectorAll(".staggered-reveal"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const runPreset = (label, sql) => {
    setQuery(sql);
    execute(sql, "preset");
  };

  const onEditorKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      execute(query, "custom");
    }
  };

  const columns = rows && rows.length ? Object.keys(rows[0]) : [];
  const visibleRows = rows ? rows.slice(0, MAX_RENDERED_ROWS) : [];
  const sectionRefId = MENULINKS.find((el) => el.ref === "sql")?.ref || "sql";

  return (
    <section
      ref={sectionRef}
      id={sectionRefId}
      aria-label="SQL Terminal"
      className="w-full relative select-none mt-32"
    >
      <div className="section-container py-12 flex flex-col justify-center">
        {/* Section Heading */}
        <div className="flex flex-col mb-8">
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
            SQL TERMINAL
          </p>
          <h2 className="text-5xl md:text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
            Query My Profile
          </h2>
          <p className="text-lg md:text-xl font-medium md:max-w-xl w-full mt-2 text-gray-light-2 staggered-reveal">
            Run SQL queries live against my experience, projects, skills, and certifications in real-time.
          </p>
        </div>

        {/* Terminal Chrome Window */}
        <div className="staggered-reveal w-full rounded-2xl overflow-hidden bg-gray-dark-4/90 backdrop-blur-md border border-gray-dark-2 shadow-2xl transition-all duration-300">
          {/* Top Title Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-dark-2 bg-gray-dark-5/80">
            <div className="flex items-center gap-3">
              <div className="flex gap-2" aria-hidden="true">
                <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#ff5f56" }} title="Close"></span>
                <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#ffbd2e" }} title="Minimize"></span>
                <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#27c93f" }} title="Restore"></span>
              </div>
              <span className="font-mono text-xs md:text-sm text-gray-light-3 flex items-center gap-2">
                <span className="text-purple font-semibold">duckthihn_dw</span>
                <span className="text-gray-light-4">·</span>
                <span className="flex items-center gap-1.5 text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  connected
                </span>
              </span>
            </div>

            <button
              type="button"
              onClick={() => setSchemaOpen((v) => !v)}
              className="link font-mono text-xs px-3 py-1 rounded bg-purple/20 text-purple border border-purple/30 hover:bg-purple/30 transition-colors"
              aria-expanded={schemaOpen}
            >
              Schema {schemaOpen ? "▲" : "▼"}
            </button>
          </div>

          {/* Schema Explorer Drawer */}
          {schemaOpen && (
            <div className="px-5 py-4 border-b border-gray-dark-2 bg-gray-dark-5/50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SCHEMA.map((t) => (
                <div key={t.table} className="font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => {
                      setQuery(`SELECT * FROM ${t.table};`);
                      textareaRef.current?.focus();
                    }}
                    className="link text-purple font-semibold hover:underline block text-left"
                    title={`Click to generate query for ${t.table}`}
                  >
                    📊 {t.table}
                  </button>
                  <div className="mt-1 text-gray-light-4 leading-relaxed">
                    {t.columns.join(" · ")}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Preset Chips */}
          <div className="flex gap-2 px-5 pt-4 overflow-x-auto no-scrollbar pb-1">
            {PRESET_QUERIES.map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => runPreset(p.label, p.sql)}
                className="link whitespace-nowrap text-xs font-mono font-medium px-3.5 py-1.5 rounded-full bg-indigo-dark/20 text-indigo-light border border-indigo-dark/40 hover:bg-indigo-dark/40 hover:text-white transition-all"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Code Editor Container */}
          <div className="m-5 rounded-xl bg-black/60 border border-gray-dark-2 focus-within:border-purple/60 transition-colors">
            <textarea
              ref={textareaRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onEditorKeyDown}
              spellCheck={false}
              autoCapitalize="off"
              autoCorrect="off"
              rows={4}
              aria-label="SQL query editor"
              className="w-full resize-none bg-transparent p-4 font-mono text-sm text-gray-light-1 outline-none caret-purple"
            />
          </div>

          {/* Action Row & Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-5 pb-5">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => execute(query, "custom")}
                className="link inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-indigo-dark text-white text-sm font-semibold hover:bg-purple hover:shadow-[0_0_20px_rgba(139,49,255,0.4)] transition-all"
              >
                ▶ Run
                <span className="hidden sm:inline font-mono text-[10px] opacity-70 bg-white/20 px-1.5 py-0.5 rounded">
                  ⌘⏎ or Ctrl+⏎
                </span>
              </button>
            </div>

            <span
              role="status"
              className={`font-mono text-xs md:text-sm ${status.kind === "ok"
                ? "text-green"
                : status.kind === "error"
                  ? "text-red"
                  : "text-gray-light-3"
                }`}
            >
              {status.text}
            </span>
          </div>

          {/* Error Details */}
          {status.kind === "error" && status.detail && (
            <div className="mx-5 mb-5 rounded-xl border border-red/40 bg-red/10 px-4 py-3 font-mono text-xs text-red-light leading-relaxed">
              {status.detail}
            </div>
          )}

          {/* Query Results Table */}
          {rows && rows.length > 0 && (
            <div className="px-5 pb-5">
              <div className="rounded-xl border border-gray-dark-2 overflow-hidden bg-black/40">
                <div className="overflow-x-auto max-h-80 overflow-y-auto">
                  <table className="w-full font-mono text-xs md:text-sm text-left">
                    <thead>
                      <tr className="sticky top-0 z-10 bg-gray-dark-3 border-b border-gray-dark-2">
                        {columns.map((c) => (
                          <th
                            key={c}
                            className="text-purple font-semibold px-4 py-2.5 uppercase tracking-wider whitespace-nowrap"
                          >
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-dark-2/60">
                      {visibleRows.map((row, i) => (
                        <tr
                          key={i}
                          className="hover:bg-purple/10 transition-colors"
                        >
                          {columns.map((c) => (
                            <td
                              key={c}
                              className="px-4 py-2.5 text-gray-light-2 whitespace-nowrap max-w-xs overflow-hidden text-ellipsis"
                            >
                              {row[c] === null || row[c] === undefined ? (
                                <span className="text-gray-light-4 italic">NULL</span>
                              ) : (
                                String(row[c])
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {rows.length > MAX_RENDERED_ROWS && (
                <p className="mt-2 font-mono text-xs text-gray-light-4">
                  Showing top {MAX_RENDERED_ROWS} of {rows.length} rows
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SqlTerminal;
