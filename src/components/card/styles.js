import { Card } from "@mui/material";
import { styled } from "@mui/system";

export const CardWrapper = styled(Card)(({ theme, color }) => ({
  padding: `20px 25px`,
  borderRadius: 8,
  boxShadow: "0px 10px 10px -10px rgba(72, 84, 159, 0.1)",
  backgroundColor: theme.palette.common.card,
  color: theme.palette.common.textColor,
  transition: theme.transitions.create(["background-color", "color"]),
}));
