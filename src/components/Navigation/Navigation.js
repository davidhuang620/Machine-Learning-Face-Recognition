import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {


      if(isSignedIn){
         return(
         <nav style={{display: "flex", justifyContent: "flex-end"}}>
            <p onClick={() => onRouteChange('signOut')} className="pointer f3 ba br4 pa3 ma3 b--white grow" style={{color: "white"}} >Sign out</p>
         </nav>
         )
      } else {
         return(
         <nav style={{display: "flex", justifyContent: "flex-end"}}>
            <p onClick={() => onRouteChange('signin')} className="pointer f3 ba br4 pa3 ma3 b--white grow" style={{color: "white"}} >Sign in</p>
            <p onClick={() => onRouteChange('register')} className="pointer f3 ba br4 pa3 ma3 b--white grow" style={{color: "white"}} >Register</p>
         </nav>
         )
      }

}

export default Navigation;
