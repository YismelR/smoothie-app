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
import useSmoothiesStore from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z
    .string()
    .min(2, {
      message: "password must longer, please enter more than 2 character",
    })
    .max(50, {
      message: "password is too long, name must be less than 50 character",
    }),
});

export function SignInForm() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="s-phone:grid s-phone:space-y-6"
      >
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
                  placeholder="********"
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
          Log In
        </Button>
      </form>
    </Form>
  );
}
