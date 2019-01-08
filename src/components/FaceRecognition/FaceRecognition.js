import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({imgLink, faceBox}) => {

   const displayBoxes = (arr) => {
      return(
         arr.map(
            (item, ind) => {
               return(
                  <div key={ind} className = 'boundingBox' style={{top: item.topRow, right: item.rightCol, bottom: item.bottomRow, left: item.leftCol}} > </div>
               )
            }
         )
      );
   }


// style={{zIndex: 1}}
// Need to fix: particle is onto the image
   return(
      <div className='ma' style={{display: 'flex', justifyContent: 'center'}}>
         <div className = 'absolute mt2' style={{zIndex: 1}}>

            <img id = 'inputImage' src = {imgLink} alt = 'URL not found' heigh='500px' width = 'auto' />
            {displayBoxes(faceBox)}
         </div>
      </div>
   );
}

export default FaceRecognition;
