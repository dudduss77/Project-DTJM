import { useState, useEffect } from "react";

export const useRequiredValidation = ({ value, isSubmitting }) => {
  const [requiredValidationMessage, setRequiredValidationMessage] = useState(
    null
  );

  useEffect(() => {
    if (isSubmitting) {
      if (!value) setRequiredValidationMessage("Pole wymagane");
      else setRequiredValidationMessage("");
    }
  }, [value, isSubmitting]);

  return [requiredValidationMessage];
};
