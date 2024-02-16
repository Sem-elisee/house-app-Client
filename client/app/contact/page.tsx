'use client'

import { PhoneCall } from "lucide-react";
import { Mail } from "lucide-react";
import { useState } from "react";

// ₹ 
export default function page() {

  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };

  return ( 
    <div className=" lg:flex  h-screen items-center justify-center lg:gap-28 ">
        <div className='flex h-screen items-center justify-center'>
            <div className="">
                  <div className=' min-[326px]:text-2xl font-bold lg:text-4xl text-[#000000e1] sm:text-[2rem] sm:leading-[3rem]'>
                      <h1>We Tackle The Most</h1>
                      <h1>Challenging Designs</h1>
                  </div>
            
                  <p className='lg:py-8 lg:leading-[2rem]  min-[326px]:py-8  min-[326px]:leading-[2rem]'>
                      The world needs innovators and problem solvers who <br/>
                      turn Challenges into greater opportunities. we have <br/>
                      an insatiable curiosity about transformative trends<br />
                      Challenging the status
                  </p>

            <div className="lg:flex" >
                <div >
                    <div className='min-[326px]:flex  min-[326px]:items-center min-[326px]:gap-5 lg:flex lg:items-center lg:gap-5'>
                            <div className='text-[#b48d40] bg-[#9f731b37] p-6  rounded-full'>
                              <PhoneCall  className='' />
                            </div>
                              <div className='lg:flex-col lg:items-center lg:leading-[1.8rem]'>
                                <p className='font-bold'>(+255) 0503532967</p>
                                <p>Call Us Anytime</p>
                              </div>       
                          </div>

                          <div className='min-[326px]:flex min-[326px]:py-3 min-[326px]:items-center min-[326px]:gap-5 lg:flex lg:items-center lg:gap-5 lg:py-5'>
                              <div className='text-[#a72626] bg-[#a73e263a]  p-6  rounded-full'>
                                <Mail />
                              </div>
                                <p>Fenisha@gmail.com</p>
                          </div>
                    </div>

                   </div>

             </div>
        </div>

                <div className="min-[326px]:flex min-[326px]:justify-center min-[326px]:align-center min-[326px]:p-6">
                    <form className="border-[2px] border-black p-12 rounded-2xl">
                        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

                        <div className="inputBox relative w-full mb-6">
                              <input type="text" 
                              placeholder="Username" 
                              required className="lg:w-[17rem] min-[326px]:w-[16rem] border-b-2 border-gray-300 p-2 focus:outline-none" />
                        </div>

                        <div className="inputBox relative w-full mb-6">
                              <input type="text" 
                              placeholder="Email" 
                              required className="lg:w-[17rem] border-b-2 min-[326px]:w-[16rem] border-gray-300 p-2 focus:outline-none" />
                        </div>

                        <div className="inputBox relative w-full mb-6">
                            <textarea
                              placeholder="Send your message"
                              required
                              className=" w-full min-[326px]:w-[16rem] border-b-2 border-gray-300 p-2 focus:outline-none resize-none"
                            ></textarea>
                        </div>

                        <div className="py-6">
                          <button type="submit" value="Send" className="w-full bg-black hover:bg-[#000000d3] text-white border-none cursor-pointer p-2 text-lg font-semibold" >Send Message</button>
                      </div>
                    </form>
                  </div>
    </div>
  )
}
