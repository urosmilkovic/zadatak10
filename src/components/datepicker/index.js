import React from "react";
import {
  DatepickerWrapper,
  LabelWrapper,
  FormControlWrapper,
  InputWrapper,
} from "./styles";

const Datepicker = ({
  label,
  variant = "outlined",
  color = "primary",
  options = [],
  fullWidth,
  maxWidth,
  ...props
}) => {
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
      <DatepickerWrapper
        {...props}
        color={color}
        format="DD-MM-YYYY"
        renderInput={(params) => <InputWrapper color={color} {...params} />}
      />
    </FormControlWrapper>
  );
};

export default Datepicker;
