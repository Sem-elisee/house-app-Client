"use client";
import React from "react";
import { useState } from "react";
import { elementAdmin, element2 } from "@/constants/Index";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog1";

import { Textarea } from "@/Components/ui/textarea";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/Components/ui/calendar";
import { cn } from "@/lib/utils";

import { Button } from "@/Components/ui/button";

import {
  Plus,
  ChevronDown,
  PlusCircle,
  Search,
  ClipboardEdit,
  Trash2,
} from "lucide-react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { Input } from "@/Components/ui/input";

export default function page() {
  const [date, setDate] = useState<Date>();

  return (
    <div
      className="grid w-full h-[100vh] overflow-hidden bg-[#000000]"
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

      <div className="py-[.13rem]">
        <div className="rounded-md bg-[#f1f1f1] h-[36.4rem]">
          <div className="px-5 py-4 ">
            <div className="flex items-center gap-3">
              <div className="text-[1.5rem] text-black">
                <CgMenuRight />
              </div>
              <h2 className=" text-2xl font-bold">Stock</h2>
            </div>

            <div className="bg-white py-4 px-4 shadow-md h-[32rem] relative top-3 rounded-md  bg-[url('/blob-scene-haikei.svg')] bg-cover bg-center overflow-y-scroll">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl">MyStock</h1>
                {/* <div className=" items-center">
                  <button className="absolute top-[2.6rem] left-[23rem]  transform -translate-y-1/2  flex items-center h-5 w-5">
                    <Search />
                  </button>
                  <Input
                    type="text"
                    placeholder="search"
                    className="px-10 rounded-full"
                  />
                </div> */}
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex cursor-pointer gap-1 justify-center items-center border-[1.5px] py-3 px-3 text-center rounded-full border-black bg-black text-white">
                        <Plus className="w-5 h-5" />
                        <h1>Add new product</h1>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[900px] px-12 ">
                      <DialogHeader>
                        <DialogTitle>Add new product</DialogTitle>
                      </DialogHeader>
                      <div className="flex gap-6 py-1 ">
                        <Input
                          type="file"
                          className="w-[15rem] h-[17.5rem]"
                          placeholder="image"
                        />
                        <div>
                          <div className="flex-col">
                            <div className="flex gap-5">
                              <Input
                                type="text"
                                placeholder="Product Name"
                                className="h-11"
                                required
                              />
                              <Input
                                type="number"
                                placeholder="Quantity"
                                className="h-11"
                                required
                              />
                            </div>
                            <br />
                            <div className="flex gap-5">
                              <Input
                                type="number"
                                placeholder="Product price"
                                className="h-11"
                                required
                              />
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-[188px] justify-start text-left font-normal h-11",
                                      !date && "text-muted-foreground"
                                    )}
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? (
                                      format(date, "PPP")
                                    ) : (
                                      <span>Entry Date into Stock</span>
                                    )}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className=" p-0">
                                  <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>
                            <br />
                            <div className="flex gap-5">
                              {/* <Input
                                type="text"
                                placeholder="Supplier"
                                className="h-11"
                                required
                              /> */}

                              <Textarea
                                placeholder="Description"
                                className="w-[530px] "
                              />
                              {/* <Input
                                type="email"
                                placeholder="email"
                                className="h-11"
                                required
                              /> */}
                            </div>
                            <div className=""></div>
                          </div>
                        </div>
                      </div>

                      <Button className="w-[12.9rem]">Send</Button>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
