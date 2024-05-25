import blueBowl from "../assets/images/blueberry-banana.png";
import greenBowl from "../assets/images/cucumber-smoothie.png";
import yellowBowl from "../assets/images/Mango-almond.png";
import purpleBowl from "../assets/images/purple-hibuscus.png";

export default function HomeFooter() {
  return (
    <footer className="s-laptop:flex md-tablet:text-base s-phone:grid grid-cols-4 s-laptop:gap-8 absolute bottom-0 md-laptop:left-20 md-desktop:gap-12 md-desktop:left-24 lg-desktop:gap-16 lg-desktop:left-8 lg-desktop:text-3xl s-laptop:left-14 md-tablet:gap-5 md-tablet:right-0 lg-phone:text-sm md-desktop:text-xl">
      <div className="flex bg-[#D6E7FD] rounded-t-3xl md-tablet:pt-20 s-laptop:w-40 relative md-desktop:w-48 md-desktop:pb-4 lg-desktop:w-72 lg-desktop:pb-8 lg-desktop:pt-28 lg-phone:pb-2 s-laptop:pb-2 lg-phone:pt-12">
        <img
          src={blueBowl}
          alt="blueberry bowl"
          className="md-tablet:h-28 s-laptop:-top-12 md-desktop:h-32 absolute md-desktop:-top-16 s-laptop:left-6 border-2 border-[#4096DE] rounded-full md-desktop:left-8 lg-desktop:left-12 lg-desktop:w-48 lg-desktop:h-48 lg-desktop:-top-32  lg-desktop:border-4 md-tablet:-top-16 md-tablet:left-8 lg-phone:h-20 lg-phone:left-3 lg-phone:-top-8"
        />
        <p className="text-center font-semibold ">Blueberry Banana Smoothie</p>
      </div>
      <div className="flex bg-[#F5FFD2] rounded-t-3xl md-tablet:pt-20 s-laptop:w-40 relative md-tablet:px-8 md-desktop:w-48 lg-desktop:w-72 lg-desktop:pt-28 lg-phone:pt-12">
        <img
          src={greenBowl}
          alt="cucumber bowl"
          className="md-tablet:h-28 s-laptop:-top-12 md-desktop:h-32 absolute md-desktop:-top-16 s-laptop:left-6 border-2 border-[#7B992C] rounded-full md-desktop:left-8 lg-desktop:left-12 lg-desktop:w-48 lg-desktop:h-48 lg-desktop:-top-32 lg-desktop:border-4 md-tablet:-top-16 md-tablet:left-8 lg-phone:h-20 lg-phone:left-3 lg-phone:-top-8"
        />
        <p className="text-center font-semibold">Cucumber Smoothie</p>
      </div>
      <div className="flex bg-[#FFD2FB] rounded-t-3xl md-tablet:pt-20 s-laptop:w-40 relative md-desktop:w-48 lg-desktop:w-72 lg-desktop:pt-28 lg-phone:pt-12">
        <img
          src={purpleBowl}
          alt="mango bowl"
          className="md-tablet:h-28 s-laptop:-top-12 md-desktop:h-32 absolute md-desktop:-top-16 s-laptop:left-6 border-2 border-[#DE40AD] rounded-full md-desktop:left-8 lg-desktop:left-12 lg-desktop:w-48 lg-desktop:h-48 lg-desktop:-top-32 lg-desktop:border-4 md-tablet:-top-16 md-tablet:left-8 lg-phone:h-20 lg-phone:left-3 lg-phone:-top-8"
        />
        <p className="text-center font-semibold px-5">Hibiscus Chia Smoothie</p>
      </div>
      <div className="flex bg-[#FFF7C6] rounded-t-3xl md-tablet:pt-20 s-laptop:w-40 relative md-desktop:w-48 lg-desktop:w-72 lg-desktop:pt-28 lg-phone:pt-12">
        <img
          src={yellowBowl}
          alt="mango bowl"
          className="md-tablet:h-28 s-laptop:-top-12 md-desktop:h-32 absolute md-desktop:-top-16 s-laptop:left-6 border-2 border-[#FFC61A] rounded-full md-desktop:left-8 lg-desktop:left-12 lg-desktop:w-48 lg-desktop:h-48 lg-desktop:-top-32 lg-desktop:border-4 md-tablet:-top-16 md-tablet:left-8 lg-phone:h-20 lg-phone:left-3 lg-phone:-top-8"
        />
        <p className="text-center font-semibold">Mango-Almond Smoothie</p>
      </div>
    </footer>
  );
}
