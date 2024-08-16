import useMediaQuery from "@/hooks/use-media-query";
import login from "@/assets/icons/log-in.svg";
import useFavoriteSmoothieStore from "@/store/favoriteSmoothie";
import logout from "@/assets/icons/log-out.svg";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";

export function RegisterButton() {
  const queryClient = useQueryClient();

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { setOpen } = useFavoriteSmoothieStore((state) => state);

  async function checkAuth() {
    return await axios.get("http://localhost:3000/check-auth", {
      withCredentials: true,
    });
  }
  async function logoutRequest() {
    return await axios.delete("http://localhost:3000/logout", {
      withCredentials: true,
    });
  }
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: checkAuth,
  });

  const mutation = useMutation({
    mutationFn: logoutRequest,
    onSuccess: () => {
      setOpen(false);
      toast({
        title: "You're logged out!",
        description: new Date().toLocaleDateString(),
      });
      queryClient.invalidateQueries({ queryKey: ["session"] });
    },
    onError: () => {
      setOpen(false);

      toast({
        variant: "destructive",
        title: "There was an error! unable to log out",
        description: new Date().toLocaleDateString(),
      });
    },
  });
  const isLoggedIn: boolean = data?.data.ok;
  function handleClick() {
    if (!isLoggedIn) {
      setOpen(true);
      return;
    }
    handleLogOut();
    setOpen(false);
  }

  async function handleLogOut() {
    mutation.mutate();
  }

  if (isDesktop) {
    return (
      <>
        <button
          className={`cursor-pointer select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none md-tablet:text-xl s-laptop:text-sm md-laptop:text-base md-desktop:text-xl lg-desktop:text-3xl`}
          onClick={() => handleClick()}
        >
          <div className="group relative">
            {isLoggedIn ? "Log Out" : "Sign In / Sign Up"}

            <span className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-transform duration-300 group-hover:scale-x-100"></span>
          </div>
        </button>
      </>
    );
  }
  return (
    <>
      <img
        src={isLoggedIn ? logout : login}
        alt="Log In / Sign Up"
        className={`pr-2`}
        onClick={() => handleClick()}
      />
    </>
  );
}
