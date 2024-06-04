/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useForm } from "../hooks/useForm";
import SuccessMessageCard from "./SuccessMessageCard";

export const FormContext = createContext();

export default function Form({ children }) {
  const { success, handleSubmit } = useForm();
  return (
    <FormContext.Provider value={useForm()}>
      <div className="contact-form">
        <SuccessMessageCard success={success} />
        <h1 className="contact-form_title">Contact Us</h1>
        <form className="contact-form_controls" onSubmit={handleSubmit}>
          {children}
        </form>
      </div>
    </FormContext.Provider>
  );
}
