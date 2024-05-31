// import mainBowl from "../assets/images/berry-smoothie.png";
import arrow from "../assets/icons/arrow.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import useSmoothiesStore from "@/store/store";
export default function HomeImageMore() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);
  return (
    <div className="flex flex-col place-items-center md-laptop:justify-around md-laptop:pr-0 s-laptop:pr-4 md-tablet:justify-evenly lg-phone:pr-8 s-laptop:gap-8 md-laptop:gap-0 max-md-tablet:gap-32 max-md-tablet:pt-16 max-lg-phone:gap-8 max-md-phone:pt-0">
      <img
        src={selectedSmoothie.src}
        alt="smoothie bowl"
        className=" shadow-2xl rounded-full md-desktop:w-4/5 s-phone:max-h-[142px] s-phone:max-w-[142px] md-phone:max-h-[169px] md-phone:max-w-[169px] 
        lg-phone:max-h-[180px] lg-phone:max-w-[180px] md-tablet:max-h-[296px] md-tablet:max-w-[296px] s-laptop:max-h-[400px] s-laptop:max-w-[400px] md-laptop:max-h-[530px] md-laptop:max-w-[530px] md-desktop:max-h-[900px] md-desktop:max-w-[900px]"
      />
      <button
        className={`relative ${selectedSmoothie.backgroundColor} md-tablet:w-24 md-tablet:h-10 rounded-full md-laptop:place-self-start shadow-3xl ${selectedSmoothie.shadowBtnColor} mt-8 md-desktop:w-32 md-desktop:h-12 lg-desktop:w-40 lg-desktop:h-16 lg-phone:w-20 lg-phone:h-8 lg-phone:mt-0 md-phone:h-8 md-phone:w-20 s-laptop:w-20 s-laptop:h-8 s-phone:h-7 s-phone:w-20 group`}
      >
        <span className="s-phone:text-sm md-tablet:text-base md-desktop:text-2xl lg-desktop:text-3xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          More
        </span>
        <img
          src={arrow}
          alt="arrow next"
          className=" md-tablet:w-16 absolute lg-phone:-right-6 top-2 md-desktop:w-20 md-desktop:-right-9 md-desktop:left-20 lg-desktop:top-3 lg-desktop:w-24 lg-desktop:left-28 md-tablet:mb-8 s-laptop:w-12 md-laptop:w-12 s-laptop:mb-0 lg-phone:w-12 md-phone:top-2 md-phone:w-10 md-phone:-right-4 md-phone:left-14 s-laptop:top-1 s-phone:top-[0.3rem] s-phone:w-10 s-phone:left-[3.3rem] transition-transform duration-300 group-hover:translate-x-5"
        />
      </button>
      <div className=" hidden md-tablet:flex place-self-end gap-4 md-laptop:pr-14 s-laptop:flex-auto s-laptop:pr-0 md-tablet:mb-20 s-laptop:mb-0">
        <img
          src={facebook}
          alt="facebook"
          className="s-laptop:w-4 lg-desktop:w-8 md-laptop:w-6"
        />
        <img
          src={twitter}
          alt="twitter"
          className="s-laptop:w-4 lg-desktop:w-8 md-laptop:w-6"
        />
        <img
          src={instagram}
          alt="instagram"
          className="s-laptop:w-4 lg-desktop:w-8 md-laptop:w-6"
        />
      </div>
    </div>
  );
}
