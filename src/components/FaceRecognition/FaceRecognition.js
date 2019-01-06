import React from "react";

const FaceRecognition = ({imgLink}) => {
// style={{zIndex: 1}}
   return(
      <div style={{zIndex: 1}}>
         {/* Need to fix: particle is onto the image */}
         <img src = {imgLink} alt = 'URL not found' heigh='500px' width = 'auto' />
      </div>
   );
}

export default FaceRecognition;
