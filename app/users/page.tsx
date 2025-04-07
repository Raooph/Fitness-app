import React from 'react'

const Users = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="text-3xl font-bold text-lime-500 mb-6">Users</div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((user, i) => (
          <div
            key={i}
            className="bg-white text-black rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-lime-600">User {user}</h3>
            <p className="text-gray-700">
              Placeholder for user info – name, role, or anything else you want.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
