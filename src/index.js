import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import'./style_guide.css';
import { AboutUs } from "./screens/About_Us"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AboutUs />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import "../global.css";
// import "../styleguide.css";
// import React from "react";
// import ReactDOMClient from "react-dom/client";
// import { AboutUs } from "./screens/AboutUs";

// const app = document.getElementById("app");
// const root = ReactDOMClient.createRoot(app);
// root.render(<AboutUs />);