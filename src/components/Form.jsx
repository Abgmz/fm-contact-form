/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useForm } from "../hooks/useForm";
import SuccessMessageCard from "./SuccessMessageCard";
import FormInside from "./FormInside";
import FormInput from "./FormInput";
import FormInputRadios from "./FormInputRadios";
import FormInputRadio from "./FormInputRadio";
import FormTextarea from "./FormTextarea";
import FormCheckbox from "./FormCheckbox";

export const FormContext = createContext();

function Form({ children }) {
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

Form.Input = FormInput;
Form.InputRadios = FormInputRadios;
Form.InputRadio = FormInputRadio;
Form.Textarea = FormTextarea;
Form.Checkbox = FormCheckbox;

export default Form;
