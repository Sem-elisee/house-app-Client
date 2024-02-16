"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import Image from "next/image";

export default function page() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [numPays, setNumPays] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const togglePassword = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen items-center justify-center flex-col ">
      <h1 className="text-3xl font-bold">Register</h1>
      <div className="p-3">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border-2 md:w-80 sm:w-80 h-12 px-3 rounded-xl  min-[326px]:w-[16rem]"
        />
      </div>
      <div className="my-[1px]">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" border-2 md:w-80 sm:w-80 h-12 px-3 rounded-xl  min-[326px]:w-[16rem]"
        />
      </div>

      <div className="my-2 flex  border-2 rounded-xl hover:outline-none">
        <div className="flex items-center">
          <Image
            width={60}
            height={2}
            src="/64.png"
            alt=""
            className=" px-3 w-12 h-7"
          />
          <h2 className=" relative right-[.2rem]  min-[326px]:right-1">
            (+225)
          </h2>
        </div>

        <input
          type="text"
          placeholder="Phone"
          value={numPays}
          onChange={(e) => setNumPays(e.target.value)}
          className="w-[14rem] h-12 md:w-[14rem] sm:w-[14rem] px-1 rounded-xl hover:outline-none focus:outline-none min-[326px]:w-[10rem] "
        />
      </div>

      <div className="relative my-2">
        <input
          type={!isOpen ? "text" : "password"}
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 w-80 h-12 px-3 rounded-xl min-[326px]:w-[16rem] md:w-80 sm:w-80"
        />
        <button
          onClick={togglePassword}
          className="absolute top-1/2 transform -translate-y-1/2 right-2 flex items-center h-8 w-8"
        >
          {!isOpen ? <RiEyeOffLine /> : <RiEyeLine />}
        </button>
      </div>

      <button className="bg-zinc-900 md:w-80 md:px-24 sm:px-24 px-[8.2rem] py-3 text-white rounded-xl min-[326px]:px-[6.3rem]">
        Register
      </button>

      <div>
        <p className="my-3 text-gray-500">
          Already Have An Account?{" "}
          <Link href="/account" className=" text-black text-[15px] font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
