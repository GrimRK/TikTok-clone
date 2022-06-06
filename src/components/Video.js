import React, {  useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({url,channel,description,song,likes,comments,shares}) {
  
  

  const [playing,setPlaying]=useState(false);
  const videoRef = useRef(null);
  const handleVideoClick=()=>{
    if(playing)
    {
      videoRef.current.pause();
      setPlaying(false);
    }
    else{
      videoRef.current.play();
      setPlaying(true);
    }
  }
  return (
    <div className="video">
      <video
      onClick={handleVideoClick}
        className="video_player"
        loop
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} comments={comments} shares={shares}/>
    </div>
  );
}

export default Video;
