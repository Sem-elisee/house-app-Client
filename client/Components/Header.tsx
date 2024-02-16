"use client";

import { PagesLink } from "@/constants/Index";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiMenuAltLeft } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";

import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";

import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Header = () => {
  const [change, setChange] = useState<boolean>(false);

  const formaShema = z.object({
    email: z.string().min(1, "email is required").email("invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "password must have than 8 characters"),
  });

  const form = useForm<z.infer<typeof formaShema>>({
    resolver: zodResolver(formaShema),
  });

  const onSubmit = (value: z.infer<typeof formaShema>) => {
    console.log(value);
  };

  const SignShama = z.object({
    // username : z.string(),
    email: z.string().min(1, "email is required").email("invalid email"),
    phone: z
      .string()
      .min(1, "the phone is incorrect")
      .min(10, "number contain at least 10 character(s)"),
    password: z.string().min(8, "password must have than 8 characters"),
  });

  const formSign = useForm<z.infer<typeof SignShama>>({
    resolver: zodResolver(SignShama),
  });

  const onSubmitSign = (value: z.infer<typeof SignShama>) => {
    console.log(value);
  };

  const handleChange = () => {
    setChange(true);
  };

  return (
    <div className="min-[326px]:px-6 flex justify-between py-1 px-12 items-center md:px-16 fixed w-full bg-white z-[9] ">
      {/* z-[999999] */}
      <div>
        <Image src="/Fenisha (2).png" alt="Logo" width={170} height={170} />
      </div>

      <div>
        <ul className="lg:flex">
          {PagesLink.map((element) => (
            <li key={element.id}>
              <Link
                className="font-semibold"
                href={`/${element.link.toLowerCase()}`}
              >
                <div className="md:p-7 md:text-[1.3rem] min-[326px]:hidden lg:block">
                  {element.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className=" min-[326px]:gap-[13px] flex gap-6 items-center md:gap-4 ">
        <Dialog>
          <DialogTrigger asChild>
            <div className="text-2xl cursor-pointer relative left-[.8rem] ">
              <BsPerson />
            </div>
          </DialogTrigger>
          {!change ? (
            <div className="">
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-center">
                    Fenisha Account
                  </DialogTitle>
                  <DialogDescription className="py-2">
                    Log in sign up for an account. Furniture shopping is about
                    to get exciting
                  </DialogDescription>
                </DialogHeader>

                <div className=" items-center justify-center">
                  <Form {...form}>
                    <form
                      action=""
                      onSubmit={form.handleSubmit(onSubmit)}
                      className=""
                    >
                      <div>
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="">
                              <FormLabel>Email</FormLabel>
                              <FormControl className="w-[18rem] h-11">
                                <Input
                                  placeholder="mail@example.com"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="my-2">
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl className="w-[18rem] h-11 ">
                                <Input
                                  placeholder="password"
                                  {...field}
                                  type="password"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="px-8 py-2 relative top-2"
                      >
                        Connexion
                      </Button>
                    </form>
                    <p className="py-4 relative left-[8.5rem] text-[15px]">
                      Don't Have An Account?{" "}
                      <span
                        onClick={handleChange}
                        className="font-bold cursor-pointer"
                      >
                        Sign up
                      </span>
                    </p>
                  </Form>
                </div>
              </DialogContent>
            </div>
          ) : (
            <div className="">
              <DialogContent className="sm:max-w-[425px]  ">
                <DialogHeader>
                  <DialogTitle className="text-center">
                    Fenisha Account
                  </DialogTitle>
                  <DialogDescription>
                    Log in sign up for an account. Furniture shopping is about
                    to get exciting
                  </DialogDescription>
                </DialogHeader>
                <div className="">
                  <Form {...formSign}>
                    <form
                      action=""
                      onSubmit={formSign.handleSubmit(onSubmitSign)}
                    >
                      <div className="">
                        <FormField
                          control={formSign.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl className="w-[18rem] h-11 ">
                                <Input
                                  placeholder="email"
                                  {...field}
                                  type="email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="my-2">
                        <FormField
                          control={formSign.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className=" flex items-center">
                                Phone
                                <div className="flex items-center">
                                  <Image
                                    width={60}
                                    height={2}
                                    src="/64.png"
                                    alt=""
                                    className=" px-3 w-12 h-7 relative left-[-7px]"
                                  />
                                  <h4 className="relative left-[-13px]">
                                    (+225)
                                  </h4>
                                </div>
                              </FormLabel>
                              <FormControl className="w-[18rem] h-11 ">
                                <Input
                                  placeholder="phone"
                                  {...field}
                                  type="text"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="my-2">
                        <FormField
                          control={formSign.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Password</FormLabel>

                              <FormControl className="w-[18rem] h-11 flex">
                                <Input
                                  placeholder="password"
                                  {...field}
                                  type="password"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="px-8 py-2 relative top-2"
                      >
                        Connexion
                      </Button>
                    </form>
                    <p className="py-4 relative left-[8.5rem] text-[15px]">
                      Already Have An Account?{" "}
                      <span
                        onClick={() => setChange(false)}
                        className="font-bold cursor-pointer"
                      >
                        Login
                      </span>
                    </p>
                  </Form>
                </div>
              </DialogContent>
            </div>
          )}
        </Dialog>

        <Link href="/favorite">
          <div className=" text-xl">
            <BsSuitHeartFill />
          </div>
        </Link>

        <div className=" text-2xl cursor-pointer">
          <div
            className=" min-[326px]:absolute min-[326px]:top-[1.4rem] min-[326px]:right-[3.2rem] min-[520px]: absolute min-[520px]: top-[25px] min-[520px]: right-[5rem] 
                    min-[520px]: text-sm min-[520px]: bg-black min-[652px]:right-[3.3rem] min-[640px]:right-[3.3rem]  sm:right-[6.4rem] min-[520px]: text-white min-[520px]: rounded-full min-[520px]: w-5 min-[520px]: 
                    h-5 min-[520px]: text-center md:right-[5.9rem] min-[662px]:right-11 min-[642px]:right-11 min-[644px]:right-9 lg:right-[3.4rem] min-[658px]:absolute min-[658px]:right-[2.7rem] z-[-9999999]"
          >
            1
          </div>
          <Link href="/basket">
            <div className="min-[520px]: top-2">
              <HiOutlineShoppingBag />
            </div>
          </Link>
        </div>

        <div className=" lg:hidden text-2xl cursor-pointer">
          <Sheet>
            <SheetTrigger asChild>
              <BiMenuAltLeft />
            </SheetTrigger>
            <SheetContent>
              <div className="flex justify-center items-center h-screen">
                <div className=" flex-col">
                  {PagesLink.map((element) => (
                    <li key={element.id} className="list-none">
                      <Link
                        className="font-semibold"
                        href={`/${element.link.toLowerCase()}`}
                      >
                        <div className="text-3xl ">{element.name}</div>
                      </Link>
                    </li>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
