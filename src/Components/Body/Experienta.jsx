import React from 'react';
import arrow from '../../Pictures/arrow.png'
import computer from '../../Pictures/computer.png'
import '../../CSS/Body.css';
import './Experienta'

function Experienta() {
  return (
    <div>
          <p id = "Experienta" className='text-secundar'>
            Experiența de muncă <hr></hr>
          </p>
          <ul className='item'> 
            <h2>
              <img className="icons" src = {arrow}></img>
              <a className = 'links' href="https://www.facebook.com/voltagrup"> VOLTA SHOWROOM & DEPOZIT, PIATRA NEAMȚ, 2020</a>  
            </h2>
              <li>Angajată part-time cu contract pe o perioadă determinată (iulie-septembrie 2020)</li>
              <li>Responsabilitatea mea a constat în căutarea și centralizarea datelor referitoare la produsele vândute prin intermediul companiei.</li>
          </ul><br></br>
          <img className='img-body' src = {computer}></img>
        </div>
  );
}

export default Experienta;
