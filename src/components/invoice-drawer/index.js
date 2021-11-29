import { Add, Delete } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import moment from "moment";
import { useEffect } from "react";
import { Datepicker, Input, Select, Button } from "..";
import { useInvoiceContext } from "../../context";
import {
  DrawerWrapper,
  DrawerTitle,
  DrawerContent,
  DrawerSection,
  DrawerSectionTitle,
  DrawerGrid,
  DrawerActions,
  ItemsGrid,
  ItemsTable,
  TotalCell,
} from "./styles";

const termsOptions = [
  { value: 1, label: "Net 1 Day" },
  { value: 7, label: "Net 7 Days" },
  { value: 14, label: "Net 14 Days" },
  { value: 30, label: "Net 30 Days" },
];

const InvoiceDrawer = ({ setData, data, onClose, ...props }) => {
  const { addNewItem, deleteItem, createInvoice } = useInvoiceContext();

  const updateItem = (id, a) => {
    setData({
      ...data,
      items: data.items.map((x, y) => (y === id ? a : x)),
    });
  };

  const saveChanges = () => {
    createInvoice(data);
  };

  useEffect(() => {
    console.log("DATA: ", data);
  }, [data]);

  return (
    <DrawerWrapper onClose={onClose} {...props}>
      <DrawerTitle variant="h2">
        {data.id ? (
          <>
            Edit <span>#</span>
            {data.id}
          </>
        ) : (
          "New Invoice"
        )}
      </DrawerTitle>
      <DrawerContent>
        <DrawerSection>
          <DrawerSectionTitle variant="body1">Bill From</DrawerSectionTitle>
          <DrawerGrid times={3}>
            <Input
              label="Street Address"
              value={data.senderAddress.street}
              onChange={(street) =>
                setData({
                  ...data,
                  senderAddress: { ...data.senderAddress, street },
                })
              }
              fullWidth
            />
            <Input
              label="City"
              value={data.senderAddress.city}
              onChange={(city) =>
                setData({
                  ...data,
                  senderAddress: { ...data.senderAddress, city },
                })
              }
            />
            <Input
              label="Post Code"
              value={data.senderAddress.postCode}
              onChange={(postCode) =>
                setData({
                  ...data,
                  senderAddress: { ...data.senderAddress, postCode },
                })
              }
            />
            <Input
              label="Country"
              value={data.senderAddress.country}
              onChange={(country) =>
                setData({
                  ...data,
                  senderAddress: { ...data.senderAddress, country },
                })
              }
            />
          </DrawerGrid>
        </DrawerSection>
        <DrawerSection>
          <DrawerSectionTitle variant="body1">Bill To</DrawerSectionTitle>
          <DrawerGrid times={3}>
            <Input
              label="Client’s Name"
              value={data.clientName}
              onChange={(clientName) => setData({ ...data, clientName })}
              fullWidth
            />
            <Input
              label="Client’s Email"
              value={data.clientEmail}
              onChange={(clientEmail) => setData({ ...data, clientEmail })}
              fullWidth
            />
            <Input
              label="Street Address"
              value={data.clientAddress.street}
              onChange={(street) =>
                setData({
                  ...data,
                  clientAddress: { ...data.clientAddress, street },
                })
              }
              fullWidth
            />
            <Input
              label="City"
              value={data.clientAddress.city}
              onChange={(city) =>
                setData({
                  ...data,
                  clientAddress: { ...data.clientAddress, city },
                })
              }
            />
            <Input
              label="Post Code"
              value={data.clientAddress.postCode}
              onChange={(postCode) =>
                setData({
                  ...data,
                  clientAddress: { ...data.clientAddress, postCode },
                })
              }
            />
            <Input
              label="Country"
              value={data.clientAddress.country}
              onChange={(country) =>
                setData({
                  ...data,
                  clientAddress: { ...data.clientAddress, country },
                })
              }
            />
          </DrawerGrid>
        </DrawerSection>
        <DrawerSection>
          <DrawerGrid times={2}>
            <Datepicker
              label="Invoice Date"
              value={moment(data.paymentDue)}
              onChange={(paymentDue) => setData({ ...data, paymentDue })}
            />
            <Select
              label="Payment Terms"
              value={data.paymentTerms}
              options={termsOptions}
              onChange={(paymentTerms) => setData({ ...data, paymentTerms })}
            />
            <Input
              label="Project Description"
              value={data.description}
              onChange={(description) => setData({ ...data, description })}
              fullWidth
            />
          </DrawerGrid>
        </DrawerSection>
        <DrawerSection>
          <DrawerSectionTitle variant="h2">Item List</DrawerSectionTitle>
          <ItemsTable>
            <ItemsGrid>
              <Typography>Item Name</Typography>
              <Typography>Qty.</Typography>
              <Typography>Price</Typography>
              <Typography>Total</Typography>
            </ItemsGrid>
            {data.items.map((x, y) => (
              <ItemsGrid key={y}>
                <Input
                  value={x.name}
                  onChange={(name) => updateItem(y, { ...x, name })}
                />
                <Input
                  value={x.quantity}
                  onChange={(quantity) => updateItem(y, { ...x, quantity })}
                />
                <Input
                  value={x.price}
                  onChange={(price) => updateItem(y, { ...x, price })}
                />
                <TotalCell alignSelf="center" variant="body1">
                  {x.total.toFixed(2)}
                </TotalCell>
                <IconButton onClick={() => deleteItem(y)}>
                  <Delete />
                </IconButton>
              </ItemsGrid>
            ))}
          </ItemsTable>
          <Button
            color="default"
            variant="contained"
            fullWidth
            onClick={addNewItem}
          >
            <Add /> Add New Item
          </Button>
        </DrawerSection>
      </DrawerContent>
      <DrawerActions>
        <Button color="default" variant="contained" onClick={onClose}>
          Cancel
        </Button>
        <Button color="primary" variant="contained" onClick={saveChanges}>
          Save Changes
        </Button>
      </DrawerActions>
    </DrawerWrapper>
  );
};

export default InvoiceDrawer;
