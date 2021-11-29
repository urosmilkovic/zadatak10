import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const ButtonWrapper = styled(Button)(
  ({ theme, size = "medium", disabled, color = "primary" }) => {
    const sideMargin = {
      small: 2,
      medium: 4,
      large: 6,
    };

    const heights = {
      small: "30",
      medium: "42",
      large: "56",
    };

    const sizes = {
      small: [1, sideMargin.small].map((x) => `${theme.spacing(x)}`).join(" "),
      medium: [1.5, sideMargin.medium]
        .map((x) => `${theme.spacing(x)}rem`)
        .join(" "),
      large: [2, sideMargin.large].map((x) => `${theme.spacing(x)}`).join(" "),
    };
    return {
      borderRadius: 30,
      padding: `${sizes[size]} !important`,
      textTransform: "none",
      height: `${heights[size]}px`,
      boxShadow: "none",
      opacity: disabled ? 0.5 : "none",
      "&.Mui-disabled": {
        backgroundColor: `${theme.palette[color].main} !important`,
        color: `${theme.palette[color].contrastText} !important`,
        pointerEvents: "none",
        transition: theme.transitions.create(["background-color", "color"]),
      },
      "& .MuiButton-startIcon": {
        borderRadius: "50%",
        backgroundColor: theme.palette.common.white,
        transition: theme.transitions.create(["background-color", "color"]),
        color: theme.palette[color].main,
        width: 30,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: `0 ${theme.spacing(sideMargin[size])}rem 0 -${
          theme.spacing(sideMargin[size]) / 2
        }rem`,
        "& svg": {
          width: 20,
          height: 20,
        },
      },
      "&:hover": {
        boxShadow: "none",
        backgroundColor: theme.palette[color].light,
        transition: theme.transitions.create(["background-color", "color"]),
        "& .MuiButton-startIcon": {
          color: theme.palette[color].light,
        },
      },
    };
  }
);
