import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import HomeFooter from "./HomeFooter";

export default function HomeCard() {
  return (
    <div className="flex flex-col bg-[url('/src/assets/logo/curve.svg')] bg-contain bg-no-repeat ml-48 rounded-l-[2rem] bg-white gap-12 w-full shadow-md">
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </div>
  );
}
