import React from "react";
import ReactDOM from "react-dom";
import { QueryClient,QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import App from "./App";
import {theme} from "./theme"
import { Helmet,HelmetProvider } from "react-helmet-async";


const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);