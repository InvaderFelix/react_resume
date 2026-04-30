import { motion } from "framer-motion";
import { pageTransition } from "../motion";
import { supabase } from "../lib/supabaseClient";

export default function Settings({ darkMode, setDarkMode }) {
  return (
    <motion.div {...pageTransition}>
      <div>
        <h1>Settings</h1>

        <div className="panel">
          <label className="setting">
            Email Notifications
            <input type="checkbox" />
          </label>
        </div>
      </div>
    </motion.div>
  );
}