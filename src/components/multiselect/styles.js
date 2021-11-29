import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ListItemText,
  Checkbox,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { styled } from "@mui/system";

export const LabelWrapper = styled(InputLabel)(({ theme, color }) => ({
  ...theme.typography.h4,
  color: theme.palette.common.textColor,
  "&.Mui-focused": {
    color: theme.palette.common.textColor,
  },
}));

export const SelectWrapper = styled(Select)(({ theme, color }) => ({
  borderRadius: 4,
  "& fieldset": {
    border: "none !important",
  },
  "&:hover": {
    "& fieldset": {
      border: "none !important",
    },
  },
  "& .MuiInputBase-input": {
    ...theme.typography.caption,
    height: 48,
    boxSizing: "border-box",
    fontWeight: 700,
  },
}));

export const MenuItemWrapper = styled(MenuItem)(({ theme, color }) => ({
  padding: `${theme.spacing(0)}rem ${theme.spacing(1)}rem`,
  "&.Mui-focusVisible": {
    background: "none",
  },
  "&:hover": {
    color: theme.palette[color].light,
    background: "none",
  },
  "&[aria-selected=true]": {
    color: theme.palette[color].main,
    background: "none",
    "&:hover": {
      color: theme.palette[color].dark,
      background: "none",
    },
  },
}));

export const FormControlWrapper = styled(FormControl)(({ theme, color }) => ({
  minWidth: 200,
}));

export const IconWrapper = styled(KeyboardArrowDown)(({ theme, color }) => ({
  color: theme.palette[color].main,
  position: "absolute",
  right: 10,
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "none",
}));

export const ListItemTextWrapper = styled(ListItemText)(({ theme, color }) => ({
  span: { ...theme.typography.h4, fontWeight: 700 },
}));

export const CheckBoxWrapper = styled(Checkbox)(({ theme, color }) => ({
  "svg path": {
    fill: theme.palette[color].dark,
  },
}));
