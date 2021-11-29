import { Avatar, Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const MainWrapper = styled(Box)(({ theme }) => ({
  width: 100,
  height: "100%",
  position: "fixed",
  left: 0,
  top: 0,
  backgroundColor: theme.palette.common.sidebar,
  borderRadius: "0px 20px 20px 0px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  zIndex: 1300,
  transition: theme.transitions.create(["background-color", "color"]),
}));

export const LogoHolder = styled(Link)(({ theme }) => ({
  width: 100,
  height: 100,
  backgroundColor: theme.palette.primary.main,
  borderRadius: "0px 0px 20px 0px",
  overflow: "hidden",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: theme.transitions.create(["background-color", "color"]),
  "&::before": {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "50%",
    borderRadius: "20px 0px 0px 0px",
    backgroundColor: theme.palette.primary.light,
    transition: theme.transitions.create(["background-color", "color"]),
    content: "''",
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    "&::before": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export const Logo = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  position: "relative",
  borderRadius: "50%",
  overflow: "hidden",
  "&::after": {
    width: 0,
    height: 0,
    border: `20px solid ${theme.palette.common.white}`,
    borderTopColor: "transparent",
    position: "absolute",
    content: "''",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%) rotate(-20deg)",
  },
  "&::before": {
    width: 0,
    height: 0,
    border: `20px solid ${theme.palette.common.white}`,
    borderTopColor: "transparent",
    position: "absolute",
    content: "''",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%) rotate(20deg)",
  },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  flex: "1 auto",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
}));

export const UserHolder = styled(Box)(({ theme }) => ({
  width: 100,
  height: 100,
  borderTop: `2px solid #ffffff20`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const User = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
}));

export const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  width: 40,
  height: 40,
  color: theme.palette.default.contrastText,
  "& svg": {
    width: 30,
    height: 30,
  },
}));
