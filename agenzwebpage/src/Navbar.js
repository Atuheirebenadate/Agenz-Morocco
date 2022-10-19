import React from "react";
import {Link}from "react-router-dom";

function Navbar() {
	return (
		<div className=" nav">
			<nav class="navbar background">
				<ul class="nav-list">
		<Link exact to ='/acheter'><li><a href="#acheter">Acheter</a></li></Link>
		<li><a href="#louer">Louer</a></li>
		<li><a href="#estimer">Estimer</a></li>
		<li><a href='#prix mobiliser'>Prix mobillisers</a></li>
         <li><a href='#credit'>Credit</a></li>
        <li><a href='#agneces'>Agences</a></li>
		<li><a href='#agneces'>Arabe</a></li>
		<li><a href='#agneces'>Connexion</a></li>
		<li><a href='#agneces'>Offerres pro</a></li>
				</ul>

			</nav>
            <div/>  
            </div>   
     )
     } 
       
  export default Navbar;