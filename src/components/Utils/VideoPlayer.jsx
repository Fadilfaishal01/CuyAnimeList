"use client"
import { XCircle } from '@phosphor-icons/react/dist/ssr'
import React from 'react'
import Youtube from 'react-youtube'

const VideoPlayer = ({ youtubeId }) => {
   const options = {
      width: "300",
      height: "250",
   }

   return (
      <div className='fixed bottom-0 right-0'>
         <button>
            <XCircle size={24} />
         </button>
         <Youtube 
            videoId={youtubeId} 
            onReady={(event) => event.target.pauseVideo()} 
            opts={options}   
         />
      </div>
   )
}

export default VideoPlayer
