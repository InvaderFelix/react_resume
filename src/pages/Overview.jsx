import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransition } from "../motion";
import { supabase } from "../lib/supabaseClient";

export default function Overview() {
  const [content, setContent] = useState(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("resume_overview")
        .select("content")
        .eq("section", "overview")
        .limit(1);

      if (error) {
        console.error(error);
        return;
      }

      const row = data?.[0];
      setContent(row?.content ?? null);
    }

    load();
  }, []);

  const panels = content?.panels || [];
  const activePanel = panels.find(p => p.id === active);

  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <div>
        <h1>{content?.title || "Overview"}</h1>

        <p className="hint">Click a card to expand details</p>

        {/* TOP PANELS */}
        <motion.div
          className="grid"
          layout
          transition={{ type: "spring", stiffness: 110, damping: 28 }}
        >
          {panels.map(p => (
            <div
              key={p.id}
              className={`stat ${active === p.id ? "active" : ""}`}
              onClick={() =>
                setActive(prev => (prev === p.id ? null : p.id))
              }
            >
              <div className="label">{p.label}</div>
              <div className="value">{p.value}</div>
            </div>
          ))}
        </motion.div>

        {/* EXPANDED PANEL */}
        <AnimatePresence mode="wait">
          {activePanel && (
            <motion.div
              key={activePanel.id}
              className="panel"
              layout
              style={{ overflow: "hidden" }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2>{activePanel.label}</h2>

              <div
                dangerouslySetInnerHTML={{ __html: activePanel.content }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* STATS */}
        <motion.div
          className="grid"
          layout
          transition={{ type: "spring", stiffness: 110, damping: 28 }}
        >
          {(content?.stats || []).map((s, i) => (
            <div className="stat" key={i}>
              <div className="label">{s.label || "-"}</div>
              <div className="value">{s.value || "-"}</div>
            </div>
          ))}
        </motion.div>

        {/* ACTIVITY */}
        <motion.div
          className="panel"
          layout
          transition={{ type: "spring", stiffness: 110, damping: 28 }}
        >
          <h2>Activity</h2>

          <div className="activity">
            {(content?.activity || []).map((item, i) => (
              <div key={i}>{item}</div>
            ))}

            {(!content?.activity || content.activity.length === 0) && (
              <div>No activity</div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}