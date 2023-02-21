import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/Body.css';
import './CSS/Navbar.css';
import Body from './Components/Body';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Navbar />
        <Body />
        <Contact />
    </>
);

