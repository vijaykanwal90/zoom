import React , {ReactNode} from 'react'

const HomeLayout = ({children}:{children:ReactNode}) => {
  return (
    <main className='relative'>
        Navbar
      {children}
    </main>
  )
}

export default HomeLayout
