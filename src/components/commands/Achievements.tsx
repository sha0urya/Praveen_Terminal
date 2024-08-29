import React from "react";
import {
  AchievementsIntro,
  AchievementsList,
  AchievementItem,
} from "../styles/Achievements.styled";
import { Wrapper } from "../styles/Output.styled";

const Achievements: React.FC = () => {
  return (
    <Wrapper data-testid="achievements">
      <AchievementsIntro>Achievements</AchievementsIntro>
      {achievementsData.map((achievement, index) => (
        <AchievementsList key={index}>
          <AchievementItem>{achievement}</AchievementItem>
        </AchievementsList>
      ))}
    </Wrapper>
  );
};

const achievementsData = [
  "Solved 450+ Leetcode questions, achieved max 1968 rating and 7 badges.",
  "CodeChef 4-Star with maximum rating-1864.",
  "Google Hash Code'2022, Google Kick Start'2022 and Google Code Jam'2022: QUALIFIED",
  "Able to use the and become Postman Student Expert.",
  "Solved 600+ Data Structures and Algorithm problems on different platforms.",
  "Collaborated with peers to solve real-world coding problems and secure 481st place in Reply Code Challenge 2022.",
];

export default Achievements;
