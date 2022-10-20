import React from 'react'
import './App.css';
import Pagee from "./Components/Pagee";
import Listings from './Components/Listings';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
           <Navbar/>
      <Switch>
        <Route>
            <Pagee path = '/'/>
        </Route>

        <Route>
               <Listings exact path='/listings' /> 
              <Route exact path="/listings" element = {<Listings/>}/>
      </Route>
        
      </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
