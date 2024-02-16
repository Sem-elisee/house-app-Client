import Image from 'next/image'
import React from 'react'

export default function Fenisha() {
  return (
    <div>
        <div className='flex justify-between items-center px-7'>
            <Image src='/Fenisha (2).png' width={180} height={180} alt='logo'/>

            <div className='leading-[1.8rem]' >
                <h1 className='text-[1.3rem]'>Need Help? WhatsApp +225 0503-53-2967</h1>
                <p>Mon - Fri:08:00am - 6:00pm</p>
            </div>
        </div>
        <div className=' px-5 mb-5 border-2'></div>
    </div>
  )
}
