"use client";

import React, {useState, useEffect} from 'react'
import { faker } from '@faker-js/faker';
import Story from './Story';

function Stories() {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.multiple(),
            _id: faker.string.uuid(),
            avatar: faker.image.avatarGitHub(),
            birthday: faker.date.birthdate(),
            email: faker.internet.email(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            username: faker.internet.userName(),
            sex: faker.person.sexType(),
        }));

        setSuggestions(suggestions);
        console.log(suggestions);
    }, [])

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-100 scrollbar-rounded-900'>
        {suggestions.map((profile) => (
            <Story 
                key={profile.id} 
                img={profile.avatar} 
                username={profile.username} 
            />
        ))}
    </div>
  );
}

export default Stories