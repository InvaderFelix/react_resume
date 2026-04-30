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
        .eq("section", "main")
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

  
  const panels = [
    {
      id: "panel1",
      label: "Profile",
      value: "Anthony \"Felix\" Mallon",
      content: "Profile content goes here"
    },
    {
      id: "panel2",
      label: "Skills",
      value: "Computers, Comms, Collab",
      content: "Skills content goes here"
    },
    {
      id: "panel3",
      label: "Projects",
      value: "Teamwork, Systems, Dev",
      content: "Projects content goes here"
    },
    {
      id: "panel4",
      label: "Summary",
      value: "Soft skills, Software, Interests",
      content: "Summary content goes here"
    }
  ];

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

        <p style={{ color: "var(--muted)", marginBottom: "10px" }}>
          Click a card to expand details
        </p>

        {/* TOP 4 PANELS */}
        <div className="grid">
          {panels.map(p => (
            <div
              key={p.id}
              className="stat"
              onClick={() =>
                setActive(prev => (prev === p.id ? null : p.id))
              }
              style={{
                cursor: "pointer",
                border: active === p.id ? "1px solid var(--accent)" : undefined
              }}
            >
              <div className="label">{p.label}</div>
              <div className="value">{p.value}</div>
            </div>
          ))}
        </div>

        {/* EXPANDED PANEL */}
        <AnimatePresence mode="wait">
          {activePanel && (
            <motion.div
              className="panel"
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              <h2>{activePanel.label}</h2>
              <div>{activePanel.content}</div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ORIGINAL STATS */}
        <div className="grid">
          {(content?.stats || []).map((s, i) => (
            <div className="stat" key={i}>
              <div className="label">{s.label || "-"}</div>
              <div className="value">{s.value || "-"}</div>
            </div>
          ))}
        </div>

        {/* ORIGINAL ACTIVITY */}
        <div className="panel">
          <h2>Activity</h2>

          <div className="activity">
            {(content?.activity || []).map((item, i) => (
              <div key={i}>{item}</div>
            ))}

            {(!content?.activity || content.activity.length === 0) && (
              <div>No activity</div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { pageTransition } from "../motion";
// import { supabase } from "../lib/supabaseClient";

// export default function Overview() {
//   const [content, setContent] = useState(null);

//   useEffect(() => {
//     async function load() {
//       const res = await supabase
//         .from("resume_overview")
//         .select("content")
//         .eq("section", "main")
//         .limit(1);

//       const row = res.data && res.data[0];
//       setContent(row ? row.content : null);
//     }

//     load();
//   }, []);

//   return (
//     <motion.div
//       initial={pageTransition.initial}
//       animate={pageTransition.animate}
//       exit={pageTransition.exit}
//       transition={pageTransition.transition}
//     >
//       <div>
//         <h1>{content?.title || "Overview"}</h1>

//         <div className="grid">
//           {(content?.stats || []).map((s, i) => (
//             <div className="stat" key={i}>
//               <div className="label">{s.label || "-"}</div>
//               <div className="value">{s.value || "-"}</div>
//             </div>
//           ))}
//         </div>

//         <div className="panel">
//           <h2>Activity</h2>

//           <div className="activity">
//             {(content?.activity || []).map((item, i) => (
//               <div key={i}>{item}</div>
//             ))}

//             {(!content?.activity || content.activity.length === 0) && (
//               <div>No activity</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }