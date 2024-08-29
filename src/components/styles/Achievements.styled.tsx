import styled from "styled-components";

export const AchievementsIntro = styled.div`
  margin-bottom: 0.75rem;
  font-weight: bold;
`;

export const AchievementsList = styled.div`
  margin-bottom: 0.75rem;
`;

export const AchievementItem = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors?.text[200]};
`;
