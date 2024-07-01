import React , {ReactNode} from 'react'
import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Stream",
  description: "Video Calling App",
  icons:{
    icon:'/icon/logo.svg'
  }
};
const RootLayout = ({children}:Readonly<{children:ReactNode}>) => {
  return (
    <main>
      <StreamVideoProvider>
      {children}

      </StreamVideoProvider>

    </main>
  )
}

export default RootLayout
