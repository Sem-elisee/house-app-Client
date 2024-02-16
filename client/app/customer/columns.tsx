"use client";

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

import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { Pencil, Trash2 } from "lucide-react";

import { any, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";

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
import axios from "axios";
import { useRefetch } from "@/Provider";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  IDCustomer: number;
  Name: string;
  LastName: string;
  Email: string;
  Phone: number;
  Dates: string;
  Address: string;
};

const FormData = z.object({
  Name: z.string(),
  LastName: z.string(),
  Email: z.string(),
  Phone: z.number(),
  Dates: z.date(),
  Address: z.string(),
});

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "IDCustomer",
    header: "IDCustomer",
  },
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "LastName",
    header: "LastName",
  },
  {
    accessorKey: "Email",
    header: "Email",
  },
  {
    accessorKey: "Phone",
    header: "Phone",
  },
  {
    accessorKey: "Dates",
    // header: "Dates",
    cell: ({ row }) => {
      const item = row.original;
      console.log();

      return <div>{item.Dates && item.Dates.slice(0, 10)}</div>;
    },
  },
  {
    accessorKey: "Address",
    header: "Address",
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const user = row.original;
      const refetch = useRefetch();

      const form = useForm<z.infer<typeof FormData>>({
        resolver: zodResolver(FormData),
        defaultValues: {
          Name: user.Name || "",
          LastName: user.LastName || "",
          Email: user.Email || "",
          Phone: user.Phone || 0,
          Dates: new Date(user.Dates) || new Date(Date.now()),
          Address: user.Address || "",
        },
      });

      const onsubmit = (value: z.infer<typeof FormData>) => {
        try {
          axios
            .put(
              `http://localhost:2003/api/v.01/customer/${user.IDCustomer}`,
              value
            )
            .then((response) => {
              if (response) refetch();
            });
        } catch (e) {
          console.log(e);
        }
      };

      const onsubmit2 = () => {
        try {
          axios
            .delete(
              `http://localhost:2003/api/v.01/customer/${user.IDCustomer}`
            )
            .then((response) => {
              if (response) {
                return refetch();
              }
            });
        } catch (e) {
          console.log(e);
        }
      };

      // console.log(handDelete);

      return (
        <div className="flex gap-4">
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Pencil className="w-[1.4rem] h-[1.4rem] cursor-pointer" />
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
                                <Input placeholder="name" {...field} required />
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
                                    field.onChange(parseInt(e.target.value))
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

                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
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
                                      date < new Date("1900-01-01")
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
          {/* <Dialog>
              <DialogTrigger asChild>
                <Pencil className="w-[1.4rem] h-[1.4rem] cursor-pointer" />
              </DialogTrigger>
            </Dialog> */}

          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Trash2 className="w-[1.4rem] h-[1.4rem] cursor-pointer" />
                {/* <Button variant="outline">Show Dialog</Button> */}
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    type="button"
                    onClick={onsubmit2}
                    className=" bg-red-700 text-white hover:bg-red-700"
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      );
    },
  },
];
