"use client"

import React from 'react'
import Header from '@/Components/Header'
import { Accessoiry } from '@/constants/Index';
import Image from 'next/image';
import Link from 'next/link'
import {useState} from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import { AllTableau } from '@/constants/Data';
// import Footer from '@/Components/Footer';

import { RiHeart3Fill } from "react-icons/ri";
import { RiHeart3Line } from "react-icons/ri";

function page() {

    const [item, setItem] = useState<number>(4)    
  
    const handleClick = (id:number) => {
      setItem(id)
    }

  return (
    <div>
        <Header />
            <div className='py-20'>
                  <div className=' flex items-center gap-4 p-5 '>
                        <Link href='/' className='flex items-center gap-2' >
                            <h2 className='font-semibold hover:font-bold'> Home</h2>
                            <MdArrowForwardIos/>
                        </Link>      
                      <span className='font-semibold'> Store</span> 
                  </div>

                  <div className=' h-[280px] bg-center bg-cover' style={{    backgroundImage: "url('/store.jpg') " }}>
                      <h1 className='text-center font-serif md:text-6xl py-24 text-white min-[326px]:text-[2.5rem]'>WelCome to The Store</h1>
                  </div>
            <div>
        </div>
       <div>
            <div className=' lg:flex lg: justify-center lg:gap-14  min-[326px]:flex min-[326px]:gap-[.9rem] sm:gap-8'>
                  {Accessoiry.map((item,key) => (
                    <div key={key} className='min-[326px]:relative  min-[326px]:top-[25px] lg:relative lg:top-[35px]'>
                        <Image onClick={() => handleClick(item.id)} 
                        src={item.image} width={50} height={50} alt='accesoire' className='cursor-pointer sm:w-[40px] sm:h-[40px] min-[326px]:w-[33px] min-[326px]:h-[33px]'/>
                        {/* <p className='text-center'>{item.name}</p> */}
                    </div>
                  ))}
              </div>     
            </div> 
      </div>

      <div>
          <div>
              {item === 1 && (
                  <div>
                      <h1>Sem</h1>
                  </div>
              )}
          </div>

          <div>{item === 2 && (
              <div>
                 <h1>Sem2</h1>
              </div>
              )}
          </div>

          <div>{item === 3 && (
              <div>
                 <h1>Sem3</h1>
              </div>
              )}
          </div>

          <div>
            {item === 4 && (
              <div>
                 <h1 className='min-[326px]:text-2xl text-center font-bold lg:text-3xl'> Many painting of your ChooSe</h1>
                    <div className='justify-center flex text-center'>
                        <div className='relative w-[7rem] h-[3px] bg-black text-center justify-center items-center top-7'></div>
                    </div> 

                    <div className='md:grid md:grid-cols-3 min-[326px]:p-5 min-[326px]:py-[4.5rem] min-[326px]:grid min-[326px]:gap-5 min-[326px]:grid-cols-2 lg:grid lg:grid-cols-4 lg:py-[4.5rem] lg:p-[7rem] justify-center items-center lg:gap-8'>
                        {AllTableau.map((item,key) => (
                        <Link href={`/details/${encodeURIComponent(item.name)}`}>
                            <div className='items-center' key={key}>                                    
                                <div>
                                <Image src={item.image} width={270} height={270} alt='image' className='min-[326px]:w-[400px]
                                 min-[520px]:h-[300px] lg:w-[400px] lg:h-[290px] md:h-[380px]'/>
                                </div>
                                    <div>
                                        <h1 className='font-semibold'>{item.name}</h1>

                                        <div className='lg:flex md:flex md:gap-3 lg:gap-3 lg:leading-[1.8rem]'>
                                                <span className='semibold'>₹{item.price}</span>
                                            <div className='min-[326px]:flex lg:flex lg:gap-[5px] text-[14px] text-green-700'>
                                                <s className=''>{item.oldPrice}</s>
                                                <h1>{item.percentage}</h1>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </Link>     
                        ))} 
                    </div>      
                </div>
              )}
              {/* <Footer /> */}
          </div>

          <div>{item === 5 && (
              <div>
                 <h1>Sem5</h1>
              </div>
              )}
          </div>

          <div>{item === 6 && (
              <div>
                 <h1>Sem6</h1>
              </div>
              )}
          </div>

          <div>{item === 7 && (
              <div>
                 <h1>Sem7</h1>
              </div>
              )}
          </div>

          <div>{item === 8 && (
              <div>
                 <h1>Sem8</h1>
              </div>
              )}
          </div>

          <div>{item === 9 && (
              <div>
                 <h1>Sem9</h1>
              </div>
              )}
          </div>

        </div>
      <div>
    </div>
    </div>
  )
}

export default page