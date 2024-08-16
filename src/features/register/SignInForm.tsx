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
import { useToast } from "@/components/ui/use-toast";
import useFavoriteSmoothieStore from "@/store/favoriteSmoothie";
import useSmoothiesStore from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

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
  const { setOpen } = useFavoriteSmoothieStore();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function isSignOk() {
    return await axios.get("http://localhost:3000/check-auth", {
      withCredentials: true,
    });
  }

  async function loginRequest(body: { email: string; password: string }) {
    return await axios.post("http://localhost:3000/login", body, {
      withCredentials: true,
    });
  }

  useQuery({
    queryKey: ["session"],
    queryFn: isSignOk,
  });

  const mutation = useMutation({
    mutationFn: loginRequest,
    onSuccess: () => {
      setOpen(false);
      toast({
        title: "You're logged in!",
        description: new Date().toLocaleDateString(),
      });
      queryClient.invalidateQueries({ queryKey: ["session"] });
    },
    onError: () => {
      setOpen(false);

      toast({
        variant: "destructive",
        title: "There was an error! Check Credentials.",
        description: new Date().toLocaleDateString(),
      });
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const body = {
      email: values.email,
      password: values.password,
    };
    mutation.mutate(body);
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
                  type="email"
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
