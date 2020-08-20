import React from "react";

import InputBlock from "./styles.js";

const Input = ({ label, name, showWarning, ...rest }) => {
  return (
    <InputBlock showWarning={showWarning}>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </InputBlock>
  );
};

export default Input;
