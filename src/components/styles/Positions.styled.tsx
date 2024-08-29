import styled from "styled-components";

export const PositionsIntro = styled.div`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors?.text[100]};
`;

export const PositionsList = styled.div`
  margin-bottom: 1rem;
  margin-left: 0.75rem;
`;

export const PositionItem = styled.div`
  font-weight: 700;
  margin-bottom: 0.275rem;
  color: ${({ theme }) => theme.colors?.text[300]};
`;

export const PositionDetails = styled.div`
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors?.text[200]};
  div {
    margin-bottom: 0.275rem;
  }
`;
