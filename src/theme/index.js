import createPalette from "./createPalette";
import typography from "./createTypography";
import spacing from "./createSpacing";

const generateTheme = (theme) => ({
  palette: createPalette(theme),
  typography,
  spacing,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          body: {
            margin: 0,
            fontFamily:
              "Spartan, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            backgroundColor: "#f2f2f2",
            boxSizing: "border-box",
            "& *": {
              boxSizing: "border-box",
            },
          },
          code: {
            fontFamily:
              "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
          },
        },
      },
    },
  },
});

export default generateTheme;
