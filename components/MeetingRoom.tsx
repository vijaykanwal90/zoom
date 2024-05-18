import { cn } from '@/lib/utils'
import { CallControls, CallParticipantsList, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk'
import React from 'react'
import { useState } from 'react'
type CallLayoutType= 'grid' | 'speaker-left' | 'speaker-right'

const MeetingRoom = () => {
  const [layout , setLayout]= useState<CallLayoutType>('speaker-right')
  const [showParticipants,setShowParticipant ]= useState(false)

  const CallLayout= ()=>{
    switch(layout){
      case 'grid':
        return <PaginatedGridLayout/>
      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition="left"/>
        default : 
        return <SpeakerLayout participantsBarPosition="right"/>
    }
  }
  return (
   <section className='relative h-screen w-full overflow-hidden pt-4 text-white'>

<div className='relative flex size-full items-center justify-center'>
      <div className='flex size-full max-w-[1000px] items-center'>
        <CallLayout/>
      </div>
      <div className={cn('h-[calc(100vh-86px)] hidden ml-2 ',{'show-block':showParticipants})}>

<CallParticipantsList onClose={()=>setShowParticipant(false)}/>
      </div>

      </div>
      
   <div className='fixed bottom-0 flwx w-full itmes-center justify-center gap-5'>
    <CallControls/>
   </div>

   </section>
     
  )
}

export default MeetingRoom
