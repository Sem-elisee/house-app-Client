import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BsInstagram } from 'react-icons/bs';
import { PagesLink, Payment } from '@/constants/Index';


const Footer = () => {
  return (
      <div className='min-[520px]: px-28 min-[950px]:flex min-[950px]: items-center min-[950px]:px-20 min-[950px]:gap-5 lg:gap-20 bg-[#000000f3] text-white p-8'>
          <div className='md:relative md:top-[-30px]'>
               <Image src='/fen.png' alt='' width={180} height={180} className='py-5'/>

               <div className=' flex gap-5 px-4'>  
                  <div className=' bg-white px-3 py-3 text-black rounded-full'><FaFacebookF /></div>     
                  <div className='bg-white px-3 py-3 text-black rounded-full'><FaXTwitter/></div>     
                  <div className='bg-white px-3 py-3 text-black rounded-full'><BsInstagram/></div>     
                </div>
          </div>

        <div className='min-[520px]: py-10 px-4 md:relative md:top-[-24px] leading-[1.8rem]'>
            <h1 className='font-bold text-2xl py-5 '>Contact</h1>
            <p className='font-semibold'>Fenisha@gmail.com</p>
            <p className='font-semibold'>Cocody Angre  </p>
            <p className='font-semibold'>(225)05 03 53 29 67</p>
        </div>

        <div className='min-[520px]: px-4 '>
            <h1 className='min-[520px]: text-2xl font-bold py-5 '>Information</h1>
                {PagesLink.map((element,key) => (
                  <Link  className=' min-[520px]: font-semibold ' href={`/${element.link.toLowerCase()}`} key={element.id}>
                        <h1 className='py-2 text-md min-[950px]:p-1'>{element.link}</h1>
                  </Link>
                ))}
        </div>

          <div className='min-[520px]: px-4  md:relative md:top-[-12px]'>
              <h1 className='min-[520px]: text-2xl font-bold py-10'>Payment sécurisé</h1>
              <div className=' relative top-[-22px] min-[520px]: w-70 min-[520px]: h-50 min-[520px]: overflow-x-hidden'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eveniet illum quos, 
                </div>
                <div className='flex gap-5'>
                    {Payment.map((link, key) => (
                    <div key={key}>
                      <Image  className='min-[520px]: w-[55px] min-[520px]: h-[50px] min-[520px]: py-2  min-[520px]:flex md:w-[50px] md: [40px] ' key={link.id} src={link.image} alt={`payment-${link.id}`} width={100} height={100} />
                    </div>
                    ))}
              </div>          
          </div>
          
      </div>
  )
}

export default Footer
