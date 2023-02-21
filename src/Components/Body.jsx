import React from 'react';
import poza from '../Pictures/poza.jpg'
import Experienta from './Body/Experienta';
import Educatia from './Body/Educatia';
import Descriere from './Body/Descriere';
import Voluntariat from './Body/Voluntariate'
import Calificari from './Body/Calificari'
import '../CSS/Body.css';

function Body() {
  return (
    <div className='container'>
      <div className='flex-box'>
        <div>
          <img className="poza" src = {poza}></img> <br></br> <br></br>                                                              
        </div>
        <Descriere/>
      </div>
      
      <div className='flex-box'>
        <Experienta/>
        <Educatia/>
        
      </div>

      <div className='flex-box'>
        <Voluntariat/>
        <Calificari/>
      </div>
  </div>
  );
}

export default Body;
