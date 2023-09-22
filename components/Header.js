import Image from 'next/image'
import React from 'react'
import { logo } from '@/assets'

const Header = () => {
  return (
    <div>
        <div className='flex justify-between max-w-6xl'>
            {/* LeftSide */}
            <div className='relative h-24 w-24'>
                <Image src={logo} objectFit='contain' className='cursor-pointer' />
            </div>

            {/* MiddleSide */}

            {/* RightSide */}
        </div>
    </div>
  )
}

export default Header