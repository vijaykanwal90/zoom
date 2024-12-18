import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'
import moment from "moment-timezone"
// import Sidebar from '@/components/Sidebar'
const Home = () => {
  const now   = new Date();

  // const time =now.toLocaleTimeString('en-US',{
  //   hour:'2-digit',minute:'2-digit'
  // })
  // const now = new Date();

  // Use `Intl.DateTimeFormat` for better control over time formatting
  const currentTimeInIST = moment().tz('Asia/Kolkata').format('hh:mm A');

  const formatter = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true // 12-hour format with AM/PM
  });

const time = formatter.format(now);
  const date= (new Intl.DateTimeFormat('en-US',{
      dateStyle:'full'
  })).format(now);
  return (
    
    <section className='flex size-full flex-col gap-10 text-white'>
  {/* <h1 className='text-3xl font-bold'> Home</h1> */}
  <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
  <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
  {/* <h2 className='glassmorphism max-w-[270px] rouded text-center py-2 text-base font-normal'>Upcoming Meeting at :12:30 PM</h2> */}


  <div className='flex flex-col gap-2'></div>
<h1 className='text-4xl font-extrabold lg:text-7xl'>{currentTimeInIST} </h1>
<p className='text-lg font-medium text-sky-1 lg:text-2xl'> {date}</p>
  </div>

  </div>
  <MeetingTypeList/>
    </section>
    
  )
}

export default Home
