import styled from "styled-components";

export const SkillsIntro = styled.div`
  margin-bottom: 0.75rem;
`;

export const SkillsList = styled.div`
  margin-bottom: 1rem;

  .category {
    font-weight: 700;
    margin-bottom: 0.275rem;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

export const SkillsItem = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors?.text[300]};
`;
