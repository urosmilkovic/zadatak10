import { KeyboardArrowLeft } from "@mui/icons-material";
import {
  IconButton,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import moment from "moment";
import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Status, Button } from "../../components";
import { useInvoiceContext } from "../../context";
import {
  StatusWrapper,
  ActionsWrapper,
  ActionsCard,
  InvoiceCard,
  TopInfo,
  TopLeft,
  TopRight,
  TopLeftId,
  TopLeftDescription,
  TopRightLine,
  MiddleInfo,
  MiddleInfoColumn,
  MiddleInfoLabel,
  MiddleInfoValue,
  MiddleInfoPart,
  BottomInfo,
  BottomInfoAmount,
  BottomInfoTableHolder,
  BottomInfoTable,
  TableHeadCell,
  TableBodyCell,
  GoBackWrapper,
} from "./styles";

const InvoiceSingle = () => {
  const { id } = useParams();

  const { invoices, markAsPaid, editInvoice } = useInvoiceContext();

  const invoice = invoices.find((x) => x.id === id);

  return (
    <Fragment>
      <GoBackWrapper to="/invoices">
        <IconButton color="primary">
          <KeyboardArrowLeft />
        </IconButton>
        <span>Go back</span>
      </GoBackWrapper>
      <ActionsCard>
        <StatusWrapper>
          <span>Status</span>
          <Status status={invoice.status} />
        </StatusWrapper>
        <ActionsWrapper>
          <Button color="primary" onClick={() => editInvoice(invoice.id)}>
            Edit
          </Button>
          <Button color="secondary" variant="contained">
            Delete
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => markAsPaid(invoice.id)}
            disabled={invoice.status === "paid"}
          >
            Mark as Paid
          </Button>
        </ActionsWrapper>
      </ActionsCard>
      <InvoiceCard>
        <TopInfo>
          <TopLeft>
            <TopLeftId variant="h3">
              <span>#</span>
              {invoice.id}
            </TopLeftId>
            <TopLeftDescription variant="body1">
              {invoice.description}
            </TopLeftDescription>
          </TopLeft>
          <TopRight>
            <TopRightLine variant="body2">
              {invoice.senderAddress.street}
            </TopRightLine>
            <TopRightLine variant="body2">
              {invoice.senderAddress.city}
            </TopRightLine>
            <TopRightLine variant="body2">
              {invoice.senderAddress.postCode}
            </TopRightLine>
            <TopRightLine variant="body2">
              {invoice.senderAddress.country}
            </TopRightLine>
          </TopRight>
        </TopInfo>
        <MiddleInfo>
          <MiddleInfoColumn>
            <MiddleInfoPart>
              <MiddleInfoLabel variant="body1">Invoice Date</MiddleInfoLabel>
              <MiddleInfoValue variant="h3">
                {moment(invoice.createdAt).format("DD MMM YYYY")}
              </MiddleInfoValue>
            </MiddleInfoPart>
            <MiddleInfoPart>
              <MiddleInfoLabel variant="body1">Payment Due</MiddleInfoLabel>
              <MiddleInfoValue variant="h3">
                {moment(invoice.paymentDue).format("DD MMM YYYY")}
              </MiddleInfoValue>
            </MiddleInfoPart>
          </MiddleInfoColumn>
          <MiddleInfoColumn>
            <MiddleInfoPart>
              <MiddleInfoLabel variant="body1">Bill To</MiddleInfoLabel>
              <MiddleInfoValue variant="h3">
                {invoice.clientName}
              </MiddleInfoValue>
            </MiddleInfoPart>
            <MiddleInfoPart>
              <MiddleInfoLabel variant="body1">
                {invoice.clientAddress.street}
              </MiddleInfoLabel>
              <MiddleInfoLabel variant="body1">
                {invoice.clientAddress.city}
              </MiddleInfoLabel>
              <MiddleInfoLabel variant="body1">
                {invoice.clientAddress.postCode}
              </MiddleInfoLabel>
              <MiddleInfoLabel variant="body1">
                {invoice.clientAddress.country}
              </MiddleInfoLabel>
            </MiddleInfoPart>
          </MiddleInfoColumn>
          <MiddleInfoColumn>
            <MiddleInfoPart>
              <MiddleInfoLabel variant="body1">Send To</MiddleInfoLabel>
              <MiddleInfoValue variant="h3">
                {invoice.clientEmail}
              </MiddleInfoValue>
            </MiddleInfoPart>
          </MiddleInfoColumn>
        </MiddleInfo>
        <BottomInfo>
          <BottomInfoTableHolder>
            <BottomInfoTable>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <TableHeadCell variant="body2">Item Name</TableHeadCell>
                  </TableCell>
                  <TableCell>
                    <TableHeadCell variant="body2">QTY.</TableHeadCell>
                  </TableCell>
                  <TableCell>
                    <TableHeadCell variant="body2">Price</TableHeadCell>
                  </TableCell>
                  <TableCell>
                    <TableHeadCell variant="body2">Total</TableHeadCell>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoice.items.map((x, y) => (
                  <TableRow key={y}>
                    <TableCell>
                      <TableBodyCell variant="body1" blacked>
                        {x.name}
                      </TableBodyCell>
                    </TableCell>
                    <TableCell>
                      <TableBodyCell variant="body1">
                        {x.quantity}
                      </TableBodyCell>
                    </TableCell>
                    <TableCell>
                      <TableBodyCell variant="body1">£ {x.price}</TableBodyCell>
                    </TableCell>
                    <TableCell>
                      <TableBodyCell variant="body1" blacked>
                        £ {x.total.toFixed(2)}
                      </TableBodyCell>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </BottomInfoTable>
          </BottomInfoTableHolder>
          <BottomInfoAmount>
            <span>Amount Due</span>
            <Typography variant="h2">£ {invoice.total.toFixed(2)}</Typography>
          </BottomInfoAmount>
        </BottomInfo>
      </InvoiceCard>
    </Fragment>
  );
};

export default InvoiceSingle;
