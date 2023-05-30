import React from "react";
import Select from "react-select";
import { customStyles } from "../constants/customStyles";
import { SupportedLanguages } from "../constants/SupportedLanguages";

const LanguageOptions = ({ onSelectChange }) => {
  return (
    <Select
      placeholder={`Choose Language`}
      options={SupportedLanguages}
      styles={customStyles}
      defaultValue={SupportedLanguages[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguageOptions;
