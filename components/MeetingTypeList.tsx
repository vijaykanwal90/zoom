/* eslint-disable camelcase */
"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Test from './Test';
import HomeCard from './HomeCard';
import MeetingModel from './MeetingModel';
// import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';
import Loader from './Loader';
// import { Textarea } from './ui/textarea';
// import ReactDatePicker from 'react-datepicker';
// import { useToast } from './ui/use-toast';
// import { Input } from './ui/input';
const initialValues={
  dateTime: new Date(),
  description:'',
  link:''
}
const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState<
  'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
>(undefined);


    const router = useRouter()
    const {user} = useUser()
    // const client = useStreamVideoClient()
    const [values, setValues] = useState(initialValues);

    // const [callDetails,setCallDetails]= useState<Call>()
    // const createMeeting= async()=>{
    //   console.log("heelo")
    //   if(!client || !user){
    //     return ;
    //   }
    //   try {
    //     const id = crypto.randomUUID();
    //     const call = client.call('default',id);
    //     if(!call){
    //       throw new Error('failed to create call')
    //     }
    //     const startsAt= values.dateTime.toISOString()
    //     new Date(Date.now()).toISOString();
    //     const description = values.description || 'Instant meeting';

    //     await call.getOrCreate({
    //       data:{
    //         starts_at:startsAt,
    //         custom:{
    //           description
    //         }
    //       }
    //     })
    //     setCallDetails(call);
    //     if(!values.description){
    //       router.push(`/meeting${call.id}`)
    //     }
    //   } catch (error) {
    //     console.log(error + " error in meeting type list")
    //   }
    // }
    // const createHe= async()=>{
    //   console.log("ehlow ")
    // }
     const createMeeting= async()=>{
      console.log("hello world")
     }
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
  <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
      className='bg-orange-1'

        handleClick={() => setMeetingState('isInstantMeeting')}
      />

    <HomeCard 
      img='/icons/join-meeting.svg'
      title="Join Meeting"
      description="via invite line"
      className='bg-blue-1'
      handleClick={()=> setMeetingState('isScheduleMeeting'

    )}
    />
    <HomeCard
      img='/icons/schedule.svg'
      title="Schedule Meeting"
      description="Plan your meeting"
      handleClick={()=> setMeetingState('isScheduleMeeting'
      )}
      className='bg-purple-1'
      />

    <HomeCard
      img='/icons/recordings.svg'
      title="View Recording"
      description="Check out your recodings"
      handleClick={()=> router.push('/recordings')
      }
      className='bg-yellow-1'
      />
<MeetingModel 
isOpen={true}
onClose= {()=>{

}}
title="Start an Instant Meeting"
className='text-center'
buttonText="Start Meeting"
handleClick={createMeeting}
/>
    </section>
  )
}

export default MeetingTypeList
