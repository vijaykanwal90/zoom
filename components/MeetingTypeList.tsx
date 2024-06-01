// /* eslint-disable camelcase */
// "use client";
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// // import Test from './Test';
// import HomeCard from './HomeCard';
// import MeetingModel from './MeetingModel';
// import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
// import { useToast } from '@/components/ui/use-toast';
// import { useUser } from '@clerk/nextjs';
// import Loader from './Loader';
// // import {Input} from './ui/input'
// import { Textarea } from "@/components/ui/textarea"
// import ReactDatePicker from 'react-datepicker'

// const initialValues = {
//   dateTime: new Date(),
//   description: '',
//   link: '',
// }
// const MeetingTypeList = () => {

//   const [meetingState, setMeetingState] = useState<
//   'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting'
// >();

//   const router = useRouter()
//   const { user } = useUser()
//   const client = useStreamVideoClient()
//   const [values, setValues] = useState(initialValues);

//   const [callDetail, setCallDetail] = useState<Call>()
//   const { toast } = useToast();
//   console.log(meetingState + " helo")
//   const createMeeting = async () => {

//     if (!client || !user) {
//       return;
//     }
//     try {
//       if (!values.dateTime) {
//         toast({
//           title: "Please select a date and time",

//         })
//       }
//       const id = crypto.randomUUID();
//       const call = client.call('default', id);
//       if (!call) {
//         throw new Error('failed to create call')
//       }
//       console.log(call)
//       const startsAt = values.dateTime.toISOString() ||
//         new Date(Date.now()).toISOString();
//       const description = values.description || 'Instant meeting';

//       await call.getOrCreate({
//         data: {
//           starts_at: startsAt,
//           custom: {
//             description
//           }
//         }
//       })
//       setCallDetail(call);
//       if (!values.description) {
//         router.push(`/meeting/${call.id}`)
//       }
//       toast({
//         title: "Meeting created",

//       })
//     } catch (error) {
//       console.log(error + " error in meeting type list")
//       toast({
//         title: "Failed to create meeting",

//       })
//     }
//   }
// if(!client || !user) return <Loader/>;
//   const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetail?.id}`;

//   // const meetingLink = `${process.env.NEXT_PUBLIC_BASE-URL}`

//   return (
//     <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
//       <HomeCard
//         img="/icons/add-meeting.svg"
//         title="New Meeting"
//         description="Start an instant meeting"
//         className='bg-orange-1'

//         handleClick={() => setMeetingState('isInstantMeeting')}
//       />

//       <HomeCard
//         img='/icons/join-meeting.svg'
//         title="Join Meeting"
//         description="via invite link"
//         className='bg-blue-1'
//         handleClick={() => setMeetingState('isJoiningMeeting'

//         )}
//       />
//       <HomeCard
//         img="/icons/schedule.svg"
//         title="Schedule Meeting"
//         description="Plan your meeting"
//         className="bg-purple-1"
//         handleClick={() => setMeetingState('isScheduleMeeting')}
//       />

//       <HomeCard
//         img='/icons/recordings.svg'
//         title="View Recording"
//         description="Check out your recodings"
//         handleClick={() => router.push('/recordings')
//         }
//         className='bg-yellow-1'
//       />
//  {!callDetail ? (
//         <MeetingModel
//           isOpen={meetingState === 'isScheduleMeeting'}
//           onClose={() => setMeetingState(undefined)}
//           title="Create Meeting"
//           handleClick={createMeeting}
//         >
//           <div className="flex flex-col gap-2.5">
//             <label className="text-base text-normal leading-[22.4px] text-sky-2">
//               Add a description
//             </label>
//             <Textarea
//               className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
//               onChange={(e) =>
//                 setValues({ ...values, description: e.target.value })
//               }
//             />
//           </div>
//           <div className="flex w-full flex-col gap-2.5">
//             <label className="text-base font-normal leading-[22.4px] text-sky-2">
//               Select Date and Time
//             </label>
//             <ReactDatePicker
//               selected={values.dateTime}
//               onChange={(date) => setValues({ ...values, dateTime: date! })}
//               showTimeSelect
//               timeFormat="HH:mm"
//               timeIntervals={15}
//               timeCaption="time"
//               dateFormat="MMMM d, yyyy h:mm aa"
//               className="w-full rounded bg-dark-3 p-2 focus:outline-none"
//             />
//           </div>
//           test
//         </MeetingModel>
//       ) : (
//         <MeetingModel
//           isOpen={meetingState === 'isScheduleMeeting'}
//           onClose={() => setMeetingState(undefined)}
//           title="Meeting Created"
//           handleClick={() => {
//             navigator.clipboard.writeText(meetingLink);
//             toast({ title: 'Link Copied' });
//           }}
//           image='/icons/checked.svg'
//           buttonIcon="/icons/copy.svg"
//           className="text-center"
//           buttonText="Copy Meeting Link"
//         />
      
