import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/index.css";
import "./i18n";
import App from "./app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
