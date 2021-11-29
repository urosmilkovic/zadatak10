import { CheckBoxOutlineBlank, CheckBoxTwoTone } from "@mui/icons-material";
import { Checkbox, ListItemText } from "@mui/material";
import React from "react";
import {
  SelectWrapper,
  LabelWrapper,
  MenuItemWrapper,
  FormControlWrapper,
  IconWrapper,
  ListItemTextWrapper,
  CheckBoxWrapper,
} from "./styles";

const Select = ({
  label = "",
  variant = "outlined",
  color = "primary",
  options = [],
  value,
  onChange = () => {},
  ...props
}) => {
  const handleChange = (e, b) => {
    onChange(e.target.value);
  };

  return (
    <FormControlWrapper variant={variant} color={color} {...props}>
      <LabelWrapper color={color} shrink={false}>
        {label}
      </LabelWrapper>
      <SelectWrapper
        value={value}
        onChange={handleChange}
        multiple
        IconComponent={() => <IconWrapper color={color} />}
        color={color}
        renderValue={() => ""}
        MenuProps={{
          style: {
            marginTop: 0,
          },
          PaperProps: {
            style: {
              borderRadius: 8,
              backgroundColor: (theme) => theme.palette.primary.main,
            },
          },
          MenuListProps: {
            style: {
              padding: `10px 0px`,
            },
          },
        }}
      >
        {options.map((x) => (
          <MenuItemWrapper color={color} value={x.value}>
            <CheckBoxWrapper
              color={color}
              checked={value.map((y) => y).includes(x.value)}
              icon={<CheckBoxOutlineBlank />}
              checkedIcon={<CheckBoxTwoTone />}
            />
            <ListItemTextWrapper color={color}>{x.label}</ListItemTextWrapper>
          </MenuItemWrapper>
        ))}
      </SelectWrapper>
    </FormControlWrapper>
  );
};

export default Select;
