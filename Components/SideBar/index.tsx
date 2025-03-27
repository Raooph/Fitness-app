import { links } from '@/Mock/links'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
     <div className='h-[calc(100vh-85px)] bg-sky-900 flex flex-col  gap-5'>
      {
        links.map(({id,title,to})=>{
            return <div className='text-2xl font-medium text-white p-5 hover:bg-sky-800 cursor-pointer' key={id}>
                <Link href={to}>{title}</Link>
            </div>
        })
      }
      </div>
  )
}

export default SideBar
