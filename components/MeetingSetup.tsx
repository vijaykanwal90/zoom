"use client"
import { VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'

const MeetingSetup = () => {
    const [isMicCamToggledOn,setIsMicCamToggledOn]= useState(true)
    const call= useCall();
console.log(call)

    // console.log( " heo w" + call)
    if(!call){
      throw new Error(
        'useStreamCall must be used within a StreamCall component.',
      );
    }
    useEffect(()=>{
        if(isMicCamToggledOn){
            call?.camera.disable();
            call?.microphone.disable();


        }
        else {
            call?.camera.enable();
            call?.microphone.enable();

            
        }
    },[isMicCamToggledOn, call?.camera, call?.microphone])
  return (
    <div className='flex h-screen w-full flox-col items-center justify-center gap-3 text-white '>
      <h1 className='text-2xl font-bold'></h1>
      <VideoPreview/>
      <div>helo</div>
    </div>
  )
}

export default MeetingSetup
