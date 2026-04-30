import { useState } from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../motion";
import { supabase } from "../lib/supabaseClient";

export default function Experience() {
  const [experience, setExperience] = useState([
    { id: 1, title: "Software Engineer"},
    { id: 2, title: "Sales Associate"}
    
  ]);

  const [input, setInput] = useState("");

  function add() {
    if (!input.trim()) return;

    setExperience([
      ...experience,
      { id: Date.now(), title: input }
    ]);

    setInput("");
  }

  function remove(id) {
    setExperience(experience.filter((p) => p.id !== id));
  }

  return (
    <motion.div {...pageTransition}>
      <div>
        <h1>Experience</h1>

        <div className="row">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add experience ..."
          />
          <button className="btn" onClick={add}>
            Add
          </button>
        </div>

        <div className="panel">
          {experience.map((p) => (
            <div className="item" key={p.id}>
              <span>{p.title}</span>
              <button className="danger" onClick={() => remove(p.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}