import React ,{ReactNode}from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
interface MeetingModalProps{
    isOpen:boolean;
    onClose:()=>void;
    title:string;
    className?:string;
    handleClick?:()=>void;
    children?:ReactNode;
    buttonText?:string;
    image?:string;
    buttonIcon?:string;
}
const MeetingModel = ({
    isOpen,
    onClose,
     title , 
     className, 
     children , 
     handleClick,
      buttonText , 
      image,
      buttonIcon}:MeetingModalProps) => {
  return (
    <div>
  <Dialog open={isOpen} onOpenChange={onClose} >

  <DialogContent>

  </DialogContent>
</Dialog>

    </div>
  )
}

export default MeetingModel
