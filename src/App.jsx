import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Overview from "./pages/Overview";
import Experience from "./pages/Experience";
import CoverLetter from "./pages/CoverLetter";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "layout" : "layout light"}>
      <aside className="sidebar">
        <div className="brand">ADMIN</div>

        <NavLink to="/" end className="nav">Overview</NavLink>
        <NavLink to="/experience" className="nav">Experience</NavLink>
        <NavLink to="/cover-letter" className="nav">Cover Letter</NavLink>

        <div className="sidebar-footer">
          <label className="switch">
            <span>Dark Mode</span>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            <span className="slider" />
          </label>
        </div>
      </aside>

      <main className="main">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/cover-letter" element={<CoverLetter/>} />
        </Routes>
      </main>
    </div>
  );
}