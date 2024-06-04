import { useContext } from "react";
import { FormContext } from "./Form";

// eslint-disable-next-line react/prop-types
export default function FormInput({ classn, type, val, children }) {
  const { errors, contact, handleInput } = useContext(FormContext);
  return (
    <div className={classn}>
      <label htmlFor={val} className="contact-form_label m-b_d-block">
        {children}
      </label>
      <input
        type={type}
        name={val}
        id={val}
        value={contact[val]}
        className={`contact-form_input ${
          errors.firstName ? "error-field" : ""
        }`}
        onChange={handleInput}
      />
      {errors[val] && <span>{errors[val]}</span>}
    </div>
  );
}
