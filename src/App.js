import React, { Component } from 'react';
// import { 
//   BrowserRouter as Router, 
//   Route, Link } from 'react-router-dom';
import './App.css';

// import axios from 'axios';
import Header from './Components/Header'
import Catalogue from './Components/Catalogue';
import MusicDetails from './Components/MusicDetails';

class App extends Component {
  // constructor (){
  //   super();

   
   
  // }



  render (){

    return (
      <div className="App">
        <Header />

        <Catalogue />

        <MusicDetails />
        
  
      </div>
    );
  }
}

export default App;


// To grab all values in the array, use a foreach loop