import React from 'react';
import arrow from '../../Pictures/arrow.png'
import '../../CSS/Body.css';

function Educatia() {
  return (
    <div>
          <p id = "Educatie" className='text-secundar'>
            Educație <hr></hr>
          </p>
          <ul className='item'> 
            <h2>
              <img className="icons" src = {arrow}></img> 
              <a className = 'links' href="https://www.tuiasi.ro/"> <b>  Universitatea Tehnică "Gheorghe Asachi", Iași</b></a>
            </h2>
            <h3>FACULTATEA DE AUTOMATICĂ ȘI CALCULATOARE, SPECIALIZAREA CALCULATOARE ȘI TEHNOLOGIA INFORMAȚIEI, 2021 - PREZENT</h3> 
            <h2>
              <img className="icons" src = {arrow}></img><a className = 'links' href="https://www.cnpetrurares.ro/"><b>  Colegiul Național "Petru Rareș", Piatra Neamț</b></a>
            </h2>
            <h3>PROFIL MATEMATICĂ-INFORMATICĂ, ABSOLVIT ÎN 2021</h3>
            <li>Participarea la concursuri naționale de creație (SUPER- secțiunea film și secțiunea poezie- ediția din 2020, concursul Licart- ediția din 2019 și 2020)</li>
            <li>Participarea la Olimpiada Națională de Informatică, etapa județeană în 2018,2019 și 2020</li>
            <li>Participarea la Olimpiada Națională de Matematică, etapa județeană în 2018 și 2019</li>
          </ul>                                                         
    </div>
  );
}

export default Educatia;
