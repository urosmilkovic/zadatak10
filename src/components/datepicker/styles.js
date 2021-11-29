import { DatePicker } from "@mui/lab";
import { Typography, FormControl, TextField } from "@mui/material";
import { styled } from "@mui/system";

export const DatepickerWrapper = styled(DatePicker)(({ theme, color }) => ({
  borderRadius: 4,
  // "&:hover": {
  //   "& fieldset": {
  //     borderColor: theme.palette[color].main,
  //   },
  // },
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

export const FormControlWrapper = styled(FormControl)(
  ({ minWidth, fullWidth }) => ({
    minWidth: minWidth ? 200 : "auto",
    gridColumn: fullWidth ? "1/-1" : "auto",
  })
);

export const InputWrapper = styled(TextField)(({ theme, color }) => ({
  "& .MuiInputBase-root": {
    borderRadius: 4,
    backgroundColor: theme.palette.common.input,
    transition: theme.transitions.create(["background-color", "color"]),
    color: theme.palette.common.textColor,
    "&:hover": {
      "& fieldset": {
        borderColor: theme.palette[color].main,
      },
    },
    "& .MuiInputBase-input": {
      ...theme.typography.caption,
      height: 48,
      boxSizing: "border-box",
      fontWeight: 700,
    },
  },
}));
