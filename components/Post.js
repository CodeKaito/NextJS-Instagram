import { BookmarkIcon, ChatIcon, DotsVerticalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/outline';
import React from 'react'

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

const Post = ({ id, username, userImg, img,  caption }) => {
  return (
    <div className='bg-white my-7 border rounded-sm shadow-sm'>
        {/* Header */}
        <div className='flex items-center p-5'>
            <img src={userImg} className='rounded-full h-12 w-12 object-contain border p-1 mr-3' alt={username} />
            <p className='flex-1 font-bold '>{username}</p>
            <DotsVerticalIcon className='h-5 cursor-pointer' />
        </div>

        {/* img */}
        <img src={img} className='object-fill w-full' alt={caption} />
        
        {/* buttons */}
        <div className='flex justify-between mt-2 ml-2'>
            <div className='flex space-x-4 '>
                <HeartIcon className='btn' />
                <ChatIcon className='btn'/>
                <PaperAirplaneIcon className='btn rotate-45'/>
            </div>
            
            <div>
                <BookmarkIcon className='btn pl-2' />
            </div>
        </div>

        {/* captions */}
        <p className='p-5 truncate'>
            <span className='font-bold mr-1'>{username}</span>
            <span className='text-gray-700 text-sm'>{caption}</span>
        </p>

        {/* comments */}

        {/* input box */}
        <form className='flex items-center p-4'>
            <EmojiHappyIcon className='h-7'/>
            <input type='text' className='border-none flex-1 focus:ring-0 outline-none' placeholder='Add a comment...' />
            <button className=''>Post</button>
        </form>

    </div>
  )
};

export default Post