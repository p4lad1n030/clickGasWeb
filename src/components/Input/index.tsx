import { InputProps } from "../../types";
import "./input.css";

const Input = ({ placeholder, name, type, register, rules, error}: InputProps) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className="input "
        id={name}
      />
      <p className="text-xs text-[#334371] ">{error}</p>
    </>
  );
};
export default Input;
