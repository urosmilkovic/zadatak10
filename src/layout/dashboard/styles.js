import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const ContentWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  padding: "50px 20px 50px 120px",
  backgroundColor: theme.palette.common.background,
  transition: "300ms ease-in-out background-color",
  color: theme.palette.common.textColor,
}));

export const ContentInnerWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 730,
  margin: "0 auto",
}));
