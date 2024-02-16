import React from "react";
import { elementAdmin, element2 } from "@/constants/Index";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";

import {
  ChevronDown,
  PlusCircle,
  Search,
  ClipboardEdit,
  Trash2,
} from "lucide-react";

export default function page() {
  return (
    <div
      className="grid w-full h-[100vh]  bg-[#000000]"
      style={{ gridTemplateColumns: "13rem auto" }}
    >
      <div className="overflow-hidden text-white">
        <div className="p-5">
          <Image src="/fen.png" alt="logo" width={130} height={130} />
        </div>
        <div className=" mx-4 my-[2rem] ">
          {elementAdmin.map((item, index) => (
            <div key={index} className="flex items-center gap-[12px] m-4">
              <Image src={item.image} alt="logo" width={22} height={22} />
              <Link href={`/${item.link.toLowerCase()}`}>
                <h2 className=" font-bold">{item.name}</h2>
              </Link>
            </div>
          ))}
          <div className="flex gap-1">
            <div className=" flex px-4 gap-[12px]">
              <Image src="/discuter.png" alt="logo" width={22} height={22} />
              <Link href={`/message`}>
                <div>
                  <h2 className=" font-bold">Message</h2>
                </div>
              </Link>
            </div>
            <div>
              <span className=" absolute bg-green-500 w-[23px] h-[23px] text-center rounded-full items-center">
                1
              </span>
            </div>
          </div>

          <div>
            {element2.map((item, index) => (
              <div key={index} className="flex items-center gap-[12px] m-4">
                <Image src={item.image} alt="logo" width={22} height={22} />
                <Link href={`/${item.link.toLowerCase()}`}>
                  <h2 className=" font-bold">{item.name}</h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className=" px-[1.8rem] py-[3rem] cursor-pointer">
          <div className="flex gap-2 items-center">
            <Image
              src="/logout.png"
              width={22}
              height={22}
              alt=""
              className="w-[30px] h-[30px]"
            />
            <div>
              <p className=" font-bold text-md">Logout</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-[3px] px-6 py-4 bg-white">
        {/* <div className="h-[36.3rem] overflow-y-scroll p-4 px-4 py-4 bg-white rounded-lg"> */}
        <div className="flex items-center gap-3">
          <div className="text-[1.5rem] text-black">
            <CgMenuRight />
          </div>
          <h2 className=" text-2xl font-bold">Message</h2>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
