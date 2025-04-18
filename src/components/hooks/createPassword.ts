import { useState } from "react";
import { OptionsData } from "../types/dataTypes";

const createPassword = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const generatePassword = async (
    optionsData: OptionsData[],
    length: number
  ) => {
    let charList = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+-=[]{}|;:,.<>/?",
    };
    let passChars = "";
    let generatedPass = "";

    const optionSelected = optionsData.filter(
      (option) => option.state === true
    );

    if (!optionSelected.length) {
      setError("Please select at least one option.");
      return;
    }

    optionSelected.forEach((option: OptionsData) => {
      switch (option.title) {
        case "Uppercase":
          passChars += charList.uppercase;
          break;
        case "Lowercase":
          passChars += charList.lowercase;
          break;
        case "Numbers":
          passChars += charList.numbers;
          break;
        case "Symbols":
          passChars += charList.symbols;
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * passChars.length);
      generatedPass += passChars.charAt(randomIndex);
    }

    setPassword(generatedPass);
    setError("");
  };

  return { password, error, generatePassword };
};

export default createPassword;
