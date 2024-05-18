"use client"
import React from 'react'
import { useCall, useCallStateHooks, useCalls } from '@stream-io/video-react-sdk';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
const EndCallButton = () => {
    const call = useCall();
    const router = useRouter()
    const {useLocalParticipant}= useCallStateHooks()
    const localParticipant = useLocalParticipant()
console.log(localParticipant)

    const isMeetingOwner = localParticipant && call?.state.createdBy && localParticipant.userId===call.state.createdBy.id;

    if(!isMeetingOwner){
        return null;
    }


  return (
    
  <Button onClick={async()=>{
    await call.endCall()
    router.push('/')
  }}  className='bg-red-500' >End Call for everyone</Button>
  )
}

export default EndCallButton;
