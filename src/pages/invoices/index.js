import React, { useState, Fragment } from "react";
import { Add } from "@mui/icons-material";
import { InvoiceCard, Button, MultiSelect } from "../../components";
import {
  InvoicesWrapper,
  TitleHolder,
  Title,
  TitleActions,
  SubtitleText,
  TitleText,
  InvoicesEmpty,
  InvoicesEmptyTitle,
  InvoicesEmptyDescription,
} from "./styles";
import { IllustrationEmpty } from "../../assets";
import { useInvoiceContext } from "../../context";

const selectValues = [
  { value: "draft", label: "Draft" },
  { value: "pending", label: "Pending" },
  { value: "paid", label: "Paid" },
];

const Invoices = () => {
  const [state, setState] = useState({
    filter: ["draft", "pending", "paid"],
  });

  const { invoices, newInvoice } = useInvoiceContext();

  const filteredInvoices = invoices.filter((x) =>
    state.filter.includes(x.status)
  );

  return (
    <Fragment>
      <TitleHolder>
        <Title>
          <TitleText variant="h1">Invoices</TitleText>
          <SubtitleText variant="body1">
            {filteredInvoices.length
              ? `There are ${filteredInvoices.length} total invoices`
              : "No results"}
          </SubtitleText>
        </Title>
        <TitleActions>
          <MultiSelect
            label="Filter by status"
            value={state.filter}
            onChange={(filter) => setState({ ...state, filter })}
            options={selectValues}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={newInvoice}
          >
            New Invoice
          </Button>
        </TitleActions>
      </TitleHolder>
      <InvoicesWrapper>
        {filteredInvoices.map((x) => (
          <InvoiceCard key={x.id} {...x} to={`/invoice/${x.id}`} />
        ))}
        {!filteredInvoices.length ? (
          <InvoicesEmpty>
            <img src={IllustrationEmpty} alt="No results" />
            <InvoicesEmptyTitle variant="h2">
              There is nothing here
            </InvoicesEmptyTitle>
            <InvoicesEmptyDescription variant="body1">
              Create an invoice by clicking the <span>New Invoice</span> button
              and get started
            </InvoicesEmptyDescription>
          </InvoicesEmpty>
        ) : null}
      </InvoicesWrapper>
    </Fragment>
  );
};

export default Invoices;
