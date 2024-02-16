"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { Button } from "@/Components/ui/button";

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

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "identification doc",
    header: "Identification doc",
  },
  {
    accessorKey: "picture",
    header: "Picture",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "lastname",
    header: "Lastname",
  },
  {
    accessorKey: "salary",
    header: "Salary",
  },

  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  // {
  //   accessorKey: "address",
  //   header: "Address",
  // },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <div className="flex gap-3">
            <Image
              src="/stylo.png"
              width={100}
              height={100}
              alt=""
              className="w-6 h-6 cursor-pointer"
            />
            <div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Image
                    src="/poubelle1.png"
                    width={100}
                    height={100}
                    alt=""
                    className="w-6 h-5 cursor-pointer"
                  />
                  {/* <Button variant="outline">Show Dialog</Button> */}
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className=" bg-red-700 text-white hover:bg-red-700">
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </DropdownMenu>
      );
    },
  },
];
