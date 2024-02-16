"use client";

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { elementAdmin, element2, categotyClient } from "@/constants/Index";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/Components/ui/calendar";
import { cn } from "@/lib/utils";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { Plus, Search, PlusCircle } from "lucide-react";

import { User, columns } from "./columns";
import { DataTable } from "./data-table";
import { any, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { Value } from "@radix-ui/react-select";
import { RefectchContex } from "@/Provider";

async function getUsers(): Promise<User[]> {
  const res = await fetch("http://localhost:2003/api/v.01/customer");
  const data = await res.json();
  return data;
}

const FormData = z.object({
  Name: z.string(),
  LastName: z.string(),
  Email: z.string(),
  Phone: z.number(),
  Dates: z.date(),
  Address: z.string(),
});

const queryClient = new QueryClient();

const pageRef = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider>
  );
};

const Page = () => {
  const [data, setData] = useState<User[]>([]);
  const [select, setSelect] = useState("PhysicsCust");
  const [years, setYears] = useState("");

  const form = useForm<z.infer<typeof FormData>>({
    resolver: zodResolver(FormData),
    defaultValues: {
      Name: "",
      LastName: "",
      Email: "",
      Phone: 0,
      Dates: new Date(Date.now()),
      Address: "",
    },
  });

  const { error, isPending, mutate } = useMutation({
    mutationFn: (value: any) => {
      return axios.post(`http://localhost:2003/api/v.01/customer`, value);
    },
  });

  // const customerPut = useMutation({
  //   mutationFn: (value : any) => {
  //     return axios.put(`http://localhost:2003/api/v.01/customer:/id`, value)
  //   }
  // });
  // customerPut.mutate

  const onsubmit = (value: z.infer<typeof FormData>) => {
    console.log(value);
    mutate(value, {
      onSuccess: (data) => {
        console.log(data);
        form.reset();
        dataMap.refetch();
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };
  // const handlSubmit = (e: FormDataEvent) => {
  //   e.preventDefault();
  //   console.log();
  // };
  const User = [
    {
      id: 1,
      username: "Sem",
      email: "Sem@gmail.com",
      phone: "(+225) 05 03 532 967",
    },
    {
      id: 2,
      username: "Olive",
      email: "Olive@gmail.com",
      phone: "(+225) 05 03 532 967",
    },
    {
      id: 3,
      username: "Bando",
      email: "Bando@gmail.com",
      phone: "(+225) 05 03 532 967",
    },
    {
      id: 4,
      username: "Paul",
      email: "Paul@gmail.com",
      phone: "(+225) 05 03 532 967",
    },
    {
      id: 5,
      username: "Paul",
      email: "Paul@gmail.com",
      phone: "(+225) 05 03 532 967",
    },
    {
      id: 6,
      username: "Paul",
      email: "Paul@gmail.com",
      phone: "(+225) 05 03 532 967",
    },
    {
      id: 7,
      username: "Paul",
      email: "Paul@gmail.com",
      phone: "(+225) 05 03 532 967",
    },
  ];

  const dataMap = useQuery({ queryKey: ["customer"], queryFn: getUsers });
  // console.log(dataMap.data);

  // if (dataMap.isLoading) {
  //   return (
  //     <div className="flex flex-col gap-3 justify-center items-center w-full h-screen">
  //       Loading...
  //       <Image src="/tail-spin.svg" width={25} height={25} alt="" />
  //     </div>
  //   );
  // }

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
              <span className=" absolute bg-red-400 w-[23px] h-[23px] text-center rounded-full items-center">
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
          {/* #eceff4 */}
          <div className="px-5 py-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="text-[1.5rem] text-black">
                  <CgMenuRight />
                </div>
                <h2 className=" text-2xl font-bold">Customer</h2>
              </div>
            </div>

            <div className="py-[.9rem] ">
              <div className="flex text-[1.2rem] gap-6 font-semibold cursor-pointer">
                {categotyClient.map((category: any, id) => (
                  <div key={id} onClick={() => setSelect(category.title)}>
                    <span>{category.title}</span>
                    {select === category.title && (
                      <div className="w-full h-[3px] rounded-md bg-black relative top-[.3rem] "></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="bg-white bg-[url('/blob-scene-haikei.svg')] bg-cover bg-center shadow-md h-[28.5rem] relative top-5 rounded-md overflow-y-scroll">
                {select === "PhysicsCust" && (
                  <div>
                    <div className="flex items-center justify-between py-4 px-5">
                      <h1 className=" font-bold text-2xl">PhysicsCust</h1>
                      <div className="flex justify-center items-center gap-3">
                        <div className="flex gap-5 justify-center items-center">
                          <Select value={years} onValueChange={setYears}>
                            <SelectTrigger className="w-[90px] h-[47px]">
                              <SelectValue placeholder="Years" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="2023">2023</SelectItem>
                                <SelectItem value="2024">2024</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex gap-4 justify-center items-center">
                          <div className="border-[1.4px] py-2 px-2 rounded-sm cursor-pointer flex items-center gap-2">
                            <Image
                              src="/fichier-pdf.png"
                              width={100}
                              height={100}
                              className="w-[30px] h-[30px]"
                              alt=""
                            />
                          </div>
                          <div className="border-[1.4px] py-2 px-2 rounded-sm cursor-pointer flex items-center gap-2">
                            <Image
                              src="/exceller.png"
                              width={100}
                              height={100}
                              className="w-[30px] h-[30px]"
                              alt=""
                            />
                          </div>
                          <div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <div className="flex cursor-pointer gap-1 justify-center items-center border-[1.5px] py-3 px-3 text-center rounded-full border-black bg-black text-white">
                                  <PlusCircle className="w-5 h-5" />
                                  <h1>Add new</h1>
                                </div>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[666px]">
                                <DialogHeader>
                                  <DialogTitle>Create customer's</DialogTitle>
                                </DialogHeader>
                                <div className="relative top-2">
                                  <Form {...form}>
                                    <form
                                      onSubmit={form.handleSubmit(onsubmit)}
                                      className="space-y-6"
                                    >
                                      <div className=" flex gap-3">
                                        <FormField
                                          control={form.control}
                                          name="Name"
                                          render={({ field }) => (
                                            <FormItem>
                                              <FormControl>
                                                <Input
                                                  placeholder="name"
                                                  {...field}
                                                  required
                                                />
                                              </FormControl>
                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />

                                        <FormField
                                          control={form.control}
                                          name="LastName"
                                          render={({ field }) => (
                                            <FormItem>
                                              <FormControl>
                                                <Input
                                                  placeholder="lastName"
                                                  {...field}
                                                  required
                                                />
                                              </FormControl>
                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />

                                        <FormField
                                          control={form.control}
                                          name="Email"
                                          render={({ field }) => (
                                            <FormItem>
                                              <FormControl>
                                                <Input
                                                  placeholder="email"
                                                  {...field}
                                                  required
                                                />
                                              </FormControl>
                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />
                                      </div>

                                      <div className="flex gap-3">
                                        <FormField
                                          control={form.control}
                                          name="Phone"
                                          render={({ field }) => (
                                            <FormItem>
                                              <FormControl>
                                                <Input
                                                  placeholder="phone"
                                                  type="number"
                                                  required
                                                  {...field}
                                                  onChange={(e) =>
                                                    field.onChange(
                                                      parseInt(e.target.value)
                                                    )
                                                  }
                                                />
                                              </FormControl>
                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />

                                        <FormField
                                          control={form.control}
                                          name="Dates"
                                          render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                              <Popover>
                                                <PopoverTrigger asChild>
                                                  <FormControl>
                                                    <Button
                                                      variant={"outline"}
                                                      className={cn(
                                                        "w-[188px] pl-3 text-left font-normal",

                                                        !field.value &&
                                                          "text-muted-foreground"
                                                      )}
                                                    >
                                                      {field.value ? (
                                                        format(
                                                          field.value,
                                                          "PPP"
                                                        )
                                                      ) : (
                                                        <span>Pick a date</span>
                                                      )}
                                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                  </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent
                                                  className="w-auto p-0"
                                                  align="start"
                                                >
                                                  <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    required
                                                    disabled={(date) =>
                                                      date > new Date() ||
                                                      date <
                                                        new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                  />
                                                </PopoverContent>
                                              </Popover>

                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />

                                        <FormField
                                          control={form.control}
                                          name="Address"
                                          render={({ field }) => (
                                            <FormItem>
                                              <FormControl>
                                                <Input
                                                  placeholder="Address"
                                                  {...field}
                                                  required
                                                />
                                              </FormControl>
                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />
                                      </div>

                                      {/* <Button
                                        type="submit"
                                        className="w-[130px]"
                                      >
                                        Submit
                                      </Button> */}
                                      <DialogClose
                                        type="submit"
                                        className="w-[150px] h-[40px] text-white rounded-md bg-black"
                                      >
                                        Submit
                                      </DialogClose>
                                    </form>
                                  </Form>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div></div>
                    {dataMap.isLoading ? (
                      <div className="flex flex-col gap-3 justify-center items-center w-full h-full relative top-28">
                        Loading...
                        <Image
                          src="/tail-spin.svg"
                          width={25}
                          height={25}
                          alt=""
                        />
                      </div>
                    ) : (
                      <div className="px-5">
                        <RefectchContex.Provider value={dataMap.refetch}>
                          <DataTable
                            columns={columns}
                            data={dataMap.data ? dataMap.data : []}
                          />
                        </RefectchContex.Provider>
                      </div>
                    )}
                  </div>
                )}

                {select === "OnlineCust" && (
                  <div>
                    <div>
                      <div className="flex justify-between py-4 px-5">
                        <h1 className="font-bold text-2xl">OnlineCust</h1>
                        <div className="flex justify-center items-center gap-3">
                          <div className="flex gap-5 justify-center items-center">
                            <div>
                              <button className="absolute top-[2.6rem] right-[22.5rem]  transform -translate-y-1/2  flex items-center h-6 w-6">
                                <Search />
                              </button>
                              <Input
                                type="text"
                                placeholder="Search Customer"
                                className="h-[47px] px-11 rounded-full "
                                name="SearchOnline"
                                // value={formData.SearchOnline}
                                // onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="flex gap-4 justify-center items-center">
                            <div className="border-[1.4px] py-2 px-2 rounded-sm cursor-pointer flex items-center gap-2">
                              <Image
                                src="/fichier-pdf.png"
                                width={100}
                                height={100}
                                className="w-[30px] h-[30px]"
                                alt=""
                              />
                            </div>
                            <div className="border-[1.4px] py-2 px-2 rounded-sm cursor-pointer flex items-center gap-2">
                              <Image
                                src="/exceller.png"
                                width={100}
                                height={100}
                                className="w-[30px] h-[30px]"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="overflow-y-scroll px-4">
                      <div className=" border-[1.3px] rounded-md w-full px-2 h-full shadow-lg">
                        <Table className="">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[80px]">#</TableHead>
                              <TableHead className="w-[80px]">
                                Usename
                              </TableHead>
                              <TableHead className="w-[80px]">Email</TableHead>
                              <TableHead className="w-[80px]">Phone</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {User.map((invoice) => (
                              <TableRow key={invoice.id}>
                                <TableCell>{invoice.id}</TableCell>
                                <TableCell className="font-medium">
                                  {invoice.username}
                                </TableCell>
                                <TableCell>{invoice.email}</TableCell>
                                <TableCell>{invoice.phone}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pageRef;
// const [isOpen,setIsOpen] = useState<boolean>(false)
// const [isOpens,setIsOpens] = useState<boolean>(false)
// const [select, setSelect] = useState<string>("PhysicsCust");
// const [change, setChange] = useState<boolean>(false);
// const [date, setDate] = useState<Date>();

// const [image,setImage] = useState<string>('/a6e0e53c311af754bd133acc174301b4.jpg')

// const handleClick1 = () => {
//       setIsOpen(true)
// }

// const handleClick2 = () => {
//       setIsOpens(true)
// }

// console.log(isOpen);

// const categotyImage : {id:number, image:string}[] = [
//       {id:1, image:'/a6e0e53c311af754bd133acc174301b4.jpg'},
//       {id:2, image:'/64.png'}
// ]
