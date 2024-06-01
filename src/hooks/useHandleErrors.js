import { useState } from "react";

export const useHandleErrors = () => {
  const [errors, setErrors] = useState({});

  function handleErrors(contact) {
    let isValid = true;
    const newErrors = {};

    if (!contact.firstName) {
      isValid = false;
      newErrors.firstName = "This field is required";
    }

    if (!contact.lastName) {
      isValid = false;
      newErrors.lastName = "This field is required";
    }

    if (
      !contact.email ||
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(contact.email)
    ) {
      isValid = false;
      newErrors.email = "Please enter a valid email address";
    }

    if (!contact.queryType) {
      isValid = false;
      newErrors.queryType = "Please select a query type";
    }

    if (!contact.message) {
      isValid = false;
      newErrors.message = "This field is required";
    }

    if (!contact.consent) {
      isValid = false;
      newErrors.consent =
        "To submit this form, please consent to being contacted";
    }

    setErrors(newErrors);
    return isValid;
  }

  return {
    errors,
    setErrors,
    handleErrors,
  };
};
