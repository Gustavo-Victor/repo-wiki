import { styled } from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #fafafa50;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 10px;

  h3 {
    font-size: 1.5rem;
    color: #fafafa;
  }

  p {
    font-size: 1rem;
    color: #fafafa60;
  }

  .align {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  a {
    font-size: 0.9rem;
    color: #fafafa60;

    &:hover {
      color: #fafafa;
    }
  }

  button {
    color: #a04c4c;
    font-size: 0.9rem;
    background: transparent;
    cursor: pointer;

    &:hover {
      color: #be5a5a;
    }
  }
`;
