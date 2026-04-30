import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition } from "../motion";
import { supabase } from "../lib/supabaseClient";

export default function Settings({ darkMode, setDarkMode }) {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <motion.div {...pageTransition}>
      <div>
        <h1>Settings</h1>

        <div className="panel">
          <label className="setting">
            Email Notifications
            <input
              type="checkbox"
              checked={showEmail}
              onChange={() => setShowEmail(!showEmail)}
            />
          </label>
        </div>

        <AnimatePresence>
          {showEmail && (
            <motion.div
              className="panel"
              style={{
                background: "color-mix(in srgb, var(--accent) 12%, var(--panel))",
                border: "1px solid color-mix(in srgb, var(--accent) 60%, transparent)"
              }}
              layout
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <p align="left">
                Shoot me an email at{" "}
                <a href="mailto:anthonyleemallon@gmail.com">anthonyleemallon@gmail.com</a>
                {" "}and I will get back to you as soon as possible!
                <br /><br />
                Otherwise please feel free to call me on my mobile (0438 412 771) at any time within business hours.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div layout className="panel" style={{ lineHeight: "1.8" }}>
          <p>Dear Caity,</p>

          <p>&nbsp;&nbsp;&nbsp;Thank you for the opportunity to apply. As you know, I was referred to the role by your colleague Lauren currently within GMHBA. She provided useful context around how the role differs from the public description. I understand that it is grounded in the digital delivery team and that I would be considered "on loan" for parts of the role.</p>
          <p>That insight made the position so much more interesting to me, particularly because I’m extremely adaptable between programming languages and frameworks. Most importantly I'm currently looking for hands-on development work in a team that focuses on practical delivery.</p>
	        <p>I bring solid experience in software development and enjoy both application logic and problem-solving in systems. I’m comfortable working across the stack where needed, and I tend to focus on writing maintainable, straightforward code that other developers can easily work with. I've pushed up a <a href="https://github.com/InvaderFelix/react_resume" target="_blank">Github repository</a> to show the structure behind this project. There were a few unfinished elements due to time constraints since I have not worked with the React framework for the last 12 months. This was made from scratch in about four (4) hours total across two (2) days, including development environment setup and spinning up a Supabase instance.</p>
	        <p>To this point, I should mention that AI LLMs <code>GPT-5.3-Codex</code> and <code>Claude Sonnet 4.6</code> were used to generate boilerplate, with the rest being hand-rolled. This project used <code>Node.js v24.15.0</code> and <code>npm 11.12.1</code> in the JavaScript + React framework using <code>Vite v8.0.10</code> as a build tool.</p>
          <p>Development occurred on a Windows 11 system hosting WSL2 (Debian Linux) before being containerised with Docker and run on another Windows 11 system to perform a final check. There is a small "toy" API in the backend of the Overview page which links to a table with a JSON payload on <a href="https://supabase.com/" target="_blank">Supabase</a>. (Please note that the Experience and Cover Letter pages aren't linked to a backend.)</p>
	        <p>As a qualifying statement on the use of AI, I am a human-in-the-loop style of programmer because I believe <a href="https://www.theregister.com/2026/04/29/aws_keynote_hypes_ai_magic/" target="_blank">human review is the only way</a> to code properly and because I don't <a href="https://www.theguardian.com/technology/2026/apr/29/claude-ai-deletes-firm-database" target="_blank">entirely trust AI</a> with full control over my codebase as more information has surfaced in the past 12 months.</p>
	        <p>I’m willing to commute to Geelong as needed and would prefer being on-site three (3) days a week if that’s how the team operates. I value working closely with others and find it easier to contribute effectively in an in-person environment where possible. Otherwise where remote work is more useful, I have a full setup with redundancy measures at home.</p>
	        <p>I’d welcome the opportunity to discuss how I might fit into the team and contribute to the work at GMHBA.</p>

          Kind Regards,<br></br>
          Anthony Mallon<br></br>
          0438 412 771

        </motion.div>

      </div>
    </motion.div>
  );
}