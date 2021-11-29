import { DarkMode, LightMode } from "@mui/icons-material";
import React from "react";
import { useThemeContext } from "../../context";
import {
  MainWrapper,
  LogoHolder,
  ContentWrapper,
  Logo,
  UserHolder,
  User,
  IconButtonWrapper,
} from "./styles";

const Sidebar = () => {
  const { theme, changeTheme } = useThemeContext();

  return (
    <MainWrapper>
      <LogoHolder to="/invoices">
        <Logo />
      </LogoHolder>
      <ContentWrapper>
        <IconButtonWrapper onClick={changeTheme}>
          {theme === "light" ? <LightMode /> : <DarkMode />}
        </IconButtonWrapper>
      </ContentWrapper>
      <UserHolder>
        <User />
      </UserHolder>
    </MainWrapper>
  );
};

export default Sidebar;
