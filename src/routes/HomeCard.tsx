import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import HomeFooter from "./HomeFooter";

export default function HomeCard() {
  return (
    <div className="grid grid-rows-[1fr_4fr] s-phone:bg-[url('/src/assets/logo/curve-xs-view.svg')] md-tablet:bg-[url('/src/assets/logo/curve-s-view.svg')] s-laptop:bg-[url('/src/assets/logo/curve.svg')] bg-contain bg-no-repeat s-laptop:ml-48 rounded-l-[2rem] bg-white  w-full shadow-sm shadow-[#DF4062] md-tablet:ml-28">
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </div>
  );
}
