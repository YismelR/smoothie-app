import topLogo from "../assets/logo/top-logo.svg";
import { MenubarDemo } from "@/components/MenubarDemo";
export default function HomeHeader() {
  return (
    <header className="flex justify-between items-center pl-10 pr-16 pt-8">
      <img src={topLogo} alt="smoothie logo" />
      <MenubarDemo />
    </header>
  );
}
