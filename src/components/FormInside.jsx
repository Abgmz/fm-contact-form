import { useContext } from "react";
import { FormContext } from "./Form";

/* eslint-disable react/prop-types */
export default function FormInside({ children }) {
  const { handleSubmit } = useContext(FormContext);
  return (
    <form className="contact-form_controls" onSubmit={handleSubmit}>
      {children}
      <button className="contact-form_submit">Submit</button>
    </form>
  );
}
