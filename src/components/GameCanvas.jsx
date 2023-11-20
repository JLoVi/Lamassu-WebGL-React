import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import PDF from '../assets/LAMASSU_Game_Design_Document.pdf'
function GameCanvas() {
    const { unityProvider, isLoaded, loadingProgression, requestFullscreen  } = useUnityContext({
        loaderUrl: "build/AYFR_Lamassu_2023_build.loader.js",
        dataUrl: "build/AYFR_Lamassu_2023_build.data.unityweb",
        frameworkUrl: "build/AYFR_Lamassu_2023_build.framework.js.unityweb",
        codeUrl: "build/AYFR_Lamassu_2023_build.wasm.unityweb",
      });
    
      const loadingPercentage = Math.round(loadingProgression * 100);
    
      const [devicePixelRatio, setDevicePixelRatio] = useState(
        window.devicePixelRatio
        );
      
        useEffect(
          function () {
            // A function which will update the device pixel ratio of the Unity
            // Application to match the device pixel ratio of the browser.
            const updateDevicePixelRatio = function () {
              setDevicePixelRatio(window.devicePixelRatio);
            };
            // A media matcher which watches for changes in the device pixel ratio.
            const mediaMatcher = window.matchMedia(
              `screen and (resolution: ${devicePixelRatio}dppx)`
            );
            // Adding an event listener to the media matcher which will update the
            // device pixel ratio of the Unity Application when the device pixel
            // ratio changes.
            mediaMatcher.addEventListener("change", updateDevicePixelRatio);
            return function () {
              // Removing the event listener when the component unmounts.
              mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
            };
          },
          [devicePixelRatio]
        );

        const makeFullScreen = () => {
            requestFullscreen(true)
        }
      
    
      return (

        <div className="flex-wrapper">
        {isLoaded && <div className="button-wrapper">
            <a className="desktop-view-action-hover" target="__blank" href={PDF}> game document </a>
            <p className="desktop-view-action-hover" onClick={() => makeFullScreen()}> enter fullscreen </p>
        </div> }
        <div className="desktop-view-video-wrapper">
        <div >
          {!isLoaded && (
            // We'll conditionally render the loading overlay if the Unity
            // Application is not loaded.
            <div className="loading-overlay">
              <h3>Loading Lamassu... ({loadingPercentage}%)</h3>
            </div>
          )}

        <Unity className="unity" 
            unityProvider={unityProvider} 
            style={{ width:"100%", height:"100%", visibility: isLoaded ? "visible" : "hidden"}} 
            devicePixelRatio={devicePixelRatio}
            />  
          

        </div>
        </div>




    </div>
    

      );
}


export default GameCanvas;
