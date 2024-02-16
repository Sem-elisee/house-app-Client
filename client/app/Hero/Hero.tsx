export default function Hero() {
  return (
    <div className="">
      <div
        className="bg-cover bg-center flex items-center min-[326px]:h-[28rem] md:h-[38rem] "
        style={{ backgroundImage: "url('/couv-2.jpg') " }}
      >
        <div className=" min-[326px]:px-[3rem] min-[658px]:px-[5rem] sm: px-[6rem] md:px-32 ">
          <div className=" min-[520px]: leading-8 md:relative top-8">
            <h1 className="z-[-999999] min-[326px]:text-[1.9rem] min-[658px]:text-4xl min-[658px]:leading-[3.3rem] text-4xl font-bold sm: leading-[3rem] min-[520px]:leading-[2.5rem] md:leading-[2.8rem] md:text-[3.3rem]">
              The best choice
            </h1>
            <h1 className="z-[-999999] min-[326px]:text-[1.9rem] min-[658px]:text-4xl  min-[658px]:leading-[3.3rem] text-4xl font-bold sm: leading-[3rem] min-[520px]:leading-[2.5rem] md:leading-[5.5rem] md:text-[3.3rem]">
              For your
            </h1>
            <h1 className="z-[-999999] min-[326px]:text-[1.9rem] min-[658px]:text-4xl  min-[658px]:leading-[3.3rem] text-4xl font-bold  sm: leading-[3rem] min-[520px]:leading-[2.5rem] md:leading-[2.8rem] md:text-[3.3rem]">
              Convenience
            </h1>
            <button className=" z-[-999999] sm:my-3 bg-black font-bold py-4 px-6 text-white rounded-md  md:my-8">
              Take your Look
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client"

// import React from 'react'
//  import Header from '@/Components/Header'
// import { Accessoiry } from '@/constants/Index';
// import Image from 'next/image';
// import Link from 'next/link'
// import { useState } from 'react'
// import { MdArrowForwardIos } from "react-icons/md";

// export default function page() {

//     const [item, setItem] = useState<number>(4)

//     const handleClick = (id:number) => {
//       setItem(id)
//       // console.log(id);
//     }

//   return (
//     <div>

//     </div>
//   )
// }
