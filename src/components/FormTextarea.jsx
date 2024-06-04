/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FormContext } from "./Form";

export default function FormTextarea({ children }) {
  const { contact, errors, handleInput } = useContext(FormContext);
  return (
    <div className="contact-form_message">
      <label htmlFor="message" className="contact-form_label m-b_d-block">
        {children}
      </label>
      <textarea
        className={`contact-form_input ${errors.message ? "error-field" : ""}`}
        name="message"
        id="message"
        value={contact.message}
        rows="4"
        onChange={handleInput}
      ></textarea>
      {errors.message && <span>{errors.message}</span>}
    </div>
  );
}
