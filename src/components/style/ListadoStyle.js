import styled from 'styled-components';

export const Div = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin: 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
    margin: 1rem;
  }
`;
