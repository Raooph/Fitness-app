import { staffData } from '@/Mock/staff'
import Link from 'next/link'
import React from 'react'
const Staff = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex justify-between items-center sticky top-0 z-10 bg-lime-600 text-black font-bold text-xl p-5 shadow-md">
        <h2 className="tracking-wide">Heyyət</h2>
        <Link
          href="/create-staff"
          className="bg-white text-lime-600 hover:bg-lime-100 px-4 py-2 rounded-xl transition-all duration-200"
        >
          Əlavə et
        </Link>
      </div>
  
      {/* Staff Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 pt-4">
        {staffData.map(({ id, FirstName, LastName, ProfilePhotoUrl, JobType }) => (
          <div
            key={id}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-lg relative hover:scale-[1.02] transition-transform duration-300"
          >
            <Link href={`/staff/${id}`} className="absolute inset-0 z-10" />
            <img
              alt={`${FirstName} ${LastName}`}
              src={ProfilePhotoUrl}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="font-semibold text-lg">
                {FirstName} {LastName}
              </p>
              <p className="text-sm text-lime-700 mt-1">{JobType}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Staff
