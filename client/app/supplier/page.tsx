"use client";
import React, { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { elementAdmin, element2 } from "@/constants/Index";
import Image from "next/image";
import Link from "next/link";
import { categotySupplier } from "@/constants/Index";
import { CgMenuRight } from "react-icons/cg";
import { SiMicrosoftexcel } from "react-icons/si";
import { AiTwotonePrinter } from "react-icons/ai";
import { Input } from "@/Components/ui/input";

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
import { Label } from "@/Components/ui/label";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/Components/ui/calendar";
import { cn } from "@/lib/utils";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
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
  X,
  Plus,
  PlusCircle,
  Search,
  ClipboardEdit,
  Trash2,
} from "lucide-react";

import { User, columns } from "./columns";
import { DataTable } from "./data-table";

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://65a3187ba54d8e805ed36890.mockapi.io/user");
  const data = await res.json();
  return data;
}

interface formPhysicsSupplier {
  identificationDoc: string;
  search: string;
  name: string;
  lastname: string;
  salary: string;
  phone: string;
}
interface formOnlineSupplier {
  identificationDoc: string;
  search: string;
  name: string;
  lastname: string;
  salary: string;
  phone: string;
}

export default function page() {
  const [data, setData] = useState<User[]>([]);
  const [select, setSelect] = useState("PhysicsSupplier");
  const [date, setDate] = useState<Date>();

  const [yearsPhys, setYearsPhys] = useState("");
  const [yearsOnline, setYearsOnline] = useState("");

  const [file1, setFiles1] = useState(null);
  const [file2, setFiles2] = useState(null);

  const handleFiles1Change = (event: React.ChangeEvent<HTMLInputElement>) => {};

  const handleFiles2Change = (event: React.ChangeEvent<HTMLInputElement>) => {};

  const [FormDataPhysics, setFormDataPhysics] = useState<formPhysicsSupplier>({
    search: "",
    identificationDoc: "",
    name: "",
    lastname: "",
    salary: "",
    phone: "",
  });

  const [FormDataOnline, setFormDataOnline] = useState<formOnlineSupplier>({
    search: "",
    identificationDoc: "",
    name: "",
    lastname: "",
    salary: "",
    phone: "",
  });

  const handleFormDataPhysicsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDataPhysics((formDataPrecedent) => ({
      ...formDataPrecedent,
      [name]: value,
    }));
  };

  const handleFormDataOnlineChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDataOnline((formDataPrecedent) => ({
      ...formDataPrecedent,
      [name]: value,
    }));
  };

  // console.log(FormDataPhysics);
  // console.log(FormDataOnline);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUsers();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
          <div className="px-5 py-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="text-[1.5rem] text-black">
                  <CgMenuRight />
                </div>
                <h2 className=" text-2xl font-bold">Supplier</h2>
              </div>
            </div>

            <div className="py-[.9rem] ">
              <div className="flex text-[1.2rem] gap-6 font-semibold cursor-pointer">
                {categotySupplier.map((category: any, id) => (
                  <div key={id} onClick={() => setSelect(category.title)}>
                    <span>{category.title}</span>
                    {select === category.title && (
                      <div className="w-full h-[3px] rounded-md bg-black relative top-[.3rem] "></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="bg-white shadow-md h-[28.5rem] relative top-5 rounded-md overflow-y-scroll bg-[url('/blob-scene-haikei.svg')] bg-cover bg-center">
                {select === "PhysicsSupplier" && (
                  <div>
                    <div className="flex items-center justify-between py-4 px-5">
                      <h1 className=" font-bold text-2xl">PhysicsSupplier</h1>
                      <div className="flex justify-center items-center gap-3">
                        <div className="flex gap-5 justify-center items-center">
                          <div>
                            <button className="absolute top-[2.6rem] left-[26rem]  transform -translate-y-1/2  flex items-center h-6 w-6">
                              <Search />
                            </button>
                            <Input
                              type="text"
                              placeholder="Search PhysicsSupplier"
                              className="h-[47px] px-11 rounded-full "
                              name="search"
                              value={FormDataPhysics.search}
                              onChange={handleFormDataPhysicsChange}
                            />
                          </div>
                          <Select
                            value={yearsPhys}
                            onValueChange={setYearsPhys}
                          >
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
                        <div className="flex gap-3 justify-center items-center">
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

                          <div className="">
                            <Dialog>
                              <DialogTrigger asChild>
                                <div className="flex cursor-pointer gap-1 justify-center items-center border-[1.5px] py-3 px-3 text-center rounded-full border-black bg-black text-white">
                                  <Plus className="w-5 h-5" />
                                  <h1>Add new</h1>
                                </div>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[720px] px-10">
                                <DialogHeader>
                                  <DialogTitle>
                                    Create Physics Supplier
                                  </DialogTitle>
                                </DialogHeader>
                                <div className=" flex items-center gap-6">
                                  <div>
                                    <Input
                                      type="file"
                                      className="w-[14rem] h-[14.5rem]"
                                      required
                                    />
                                  </div>

                                  <div className="flex-col relative top-[-22px]">
                                    <div className="flex gap-4">
                                      <Input
                                        type="text"
                                        placeholder="Identification doc"
                                        className="h-[45px]"
                                        required
                                        name="identificationDoc"
                                        value={
                                          FormDataPhysics.identificationDoc
                                        }
                                        onChange={handleFormDataPhysicsChange}
                                      />
                                      <Input
                                        type="text"
                                        placeholder="name"
                                        className="h-[45px]"
                                        required
                                        name="name"
                                        value={FormDataPhysics.name}
                                        onChange={handleFormDataPhysicsChange}
                                      />
                                    </div>
                                    <br />
                                    <div className="flex gap-4">
                                      <Input
                                        type="text"
                                        placeholder="lastname"
                                        className="h-[45px]"
                                        required
                                        name="lastname"
                                        value={FormDataPhysics.lastname}
                                        onChange={handleFormDataPhysicsChange}
                                      />

                                      <Input
                                        type="number"
                                        placeholder="salary"
                                        className="h-[45px]"
                                        name="salary"
                                        value={FormDataPhysics.salary}
                                        onChange={handleFormDataPhysicsChange}
                                        required
                                      />
                                    </div>
                                    <br />
                                    <div className="flex gap-4">
                                      <Input
                                        type="number"
                                        placeholder="phone"
                                        className="h-[45px]"
                                        required
                                        name="phone"
                                        value={FormDataPhysics.phone}
                                        onChange={handleFormDataPhysicsChange}
                                      />

                                      <Popover>
                                        <PopoverTrigger asChild>
                                          <Button
                                            variant={"outline"}
                                            className={cn(
                                              "w-[185px] h-[45px] justify-start text-left font-normal",
                                              !date && "text-muted-foreground"
                                            )}
                                          >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? (
                                              format(date, "PPP")
                                            ) : (
                                              <span>Pick a date</span>
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
                                  </div>
                                </div>
                                <Button className="w-[11.7rem]">Send</Button>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-5">
                      <DataTable columns={columns} data={data} />
                    </div>
                  </div>
                )}

                {select === "OnlineSupplier" && (
                  <div>
                    <div className="flex items-center justify-between py-4 px-5">
                      <h1 className=" font-bold text-2xl">OnlineSupplier</h1>
                      <div className="flex justify-center items-center gap-3">
                        <div className="flex gap-5 justify-center items-center">
                          <div>
                            <button className="absolute top-[2.6rem] left-[26rem]  transform -translate-y-1/2  flex items-center h-6 w-6">
                              <Search />
                            </button>
                            <Input
                              type="text"
                              placeholder="Search OnlineSupplier"
                              className="h-[47px] px-11 rounded-full "
                              name="search"
                              value={FormDataOnline.search}
                              onChange={handleFormDataOnlineChange}
                            />
                          </div>
                          <Select
                            value={yearsOnline}
                            onValueChange={setYearsOnline}
                          >
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
                        <div className="flex gap-3 justify-center items-center">
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
                                  <Plus className="w-5 h-5" />
                                  <h1>Add new</h1>
                                </div>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[720px] px-10">
                                <DialogHeader>
                                  <DialogTitle>
                                    Create Online Supplier
                                  </DialogTitle>
                                </DialogHeader>
                                <div className="flex items-center gap-4">
                                  <div>
                                    <Input
                                      type="file"
                                      className="w-[14rem] h-[16rem] relative top-[-5px] "
                                    />
                                  </div>

                                  <div className="flex-col py-4">
                                    <div className="flex gap-4">
                                      <Input
                                        type="text"
                                        placeholder="Identification doc"
                                        className=""
                                        required
                                        name="identificationDoc"
                                        value={FormDataOnline.identificationDoc}
                                        onChange={handleFormDataOnlineChange}
                                      />
                                      <Input
                                        type="text"
                                        placeholder="name"
                                        className=""
                                        required
                                        name="name"
                                        value={FormDataOnline.name}
                                        onChange={handleFormDataOnlineChange}
                                      />
                                    </div>
                                    <br />
                                    <div className="flex gap-4">
                                      <Input
                                        type="text"
                                        placeholder="lastname"
                                        className=""
                                        required
                                        name="lastname"
                                        value={FormDataOnline.lastname}
                                        onChange={handleFormDataOnlineChange}
                                      />
                                      <Input
                                        type="text"
                                        placeholder="salary"
                                        className=""
                                        required
                                        name="salary"
                                        value={FormDataOnline.salary}
                                        onChange={handleFormDataOnlineChange}
                                      />
                                      {/* 
                                      <Input
                                        type="email"
                                        placeholder="email"
                                        className=""
                                        required
                                        name="email"
                                        value={FormDataOnline.email}
                                        onChange={handleFormDataOnlineChange}
                                      /> */}
                                    </div>
                                    <br />
                                    <div className="flex gap-4">
                                      <Input
                                        type="number"
                                        placeholder="phone"
                                        className=""
                                        required
                                        name="phone"
                                        value={FormDataOnline.phone}
                                        onChange={handleFormDataOnlineChange}
                                      />
                                      <Popover>
                                        <PopoverTrigger asChild>
                                          <Button
                                            variant={"outline"}
                                            className={cn(
                                              "w-[185px] justify-start text-left font-normal",
                                              !date && "text-muted-foreground"
                                            )}
                                          >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? (
                                              format(date, "PPP")
                                            ) : (
                                              <span>Pick a date</span>
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

                                      {/* <Input
                                        type="text"
                                        placeholder="address"
                                        className=""
                                        required
                                        name="address"
                                        value={FormDataOnline.address}
                                        onChange={handleFormDataOnlineChange}
                                      /> */}
                                    </div>
                                  </div>
                                </div>
                                <Button className="w-[11.7rem]">Send</Button>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-5">
                      <DataTable columns={columns} data={data} />
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
}
{
  /* <div className="border-[1px] bg-gray-20 relative top-5" /> */
}

// <div className="p-[3px] px-6 py-4 bg-white overflow-y-scroll">
//   <div className="flex items-center gap-3">
//     <div className="text-[1.5rem] text-black">
//       <CgMenuRight />
//     </div>
//     <h2 className=" text-2xl font-bold">Customer</h2>
//   </div>

// </div>
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
