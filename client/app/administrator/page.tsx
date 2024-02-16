"use client";

import React from "react";
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
import { useForm } from "react-hook-form";
import { Button } from "@/Components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function page() {
  const formaShema = z.object({
    email: z.string().min(1, "Email is required").email("invalid email"),
    password: z
      .string()
      .min(1, "password is required")
      .min(8, "password must have than 8 characters"),
  });

  const form = useForm<z.infer<typeof formaShema>>({
    resolver: zodResolver(formaShema),
  });

  const onSubmit = (value: z.infer<typeof formaShema>) => {
    console.log(value);
  };

  return (
    <div
      className=" bg-cover bg-center  flex h-screen items-center justify-center flex-col"
      style={{ backgroundImage: "url('/blob-scene-haikeiN1 (2).svg')" }}
    >
      <div
        className="w-[21.8rem] h-[23rem] bg-white rounded-2xl"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <div className="px-10 py-6 ">
          <h1 className="text-3xl font-bold text-center">Admin Login</h1>
          <div className="my-10">
            <Form {...form}>
              <form action="" onSubmit={form.handleSubmit(onSubmit)}>
                <div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel> </FormLabel>
                        <FormControl className="w-[16.5rem] h-[3rem] rounded-xl ">
                          <Input placeholder="mail@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="my-4">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel> </FormLabel>
                        <FormControl className=" w-[16.5rem] h-[3rem] rounded-xl">
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

                <Button type="submit" className="my-2 w-[16.5rem] h-[3rem] ">
                  Connexion
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      {/* <div
        
        className="rounded-2xl z-auto"
      >
       
      </div> */}
    </div>
  );
}
