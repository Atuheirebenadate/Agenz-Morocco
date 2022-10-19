import React from "react";

import './pagee.css';
import number1 from '../images/number1.png';
import number2 from '../images/number2.png';
import number3 from '../images/number3.png';
import number4 from '../images/number4.png';

function Listings(){
  return(
    <div className='section'>
				<div className='upsection'>
				<div className='page2'>
				<div className='text1'>
				<h2> immobilier at maisons a partout au Maroc</h2>
				<label className="button2">
                     {/* <input type="button"name="buttoni" placeholder="500 Agent listings"/> */}
					 <h5> filtre</h5>
					 <p> Date-Du plus recent au ancien</p>   
                 </label>
				</div>
				</div>
				<div className='images'>
				<div className='word1'>
             <img src={number1}></img>
			 <h2>11,110,122 MAD </h2>
			  <h3>maisons a vendre 3 chambres 230m2</h3>
			  <h3>Marrakech,Ennahil(pamerie)</h3>
			  <h5>ANNONCE PAR :MARRAKECH CONSEILLS INVEST</h5>
			  </div>
            
			   <div className='word2'>
			   <img src={number2}></img>
              <h2>11,000,122 MAD </h2>
			  <h3>maisons a vendre 2 chambres 140m2</h3>
			  <h3>Marrakech,Gueliz</h3>
			  <h5>ANNONCE PAR :MARRAKECH CONSEILLS INVEST</h5>
			  </div>
            </div>
			<div className='lowsection'>
				<div className='imgs'>	
           <img src={number3}></img>
		   </div>
		   <div className='img1'>
           <img src={number4}></img>
		   </div>
      </div>
        </div>
        </div>
			
  )
}
export default Listings;