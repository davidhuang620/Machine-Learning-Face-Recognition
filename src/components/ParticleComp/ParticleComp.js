import React from 'react';
import Particles from 'react-particles-js';
import "./ParticleComp.css";

// https://www.npmjs.com/package/react-particles-js

const particleParams = {
   particles: {
      number:{
         value: 30,
         density:{
            enable: false
         }
      },
      size:{
         value: 7,
         random: true,
         anim:{
            size_min: 3
         }
      },
      line_linked:{
         distance: 300
         // enable: false
      },
      move: {
         speed: 1
      }
   },
   interactivity:{
      events:{
         onclick:{
            enable: true,
            mode: "repulse"
         }
      }
      ,
      mode:{
         repulse:{
            distance: 400
         }
      }
   },
    retina_detect: true

}

const ParticleComp = () => {

   return(
      <Particles className="particles"  params= {particleParams} />
   )

}

export default ParticleComp;
