import { TextField, Typography, FormControl } from "@mui/material";
import { styled } from "@mui/system";

export const InputWrapper = styled(TextField)(({ theme, color }) => ({
  "& .MuiInputBase-root": {
    borderRadius: 4,
    backgroundColor: theme.palette.common.input,
    color: theme.palette.common.textColor,
    transition: theme.transitions.create(["background-color", "color"]),
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
