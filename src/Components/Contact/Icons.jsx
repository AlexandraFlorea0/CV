import React from 'react';
import poza from '../../Pictures/poza.jpg'
import facebook from '../../Pictures/facebook.png'
import github from '../../Pictures/github.png'
import linkedin from '../../Pictures/linkedin.png'
import '../../CSS/Contact.css';

function Icons() {
  return (
    <div>
            <img className="poza" src = {poza}></img> <br></br> <br></br>
            <div className="social-media">
                <a  href="https://www.facebook.com/alexandra.florea.334"><img className="social-media-icons" src = {facebook}></img></a>
                <a  href="https://github.com/AlexandraFlorea0"><img className="social-media-icons" src = {github}></img></a>
                <a href="https://www.linkedin.com/in/alexandra-florea-7325461ab/"><img className="social-media-icons" src = {linkedin}></img></a>
            </div>                                                                          
    </div>
  );
}

export default Icons;
