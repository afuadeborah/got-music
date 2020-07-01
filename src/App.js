import React, { Component } from 'react';
// import { 
//   BrowserRouter as Router, 
//   Route, Link } from 'react-router-dom';
import './App.css';


import Header from './Components/Header'
import Catalogue from './Components/Catalogue';
import Search from './Components/Search';



class App extends Component {
 
  render (){

    return (
      <div className="App">
        <Header />

        <Catalogue />

        <Search />

      </div>
    );
  }
}

export default App;

