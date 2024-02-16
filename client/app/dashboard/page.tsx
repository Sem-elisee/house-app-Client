// "use client";
// import { useState } from "react";
import { element2, elementAdmin } from "@/constants/Index";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { GiTakeMyMoney } from "react-icons/gi";
import { ShoppingCart, UserPlus, Archive } from "lucide-react";
import { Calendar } from "@/Components/ui/calendar";

import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/Components/Card";
import BarChart from "@/Components/BarChart";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Countup from "react-countup";
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

interface DataItem {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export default function page() {
  // const [date, setDate] = useState<Date | undefined>(new Date());

  const data: DataItem[] = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const cardData: CardProps[] = [
    {
      label: "Total Revenue",
      amount: "$45,231.89",
      discription: "+20.1% from last month",
      icon: DollarSign,
    },
    {
      label: "Subscriptions",
      amount: "+2350",
      discription: "+180.1% from last month",
      icon: Users,
    },
    {
      label: "Sales",
      amount: "+12,234",
      discription: "+19% from last month",
      icon: CreditCard,
    },
    {
      label: "Active Now",
      amount: "+573",
      discription: "+201 since last hour",
      icon: Activity,
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
              <span className=" absolute bg-green-500 w-[23px] h-[23px] text-center justify-center rounded-full items-center">
                <p>1</p>
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
            <div className="flex items-center gap-3 ">
              <div className="text-[1.5rem] text-black">
                <CgMenuRight />
              </div>
              <h2 className=" text-2xl font-bold">Dashboard</h2>
            </div>
          </div>
          <div>
            <h1 className="px-5">
              <div className="flex flex-col gap-2 w-full">
                <section className="grid w-full grid-cols-1 gap-4 gap-x-3 transition-all sm:grid-cols-2 xl:grid-cols-4">
                  {cardData.map((d, i) => (
                    <Card
                      key={i}
                      amount={d.amount}
                      discription={d.discription}
                      icon={d.icon}
                      label={d.label}
                    />
                  ))}
                </section>
                <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
                  <CardContent className="bg-white shadow-md">
                    <p className="font-semibold">Overview</p>
                    <div className="relative right-5 top-2">
                      <BarChart />
                    </div>
                  </CardContent>

                  <div>
                    <div className="w-full h-full bg-white shadow-md rounded-md">
                      {/* <h1>sem</h1> */}
                    </div>
                  </div>
                </section>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="flex gap-2">
//   <div className="flex-col">
//     <div className="px-1">
//       <Calendar
//         mode="single"
//         selected={date}
//         onSelect={setDate}
//         className="rounded-xl border-[1.5px] shadow-md"
//       />
//     </div>

//     <div className="px-1 py-[10px]">
//       <div className="border-[1.5px] rounded-md w-[280px] h-[9.5rem] shadow-md">
//         <div className=" px-8 py-2">
//           <h3 className="text-[1rem]">Total Revenue</h3>
//           <h1 className=" font-bold text-xl">
//             $ <Countup start={0} end={15231.89} duration={2.0} />
//           </h1>
//           <h4 className="text-[#aaa]">+20.1% from last month</h4>
//         </div>

//         <div className="relative left-8">
//           <LineChart width={200} height={47} data={data}>
//             <Line
//               type="monotone"
//               dataKey="pv"
//               stroke="#000"
//               strokeWidth={2}
//             />
//           </LineChart>
//         </div>
//       </div>
//     </div>
//   </div>

//   <div>
//     <div className="bg-white border-[2px] w-[47.5rem] h-[414px] rounded-lg overflow-y-scroll">
//       <div className="flex justify-between p-4">
//         <h1 className=" font-bold text-xl">Recent Order</h1>
//         <div>
//           <Link
//             className="font-bold text-[1rem] text-[#b6b5b5]"
//             href="/"
//           >
//             See all
//           </Link>
//         </div>
//       </div>
//       <div></div>
//
//     </div>
//   </div>
// </div>

{
  /* <Table>
//         <TableHeader className="bg-black h-[60px]">
//           <TableRow>
//             <TableHead className="w-[100px]">ID Customer</TableHead>
//             <TableHead className="w-[100px]">Name</TableHead>
//             <TableHead className="w-[100px]">Email</TableHead>
//             <TableHead className="w-[100px]">Adresse</TableHead>
//             <TableHead className="w-[100px]">Date</TableHead>
//             <TableHead className="w-[100px]">Phone</TableHead> */
}
//             {/* <TableHead className="w-[100px]">Action</TableHead> */}
{
  /* //           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {invoices.map((invoice, key) => ( */
}
{
  /* //             <TableRow/ */
}
{
  /* //               key={key}
//               className="even:bg-[#dddddd84] cursor-pointer"
//             >
//               <TableCell className="font-medium">
//                 {invoice.invoice}
//               </TableCell>
//               <TableCell>{invoice.name}</TableCell>
//               <TableCell>{invoice.email}</TableCell>
//               <TableCell>{invoice.adresse}</TableCell>
//               <TableCell>{invoice.date}</TableCell>
//               <TableCell>{invoice.phone}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table> */
}
