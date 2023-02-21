import React from 'react';
import '../CSS/Navbar.css';
import '../CSS/Contact.css';
import './Body'
import './Contact'

function Navbar() {
  return (
    <div className='navbar'>
      <a href = "http://localhost:3000/">Home </a>
      <a href = "#Experienta">Experienta</a>
      <a href = "#Educatie">Educatie</a>
      <a href = "#Contact">Contact</a>
      
  </div>
  );
}

export default Navbar;
