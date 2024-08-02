"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import useSmoothiesStore from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Name must longer, please enter more than 2 character" })
    .max(50, {
      message: "Name is too long, name must be less than 50 character",
    }),
  lastName: z
    .string()
    .min(2, {
      message: "Last name must longer, please enter more than 2 character",
    })
    .max(50, {
      message: "Last name is too long, must be less than 50 character",
    }),
  email: z.string().email({ message: "Email is required" }),
  password: z.string().max(500, {
    message: "password is too long, must be less than 500 character",
  }),
  confirmPassword: z.string().max(500, {
    message: "password is too long, must be less than 500 character",
  }),
});

export function SignUpForm() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid s-phone:space-y-6"
      >
        <ScrollArea className="max-md-phone:h-[150px]">
          <div className="md-tablet:grid md-tablet:gap-4">
            <div className="grid grid-cols-2 gap-4 s-laptop:gap-8">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="md-tablet:text-base md-desktop:text-lg lg-desktop:text-2xl">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Jane"
                        {...field}
                        className="md-tablet:text-base md-desktop:text-lg lg-desktop:text-2xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="md-tablet:text-base md-desktop:text-lg lg-desktop:text-2xl">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Doe"
                        {...field}
                        className="md-tablet:text-base md-desktop:text-lg lg-desktop:text-2xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="md-tablet:text-base md-desktop:text-lg lg-desktop:text-2xl">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email@fakejanedomain.net"
                      {...field}
                      className="md-tablet:text-base md-desktop:text-lg lg-desktop:text-2xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="md-tablet:text-base md-desktop:text-lg lg-desktop:text-2xl">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="*******"
                      {...field}
                      className="md-tablet:text-base md-desktop:text-lg lg-desktop:text-2xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="md-tablet:text-base md-desktop:text-lg lg-desktop:text-2xl">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="*******"
                      {...field}
                      className="md-tablet:text-base md-desktop:text-lg lg-desktop:text-2xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </ScrollArea>

        <Button
          type="submit"
          className={`${selectedSmoothie.backgroundColor} shadow-3xl ${selectedSmoothie.shadowBtnColor} s-phone:rounded-full md-tablet:text-base md-desktop:text-lg lg-desktop:text-2xl`}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
