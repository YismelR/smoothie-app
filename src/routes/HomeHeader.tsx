import topLogo from "../assets/logo/top-logo.svg";
import MenuDropDown from "@/components/MenuDropDown";
export default function HomeHeader() {
  return (
    <header className="flex justify-between items-center md-tablet:pl-10 md-tablet:pr-16  lg-phone:pr-6 s-phone:pr-4">
      <img src={topLogo} alt="smoothie logo" className="lg-desktop:w-64" />
      <MenuDropDown />
    </header>
  );
}
