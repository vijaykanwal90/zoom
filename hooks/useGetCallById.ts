import { useEffect, useState } from "react"
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
export const useGetCallById= (id:string | string[])=>{
    const [call,setCall]= useState<call>()
    const  [isCallLoading, setIsCallLoading]=useState(true)
    const client = useStreamVideoClient()

    useEffect(()=>{
        if(!client) return ;

        const loadCall= async()=>{
            const {calls}= await client.queryCalls({
                filter_conditions:{

                }
            })
            if(calls.length>0) setCall(calls[0])
            
        }
        loadCall();
    },[client,id])

    return {call, isCallLoading}
}