/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FormContext } from "./Form";

export default function FormInputRadio({ val, name, children }) {
  const { contact, handleInput } = useContext(FormContext);
  return (
    <div
      className="contact-form_radio"
      style={
        contact[name] === val
          ? {
              outline: "1px solid hsl(169, 82%, 27%)",
              backgroundColor: "hsl(148, 38%, 91%)",
            }
          : {}
      }
    >
      <input
        type="radio"
        name={name}
        value={val}
        checked={contact[name] === val}
        id={val}
        onChange={handleInput}
      />
      <label htmlFor={val} className="contact-form_label">
        {children}
      </label>
    </div>
  );
}
