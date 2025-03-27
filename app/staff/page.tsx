import { staffData } from '@/Mock/staff'
import Link from 'next/link'
import React from 'react'
const Staff = () => {
  return (
    <div>
       <div className="flex justify-between font-bold text-xl sticky top-0 z-10 bg-sky-100 p-5">
        <h2>Heyyət</h2>
        <Link href="/create-staff">Əlavə et</Link>
      </div>
      <div className="grid grid-cols-4 my-5 gap-4 p-5 pt-0">
        {staffData.map(({id,FirstName,LastName,ProfilePhotoUrl,JobType}) => {
          return  <div className="border-1 border-black rounded-xl relative">
            <Link href={`/staff/${id}`} className="absolute inset-0"></Link>
          <img
            alt="staff image"
            className="w-full h-[200px] object-cover rounded-tr-xl rounded-tl-xl"
            src={ProfilePhotoUrl}
          />
          <div className="p-3">
            <p className="font-bold text-xl">
              {FirstName} {LastName}
            </p>
            <p>{JobType}</p>
          </div>
        </div>
        })}
      </div>
    </div>
    
  )
}

export default Staff
