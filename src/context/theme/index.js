import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material";
import generateTheme from "../../theme";

const initialState = {
  theme: "light",
};

const ThemeContext = createContext(initialState);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const changeTheme = () => {
    setState({ ...state, theme: state.theme === "dark" ? "light" : "dark" });
  };

  const theme = React.useMemo(
    () => createTheme(generateTheme(state.theme)),
    [state.theme]
  );

  return (
    <ThemeContext.Provider value={{ ...state, changeTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
