'use client'

import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

const page = () => {

    const [email, setEmail] = useState <string>('')
    const [password, setPassword] = useState <string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const togglePassword = () => {
        setIsOpen(!isOpen)
    }

  return (
<div>
    <div className="flex h-screen items-center justify-center flex-col">
        <h1 className="text-3xl font-bold">Login</h1>
              <div className="p-3">
                    <div className="my-2">
                      <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 md:w-80 sm:w-80 h-12 px-3 rounded-xl min-[326px]:w-[16rem]"
                        // border-2 md:w-80 sm:w-80 h-12 px-3 rounded-xl min-[326px]:w-[16rem]
                      />
                    </div>
                  <div className="relative">
                      <input
                        type={!isOpen ? 'text' : 'password'}
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-2 h-12 px-3 sm:w-80 rounded-xl min-[326px]:w-[16rem] md:w-80"
                        // border-2 h-12 px-3 sm:w-80 rounded-xl min-[326px]:w-[16rem] md:w-80
                      />

                    <button
                      onClick={togglePassword}
                      className="absolute top-1/2 transform -translate-y-1/2 right-2 flex items-center h-8 w-8 "
                    >
                    {!isOpen ? <RiEyeOffLine /> : <RiEyeLine />}
                  </button>
                </div>
    </div>

    <button className="bg-zinc-900 sm:px-[8.8rem]  md:px-[8.8rem] py-3 text-white rounded-xl min-[326px]:px-[6.9rem] ">Login</button>
        <div>
          <p className="my-3 text-gray-500">
            Don't Have An Account?{' '}
            <Link href="/signUp" className="text-black text-base font-bold">
              Sign up
            </Link>
          </p>
        </div>
  </div>
</div>
  )
}

export default page