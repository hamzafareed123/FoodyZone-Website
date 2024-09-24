import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";


const GoblalStyle= createGlobalStyle`
*{
@tailwind base;
@tailwind components;
@tailwind utilities;
box-sizing:border-box;
margin:0%;
padding:0%;
}

body{
font-family: "Poppins", system-ui;
background:#5A5959;
color:white;
min-height:90vh;
}
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoblalStyle/>
    <App />
  </React.StrictMode>
);
