import React from "react";
import { SkillsIntro, SkillsList, SkillsItem } from "../styles/Skills.styled";
import { Wrapper } from "../styles/Output.styled";

const Skills: React.FC = () => {
  return (
    <Wrapper data-testid="skills">
      <SkillsIntro>Here are my programming skills!</SkillsIntro>
      {skillsData.map(({ category, items }) => (
        <SkillsList key={category}>
          <div className="category">{category}</div>
          <div className="items">
            {items.map(item => (
              <SkillsItem key={item}>[{item}]</SkillsItem>
            ))}
          </div>
        </SkillsList>
      ))}
    </Wrapper>
  );
};

const skillsData = [
  {
    category: "Languages",
    items: ["C", "C++", "SQL", "JavaScript", "TypeScript"],
  },
  {
    category: "Computer Science Fundamentals",
    items: [
      "Data Structures",
      "Algorithms",
      "DBMS (Database Management Systems)",
      "OOP (Object-Oriented Programming)",
      "Operating Systems",
      "System Design",
    ],
  },
  {
    category: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "MySQL Workbench",
      "XAMPP",
      "VS Code",
      "AWS",
      "MS Office",
      "Canva",
    ],
  },
  {
    category: "Web Technologies",
    items: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "Next.js",
    ],
  },
];

export default Skills;
