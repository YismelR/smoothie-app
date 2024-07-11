/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lJwnQlHSEBA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import facebook from "@/assets/icons/facebook.svg";
import twitter from "@/assets/icons/twitter.svg";
import instagram from "@/assets/icons/instagram.svg";
import useSmoothiesStore from "@/store/store";
import { Description } from "@radix-ui/react-dialog";
import { DialogTitle } from "@/components/ui/dialog";
import { MenubarDesktop } from "@/features/header-menu/MenubarDesktop";

export default function Component() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);

  return (
    <header className="flex h-20 shrink-0 items-center md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md-tablet:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <DialogTitle></DialogTitle>
          <Description></Description>
          <div className="flex flex-col h-full gap-2 py-6">
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              to="bowls"
            >
              Bowls
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              to="about"
            >
              About
            </Link>
            <Link
              className={`flex w-full items-center py-2 text-lg font-semibold ${selectedSmoothie.textColor}`}
              to="contact-us"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex gap-4 justify-end ">
            <img
              src={facebook}
              alt="facebook"
              className="lg-desktop:w-8 md-desktop:w-6"
            />
            <img
              src={twitter}
              alt="twitter"
              className="lg-desktop:w-8 md-desktop:w-6"
            />
            <img
              src={instagram}
              alt="instagram"
              className="lg-desktop:w-8 md-desktop:w-6"
            />
          </div>
        </SheetContent>
      </Sheet>
      <nav className=" hidden md-tablet:flex">
        <MenubarDesktop />
      </nav>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
