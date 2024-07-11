import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import useSmoothiesStore from "@/store/store";
import { Link } from "react-router-dom";

export function MenubarDesktop() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);

  return (
    <Menubar>
      <MenubarMenu>
        <Link
          to={"/bowls"}
          className={
            "md-desktop:text-xl md-laptop:text-base lg-desktop:text-3xl flex cursor-pointer select-none items-center rounded-sm px-3 py-1.5 text-sm md-tablet:text-xl s-laptop:text-sm font-medium outline-none"
          }
        >
          <div className="relative group">
            Bowls
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </div>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link
          to={"/about"}
          className={
            "md-desktop:text-xl md-laptop:text-base lg-desktop:text-3xl flex cursor-pointer select-none items-center rounded-sm px-3 py-1.5 text-sm md-tablet:text-xl s-laptop:text-sm font-medium outline-none  "
          }
        >
          <div className="relative group">
            About
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </div>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link
          to={"/contact-us"}
          className={`${selectedSmoothie.textColor} md-desktop:text-xl md-laptop:text-base lg-desktop:text-3xl flex cursor-pointer select-none items-center rounded-sm px-3 py-1.5 text-sm md-tablet:text-xl s-laptop:text-sm font-medium outline-none `}
        >
          <div className="relative group">
            Contact Us
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </div>
        </Link>
      </MenubarMenu>
    </Menubar>
  );
}
