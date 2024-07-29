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
    .min(5, {
      message: "Zip code must be at least 5 characters",
    })
    .max(5, {
      message: "Zip code must be less than 5 character",
    })
    .regex(/^\d+$/, {
      message: "Zip code must be a valid number",
    }),
});

export function AddressForm() {
  const smoothie = useSmoothiesStore((state) => state.selectedSmoothie);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      streetAddress: "",
      aptNumber: "",
      state: "",
      zip: "",
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
        className="flex w-full flex-col space-y-6 rounded-sm border border-grey-dark p-4 s-laptop:p-7 md-laptop:p-8 md-desktop:py-12"
      >
        <div className="flex gap-3 md-laptop:text-lg md-desktop:text-2xl lg-desktop:text-3xl">
          <img
            src={bulletPoint}
            alt="bullet point"
            className="lg-desktop:size-8"
          />
          <h1>Add New Address</h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
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
        <div className="grid grid-cols-3 gap-4">
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
        <div className="grid grid-cols-3 gap-4">
          <Button className="rounded-xl border border-grey-dark bg-transparent text-black hover:border-gray-300 hover:bg-gray-300 md-desktop:h-12 md-desktop:text-lg lg-desktop:py-8 lg-desktop:text-2xl">
            Cancel
          </Button>
          <Button
            type="submit"
            className={`${smoothie.backgroundColor} ${smoothie.hoverColor} col-span-2 w-full rounded-xl md-desktop:h-12 md-desktop:text-lg lg-desktop:py-8 lg-desktop:text-2xl`}
          >
            Save This Address
          </Button>
        </div>
      </form>
    </Form>
  );
}
