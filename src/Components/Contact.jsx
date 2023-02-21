import React from 'react';
import Date from './Contact/Date'
import Icons from './Contact/Icons'
import '../CSS/Contact.css';

function Contact() {
  return (
    <div className='flex-box'>
        <Icons/>
        <Date/>
  </div>
  );
}

export default Contact;
