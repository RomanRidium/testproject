import React from 'react';
import ReactDOM from 'react-dom/client';
import { Normalize } from "styled-normalize";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Normalize />
        <App />
    </>
);
