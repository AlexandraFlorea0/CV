import React from 'react';
import phone from '../../Pictures/phone.png'
import email from '../../Pictures/email.png'
import adress from '../../Pictures/adress.png'
import '../../CSS/Contact.css';

function Date() {
  return (
    <div>
            <p id= "Contact" className='text-principal'>
                Contact <hr></hr>
            </p>
            <img className="icons" src = {phone}></img>
            <a className = 'links' href="tel:07405325000"> 07405325000</a> <br></br> <br></br>
            <img className="icons" src = {email}></img>
            <a className = 'links' href = "mailto: florea0alexandra@gmail.com">  florea0alexandra@gmail.com</a> <br></br> <br></br>
            <img className="icons" src = {adress}></img>
            <a className = 'links' href = "https://www.google.com/maps/place/Iv%C4%83ne%C8%99+617063/@46.8291923,25.9002684,14z/data=!3m1!4b1!4m6!3m5!1s0x474abcda7d691f63:0x4ebadc4172c6627c!8m2!3d46.8293021!4d25.9169342!16s%2Fg%2F1236h32p">  Str. Principală, Nr. 111, Com. Bicaz-Chei, Jud. Neamț, România</a>
        </div>
  );
}

export default Date;
