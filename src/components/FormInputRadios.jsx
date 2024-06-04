/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FormContext } from "./Form";

export default function FormInputRadios({ children }) {
  const { errors } = useContext(FormContext);
  return (
    <div className="contact-form_query">
      <h2 className="contact-form_label m-b_d-block">Query Type *</h2>
      <div className="col-2">{children}</div>
      {errors.queryType && <span>{errors.queryType}</span>}
    </div>
  );
}
