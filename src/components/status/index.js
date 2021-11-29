import React from "react";
import { StatusWrapper } from "./styles";

const Status = ({ status, ...props }) => {
  return (
    <StatusWrapper status={status} {...props}>
      {status}
    </StatusWrapper>
  );
};

export default Status;
