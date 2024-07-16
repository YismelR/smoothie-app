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
  emailAddress: z
    .string()
    .min(2, {
      message: "Street Address must be at least 2 characters",
    })
    .max(50, {
      message: "Street Address must be less than 50 character",
    }),
});

export function EmailForm() {
  const smoothie = useSmoothiesStore((state) => state.selectedSmoothie);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
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
        <div className=" gap-4 grid grid-cols-2">
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
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="md-desktop:text-lg lg-desktop:text-2xl">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="email@janesfakedomain.net"
                  className="md-desktop:h-12 lg-desktop:h-14"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-3 gap-4 ">
          <Button
            type="submit"
            className={`${smoothie.backgroundColor} ${smoothie.hoverColor} col-span-3 w-full rounded-xl md-desktop:text-lg lg-desktop:text-2xl md-desktop:h-12 lg-desktop:py-8`}
          >
            Save This Email
          </Button>
        </div>
      </form>
    </Form>
  );
}
