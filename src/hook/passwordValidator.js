import { useState, useEffect } from "react";

const passRegex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;

export const usePasswordValidation = ({
  passOne,
  passTwo,
  isSubmitting,
  isRepeatSubbmitting,
}) => {
  const [passwordValidationMessage, setPasswordValidationMessage] = useState(
    null
  );

  useEffect(() => {
    if (isSubmitting) {
      if (!passOne) setPasswordValidationMessage("Hasło wymagane");
      else if (!passRegex.test(passOne))
        setPasswordValidationMessage("Słabe hasło");
      else setPasswordValidationMessage("");
    }

    if (isRepeatSubbmitting) {
      if (!passTwo) setPasswordValidationMessage("Powtórz hasło");
      else if (passOne !== passTwo) setPasswordValidationMessage("Różne hasła");
      else setPasswordValidationMessage("");
    }
  }, [passOne, passTwo, isSubmitting, isRepeatSubbmitting]);

  return [passwordValidationMessage];
};
