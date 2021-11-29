import { Table, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Link } from "react-router-dom";
import { Card } from "../../components";

export const StatusWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  span: {
    marginRight: 20,
    color: theme.palette.default.contrastText,
    ...theme.typography.body1,
  },
}));

export const ActionsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& > *:not(:last-child)": {
    marginRight: 10,
  },
}));

export const ActionsCard = styled(Card)(({ theme }) => ({
  marginBottom: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const InvoiceCard = styled(Card)(({ theme }) => ({
  padding: 50,
}));

export const TopInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 30,
}));

export const TopLeft = styled(Box)(({ theme }) => ({}));

export const TopLeftId = styled(Typography)(({ theme }) => ({
  marginBottom: 10,
  span: {
    color: theme.palette.default.contrastText,
  },
}));
export const TopLeftDescription = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.default.contrastText,
}));

export const TopRight = styled(Box)(({ theme }) => ({
  textAlign: "right",
}));

export const TopRightLine = styled(Typography)(({ theme }) => ({
  color: theme.palette.default.contrastText,
}));

export const MiddleInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 30,
}));

export const MiddleInfoColumn = styled(Box)(({ theme }) => ({}));

export const MiddleInfoLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.default.contrastText,
  marginBottom: 5,
}));

export const MiddleInfoValue = styled(Typography)(({ theme }) => ({
  marginBottom: 5,
}));

export const MiddleInfoPart = styled(Typography)(({ theme }) => ({
  "&:not(:last-child)": {
    marginBottom: 20,
  },
}));

export const BottomInfo = styled(Card)(({ theme }) => ({
  padding: 0,
  overflow: "hidden",
}));

export const BottomInfoAmount = styled(Box)(({ theme }) => ({
  padding: 30,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: theme.palette.common.white,
  backgroundColor: theme.palette.common.tableTotal,
  transition: theme.transitions.create(["background-color", "color"]),
}));

export const BottomInfoTableHolder = styled(Box)(({ theme }) => ({
  padding: 30,
  backgroundColor: theme.palette.common.table,
  transition: theme.transitions.create(["background-color", "color"]),
}));

export const BottomInfoTable = styled(Table)(({ theme }) => ({
  width: "100%",
  "& .MuiTableCell-root": {
    borderBottom: "none",
  },
}));
export const TableHeadCell = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.default.contrastText,
}));

export const TableBodyCell = styled(Typography)(({ theme, blacked }) => ({
  fontWeight: 700,
  color: blacked
    ? theme.palette.common.textColor
    : theme.palette.default.contrastText,
}));

export const GoBackWrapper = styled(Link)(({ theme }) => ({
  width: "min-content",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  marginBottom: 20,
  fontWeight: 700,
  cursor: "pointer",
  textDecoration: "none",
  span: {
    color: theme.palette.common.textColor,
  },
}));
