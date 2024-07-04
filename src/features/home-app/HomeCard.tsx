import HomeHeader from "@/features/home-app/HomeHeader";
import HomeMain from "@/features/home-app/HomeMain";
import Curve from "@/components/Curve";

export default function HomeCard() {
  return (
    <div className="grid grid-rows-[1fr_4fr] s-laptop:ml-48 rounded-l-[2rem] bg-white relative overflow-hidden w-full shadow-sm shadow-[#DF4062] md-tablet:ml-28">
      <Curve />
      <HomeHeader />
      <HomeMain />
    </div>
  );
}
