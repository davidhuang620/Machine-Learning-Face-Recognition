import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation.js';
import Logo from '../components/Logo/Logo.js';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from "../components/Rank/Rank";
// import Particles from 'react-particles-js';
import ParticleComp from "../components/ParticleComp/ParticleComp";



class App extends Component {
  render() {
    return (
      <div className="App">
         <ParticleComp />
         <Navigation />
         <Logo />
         <ImageLinkForm />
         <Rank />
         {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
