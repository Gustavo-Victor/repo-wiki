import { styled } from "styled-components";

export const Container = styled.div`
  width: 85%;
  max-width: 800px;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0;
  gap: 1rem;
  margin: 0 auto;

  svg {
    font-size: 4rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 13px;

  @media screen and (min-width: 578px) {
    flex-direction: row;
  }
`;
