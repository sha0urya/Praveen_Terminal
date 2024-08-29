import React from "react";
import {
  PositionsIntro,
  PositionsList,
  PositionItem,
  PositionDetails,
} from "../styles/Positions.styled";
import { Wrapper } from "../styles/Output.styled";

const Positions: React.FC = () => {
  return (
    <Wrapper data-testid="positions">
      <PositionsIntro>Positions of Responsibility</PositionsIntro>
      {positionsData.map(({ role, organization, duration, description }) => (
        <PositionsList key={role}>
          <PositionItem>{role}</PositionItem>
          <PositionDetails>
            <div>[{organization}]</div>
            <div>[{duration}]</div>
            <div>{description}</div>
          </PositionDetails>
        </PositionsList>
      ))}
    </Wrapper>
  );
};

const positionsData = [
  {
    role: "Web Development Lead",
    organization: "Google Developer Students Club, IIIT AGARTALA",
    duration: "July 2022 - July 2023",
    description:
      "Mentored juniors in web development and organized club events to enhance teamwork and collaboration.",
  },
  {
    role: "Technical Content Writer",
    organization: "HackTechHub",
    duration: "July 2022 - Aug 2023 (Remote)",
    description:
      "Authored technical documents on DSA and web dev published on HacktechHub Platform, with over 2000+ views.",
  },
];

export default Positions;
