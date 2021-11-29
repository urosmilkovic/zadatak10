import { IconButton } from "@mui/material";
import { Box, styled } from "@mui/system";
import Card from "../card";

export const MainWrapper = styled(Card)(({ theme, color }) => ({
  display: "flex",
  alignItems: "center",
  padding: "20px 20px 20px 30px",
}));

//180

export const InvoiceId = styled(Box)(({ theme, color }) => ({
  color: theme.palette.default.contrastText,
  fontWeight: 700,
  width: 100,
  span: {
    color: theme.palette.common.textColor,
  },
}));

export const DueDate = styled(Box)(({ theme, color }) => ({
  color: theme.palette.default.contrastText,
  width: 150,
}));

export const ClientName = styled(Box)(({ theme, color }) => ({
  color: theme.palette.default.contrastText,
  width: 130,
}));

export const TotalPrice = styled(Box)(({ theme, color }) => ({
  color: theme.palette.common.textColor,
  textAlign: "right",
  paddingRight: 40,
  ...theme.typography.h3,
  width: 140,
}));

export const IconButtonWrapper = styled(IconButton)(({ theme, color }) => ({
  color: theme.palette.primary.main,
  marginLeft: 20,
}));
