import React , {ReactNode} from 'react'
import StreamVideoProvider from '@/providers/StreamClientProvider'
const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
      {children}
{/* <div>helvcvckvb</div> */}
      </StreamVideoProvider>

    </main>
  )
}

export default RootLayout
