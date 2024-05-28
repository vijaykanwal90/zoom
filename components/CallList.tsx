'use client';
import { useGetCalls } from "@/hooks/useGetCall";
import { CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/router";
import { useState } from "react";
import MeetingCard from "./MeetingCard";
const CallList = () => {
    const CallList = ({type}:{type:'ended' | 'upcoming' | 'recordings'})=>{
        const {endedCalls, upcomingCalls, callRecordings, isLoading} = useGetCalls();
        const router = useRouter()
        const [recordings,setRecordings]= useState<CallRecording[]>([])
        const getCalls= ()=>{
          switch(type){
            case 'ended':
              return endedCalls;
            case 'recordings':
              return recordings;
            case 'upcoming':
              return upcomingCalls;

            default :
             return [];
          }
        }
    }
    const getNoCallsMessage= ()=>{
      switch(type){
        case 'ended':
          return 'No previous Calls';
        case 'recordings':
          return 'No recordings';
        case 'upcoming':
          return 'no upcomingCalls';

        default :
         return '';
      }
    }
   const calls= getCalls();
   const noCallsMessage = getNoCallsMessage();
  return (
    <div className="grid grid-cols-1 gap-5">
      {calls && calls.length>0 ? calls.map((meeting:Call | CallRecording)=>(
        <MeetingCard/>

      )
      )}
    </div>
  )
}

export default CallList
