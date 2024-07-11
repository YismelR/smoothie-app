"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

const FormSchema = z.object({
  creditCard: z.boolean().default(false).optional(),
  billingAddress: z.boolean().default(false).optional(),
});

export function CheckBox() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      creditCard: false,
      billingAddress: false,
    },
  });

  return (
    <>
      <FormField
        control={form.control}
        name="creditCard"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md md-desktop:items-center">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="font-normal md-desktop:text-lg lg-desktop:text-2xl">
                Save this credit card for later use
              </FormLabel>
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="billingAddress"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md md-desktop:items-center">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="font-normal md-desktop:text-lg lg-desktop:text-2xl">
                Billing address same as shipping address
              </FormLabel>
            </div>
          </FormItem>
        )}
      />
    </>
  );
}
