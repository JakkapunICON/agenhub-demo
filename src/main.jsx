// react
import React from 'react';
import ReactDOM from 'react-dom/client';

// react-router-dom
import { BrowserRouter } from 'react-router-dom';

// project import
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/">
        <App />
    </BrowserRouter>
);
