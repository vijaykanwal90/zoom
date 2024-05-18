"use client"
import React, { useState } from 'react'
import '@stream-io/video-react-sdk/dist/css/styles.css';

import {useUser} from '@clerk/nextjs'
import MeetingRoom from '@/components/MeetingRoom';
// import { StreamCall } from '@stream-io/node-sdk';
import MeetingSetup from '@/components/MeetingSetup';
import { StreamCall,StreamTheme } from '@stream-io/video-react-sdk';
import { useGetCallById } from '@/hooks/useGetCallById';
import { Loader } from 'lucide-react';
import { useParams } from 'next/navigation';

const MeetingPage = () => {
  const {id}= useParams();
  const { isLoaded,user}= useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const {call , isCallLoading}= useGetCallById(id);
  console.log( "on page[id] of meeting " + id)
 if(!isLoaded || isCallLoading){
  return <Loader/>
 }
 if(!call){
  <p className='text-center text-3xl font-bold text-white'>Call not found</p>
 }

    return (
      
 <main className="h-screen w-full">
  <StreamCall call={call}>
    <StreamTheme>
{!isSetupComplete ?(
<MeetingSetup setIsSetupComplete={setIsSetupComplete}/>
  ):<MeetingRoom/>
}
{/* <MeetingSetup/> */}
{/* <div>Hello in meeeting page</div> */}
</StreamTheme>
  </StreamCall>

</main>

  )
}

export default MeetingPage
