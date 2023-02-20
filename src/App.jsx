import React from 'react';
import poza from './Pictures/poza.jpg'
import phone from './Pictures/phone.png'
import email from './Pictures/email.png'
import adress from './Pictures/adress.png'
import facebook from './Pictures/facebook.png'
import github from './Pictures/github.png'
import linkedin from './Pictures/linkedin.png'
import arrow from './Pictures/arrow.png'
import computer from './Pictures/computer.png'
import './CSS/App.css';

function App() {
  return (
    <div className='container'>
      <div className='flex-box'>
        <div>
          <img className="poza" src = {poza}></img> <br></br> <br></br>
          <div className="social-media">
            <a  href="https://www.facebook.com/alexandra.florea.334"><img className="social-media-icons" src = {facebook}></img></a>
            <a  href="https://github.com/AlexandraFlorea0"><img className="social-media-icons" src = {github}></img></a>
            <a href="https://www.linkedin.com/in/alexandra-florea-7325461ab/"><img className="social-media-icons" src = {linkedin}></img></a>
          </div>                                                                          
        </div>
        <div>
          <p className='text-principal'>
            Florea Alexandra <hr></hr>
          </p>
          <img className="icons" src = {phone}></img>
          <a className = 'links' href="tel:07405325000"> 07405325000</a> <br></br> <br></br>
          <img className="icons" src = {email}></img>
          <a className = 'links' href = "mailto: florea0alexandra@gmail.com">  florea0alexandra@gmail.com</a> <br></br> <br></br>
          <img className="icons" src = {adress}></img>
          <a className = 'links' href = "https://www.google.com/maps/place/Iv%C4%83ne%C8%99+617063/@46.8291923,25.9002684,14z/data=!3m1!4b1!4m6!3m5!1s0x474abcda7d691f63:0x4ebadc4172c6627c!8m2!3d46.8293021!4d25.9169342!16s%2Fg%2F1236h32p">  Str. Principală, Nr. 111, Com. Bicaz-Chei, Jud. Neamț, România</a>
        </div>
      </div>
      
      <div className='flex-box'>
        <div>
          <p className='text-secundar'>
            Experiența de muncă <hr></hr>
          </p>
          <ul className='item'> 
          <h2><img className="icons" src = {arrow}></img><a className = 'links' href="https://www.facebook.com/voltagrup"> VOLTA SHOWROOM & DEPOZIT, PIATRA NEAMȚ, 2020</a>  </h2>
            <li>Angajată part-time cu contract pe o perioadă determinată (iulie-septembrie 2020)</li>
            <li>Responsabilitatea mea a constat în căutarea și centralizarea datelor referitoare la produsele vândute prin intermediul companiei.</li>
          </ul><br></br>
          <img className='img-body' src = {computer}></img>
        </div>
        <div>
          <p className='text-secundar'>
            Educație <hr></hr>
          </p>
          <ul className='item'> 
            <h2><img className="icons" src = {arrow}></img> <a className = 'links' href="https://www.tuiasi.ro/"> <b>  Universitatea Tehnică "Gheorghe Asachi", Iași</b></a></h2>
            <h3>FACULTATEA DE AUTOMATICĂ ȘI CALCULATOARE, SPECIALIZAREA CALCULATOARE ȘI TEHNOLOGIA INFORMAȚIEI, 2021 - PREZENT</h3> 
            <h2><img className="icons" src = {arrow}></img><a className = 'links' href="https://www.cnpetrurares.ro/"><b>  Colegiul Național "Petru Rareș", Piatra Neamț</b></a></h2>
            <h3>PROFIL MATEMATICĂ-INFORMATICĂ, ABSOLVIT ÎN 2021</h3>
            <li>Participarea la concursuri naționale de creație (SUPER- secțiunea film și secțiunea poezie- ediția din 2020, concursul Licart- ediția din 2019 și 2020)</li>
            <li>Participarea la Olimpiada Națională de Informatică, etapa județeană în 2018,2019 și 2020</li>
            <li>Participarea la Olimpiada Națională de Matematică, etapa județeană în 2018 și 2019</li>
          </ul>                                                         
        </div>
      </div>

      <div className='flex-box'>
        <div>
          <p className='text-secundar'>
            Voluntariate <hr></hr>
          </p>
          <ul className='item'> 
            <li>Membră în Liga Studenților Facultății de Automatică și Calculatoare, Iași(2021-prezent)</li>
            <li>Membră în Asociația Studenți Creștini Ortodocși Români, filiala Iași (2021-prezent)</li>
            <li>Membră în Asociația International Community of the Young(2020-2021)</li>
            <li>Membră în Asociația Tinerilor Ortodocși din România, filiala Piatra-Neamț (2019-2021)</li>
            <li>Voluntariat în cadrul programului "Ceas floral" organizat de "Colegiul Național Petru Rareș" în anul 2019. Responsabilitatea mea a constat în obținerea de sponsorizări pentru proiect, participarea la conferințele realizate de sponsori și participarea la programele de ecologizare susținute pe dealurile din apropierea orașului. </li>
            <li>Voluntariat în cadrul programului "Școala de vară Sf. Fanurie" organizată de "Parohia ortodoxă Sf. Prooroc Ilie Tesviteanul, Ivaneș", în care am ajutat la organizarea activitățiilor propuse de preot în anul 2018.</li>
          </ul>
        </div>
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
      </div>
  </div>
  );
}

export default App;
