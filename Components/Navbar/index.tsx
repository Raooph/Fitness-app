
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const NavBar = () => {
  return (
    <div className='bg-lime-700'>
        <div className='flex justify-between items-center text-lime-600 h-[80px]'>
            
            <div className='text-2xl font-bold '>
                <Link href="/"><Image src='/logo.png' className='p-3 w-[200px] h-[100px] object-cover' alt="logo-img" width={100} height={100} /></Link>
            </div>
              <div>
                <img src="https://cdn1.iconfinder.com/data/icons/user-interface-1-glyph/32/ui_avatar_profil_user_circle-512.png" alt="avatar" className='rounded-full border-3 w-[55px] h-[55px] object-cover  border-white' />
            </div>
        </div>
    </div>
  )
}

export default NavBar
