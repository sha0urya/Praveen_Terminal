import styled from "styled-components";

export const ExpIntro = styled.div`
  margin-bottom: 0.75rem;
`;

export const ExpList = styled.div`
  margin-bottom: 1rem;
`;

export const ExpCompany = styled.div`
  font-weight: 700;
  margin-bottom: 0.275rem;
`;

export const ExpRole = styled.div`
  color: ${({ theme }) => theme.colors?.text[200]};
  font-style: italic;
`;

export const ExpLocation = styled.div`
  color: ${({ theme }) => theme.colors?.text[100]};
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

export const ExpPeriod = styled.div`
  color: ${({ theme }) => theme.colors?.text[200]};
  font-size: 0.85rem;
  margin-top: 0.2rem;
`;

export const ExpDescription = styled.div`
  margin-top: 0.2rem;
  color: ${({ theme }) => theme.colors?.text[300]};
  line-height: 1.5;
`;
