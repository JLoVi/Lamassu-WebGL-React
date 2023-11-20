import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player'
function VideoPlayer() {

  return (
    <div className='player-wrapper'>
    <ReactPlayer
      className='react-player'
      url='https://vimeo.com/886239218'
      controls={true}
      width='100%'
      height='100%'
    />
  </div>
  );
}

export default VideoPlayer
