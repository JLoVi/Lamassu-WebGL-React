import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import GameCanvas from "./components/GameCanvas";
import { DeviceManager } from "./utility/Device";
import "./App.css"
import MobileView from "./pages/MobileView";
import DesktopView from "./pages/DesktopView";
import SEO from "./components/SEO";
function App() {

  return (
    <>
      <SEO />
     {DeviceManager.isMobile() ? <MobileView /> : <DesktopView />}
    
    </>
  );
}

export default App
