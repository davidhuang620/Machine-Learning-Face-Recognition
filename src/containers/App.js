import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation.js';
import Logo from '../components/Logo/Logo.js';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from "../components/Rank/Rank";
import ParticleComp from "../components/ParticleComp/ParticleComp";


const Clarifai = require('clarifai');

const app = new Clarifai.App({
   apiKey: '11f16fba3bba4b98a5229d8e02661a23'
});

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
