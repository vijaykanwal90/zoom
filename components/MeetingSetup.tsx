import { VideoPreview } from '@stream-io/video-react-sdk'
import React from 'react'

const MeetingSetup = () => {
    const [isMicCamToggledOn,setIsMicCamToo]
  return (
    <div className='flex h-screen w-full flox-col items-center justify-center gap-3 text-white '>
      <h1 className='text-2xl font-bold'></h1>
      <VideoPreview/>
    </div>
  )
}

export default MeetingSetup
