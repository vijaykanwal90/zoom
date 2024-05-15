import React from 'react'
interface testProps{
    handleClick?:()=>void
}
const Test = ({handleClick}:testProps) => {
  return (
    <div>
      hwllo world
    </div>
  )
}

export default Test
