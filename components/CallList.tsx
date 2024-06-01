'use client';
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useGetCalls } from "@/hooks/useGetCall";
import MeetingCard from "./MeetingCard";
import Loader from "./Loader";
const CallList = ({ type }: { type: 'ended' | 'upcoming' | 'recordings' }) => {
  const { endedCalls, upcomingCalls, callRecordings, isLoading } = useGetCalls();
  const router = useRouter()
  const [recordings, setRecordings] = useState<CallRecording[]>([])
  const getCalls = () => {
    switch (type) {
      case 'ended':
        return endedCalls;
      case 'recordings':
        return recordings;
      case 'upcoming':
        return upcomingCalls;

      default:
        return [];
    }
  }
  // console.log(Call)

  const getNoCallsMessage = () => {
    switch (type) {
      case 'ended':
        return 'No previous Calls';
      case 'recordings':
        return 'No recordings';
      case 'upcoming':
        return 'no upcomingCalls';

      default:
        return '';
    }
  }
  useEffect(()=>{
  
    const fetchRecordings= async()=>{
        const callData = await Promise.all(callRecordings?.map((meeting) =>meeting.queryRecordings())?? [])
        const recordings = callData.filter(call => call?.recordings.length > 0).flatMap( call => call?.recordings)
        setRecordings(recordings)
    }
    if(type==='recordings'){
      fetchRecordings()
    }
  },[type,callRecordings])
  const calls = getCalls();
  // console.log(calls.length)
  const noCallsMessage = getNoCallsMessage();
  if (isLoading) return <Loader />
  return (

    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? calls.map((meeting: Call | CallRecording) => (
        // console.log("hwllo")
        <MeetingCard
          key={(meeting as Call).id}
          icon={
            type === 'ended'
              ? '/icons/previous.svg'
              : type === 'upcoming' ? '/icons/upcoming.svg' : '/icons/recordings.svg'

          }
          title={
            (meeting as Call).state?.custom.description.substring(0, 26) ||  
            ((meeting as CallRecording).filename?.substring(0,20) || 'No description')
          }
          // (meeting as Call).state?.custom.description.substring(0, 26) ||  meeting.filename.substring(0,20)|| 'No description'
          // }
          date={(meeting as Call).state?.startsAt?.toLocaleString() || (meeting as CallRecording).start_time?.toLocaleString()}
          isPreviousMeeting={type === 'ended'}
          buttonIcon1={type === 'recordings' ? '/icons/play.svg' : undefined}
          handleClick={type === 'recordings' ? () => router.push(`${(meeting as CallRecording).url}`) : () => router.push(`/meeting/${(meeting as Call).id}`)}
          link={type === 'recordings' ? (meeting as CallRecording).url : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${(meeting as Call).id}`}
          buttonText={type === 'recordings' ? 'Play' : "Start"}
        />
      )) : (
        <h1>{noCallsMessage}</h1>
      )}
    </div>
  )

}


export default CallList
