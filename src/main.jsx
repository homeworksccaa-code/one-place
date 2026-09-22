import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../Home";
import "./index.css";

console.log("ONEPLACE: main.jsx carregado");
console.log("ONEPLACE: Home =", Home);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
