import React from "react";
import {
  SelectWrapper,
  LabelWrapper,
  MenuItemWrapper,
  FormControlWrapper,
  IconWrapper,
} from "./styles";

const Select = ({
  label,
  variant = "outlined",
  color = "primary",
  options = [],
  value,
  onChange = () => {},
  fullWidth,
  maxWidth,
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
      {...props}
    >
      <LabelWrapper variant="caption" color={color}>
        {label}
      </LabelWrapper>
      <SelectWrapper
        IconComponent={() => <IconWrapper color={color} />}
        color={color}
        value={value}
        onChange={handleChange}
        MenuProps={{
          style: {
            marginTop: 20,
          },
          PaperProps: {
            style: {
              borderRadius: 8,
            },
          },
          MenuListProps: {
            style: {
              padding: 0,
            },
          },
        }}
      >
        {options.map((x, y) => (
          <MenuItemWrapper color={color} value={x.value}>
            {x.label}
          </MenuItemWrapper>
        ))}
      </SelectWrapper>
    </FormControlWrapper>
  );
};

export default Select;
