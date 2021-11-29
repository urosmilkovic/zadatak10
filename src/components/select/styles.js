import { Select, Typography, MenuItem, FormControl } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { styled } from "@mui/system";

export const SelectWrapper = styled(Select)(({ theme, color }) => ({
  borderRadius: 4,
  backgroundColor: theme.palette.common.input,
  color: theme.palette.common.textColor,
  transition: theme.transitions.create(["background-color", "color"]),
  "&:hover": {
    "& fieldset": {
      borderColor: `${theme.palette[color].main} !important`,
    },
  },
  "& .MuiInputBase-input": {
    ...theme.typography.caption,
    height: 48,
    boxSizing: "border-box",
    fontWeight: 700,
  },
}));

export const LabelWrapper = styled(Typography)(({ theme, color }) => ({
  marginBottom: `${theme.spacing(1.5)}rem`,
  color: theme.palette.default.contrastText,
  fontWeight: 500,
}));

export const MenuItemWrapper = styled(MenuItem)(({ theme, color }) => ({
  ...theme.typography.caption,
  fontWeight: 700,
  padding: `${theme.spacing(4)}rem ${theme.spacing(3)}rem`,
  "&.Mui-focusVisible": {
    background: "none",
  },
  "&:not(:last-child)": {
    borderBottom: "1px solid #00000020",
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

export const FormControlWrapper = styled(FormControl)(
  ({ minWidth, fullWidth }) => ({
    minWidth: minWidth ? 200 : "auto",
    gridColumn: fullWidth ? "1/-1" : "auto",
  })
);

export const IconWrapper = styled(KeyboardArrowDown)(({ theme, color }) => ({
  color: theme.palette[color].main,
  position: "absolute",
  right: 10,
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "none",
}));
