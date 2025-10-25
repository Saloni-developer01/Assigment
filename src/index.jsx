// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./PortfolioDashboard";
// import "./styles/tailwind.css";
// import "./styles/index.css";

// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assuming App.jsx exists
// import PortfolioDashboard from './PortfolioDashboard'; // Agar aap directly ise use kar rahe ho
import './styles/tailwind.css'; // Good

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App />); // Ya fir root.render(<PortfolioDashboard />);
