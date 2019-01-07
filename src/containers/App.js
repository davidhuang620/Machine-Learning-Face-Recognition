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

// https://samples.clarifai.com/face-det.jpg


// const getFaceBox = (response) => {
//    const faceBox = response['outputs'][0]['data']['regions'][0]['region_info']['bounding_box'];
//    const image = document.getElementById('inputImage');
//    const width = Number(image.width);
//    const height = Number(image.height);
//    console.log(response);
//    return{
//       leftCol: faceBox.left_col * width,
//       topRow: faceBox.top_row * height,
//       rightCol: width - (faceBox.right_col * width),
//       bottomRow: height - (faceBox.bottom_row * height)
//    }
// }

const getFaceBox = (response) => {
   const faceBox = response['outputs'][0]['data']['regions'];
   const image = document.getElementById('inputImage');
   const width = Number(image.width);
   const height = Number(image.height);
   return(
       faceBox.map( (item) => {
            return (
               {
                  leftCol: item.region_info.bounding_box.left_col * width,
                  topRow: item.region_info.bounding_box.top_row * height,
                  rightCol: width - (item.region_info.bounding_box.right_col * width),
                  bottomRow: height - (item.region_info.bounding_box.bottom_row * height)
               }
            );
         }
      )
   );
}





class App extends Component {

   constructor() {
      super();
      this.state = {
         imageLink : '',
         faceBox: []
      }
   }

   // model has to be in the Class to execture setState(). Since model is a promise and execute after the call stack.
   model = (imageLink) => {

      let resp = {};
      app.models.predict("a403429f2ddf4b49b307e318f00e528b", imageLink)
      .then(
         (response) => {
         resp = getFaceBox(response);
         this.setState({faceBox: resp});
         console.log(response);
         console.log(this.faceBox);
         })
      .catch(
         (err) => {console.log(err);}
      );
      return(resp);
   }


   imageLinkChange = (event) => {
      this.setState({imageLink: event.target.value});
   }

   imageLinkSubmit = (event) => {
      this.model(this.state.imageLink);
   }

  render() {
    return (
      <div className="App">
         <ParticleComp />
         <Navigation />
         <Logo />
         <ImageLinkForm imageLinkChange={this.imageLinkChange} imageLinkSubmit={this.imageLinkSubmit} />
         <Rank />
         <FaceRecognition imgLink={this.state.imageLink} faceBox={this.state.faceBox}/>
      </div>
    );
  }
}

export default App;
