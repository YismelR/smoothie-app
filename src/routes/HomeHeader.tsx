import topLogo from "../assets/logo/top-logo.svg";
import { MenubarDemo } from "@/components/MenubarDemo";
export default function HomeHeader() {
  return (
    <header className="flex justify-between items-center pl-10 pr-16 ">
      <img src={topLogo} alt="smoothie logo" className="lg-desktop:w-64" />
      <MenubarDemo />
    </header>
  );
}
