import React, { Fragment } from "react";
import { Sidebar } from "../../components";
import { ContentInnerWrapper, ContentWrapper } from "./styles";

const DashboardLayout = ({ children }) => {
  return (
    <Fragment>
      <Sidebar />
      <ContentWrapper>
        <ContentInnerWrapper>{children}</ContentInnerWrapper>
      </ContentWrapper>
    </Fragment>
  );
};

export default DashboardLayout;
