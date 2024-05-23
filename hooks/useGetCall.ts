import { Call,useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"
import {useUser} from "@clerk/nextjs"
export const useGetCalls= ()=>{
    const [calls,setCalls]= useState<Call[]>([]);
    const [isLoading,setIsLoading]= useState(false)
    const client = useStreamVideoClient()
    const {user } = useUser();

    useEffect(()=>{
        const loadCalls = async ()=>{
            if(!client, || !user?>id ) return 
            set

            try {
                const {Calls} = await client.querryCalls();
                sort:[{field:'starts_at',direction :-1}]
                filter_condtitions:{
                    starts_at:{$exists:true},
                    $or:[
                        {created_by_user_id:user.id},
                        {members:{$in:[user.id]}},

                    ]
                }
            } catch (error) {
                console.log(error)
            }
            finally{
                setIsLoading(false);
            }
    } loadCalls()),[])
}