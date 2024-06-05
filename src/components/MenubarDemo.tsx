import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import useSmoothiesStore from "@/store/store";
import { Link } from "react-router-dom";

export function MenubarDemo() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);

  return (
    <Menubar>
      <MenubarMenu>
        <Link
          to={"/"}
          className={
            "md-desktop:text-xl md-laptop:text-base lg-desktop:text-3xl flex cursor-pointer select-none items-center rounded-sm px-3 py-1.5 text-sm md-tablet:text-xl s-laptop:text-sm font-medium outline-none  "
          }
        >
          Home
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link
          to={"/bowls"}
          className={
            "md-desktop:text-xl md-laptop:text-base lg-desktop:text-3xl flex cursor-pointer select-none items-center rounded-sm px-3 py-1.5 text-sm md-tablet:text-xl s-laptop:text-sm font-medium outline-none  "
          }
        >
          Bowls
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link
          to={"/about"}
          className={
            "md-desktop:text-xl md-laptop:text-base lg-desktop:text-3xl flex cursor-pointer select-none items-center rounded-sm px-3 py-1.5 text-sm md-tablet:text-xl s-laptop:text-sm font-medium outline-none  "
          }
        >
          About
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link
          to={"/contact-us"}
          className={`${selectedSmoothie.textColor} md-desktop:text-xl md-laptop:text-base lg-desktop:text-3xl flex cursor-pointer select-none items-center rounded-sm px-3 py-1.5 text-sm md-tablet:text-xl s-laptop:text-sm font-medium outline-none `}
        >
          Contact Us
        </Link>
      </MenubarMenu>
    </Menubar>
  );
}
