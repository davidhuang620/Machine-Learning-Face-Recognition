import React from 'react';

const ImageLinkForm = () => {

   return(
      <div>
         <div>
            <p className ="f2 white" >
               Upload your photo to find faces!
            </p>
         </div>
         <div className = "center pa3 ma3">
            <input className="pa2 f3 w-30" type="text" placeHolder="URL" />
               <button className="pa2 f3 grow pointer ph3 pv2 w-10 white" style={{backgroundColor: "#2b5876"}}>
                  Find
               </button>

         </div>
      </div>
   );
}

export default ImageLinkForm;
