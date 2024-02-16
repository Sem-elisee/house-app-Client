"use client";
import React, { ChangeEvent } from "react";
import { elementAdmin, element2, Order } from "@/constants/Index";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";

// import { Input } from "@/Components/ui/input";

import { SiMicrosoftexcel } from "react-icons/si";
import { AiTwotonePrinter } from "react-icons/ai";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/Components/ui/calendar";
import { cn } from "@/lib/utils";

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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";

import { X, Plus } from "lucide-react";

// import { Button } from "@/Components/ui/button";
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
  ChevronDown,
  PlusCircle,
  Search,
  BadgePlus,
  ClipboardEdit,
  Trash2,
} from "lucide-react";

import { Button } from "@/Components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";

import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { User, columns } from "./columns";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://65a3187ba54d8e805ed36890.mockapi.io/user");
  const data = await res.json();
  return data;
}

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const formData = z.object({
  Customer: z.string(),
  Order: z.string(),
  DeliveryDate: z.date(),
  Price: z.number(),
  Phone: z.number(),
  Address: z.string(),
  Payment: z.string(),
  Status: z.string(),
});

const queryClient = new QueryClient();

const pageRef = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider>
  );
};

interface FormaData {
  customer: string;
  order: string;
  price: string;
  phone: string;
  address: string;
  SearchPhyssics: string;
  SearchOnline: string;
}

