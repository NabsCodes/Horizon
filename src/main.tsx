import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MenuContextProvider } from "./context/MenuContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MenuContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MenuContextProvider>
  </React.StrictMode>,
);
