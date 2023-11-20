import React, { useState, useEffect } from "react";
import VideoPlayer from "../components/VideoPlayer";
import PDF from '../assets/LAMASSU_Game_Design_Document.pdf'
function MobileView() {

  return (
        <div className="flex-wrapper">
            <h2> LAMASSU</h2>
            <a className="mobile-view-action" target="__blank" href={PDF}>open game document</a>

            <div className="mobile-view-video-wrapper">
                <VideoPlayer />
            </div>

            <p> view on desktop to play</p>

        </div>
  );
}

export default MobileView
