import useMediaQuery from "@/hooks/use-media-query";
import login from "@/assets/icons/log-in.svg";
import { useLoaderData } from "react-router-dom";
import useFavoriteSmoothieStore from "@/store/favoriteSmoothie";
import logout from "@/assets/icons/log-out.svg";

export function RegisterButton() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isLoggedIn = useLoaderData() as boolean;
  const { setOpen } = useFavoriteSmoothieStore((state) => state);

  const handleClick = () => {
    if (!isLoggedIn) {
      setOpen(true);
      return;
    }
    setOpen(false);
  };

  if (isDesktop) {
    return (
      <>
        <button
          className={`cursor-pointer select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none md-tablet:text-xl s-laptop:text-sm md-laptop:text-base md-desktop:text-xl lg-desktop:text-3xl ${!isLoggedIn ? "flex" : "hidden"}`}
          onClick={() => handleClick()}
        >
          <div className="group relative">
            Sign In / Sign Up
            <span className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-transform duration-300 group-hover:scale-x-100"></span>
          </div>
        </button>
        <button
          className={`cursor-pointer select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none md-tablet:text-xl s-laptop:text-sm md-laptop:text-base md-desktop:text-xl lg-desktop:text-3xl ${isLoggedIn ? "flex" : "hidden"}`}
          onClick={() => handleClick()}
        >
          <div className="group relative">
            Log Out
            <span className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-transform duration-300 group-hover:scale-x-100"></span>
          </div>
        </button>
      </>
    );
  }
  return (
    <>
      <img
        src={login}
        alt="Log In / Sign Up"
        className={`pr-2 ${!isLoggedIn ? "flex" : "hidden"}`}
        onClick={() => handleClick()}
      />
      <img
        src={logout}
        alt="Log In / Sign Up"
        className={`pr-2 ${isLoggedIn ? "flex" : "hidden"}`}
        onClick={() => handleClick()}
      />
    </>
  );
}
