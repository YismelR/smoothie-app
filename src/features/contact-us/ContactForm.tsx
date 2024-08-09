"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useSmoothiesStore from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/use-toast";

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
  message: z.string().max(500, {
    message: "Message is too long, must be less than 500 character",
  }),
});

export function ContactForm() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
    const templateParams = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      message: values.message,
    };

    emailjs
      .send(
        "service_jwu0118", // ServiceId
        "template_c5j9w7b", // templateId
        templateParams,
        "hYcXr23xyMfbEy2ic",
      )
      .then(
        () => {
          toast({
            title: "Your message was successfully sent!",
            description: new Date().toLocaleDateString(),
          });
          form.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="s-phone:grid s-phone:space-y-6"
      >
        <div className="grid-cols-2 s-laptop:grid s-laptop:gap-8">
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
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="md-tablet:text-base md-desktop:text-lg lg-desktop:text-2xl">
                Your Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your question or message... "
                  {...field}
                  className="md-tablet:text-base md-desktop:text-lg lg-desktop:text-2xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
