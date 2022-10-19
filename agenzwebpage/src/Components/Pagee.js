import React from 'react';
 import './pagee.css';
 import number1 from '../images/number1.png';
 import number2 from '../images/number2.png';
 import number3 from '../images/number3.png';
 import number4 from '../images/number4.png';
import { Link } from 'react-router-dom';


function Pagee() {
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
				{/* <img src={logo} alt = 'logo'/> */}
		</div>
				</ul> 

				<div class="rightNav">
					<div className='searchbutton'>
					<div className='txt-fld'>
                        <label className="form-label">
                         <input type="search" name="search" placeholder="Entrez une ville quartier,une adresse"/>
                        </label>
						</div>
                </div>
					<div className='avender'>
					<button class="btn btn-sm">
					<i class="fa vendre" aria-hidden="true"></i>Avendre</button>
					</div>
					<div className='prix'>
					<button class="btn btn-sm">
					<i class="fa fa-prix" aria-hidden="true"></i>Prix</button>
					</div>
					<div className='type'>
					<button class="btn btn-sm">
					<i class="fa fa-type" aria-hidden="true"></i>Type</button>
					</div>
					<div className='surface'>
					<button class="btn btn-sm">
					<i class="fa fa-surface" aria-hidden="true"></i>Surface</button>
					</div>
					<div className='chambres'>
					<button class="btn btn-sm">
					<i class="fa fa-chambres" aria-hidden="true"></i>Chambres</button>
					</div>
					<div className='prix'>
					<button class="Valider">
					<i class="fa fa-search" aria-hidden="true"></i>Valider</button>
					</div>


				</div>
			</nav>
			<div class="mapouter">
                <div class="gmap_canvas">
                <iframe width="580" height="750" id="gmap_canvas" src="https://maps.google.com/maps?q=karen&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> map</iframe>
                <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a>
				</div>
				<div className='section'>
				<div className='upsection'>

				<div className='text1'>
				<h2> immobilier at maisons a partout au Maroc</h2>
				<div className='text2'>
				<button className='button2'>
				<i class="agent" aria-hidden="true"></i>500 Agent Listings</button>
                        <label className="btn3">
						<h5> filtre par</h5> 
                         <input type="srch" name="btn" placeholder="Date-Du plus recent au ancien"/>
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
			</div>
			</div>	
	)
}

export default Pagee;
