import blueBowl from "../assets/images/blueberry-banana.png";
import greenBowl from "../assets/images/cucumber-smoothie.png";
import yellowBowl from "../assets/images/Mango-almond.png";
import purpleBowl from "../assets/images/purple-hibuscus.png";

export default function HomeFooter() {
  return (
    <footer className="flex gap-8 absolute bottom-0 md-laptop:left-10 md-desktop:gap-12 md-desktop:left-24 lg-desktop:gap-16 lg-desktop:left-16 lg-desktop:text-2xl s-laptop:left-14 ">
      <div className="flex bg-[#D6E7FD] rounded-t-3xl pt-20 w-40 relative md-desktop:w-48 md-desktop:pb-4 lg-desktop:w-64 lg-desktop:pb-8 md-laptop:pb-2 s-laptop:pb-2">
        <img
          src={blueBowl}
          alt="blueberry bowl"
          className="h-28 absolute -top-12 left-6 border-2 border-[#4096DE] rounded-full md-desktop:left-10 lg-desktop:left-8 lg-desktop:w-48 lg-desktop:h-48 lg-desktop:-top-32  lg-desktop:border-4"
        />
        <p className="text-center font-semibold ">Blueberry Banana Smoothie</p>
      </div>
      <div className="flex bg-[#F5FFD2] rounded-t-3xl pt-20 w-40 relative px-8 md-desktop:w-48 lg-desktop:w-64">
        <img
          src={greenBowl}
          alt="cucumber bowl"
          className="h-28 absolute -top-12 left-6 border-2 border-[#7B992C] rounded-full md-desktop:left-10 lg-desktop:left-8 lg-desktop:w-48 lg-desktop:h-48 lg-desktop:-top-32 lg-desktop:border-4  "
        />
        <p className="text-center font-semibold">Cucumber Smoothie</p>
      </div>
      <div className="flex bg-[#FFD2FB] rounded-t-3xl pt-20 w-40 relative md-desktop:w-48 lg-desktop:w-64">
        <img
          src={purpleBowl}
          alt="mango bowl"
          className="h-28 absolute -top-12 left-6 border-2 border-[#DE40AD] rounded-full md-desktop:left-10 lg-desktop:left-8 lg-desktop:w-48 lg-desktop:h-48 lg-desktop:-top-32 lg-desktop:border-4  "
        />
        <p className="text-center font-semibold px-5">Hibiscus Chia Smoothie</p>
      </div>
      <div className="bg-[#FFF7C6] rounded-t-3xl pt-20 w-40 relative md-desktop:w-48 lg-desktop:w-64">
        <img
          src={yellowBowl}
          alt="mango bowl"
          className="h-28 absolute -top-12 left-6 border-2 border-[#FFC61A] rounded-full md-desktop:left-10 lg-desktop:left-8 lg-desktop:w-48 lg-desktop:h-48 lg-desktop:-top-32 lg-desktop:border-4"
        />
        <p className="text-center font-semibold">Mango-Almond Smoothie</p>
      </div>
    </footer>
  );
}
