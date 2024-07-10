"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { toast } from "@/components/ui/use-toast";
import useSmoothiesStore from "@/store/store";
import bulletPoint from "@/assets/icons/bullet-point.svg";

const FormSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: "First name must be at least 2 characters",
    })
    .max(50, {
      message: "First name must be less than 50 character",
    }),
  lastName: z
    .string()
    .min(2, {
      message: "Last name must be at least 2 characters",
    })
    .max(50, {
      message: "Last name must be less than 50 character",
    }),
  streetAddress: z
    .string()
    .min(2, {
      message: "Street Address must be at least 2 characters",
    })
    .max(50, {
      message: "Street Address must be less than 50 character",
    }),
  aptNumber: z
    .string()
    .min(2, {
      message: "Apartment number must be at least 2 characters",
    })
    .max(50, {
      message: "Apartment number must be less than 50 character",
    }),
  state: z
    .string()
    .min(2, {
      message: "State must be at least 2 characters",
    })
    .max(50, {
      message: "State must be less than 50 character",
    }),
  zip: z
    .string()
    .min(2, {
      message: "Zip code must be at least 2 characters",
    })
    .max(50, {
      message: "Zip code must be less than 50 character",
    }),
});

export function AddressForm() {
  const smoothie = useSmoothiesStore((state) => state.selectedSmoothie);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full border flex flex-col p-4 border-grey-dark rounded-sm s-laptop:p-7 md-laptop:p-8 md-desktop:py-12"
      >
        <div className="flex gap-3 md-laptop:text-lg md-desktop:text-2xl lg-desktop:text-3xl">
          <img
            src={bulletPoint}
            alt="bullet point"
            className="lg-desktop:size-8"
          />
          <h1>Add New Address</h1>
        </div>
        <div className="flex gap-4 s-laptop:grid grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md-desktop:text-lg lg-desktop:text-2xl">
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="md-desktop:h-12 lg-desktop:h-14"
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
                <FormLabel className="md-desktop:text-lg lg-desktop:text-2xl">
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="md-desktop:h-12 lg-desktop:h-14"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="streetAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="md-desktop:text-lg lg-desktop:text-2xl">
                Street Address
              </FormLabel>
              <FormControl>
                <Input {...field} className="md-desktop:h-12 lg-desktop:h-14" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="aptNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md-desktop:text-lg lg-desktop:text-2xl">
                  Apt#
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="md-desktop:h-12 lg-desktop:h-14"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md-desktop:text-lg lg-desktop:text-2xl">
                  State
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="md-desktop:h-12 lg-desktop:h-14"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md-desktop:text-lg lg-desktop:text-2xl">
                  Zip Code
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="md-desktop:h-12 lg-desktop:h-14"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-between gap-4">
          <Button className="bg-transparent border border-grey-dark hover:bg-gray-300 hover:border-gray-300 text-black md-phone:w-32 lg-phone:w-36 s-laptop:w-48 md-laptop:w-64 md-desktop:text-lg lg-desktop:text-2xl md-desktop:h-12 lg-desktop:py-8">
            Cancel
          </Button>
          <Button
            type="submit"
            className={`${smoothie.backgroundColor} ${smoothie.hoverColor} w-full md-desktop:text-lg lg-desktop:text-2xl md-desktop:h-12 lg-desktop:py-8`}
          >
            Save This Address
          </Button>
        </div>
      </form>
    </Form>
  );
}
