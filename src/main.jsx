import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/App.css"; // Design tokens & button styles
import "./styles/index.css"; // Tailwind & component styles
import "./config/icons.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
