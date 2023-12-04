"use client"
import React, { useState } from 'react'
import Youtube from 'react-youtube'

const VideoPlayer = ({ youtubeId }) => {
   const [isOpen, setIsOpen] = useState(true);

   const handleVideoPlayer = () => {
      setIsOpen((prevState) => !prevState);
   }

   const options = {
      width: "300",
      height: "250",
   }

   const Player = () => {
      return (
         <div className='fixed bottom-2 right-2'>
            <button onClick={handleVideoPlayer} className='text-color-primary float-right bg-color-secondary px-3 mb-1'>
               X
            </button>
            <Youtube 
               videoId={youtubeId} 
               onReady={(event) => event.target.pauseVideo()} 
               opts={options}
               onError={() => alert("Sorry, Video is Broken.")}
            />
         </div>
      )
   }

   const ButtonOpenPlayer = () => {
      return (
         <button onClick={handleVideoPlayer} className='fixed rounded bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl'>
            Lihat Trailer
         </button>
      );
   }

   return isOpen 
   ? 
   <Player/> 
   :
   <ButtonOpenPlayer />;
}

export default VideoPlayer
