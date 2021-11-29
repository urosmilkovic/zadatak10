import moment from "moment";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { InvoiceDrawer } from "../../components";
import invoices from "../../static/data.json";

const generateCode = (x) => {
  const mask = {
    N: [..."0123456789"],
    L: [..."QWERTYUIOPASDFGHJKLZXCVBNM"],
  };
  return [...x]
    .map((y) => {
      const rand = Math.floor(Math.random() * mask[y].length);
      return mask[y][rand];
    })
    .join("");
};

const initialState = {
  drawer: false,
  invoice: {
    id: "",
    createdAt: null,
    paymentDue: null,
    description: "",
    paymentTerms: 0,
    clientName: "",
    clientEmail: "",
    status: "",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [
      {
        name: "",
        quantity: 0,
        price: 0,
        total: 0,
      },
    ],
    total: 0,
  },
  invoices,
};

const InvoiceContext = createContext(initialState);

export const useInvoiceContext = () => useContext(InvoiceContext);

export const InvoiceContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
    console.log("State", state);
  }, [state]);

  const markAsPaid = (id) => {
    setState({
      ...stateRef.current,
      invoices: stateRef.current.invoices.map((x) =>
        id === x.id ? { ...x, status: "paid" } : x
      ),
    });
  };

  const createInvoice = (a) => {
    if (a.id) {
      setState({
        ...stateRef.current,
        drawer: false,
        invoices: stateRef.current.invoices.map((x) =>
          x.id === a.id
            ? { ...a, paymentDue: moment(a.paymentDue).format("YYYY-MM-DD") }
            : x
        ),
      });
    } else {
      const id = generateCode("LLNNNN");
      setState({
        ...stateRef.current,
        drawer: false,
        invoices: [...stateRef.current.invoices, { ...a, id }],
      });
    }
  };

  const newInvoice = () => {
    setState({
      ...stateRef.current,
      invoice: {
        id: null,
        createdAt: null,
        paymentDue: null,
        description: "",
        paymentTerms: 0,
        clientName: "",
        clientEmail: "",
        status: "pending",
        senderAddress: {
          street: "",
          city: "",
          postCode: "",
          country: "",
        },
        clientAddress: {
          street: "",
          city: "",
          postCode: "",
          country: "",
        },
        items: [],
        total: 0,
      },
      drawer: true,
    });
  };

  const addNewItem = () => {
    setState({
      ...stateRef.current,
      invoice: {
        ...stateRef.current.invoice,
        items: [
          ...stateRef.current.invoice.items,
          {
            name: "",
            quantity: 0,
            price: 0,
            total: 0,
          },
        ],
      },
    });
  };

  const deleteItem = (id) => {
    setState({
      ...stateRef.current,
      invoice: {
        ...stateRef.current.invoice,
        items: stateRef.current.invoice.items.filter((x, y) => y !== id),
      },
    });
  };

  const editInvoice = (id) => {
    setState({
      ...stateRef.current,
      invoice: stateRef.current.invoices.find((x) => x.id === id),
      drawer: true,
    });
  };

  const setData = (invoice) => {
    setState({ ...stateRef.current, invoice });
  };

  return (
    <InvoiceContext.Provider
      value={{
        ...state,
        markAsPaid,
        newInvoice,
        editInvoice,
        addNewItem,
        deleteItem,
        createInvoice,
      }}
    >
      {children}
      <InvoiceDrawer
        anchor="left"
        open={state.drawer}
        onClose={() => setState({ ...state, drawer: false })}
        data={state.invoice}
        setData={setData}
      />
    </InvoiceContext.Provider>
  );
};
