import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation.js';
import Logo from '../components/Logo/Logo.js';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from "../components/Rank/Rank";
import ParticleComp from "../components/ParticleComp/ParticleComp";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";

const Clarifai = require('clarifai');

// API key should be changed and secured later, not posting this on github
const app = new Clarifai.App({
   apiKey: '11f16fba3bba4b98a5229d8e02661a23'
});

// "https://samples.clarifai.com/face-det.jpg"
const model = (imageLink) => {
   app.models.predict("a403429f2ddf4b49b307e318f00e528b", imageLink)
   .then(
    function(response) {
      // do something with response
      console.log(response);
      // console.log(response['outputs'][0]['data']['regions']);
    },
    function(err) {
      // there was an error
    }
  );
}


class App extends Component {

   constructor() {
      super();
      this.state = {
         imageLink : ''
      }
   }

   imageLinkChange = (event) => {
      this.setState({imageLink: event.target.value});
      console.log(this.state.imageLink);
   }

   imageLinkSubmit = (event) => {
      console.log("click");
      model(this.state.imageLink);
   }

  render() {
    return (
      <div className="App">
         <ParticleComp />
         <Navigation />
         <Logo />
         <ImageLinkForm imageLinkChange={this.imageLinkChange} imageLinkSubmit={this.imageLinkSubmit} />
         <Rank />
         <FaceRecognition imgLink={this.state.imageLink}/>
      </div>
    );
  }
}

export default App;
