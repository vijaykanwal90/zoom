
"use client"
import Image from "next/image"
import HomeCard from "./HomeCard"
import MeetingModal from "./MeetingModal"
import { useState } from "react"
import { useRouter } from "next/navigation"
const MeetingTypeList = () => {
    const [meetingState, setMeetingState]= useState<'isScheduleMeeting'| 'isJoiningMeeting'|'isInstantMeeting'| undefined>()
    const router = useRouter()
    const createMeeting=()=>{

    }
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
    <HomeCard
    img='/icons/add-meeting.svg'
    title="New Meeting"
    description="Start an instant meeting"
    handleClick={()=> setMeetingState('isInstantMeeting'
    )}
    className='bg-orange-1'
    />
    <HomeCard 
      img='/icons/join-meeting.svg'
      title="Join Meeting"
      description="via invite line"
      handleClick={()=> setMeetingState('isJoiningMeeting'
      )}
      className='bg-blue-1'

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
<MeetingModal 
isOpen={meetingState==='isInstantMeeting'}
onClose={()=>setMeetingState(undefined)}
title="Start an Instant Meeting"
className="text-center"
buttonText="Start Meeting"
handleClick= {createMeeting}



/>
    </section>
  )
}

export default MeetingTypeList
