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
         onhover:{
            enable: true,
            mode: "grab"
         },
         onclick:{
            enable: true,
            mode: "repulse"
         }
      }
      ,
      modes:{
         grab:{
            line_linked:{
               opacity: 0.5
            },
            distance: 300
         },
         repulse:{
            distance: 300,
            duration: 2
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
