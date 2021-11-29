import React from "react";
import { FormControlWrapper, InputWrapper, LabelWrapper } from "./styles";

const Input = ({
  label,
  variant = "outlined",
  color = "primary",
  fullWidth,
  maxWidth,
  onChange = () => {},
  ...props
}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <FormControlWrapper
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <LabelWrapper variant="caption" color={color}>
        {label}
      </LabelWrapper>
      <InputWrapper color={color} onChange={handleChange} {...props} />
    </FormControlWrapper>
  );
};

export default Input;
