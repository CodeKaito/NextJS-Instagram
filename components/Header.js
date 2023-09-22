import Image from 'next/image'
import React from 'react'
import { logo, logosmall } from '@/assets'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon
} from '@heroicons/react/outline';

const Header = () => {
  return (
    <div>
        <div className='flex justify-between max-w-6xl'>
            {/* LeftSide */}
            <div className='relative hidden lg:inline-grid h-24 w-24'>
                <Image src={logo} objectFit='contain' className='cursor-pointer' />
            </div>

            <div className='relative w-10 h-10 lg:hidden flex-shrink-0'>
              <Image src={logosmall} objectFit='contain' className='cursor-pointer' />
            </div>

            {/* MiddleSide */}
            <div>
              <input type='text' placeholder='Search' className='hidden' />
            </div>

            {/* RightSide */}
        </div>
    </div>
  )
}

export default Header