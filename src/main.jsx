import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter,HashRouter  } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { UserProvider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
  <HashRouter>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </HashRouter>
  </UserProvider>
);
