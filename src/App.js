import "./App.css";
const all_skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Python",
    level: "intermediate",
    color: "#FF3B00",
  },
  {
    skill: "Salesforce",
    level: "beginner",
    color: "#0D9DDA",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <img className="avatar" src="./assets/image/IMG_5401.JPG" alt="Profile" />
  );
}
function Intro() {
  return (
    <div>
      <h1>Robert Antony</h1>
      <p>
        A young developer interested in learning new techonologies and want to
        explore various fields in computer world. A present moment lover.
      </p>
    </div>
  );
}
function SkillList() {
  const skills = all_skills;
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.skill}
        />
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "😊"}
        {level === "intermediate" && "👌"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
export default App;
