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
    items: ["C", "C++", "Golang", "SQL", "JavaScript", "TypeScript", "Python"],
  },
  {
    category: "Computer Science Fundamentals",
    items: [
      "Data Structures & Algorithms",
      "DBMS",
      "OOPs",
      "Operating Systems",
      "Computer Networks",
      "System Design",
    ],
  },
  {
    category: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "VS Code",
      "MySQL Workbench",
      "XAMPP",
      "Makefile",
      "Docker",
      "Kubernetes",
      "OpenSearch",
      "Kibana",
      "Grafana",
    ],
  },
  {
    category: "Web Technologies",
    items: [
      "HTML",
      "CSS",
      "Firebase",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "Next.js",
      "Nest.js",
    ],
  },
];

export default Skills;
