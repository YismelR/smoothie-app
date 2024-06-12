import facebook from "@/assets/icons/facebook.svg";
import twitter from "@/assets/icons/twitter.svg";
import instagram from "@/assets/icons/instagram.svg";
import useSmoothiesStore from "@/store/store";
export default function HomeImageMore() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);
  return (
    <div className="flex flex-col place-items-center md-laptop:justify-around md-laptop:pr-0 s-laptop:pr-4 md-tablet:justify-evenly lg-phone:pr-8 s-laptop:gap-8 md-laptop:gap-0 max-md-tablet:gap-32 max-md-tablet:pt-16 max-lg-phone:gap-8 max-md-phone:pt-0 pb-4">
      <img
        src={selectedSmoothie.src}
        alt="smoothie bowl"
        className=" shadow-2xl rounded-full md-desktop:w-4/5 s-phone:max-h-[142px] s-phone:max-w-[142px] md-phone:max-h-[169px] md-phone:max-w-[169px] 
        lg-phone:max-h-[180px] lg-phone:max-w-[180px] md-tablet:max-h-[296px] md-tablet:max-w-[296px] s-laptop:max-h-[400px] s-laptop:max-w-[400px] md-laptop:max-h-[530px] md-laptop:max-w-[530px] md-desktop:max-h-[900px] md-desktop:max-w-[900px]"
      />

      <div className=" hidden md-tablet:flex place-self-end gap-4 md-laptop:pr-14 s-laptop:flex-auto s-laptop:pr-0 md-tablet:mb-20 s-laptop:mb-0">
        <img
          src={facebook}
          alt="facebook"
          className="s-laptop:w-4 lg-desktop:w-8 md-laptop:w-4"
        />
        <img
          src={twitter}
          alt="twitter"
          className="s-laptop:w-4 lg-desktop:w-8 md-laptop:w-4"
        />
        <img
          src={instagram}
          alt="instagram"
          className="s-laptop:w-4 lg-desktop:w-8 md-laptop:w-4"
        />
      </div>
    </div>
  );
}
