'use client'

import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';

function Suggestions() {
    const [suggestions, setSuggestions] = useState([])

       useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => (
        {
            ...faker.helpers.multiple(),
            _id: faker.string.uuid(),
            avatar: faker.image.avatarGitHub(),
            username: faker.internet.userName(),
            company: faker.company.name(),
        }));
        setSuggestions(suggestions);
        console.log(suggestions);
    }, [])
        
  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
        <button className=''>See all</button>
      </div>

        {
            suggestions.map(profile => (
                <div key={profile.id} className='flex items-center justify-between mt-3'>
                    <img src={profile.avatar} className='w-10 h-10 rounded-full border p-[2px]' alt='avatar' />

                    <div className='flex-1 ml-4'>
                        <h2 className='font-semibold text-sm'>{profile.username}</h2>
                        <h3 className='text-xs text-gray-400'>Works at {profile.company}</h3>
                    </div>

                    <button className='text-blue-500 text-sm font-semibold'>Follow</button>

                </div>
            ))
        }

    </div>
  )
}

export default Suggestions
