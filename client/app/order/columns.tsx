"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  phone: number;
  date: number;
  address: string;
  // amount: number;
  // amount2: number;
  // status: "pending" | "processing" | "success" | "failed";
  // email: string;
};

import { MoreHorizontal } from "lucide-react";

import { Button } from "@/Components/ui/button";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "order ID",
    header: "Order ID",
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "deliverydate",
    header: "DeliveryDate",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "payment",
    header: "Payment",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <div className="flex items-center gap-4">
            <Pencil className="w-[1.4rem] h-[1.4rem] cursor-pointer" />
            <Trash2 className="w-[1.4rem] h-[1.4rem] cursor-pointer" />

            {/* <Image
              src="/stylo.png"
              width={100}
              height={100}
              alt=""
              className="w-6 h-6 cursor-pointer"
            />
            <Image
              src="/poubelle1.png"
              width={100}
              height={100}
              alt=""
              className="w-6 h-5 cursor-pointer"
            /> */}
          </div>
          {/* <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem className=" cursor-pointer gap-3">
              <h2 className=" font-semibold">Edit</h2>
              <Image
                src="/stylo.png"
                width={100}
                height={100}
                alt=""
                className="w-5 h-5 cursor-pointer"
              />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className=" cursor-pointer gap-2">
              <h2 className=" font-semibold">Delete</h2>
              <Image
                src="/poubelle1.png"
                width={100}
                height={100}
                alt=""
                className="w-5 h-5 cursor-pointer"
                />
            </DropdownMenuItem>
          </DropdownMenuContent> */}

          {/* <Trash2 className="w-5 h-5 relative left-2 " /> */}
          {/* <Pencil className="w-5 h-5 relative left-3 " /> */}
          {/* <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          {/* <div className="flex gap-3">
            <Image
              src="/stylo.png"
              width={100}
              height={100}
              alt=""
              className="w-6 h-6 cursor-pointer"
            />
            <div>
              <Image
                src="/poubelle1.png"
                width={100}
                height={100}
                alt=""
                className="w-6 h-5 cursor-pointer"
              />
            </div>
          </div> */}
          {/* <div className="flex gap-6">
            <Image
              src="/crayon (1).png"
              width={100}
              height={100}
              alt=""
              className="w-5 h-5 cursor-pointer"
            />
            <div>
              <Image
                src="/poubelles.png"
                width={100}
                height={100}
                alt=""
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          </div> */}
        </DropdownMenu>
      );
    },
  },
];
