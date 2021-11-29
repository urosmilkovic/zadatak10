import React from "react";
import { CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/lab";
import AdapterMoment from "@mui/lab/AdapterMoment";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Invoices, InvoiceSingle } from "./pages";
import { DashboardLayout } from "./layout";
import { InvoiceContextProvider, ThemeContextProvider } from "./context";

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeContextProvider>
        <InvoiceContextProvider>
          <CssBaseline />
          <BrowserRouter>
            <DashboardLayout>
              <Routes>
                <Route exact path="/invoices" element={<Invoices />} />
                <Route exact path="/invoice/:id" element={<InvoiceSingle />} />
                <Route path="*" element={<Navigate replace to="/invoices" />} />
              </Routes>
            </DashboardLayout>
          </BrowserRouter>
        </InvoiceContextProvider>
      </ThemeContextProvider>
    </LocalizationProvider>
  );
};

export default App;
