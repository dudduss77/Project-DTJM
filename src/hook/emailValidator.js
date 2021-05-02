import { useState, useEffect } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useEmailValidation = ({ isSubmitting, email }) => {
  const [emailValidMessage, setValidMessage] = useState(null);

  useEffect(() => {
    if (isSubmitting) {
      if (!email) setValidMessage("Email wymagany");
      else if (!emailRegex.test(email))
        setValidMessage("Nie poprawny adres email");
      else setValidMessage("");
    }
  }, [isSubmitting, email]);

  return [emailValidMessage];
};
