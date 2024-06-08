/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useForm } from "../hooks/useForm";
import SuccessMessageCard from "./SuccessMessageCard";
import FormInside from "./FormInside";

export const FormContext = createContext();

export default function Form({ children }) {
  return (
    <FormContext.Provider value={useForm()}>
      <div className="contact-form">
        <SuccessMessageCard />
        <h1 className="contact-form_title">Contact Us</h1>
        <FormInside>{children}</FormInside>
      </div>
    </FormContext.Provider>
  );
}
