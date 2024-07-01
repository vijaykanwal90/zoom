"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";
// import {
//     StreamCall,
//     StreamVideo,
//     StreamVideoClient,
//     User,
//   } from '@stream-io/video-react-sdk';
const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret= process.env.STREAM_SECRET_KEY;
// console.log("hl")
console.log(apiKey + " vd   " + apiSecret);
export const tokenProvider = async()=>{
    const user = await currentUser();
    if(!user){
        throw new Error('User is not logged in ')
    }
    if(!apiKey){
        throw new Error('No API Key')
    }
    if(!apiSecret){
        throw new Error('No API Secret')
    }
    const client = new StreamClient(apiKey, apiSecret)
    const expirationTime = Math.floor(Date.now() / 1000) + 3600;
    const issuedAt = Math.floor(Date.now() / 1000) - 60;
    const token = client.createToken(user.id,expirationTime,issuedAt);
    console.log(" tokem is " + token)
    return token;
}