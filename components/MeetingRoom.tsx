import { cn } from '@/lib/utils'
import { CallControls, CallParticipantsList, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk'
import React from 'react'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LayoutList } from 'lucide-react'

type CallLayoutType = 'Grid' | 'Speaker-Left' | 'Speaker-Right'

const MeetingRoom = () => {
  const [layout, setLayout] = useState<CallLayoutType>('Speaker-Right')
  const [showParticipants, setShowParticipant] = useState(false)

  const CallLayout = () => {
    switch (layout) {
      case 'Grid':
        return <PaginatedGridLayout />
      case 'Speaker-Right':
        return <SpeakerLayout participantsBarPosition="left" />
      default:
        return <SpeakerLayout participantsBarPosition="right" />
    }
  }
  return (
    <section className='relative h-screen w-full overflow-hidden pt-4 text-white'>

      <div className='relative flex size-full items-center justify-center'>
        <div className='flex size-full max-w-[1000px] items-center'>
          <CallLayout />
        </div>
        <div className={cn('h-[calc(100vh-86px)] hidden ml-2 ', { 'show-block': showParticipants })}>

          <CallParticipantsList onClose={() => setShowParticipant(false)} />
        </div>

      </div>

      <div className='fixed bottom-0 flex w-full items-center justify-center gap-5'>
        <CallControls />


        <DropdownMenu>
          <div className="flex items-center">
            <DropdownMenuTrigger className='cursor-pointer rounded-2xl bg-[#19232d] py-2 hover:bg-[#4c535b] px-4'><LayoutList size={20} className='text-white '
            /></DropdownMenuTrigger>

          </div>
          <DropdownMenuContent className='border-dark-1 bg-dark-1 text-white'>
          
{['Grid','Speaker-Left','Speaker-Right'].map((item,index)=>(
  <div key={index}>
    <DropdownMenuItem className='cursor-pointer' onClick={()=>{
      setLayout(item.toLowerCase()as CallLayoutType)
    }}>
      {item}
    </DropdownMenuItem>
    
    <DropdownMenuSeparator className='border-dark-1' /> 

  </div>
))}

            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>

      </div>


    </section>

  )
}

export default MeetingRoom
