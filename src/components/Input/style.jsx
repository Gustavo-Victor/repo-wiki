import { styled } from "styled-components";

export const InputElement = styled.input`
  border: 2px solid #fafafa70;
  border-radius: 20px;
  flex: 1;
  min-height: 62px;
  background-color: transparent;
  color: #fff;
  font-size: 1rem;
  padding: 1rem;

  @media screen and (min-width: 578px) {
    padding: 0.3rem 1rem;
  }
`;
