import { useState } from "react";
import { useHandleErrors } from "./useHandleErrors";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  queryType: "",
  message: "",
  consent: false,
};

export const useForm = () => {
  const [contact, setContact] = useState(initialFormState);
  const [success, setSuccess] = useState(false);
  const { errors, handleErrors } = useHandleErrors();

  function handleInput(ev) {
    const { name, value, type, checked } = ev.target;

    setContact((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (handleErrors(contact)) {
      setSuccess(true);
      setContact(initialFormState);
      setTimeout(() => setSuccess(false), 1800);
    } else {
      setSuccess(false);
    }
  }

  return {
    handleInput,
    handleSubmit,
    errors,
    success,
    contact,
  };
};
