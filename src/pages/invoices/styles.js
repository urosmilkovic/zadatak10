import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const InvoicesWrapper = styled(Box)(({ theme }) => ({
  "& > *:not(:last-child)": {
    marginBottom: `${theme.spacing(4)}rem`,
  },
}));

export const TitleHolder = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 50,
}));

export const Title = styled(Box)(({ theme }) => ({}));

export const TitleText = styled(Typography)(({ theme }) => ({
  marginBottom: 5,
}));

export const SubtitleText = styled(Typography)(({ theme }) => ({
  color: "#888EB0",
}));

export const TitleActions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& > *:not(:last-child)": {
    marginRight: 20,
  },
}));

export const InvoicesEmpty = styled(Typography)(({ theme }) => ({
  width: "100%",
  maxWidth: 250,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  minHeight: 500,
  margin: "0 auto",
  img: {
    margin: "0 auto",
    display: "block",
    marginBottom: 30,
  },
}));

export const InvoicesEmptyTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: 20,
  padding: "0px 0px",
}));

export const InvoicesEmptyDescription = styled(Typography)(({ theme }) => ({
  color: "#888EB0",
  textAlign: "center",
  padding: "0px 15px",
  span: {
    fontWeight: 700,
  },
}));
