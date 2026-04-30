import { useState } from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../motion";
import { supabase } from "../lib/supabaseClient";

export default function Experience() {
  const [experience, setExperience] = useState([
    {
      id: 1,
      title: "Software Engineer",
      subtitle: "Advanced Simulation Systems Pty. Ltd.",
      date: "03/2024 - Present",
    description:
      "Systems and simulation development across embedded and application layers. Automation of CI/CD pipelines, and resolving issues through structured log and code analysis."
    },
    {
      id: 2,
      title: "Child Protection Practitioner (CPP2)",
      subtitle: "Department of Families, Fairness, and Housing",
      date: "03/2023 - 09/2023",
      description:
        "Practical case support tasks, facilitating family contact, and assisting with assessment and intervention."
    },
    {
      id: 3,
      title: "Homelessness Youth Worker",
      subtitle: "Youth Accommodation Service (via Samaritans)",
      date: "02/2022 - 10/2022",
      description:
        "(Contract work.) Crisis intervention, housing assistance, and case management."
    },
    {
      id: 4,
      title: "Social Worker",
      subtitle: "Bethal Primary School",
      date: "01/2021 - 11/2021",
      description:
        "(Contract work.) Providing mental health counseling, conducting crisis intervention, facilitating referrals to community resources. Supporting families through COVID remotely."
    },
    {
      id: 5,
      title: "VUSU Executive Officer",
      subtitle: "Victoria University",
      date: "03/2020 - 01/2021",
      description:
        "(Contract work.) Administrative support for elected student representatives and university management, focusing on governance, club affiliations, and financial compliance."
    },
    {
      id: 6,
      title: "Student Call Centre Operator",
      subtitle: "Aegis Services Australia (now STARTEK)",
      date: "11/2017 - 03/2020",
      description:
        "Handling incoming and outgoing communications, and customer support. Eventual SME for Social Work course enquiries."
    },
    {
      id: 7,
      title: "Social Worker Placement (Aboriginal Health Unit)",
      subtitle: "Department of Health",
      date: "06/2018 - 12/2018",
      description:
        "Implemented cultural safety training, provided liaison services between community and government stakeholders."
    },
    {
      id: 8,
      title: "Social Worker Placement (Care Coordinator)",
      subtitle: "Western Health (Footscray / Sunshine Hospital)",
      date: "06/2017 - 12/2017",
      description:
        "Bridge worker between the acute medical setting, patient’s home, and community services outreach."
    },
    {
      id: 9,
      title: "Student Transition Mentor",
      subtitle: "Victoria University",
      date: "01/2016 - 06/2017",
      description:
        "VU International events to assist with student induction experience. Supporting adult learners in group and one-on-one settings during transition events."
    }
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
            placeholder="Add GMHBA? ..."
          />
          <button className="btn" onClick={add}>
            Add
          </button>
        </div>

      { /* { EXPERIENCE PANELS } */ }
      <div className="panel">
        {experience.map((p) => (
          <div
            className="item"
            key={p.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "6px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              <strong>{p.title}</strong>
              <span style={{ color: "var(--muted)" }}>{p.date}</span>
            </div>
          
            <div style={{ color: "var(--muted)", fontSize: "0.9em" }}>
              {p.subtitle}
            </div>
          
            <div>{p.description}</div>
          
            {/* footer row instead of absolute positioning */}
            <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
              <button
                className="danger"
                onClick={() => remove(p.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      </div>
    </motion.div>
  );
}