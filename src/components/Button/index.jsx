import { Btn } from "./style";

export default function Button({ children, handleClick }) {
  return <Btn onClick={handleClick}>{children}</Btn>;
}
