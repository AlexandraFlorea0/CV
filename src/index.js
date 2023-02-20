import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/App.css';
import './CSS/Navbar.css';
import App from './App';
import Navbar from './Navbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Navbar />
        <App />
    </>
);

