import Image from 'next/image';
import React from 'react';
import { logo, logosmall, propic } from '../app/assets';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon
} from '@heroicons/react/outline';

export const Header = () => {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto items-center'>
        {/* LeftSide */}
        <div className='relative hidden lg:inline-grid w-24'>
          <Image src={logo} objectFit='contain' className='cursor-pointer' />
        </div>

        <div className='relative w-10 h-10 lg:hidden flex-shrink-0'>
          <Image src={logosmall} objectFit='contain' className='cursor-pointer' />
        </div>

        {/* MiddleSide */}
        <div className='max-w-sm'>
          <div className='relative mt-1 p-3 rpunded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
            </div>
            <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray focus:ring-black focus:border-black rounded-md' type='text' placeholder='Search' />
          </div>
        </div>

        {/* RightSide */}
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon className='navBtn' />
          <MenuIcon className='h-6 md:hidden cursor-pointer' />

          <div className='relative'>
            <PaperAirplaneIcon className='navBtn rotate-45' />
            <div className='absolute -top-2 -right-3 text-sm w-5 h-5 bg-red-300 rounded-full hover:bg-red-500 flex items-center justify-center animate-pulse text-white'>3</div>
          </div>

          <PlusCircleIcon className='navBtn' />
          <UserGroupIcon className='navBtn' />
          <HeartIcon className='navBtn' />
          <Image src={propic} width={40} className='h-10 rounded-full cursor-pointer' alt='profile pic' />
        </div>
      </div>
    </div>
  );
};
