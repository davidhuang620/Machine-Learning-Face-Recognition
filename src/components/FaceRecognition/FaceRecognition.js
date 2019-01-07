import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({imgLink, faceBox}) => {
// style={{zIndex: 1}}
// Need to fix: particle is onto the image
   return(
      <div className='ma' style={{display: 'flex', justifyContent: 'center'}}>
         <div className = 'absolute mt2' style={{zIndex: 1}}>

            <img id = 'inputImage' src = {imgLink} alt = 'URL not found' heigh='500px' width = 'auto' />
            <div className = 'boundingBox' style={{top: faceBox.topRow, right: faceBox.rightCol, bottom: faceBox.bottomRow, left: faceBox.leftCol}} > </div>
         </div>
      </div>
   );
}

export default FaceRecognition;
