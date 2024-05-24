import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import HomeFooter from "./HomeFooter";

export default function HomeCard() {
  return (
    <div className="grid bg-[url('/src/assets/logo/curve.svg')] bg-contain bg-no-repeat ml-48 rounded-l-[2rem] bg-white  w-full shadow-sm shadow-[#DF4062]">
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </div>
  );
}
