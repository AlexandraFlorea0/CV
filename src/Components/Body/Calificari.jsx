import React from 'react';
import '../../CSS/Body.css';

function Calificari() {
  return (
    <div>
        <p className='text-secundar'>
            Calificări <hr></hr>
        </p>
        <ul className='item'> 
            <li><b>Atestat Profesional la Informatică</b> - obținut în urma absolvirii profilului de matematică-informatică și a susținerii probelor practice și teoretice pentru dobândirea acestuia, 2021.</li>
            <li><b>Absolvirea unui curs de prim ajutor organizat de Crucea Roșie.</b></li>
            <li><b>Knowledge Certificate(Digital Nation, 2020)</b> - acordat pentru dobândirea abilităților primare în HTML, CSS, Administrarea site-ului PHP și Wordpress și pentru demonstrație înțelegerea conceptelor fundamentale care se aplică în comun limbajelor de programare.</li>
            <li><b>Certificate of knowledge(Digital Nation, 2022)</b>- abilitatea de a configura și depana mediul de dezvoltare folosind Eclipse, cunoașterea elementelor de bază Java - variabile, tipuri de date, modificatori de acces,clase, condiții și bucle.</li><br></br>
        </ul>                                                         
    </div>
  );
}

export default Calificari;
