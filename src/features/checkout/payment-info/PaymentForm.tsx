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
import { CheckBox } from "./CheckBox";
import visa from "@/assets/icons/visa.svg";

const FormSchema = z.object({
  cardNumber: z
    .string()
    .min(2, {
      message: "Card number must be at least 2 characters",
    })
    .max(50, {
      message: "Card number must be less than 50 character",
    }),
  expirationDate: z
    .string()
    .min(2, {
      message: "Expiration date must be at least 4 characters",
    })
    .max(50, {
      message: "Expiration date must be 4 character",
    }),
  CVV: z
    .string()
    .min(2, {
      message: "CVV code must be at least 3 characters",
    })
    .max(50, {
      message: "CVV code must 3 character",
    }),
  zipCode: z
    .string()
    .min(2, {
      message: "Zip code must be at least 3 characters",
    })
    .max(50, {
      message: "Zip code must be less than 50 character",
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

export function PaymentForm() {
  const smoothie = useSmoothiesStore((state) => state.selectedSmoothie);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      cardNumber: "",
      expirationDate: "",
      CVV: "",
      zipCode: "",
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
          <h1>Credit or Debit Card</h1>
        </div>
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex flex-row rounded-sm border pr-4">
                  <Input
                    placeholder="Card Number"
                    {...field}
                    className="border-none text-[11px] placeholder:text-[11px] md-tablet:text-sm md-tablet:placeholder:text-sm md-desktop:h-12 md-desktop:text-lg md-desktop:placeholder:text-lg lg-desktop:h-14 lg-desktop:text-2xl lg-desktop:placeholder:text-2xl"
                  />
                  <img
                    src={visa}
                    alt="visa"
                    className="size-8 place-self-center md-desktop:size-10 lg-desktop:size-12"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="expirationDate"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="MM/YY"
                    {...field}
                    className="text-[11px] placeholder:text-[11px] md-tablet:text-sm md-tablet:placeholder:text-sm md-desktop:h-12 md-desktop:text-lg md-desktop:placeholder:text-lg lg-desktop:h-14 lg-desktop:text-2xl lg-desktop:placeholder:text-2xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="CVV"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="CVV"
                    {...field}
                    className="text-[11px] placeholder:text-[11px] md-tablet:text-sm md-tablet:placeholder:text-sm md-desktop:h-12 md-desktop:text-lg md-desktop:placeholder:text-lg lg-desktop:h-14 lg-desktop:text-2xl lg-desktop:placeholder:text-2xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Zip Code"
                    {...field}
                    className="text-[11px] placeholder:text-[11px] md-tablet:text-sm md-tablet:placeholder:text-sm md-desktop:h-12 md-desktop:text-lg md-desktop:placeholder:text-lg lg-desktop:h-14 lg-desktop:text-2xl lg-desktop:placeholder:text-2xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <CheckBox />
        <FormField
          control={form.control}
          name="streetAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="md-desktop:text-lg lg-desktop:text-2xl">
                Street Address
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="text-[11px] md-tablet:text-sm md-desktop:h-12 md-desktop:text-lg lg-desktop:h-14 lg-desktop:text-2xl"
                />
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
                    className="text-[11px] md-tablet:text-sm md-desktop:h-12 md-desktop:text-lg lg-desktop:h-14 lg-desktop:text-2xl"
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
                    className="text-[11px] md-tablet:text-sm md-desktop:h-12 md-desktop:text-lg lg-desktop:h-14 lg-desktop:text-2xl"
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
                    className="text-[11px] md-tablet:text-sm md-desktop:h-12 md-desktop:text-lg lg-desktop:h-14 lg-desktop:text-2xl"
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
            Save This Payment
          </Button>
        </div>
      </form>
    </Form>
  );
}
