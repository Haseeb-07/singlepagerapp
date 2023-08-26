import React from 'react';
import cappadocia from '../pictures/efil.jpg';
import './Home.css';

export default function Home() {
  return (
   

  
    <div className="home-container" style={{ backgroundImage: `url(${cappadocia})` }}>
     <div className='home-heading'>
     <h3>DREAM  DESTINATIONS, REAL ADVENTURES</h3>
      </div> 
    </div>
  
  );
}
