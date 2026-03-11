import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./globalstyle";
import App from "./pages/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
);
