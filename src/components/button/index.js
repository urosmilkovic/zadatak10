import React from "react";
import { ButtonWrapper } from "./styles";

const Button = ({ children, disabled, ...props }) => {
  return (
    <ButtonWrapper disabled={disabled} {...props}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
