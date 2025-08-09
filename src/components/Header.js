import logo from '../logo.svg';
import { useState } from 'react';
import '../header.css';

function Header() {
   
  
  return (
    
   <div className="header">
    
        <h1>Shiva Hospitals</h1>
    
        <div className='headings' >
            <button className='header-style'>Home</button>
            <button className='header-style'>about</button>
            <button className='header-style'>services</button>
            <button className='header-style'>contact</button>
        </div>
   </div>
  );
}

export default Header;