//       )}
//       {/* <MeetingModel
//           isOpen={meetingState === 'isJoiningMeeting'}
//           onClose={() => setMeetingState(undefined)}
//           title="Type the link here"
//           className='text-center'
//           buttonText="Join Meeting"
//           handleClick={()=>router.push(values.link)}
//           <Input 
//           placeholder="Meeting link"
//           onChange={(e)=>setValues({...values,link:e.target.value})}
//           className="border-none bg-dark-3 focus-visible0ring-0 focus-visible:ring"
//           />
//       </MeetingModel> */}
//       <MeetingModel
//         isOpen={meetingState === 'isInstantMeeting'}
//         onClose={() => setMeetingState(undefined)}
//         title="Start an Instant Meeting"
//         className='text-center'
//         buttonText="Start Meeting"
//         handleClick={createMeeting}
//       />
//     </section>
//   )
// }

// export default MeetingTypeList
/* eslint-disable camelcase */
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import HomeCard from './HomeCard';
import MeetingModal from './MeetingModel';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';
import Loader from './Loader';
import { Textarea } from './ui/textarea';
import ReactDatePicker from 'react-datepicker';
import { useToast } from './ui/use-toast';
// import { Input } from './ui/input';

const initialValues = {
  dateTime: new Date(),
  description: '',
  link: '',
};

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
  >(undefined);
  const [values, setValues] = useState(initialValues);
  const [callDetail, setCallDetail] = useState<Call>();
  const client = useStreamVideoClient();
  const { user } = useUser();
  const { toast } = useToast();

  const createMeeting = async () => {
    if (!client || !user) return;
    try {
      if (!values.dateTime) {
        toast({ title: 'Please select a date and time' });
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call('default', id);
      if (!call) throw new Error('Failed to create meeting');
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || 'Instant Meeting';
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setCallDetail(call);
      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast({
        title: 'Meeting Created',
      });
    } catch (error) {
      console.error(error);
      toast({ title: 'Failed to create Meeting' });
    }
  };

  if (!client || !user) return <Loader />;

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetail?.id}`;

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        className="bg-blue-1"

        handleClick={() => setMeetingState('isInstantMeeting')}
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        className="bg-orange-1"
        handleClick={() => setMeetingState('isJoiningMeeting')}
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        className="bg-purple-1"
        handleClick={() => setMeetingState('isScheduleMeeting')}
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting Recordings"
        className="bg-yellow-1"
        handleClick={() => router.push('/recordings')}
      />

      {!callDetail ? (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title="Create Meeting"
          handleClick={createMeeting}
        >
          <div className="flex flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Add a description
            </label>
            <Textarea
              className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0 text-black"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Select Date and Time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded bg-dark-3 text-black p-2 focus:outline-none"
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title="Meeting Created"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: 'Link Copied' });
          }}
          image={'/icons/checked.svg'}
          buttonIcon="/icons/copy.svg"
          className="text-center"
          buttonText="Copy Meeting Link"
        />
      )}

      <MeetingModal
        isOpen={meetingState === 'isJoiningMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Type the link here"
        className="text-center"
        buttonText="Join Meeting"
        handleClick={() => router.push(values.link)}
      >
        {/* <Input
          placeholder="Meeting link"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
          className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
        /> */}
      </MeetingModal>

      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;