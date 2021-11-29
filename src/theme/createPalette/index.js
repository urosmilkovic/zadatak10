const createPalette = (theme) => ({
  primary: {
    dark: "#613bf8",
    main: "#7C5DFA",
    light: "#9277FF",
    contrastText: "#FFFFFF",
  },
  secondary: {
    dark: "#e83939",
    main: "#EC5757",
    light: "#FF9797",
    contrastText: "#FFFFFF",
  },
  default: {
    dark: theme === "light" ? "#b6bff3" : "#21243e",
    main: theme === "light" ? "#DFE3FA" : "#252945",
    light: theme === "light" ? "#F9FAFE" : "#33385f",
    contrastText: "#7E88C3",
  },
  error: {
    dark: "#7C5DFA",
    main: "#7C5DFA",
    light: "#7C5DFA",
    contrastText: "#FFFFFF",
  },
  success: {
    dark: "#7C5DFA",
    main: "#33D69F",
    light: "#33D69F10",
    contrastText: "#FFFFFF",
  },
  warning: {
    dark: "#7C5DFA",
    main: "#FF8F00",
    light: "#FF8F0010",
    contrastText: "#FFFFFF",
  },
  info: {
    dark: "#7C5DFA",
    main: "#373B53",
    light: "#373B5310",
    contrastText: "#FFFFFF",
  },
  common: {
    white: "#FFFFFF",
    black: "#000000",
    background: theme === "light" ? "#f2f2f2" : "#141625",
    card: theme === "light" ? "#ffffff" : "#1E2139",
    textColor: theme === "light" ? "#000000" : "#ffffff",
    drawer: theme === "light" ? "#ffffff" : "#141625",
    sidebar: theme === "light" ? "#373B53" : "#1E2139",
    table: theme === "light" ? "#F9FAFE" : "#252945",
    tableTotal: theme === "light" ? "#373B53" : "#0C0E16",
    multiSelect: theme === "light" ? "#ffffff" : "#252945",
    input: theme === "light" ? "#ffffff" : "#1E2139",
    thumb: theme === "light" ? "#DFE3FA" : "#252945",
  },
});

export default createPalette;
