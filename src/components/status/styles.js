import { Box, styled } from "@mui/system";

const mappedStatuses = {
  pending: "warning",
  draft: "info",
  paid: "success",
};

export const StatusWrapper = styled(Box)(({ theme, status }) => ({
  textTransform: "capitalize",
  width: 100,
  height: 40,
  borderRadius: 6,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ...theme.typography.h4,
  backgroundColor: theme.palette[mappedStatuses[status]].light,
  transition: theme.transitions.create(["background-color", "color"]),
  color: theme.palette[mappedStatuses[status]].main,
  "&::before": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    display: "block",
    content: "''",
    marginRight: 5,
    background: theme.palette[mappedStatuses[status]].main,
  },
}));
