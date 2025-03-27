
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='px-2  bg-sky-900'>
        <div className='flex justify-between items-center text-white h-[80px]'>
            
            <div className='text-2xl font-bold'>
                <Link href="/">Logo</Link>
            </div>
              <div>
                <img  src="https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png" alt="user avatar" width={50} height={50}  className=" rounded-full border-3 border-white"/>
            </div>
        </div>
    </div>
  )
}

export default NavBar
