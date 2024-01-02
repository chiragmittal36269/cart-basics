import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";

// Create a root for concurrent rendering
const root = ReactDom.createRoot(document.getElementById("root"));

// Render the main App component into the root
root.render(<App />);
