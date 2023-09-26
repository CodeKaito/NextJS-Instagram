import React from 'react'

const MiniProfile = () => {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img src='http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpropic.d191723d.png&w=48&q=75' alt='' className='w-16 h-16 rounded-full border p-[2px] object-contain '/>
    
        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>Jerome</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
        </div>

        <button className='text-blue-400 text-sm font-semibold'>Sign out</button>
    </div>
  )
}

export default MiniProfile;