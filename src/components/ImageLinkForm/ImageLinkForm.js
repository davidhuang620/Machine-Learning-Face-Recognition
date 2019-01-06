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
            {/* Weird bug that I need to set input as zIndex: 1 to make it work */}
            <input className="pa2 f3 w-30" type="text" placeHolder="URL" style={{zIndex: 1}}/>
               <button className="dim br2 pa2 f3 grow pointer ph3 pv2 w-10 white" style={{backgroundColor: "#2b5876"}}>
                  Find
               </button>

         </div>
      </div>
   );
}

export default ImageLinkForm;
