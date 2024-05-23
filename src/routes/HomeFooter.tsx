import blueBowl from "../assets/images/blueberry-banana.png";
import greenBowl from "../assets/images/cucumber-smoothie.png";
import yellowBowl from "../assets/images/Mango-almond.png";
import purpleBowl from "../assets/images/purple-hibuscus.png";

export default function HomeFooter() {
  return (
    <footer className="flex gap-8 absolute bottom-0 left-10 ">
      <div className="flex bg-[#D6E7FD] rounded-t-3xl pt-20 w-40 relative">
        <img
          src={blueBowl}
          alt="blueberry bowl"
          className="h-28 absolute -top-12 left-6 border-2 border-[#4096DE] rounded-full"
        />
        <p className="text-center font-semibold">Blueberry Banana Smoothie</p>
      </div>
      <div className="flex bg-[#F5FFD2] rounded-t-3xl pt-20 w-40 relative px-8">
        <img
          src={greenBowl}
          alt="cucumber bowl"
          className="h-28 absolute -top-12 left-6 border-2 border-[#7B992C] rounded-full"
        />
        <p className="text-center font-semibold">Cucumber Smoothie</p>
      </div>
      <div className="flex bg-[#FFD2FB] rounded-t-3xl pt-20 w-40 relative">
        <img
          src={purpleBowl}
          alt="mango bowl"
          className="h-28 absolute -top-12 left-6 border-2 border-[#DE40AD] rounded-full"
        />
        <p className="text-center font-semibold">Hibiscus Chia Smoothie</p>
      </div>
      <div className="flex bg-[#FFF7C6] rounded-t-3xl pt-20 w-40 relative">
        <img
          src={yellowBowl}
          alt="mango bowl"
          className="h-28 absolute -top-12 left-6 border-2 border-[#FFC61A] rounded-full"
        />
        <p className="text-center font-semibold">Mango-Almond Smoothie</p>
      </div>
    </footer>
  );
}
