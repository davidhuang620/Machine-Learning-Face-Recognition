import React from 'react';

const ImageLinkForm = ({imageLinkChange, imageLinkSubmit}) => {

   return(
      <div>
         <div>
            <p className ="f2 white" >
               Upload your photo to find faces!
            </p>
         </div>
         <div className = "center pa3 ma3">
            {/* Weird bug that I need to set input as zIndex: 1 to make it work */}
            <input onChange = {imageLinkChange} className="pa2 f3 w-30" type="text" placeholder="URL" style={{zIndex: 1}}/>
               <button onClick = {imageLinkSubmit} className="br2 pa2 f3 grow pointer ph3 pv2 w-10 white" style={{backgroundColor: "#2b5876", zIndex: 1}}>
                  Find
               </button>

         </div>
      </div>
   );
}

export default ImageLinkForm;
