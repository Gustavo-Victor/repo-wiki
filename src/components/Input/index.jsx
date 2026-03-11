import { InputElement } from "./style";

export default function InputWrapper({ handleChange, value }) {
  return (
    <InputElement
      type={"text"}
      onChange={handleChange}
      value={value}
      maxLength={80}
      placeholder="user/repository"
      required
    />
  );
}
