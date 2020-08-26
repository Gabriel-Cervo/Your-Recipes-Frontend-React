import React from "react";

import { TextareaBlock } from "./styles.js";

const Textarea = ({ label, name, showWarning, ...rest }) => {
  return ( 
    <TextareaBlock showWarning={showWarning}>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </TextareaBlock>
  );
};

export default Textarea;