const Page = () => {
  const form = useForm<z.infer<typeof formData>>({
    resolver: zodResolver(formData),
    defaultValues: {
      Customer: "",
      Order: "",
      DeliveryDate: new Date(Date.now()),
      Price: 0,
      Phone: 0,
      Address: "",
      Payment: "",
      Status: "",
    },
  });

  const onSubmit = (value: z.infer<typeof formData>) => {
    console.log(value);
  };

  const [select, setSelect] = useState("PhysicsOrder");
  const [data, setData] = useState<User[]>([]);
  const [date, setDate] = useState<Date>();

  const [payment, setPayment] = useState("");
  const [status, setStatus] = useState("");

  const DataMap = useQuery({ queryKey: ["Order"], queryFn: getUsers });

  console.log(DataMap);

  console.log(FormData);

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
        <div className="rounded-md bg-[#f1f1f1] h-[36.4rem] ">
          <div className="px-5 py-4 ">
            <div className="flex items-center gap-3">
              <div className="text-[1.5rem] text-black">
                <CgMenuRight />
              </div>
              <h2 className=" text-2xl font-bold">Order</h2>
            </div>
            <div className="py-[.9rem] ">
              <div className="flex text-[1.2rem] gap-6 font-semibold cursor-pointer">
                {Order.map((category: any, id) => (
                  <div key={id} onClick={() => setSelect(category.title)}>
                    <span>{category.title}</span>
                    {select === category.title && (
                      <div className="w-full h-[3px] rounded-md bg-black relative top-[.3rem]" />
                    )}
                  </div>
                ))}
              </div>
              <div className="bg-white bg-[url('/blob-scene-haikei.svg')] bg-cover bg-center  shadow-md h-[28.5rem] relative top-5 rounded-md overflow-y-scroll">
                {select === "PhysicsOrder" && (
                  <div>
                    <div className="flex items-center justify-between py-5 px-5">
                      <h1 className=" font-bold text-2xl">PhysicsOrder</h1>
                      <div className="flex justify-center items-center gap-3">
                        <div className="flex gap-3 ">
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
                                  <BadgePlus className="w-5 h-5" />
                                  <h1>Add new</h1>
                                </div>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[666px]">
                                <DialogHeader>
                                  <DialogTitle>Create order</DialogTitle>
                                </DialogHeader>
                                <div className="flex-col py-1">
                                  <Form {...form}>
                                    <form
                                      onSubmit={form.handleSubmit(onSubmit)}
                                      className="space-y-5"
                                    >
                                      <div className=" flex gap-4">
                                        <FormField
                                          control={form.control}
                                          name="Address"
                                          render={({ field }) => (
                                            <FormItem>
                                              {/* <FormLabel>Username</FormLabel> */}
                                              <FormControl>
                                                <Input
                                                  placeholder="shadcn"
                                                  {...field}
                                                />
                                              </FormControl>
                                              {/* <FormDescription>
                                              This is your public display name.
                                            </FormDescription> */}
                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />
                                        <FormField
                                          control={form.control}
                                          name="Address"
                                          render={({ field }) => (
                                            <FormItem>
                                              {/* <FormLabel>Username</FormLabel> */}
                                              <FormControl>
                                                <Input
                                                  placeholder="shadcn"
                                                  {...field}
                                                />
                                              </FormControl>
                                              {/* <FormDescription>
                                              This is your public display name.
                                            </FormDescription> */}
                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />

                                        <FormField
                                          control={form.control}
                                          name="DeliveryDate"
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
                                      </div>
                                      {/* <br /> */}
                                      <div className="flex gap-4">
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
                                          name="Price"
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
                                          name="Address"
                                          render={({ field }) => (
                                            <FormItem>
                                              {/* <FormLabel>Username</FormLabel> */}
                                              <FormControl>
                                                <Input
                                                  placeholder="shadcn"
                                                  {...field}
                                                />
                                              </FormControl>
                                              {/* <FormDescription>
                                              This is your public display name.
                                            </FormDescription> */}
                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />
                                      </div>
                                      <div className=" flex gap-4">
                                        <FormField
                                          control={form.control}
                                          name="Payment"
                                          render={({ field }) => (
                                            <FormItem className="w-[188px]">
                                              {/* <FormLabel>Email</FormLabel> */}
                                              <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                              >
                                                {/* <div className="w-50px"></div> */}
                                                <FormControl>
                                                  <SelectTrigger>
                                                    <SelectValue placeholder="Payment" />
                                                  </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                  <SelectItem value="m@example.com">
                                                    m@example.com
                                                  </SelectItem>
                                                  <SelectItem value="m@google.com">
                                                    m@google.com
                                                  </SelectItem>
                                                  <SelectItem value="m@support.com">
                                                    m@support.com
                                                  </SelectItem>
                                                </SelectContent>
                                              </Select>

                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />
                                        <FormField
                                          control={form.control}
                                          name="Payment"
                                          render={({ field }) => (
                                            <FormItem className="w-[188px]">
                                              {/* <FormLabel>Email</FormLabel> */}
                                              <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                              >
                                                {/* <div className="w-50px"></div> */}
                                                <FormControl>
                                                  <SelectTrigger>
                                                    <SelectValue placeholder="Payment" />
                                                  </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                  <SelectItem value="m@example.com">
                                                    m@example.com
                                                  </SelectItem>
                                                  <SelectItem value="m@google.com">
                                                    m@google.com
                                                  </SelectItem>
                                                  <SelectItem value="m@support.com">
                                                    m@support.com
                                                  </SelectItem>
                                                </SelectContent>
                                              </Select>

                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />
                                      </div>
                                      <Button
                                        type="submit"
                                        className="w-[150px] h-[40px]"
                                      >
                                        Submit
                                      </Button>
                                    </form>
                                  </Form>{" "}
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </div>
                    </div>
                    {DataMap.isLoading ? (
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
                        <DataTable
                          columns={columns}
                          data={DataMap.data ? DataMap.data : []}
                        />
                      </div>
                    )}
                    {/* <div className="px-5">
                      <DataTable columns={columns} data={data} />
                    </div> */}
                  </div>
                )}
                {select === "OnlineOrder" && (
                  <div>
                    <div className="flex items-center justify-between py-5 px-5">
                      <h1 className=" font-bold text-2xl">OnlineOrder</h1>
                      <div className="flex justify-center items-center gap-3">
                        <div className="flex gap-5 justify-center items-center">
                          <div>
                            <button className="absolute top-[2.8rem] right-[18.4rem]  transform -translate-y-1/2  flex items-center h-6 w-6">
                              <Search />
                            </button>
                            <Input
                              type="text"
                              placeholder="Search Order"
                              className="h-[47px] px-11 rounded-full "
                              name="SearchOnline"
                            />
                          </div>
                        </div>
                        <div className="flex gap-3">
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
                          <TableBody className="">
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

// // Assurez-vous que SelectValueProps inclut la prop 'value'
// interface SelectValueProps {
//   placeholder: string;
//   value: string; // Ajoutez cette ligne
//   onChange: (e: ChangeEvent<any>) => void; // Ajoutez cela si nécessaire
// }

// // Utilisez React.forwardRef pour définir le composant
// const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(
//   ({ placeholder, value, onChange }, ref) => {
//     return (
//       <span ref={ref} onClick={(e) => e.preventDefault()}>
//         {value || placeholder}
//       </span>
//     );
//   }
// );

// // Utilisez SelectValue dans votre SelectTrigger
// <SelectTrigger className="w-[187px] h-[40px]">
//   <SelectValue
//     name="payment"
//     placeholder="payment"
//     onChange={handleChange}
//     value={physicsOrder.payment}
//   />
// </SelectTrigger>
