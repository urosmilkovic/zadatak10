import { KeyboardArrowRight } from "@mui/icons-material";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { Status } from "../";
import {
  InvoiceId,
  MainWrapper,
  DueDate,
  ClientName,
  TotalPrice,
  IconButtonWrapper,
} from "./styles";

const InvoiceCard = ({ id, paymentDue, clientName, total, status, to }) => {
  return (
    <MainWrapper>
      <InvoiceId>
        #<span>{id}</span>
      </InvoiceId>
      <DueDate>Due {moment(paymentDue).format("DD MMM YYYY")}</DueDate>
      <ClientName>{clientName}</ClientName>
      <TotalPrice>£{total.toFixed(2)}</TotalPrice>
      <Status status={status} />
      <IconButtonWrapper component={Link} to={to}>
        <KeyboardArrowRight />
      </IconButtonWrapper>
    </MainWrapper>
  );
};

export default InvoiceCard;
