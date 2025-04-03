import React from "react";
import ReactDOM from "react-dom/client"; // to interact with the DOM
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./Context/ThemeContext";
// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
