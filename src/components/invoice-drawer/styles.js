import { Box, Drawer, Typography } from "@mui/material";

import { darken, styled } from "@mui/system";

export const DrawerWrapper = styled(Drawer)(({ theme }) => ({
  "& > .MuiPaper-root": {
    borderRadius: "0 20px 20px 0",
    padding: "40px 40px 20px 140px",
    width: "100vw",
    maxWidth: 600,
    backgroundColor: theme.palette.common.drawer,
    transition: theme.transitions.create(["background-color", "color"]),
  },
}));

export const DrawerTitle = styled(Typography)(({ theme }) => ({
  fontSize: 24,
  width: "100%",
  marginBottom: 60,
  color: theme.palette.common.textColor,
  span: {
    color: theme.palette.default.contrastText,
  },
}));

export const DrawerContent = styled(Box)(({ theme }) => ({
  width: "calc(100% + 20px)",
  height: "calc(100% - 144px)",
  overflow: "auto",
  marginRight: -20,
  paddingRight: 15,
  paddingBottom: 20,
  "&::-webkit-scrollbar": {
    width: 5,
  },

  "&::-webkit-scrollbar-thumb": {
    background: theme.palette.common.thumb,
    borderRadius: 3,
  },

  "&::-webkit-scrollbar-thumb:hover": {
    background: darken(theme.palette.common.thumb, 0.2),
  },
}));

export const DrawerSection = styled(Box)(({ theme }) => ({
  width: "100%",
  "&:not(:last-child)": {
    marginBottom: 20,
  },
}));

export const DrawerSectionTitle = styled(Typography)(({ theme }) => ({
  width: "100%",
  color: theme.palette.primary.main,
  fontWeight: 700,
  marginBottom: 20,
}));

export const DrawerGrid = styled(Box)(({ theme, times }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: `repeat(${times}, 1fr)`,
  gridTemplateRows: "auto",
  gap: 20,
}));

export const DrawerActions = styled(Box)(({ theme, times }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  margin: "0px -40px -20px -140px",
  padding: "20px 40px 20px 140px",
  borderTopRightRadius: 20,
  backgroundColor: theme.palette.common.drawer,
  boxShadow: "0px 0px 60px 15px #00000010",
  position: "relative",
  transition: theme.transitions.create(["background-color", "color"]),
  "& > *:not(:last-child)": {
    marginRight: 10,
  },
}));
export const ItemsGrid = styled(Box)(({ theme, times }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: `1fr 50px 80px 60px 50px`,
  gridTemplateRows: "auto",
  gap: 10,
}));
export const ItemsTable = styled(Box)(({ theme, times }) => ({
  width: "100%",
  marginBottom: 20,
}));
export const TotalCell = styled(Box)(({ theme, times }) => ({
  fontWeight: 700,
}));
