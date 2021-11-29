import React from "react";
import { CardWrapper } from "./styles";

const Card = ({ children, ...props }) => (
  <CardWrapper {...props}>{children}</CardWrapper>
);

export default Card;
