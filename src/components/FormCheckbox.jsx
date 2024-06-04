/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FormContext } from "./Form";

export default function FormCheckbox({ children }) {
  const { contact, handleInput, errors } = useContext(FormContext);
  return (
    <div className="form-check">
      <div className="contact-form_check">
        <input
          type="checkbox"
          name="consent"
          id="consent"
          checked={contact.consent}
          onChange={handleInput}
        />
        <label htmlFor="consent" className="contact-form_label">
          {children}
        </label>
      </div>
      {errors.consent && <span>{errors.consent}</span>}
    </div>
  );
}
