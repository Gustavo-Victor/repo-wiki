import { styled } from "styled-components";

export const Btn = styled.button`
  background-color: transparent;
  font-size: 0.9rem;
  border-radius: 20px;
  cursor: pointer;
  background-color: #29903b;
  color: #fff;
  width: auto;
  min-width: 120px;
  padding: 1rem 0;
  height: 62px;

  &:hover {
    background-color: #49a158;
  }

  @media screen and (min-width: 578px) {
    padding: 0;
  }
`;
