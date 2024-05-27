import blueBowl from "../assets/images/blueberry-banana.png";
import greenBowl from "../assets/images/cucumber-smoothie.png";
import yellowBowl from "../assets/images/Mango-almond.png";
import purpleBowl from "../assets/images/purple-hibuscus.png";

export default function HomeFooter() {
  const smoothies = [
    {
      src: blueBowl,
      alt: "blueberry bowl",
      borderColor: "#4096DE",
      shadowColor: "rgb(100,149,237)",
      backgroundColor: "#D6E7FD",
      text: "Blueberry Banana Smoothie",
      className: "",
    },
    {
      src: greenBowl,
      alt: "cucumber bowl",
      borderColor: "#7B992C",
      shadowColor: "rgb(85,107,47)",
      backgroundColor: "#F5FFD2",
      text: "Cucumber Smoothie",
      className: "px-8",
    },
    {
      src: purpleBowl,
      alt: "hibiscus chia bowl",
      borderColor: "#DE40AD",
      shadowColor: "rgb(128,0,128)",
      backgroundColor: "#FFD2FB",
      text: "Hibiscus Chia Smoothie",
      className: "px-5",
    },
    {
      src: yellowBowl,
      alt: "mango bowl",
      borderColor: "#FFC61A",
      shadowColor: "rgb(240,128,128)",
      backgroundColor: "#FFF7C6",
      text: "Mango-Almond Smoothie",
      className: "",
    },
  ];

  return (
    <footer className=" max-md-tablet:w-full s-laptop:flex md-tablet:text-base s-phone:grid grid-cols-4 s-laptop:gap-8 absolute bottom-0 md-laptop:left-20 md-desktop:gap-12 md-desktop:left-24 lg-desktop:gap-16 lg-desktop:left-8 lg-desktop:text-3xl s-laptop:left-6 md-tablet:gap-5 md-tablet:right-0 lg-phone:text-sm md-desktop:text-xl max-lg-phone:pb-4 max-lg-phone:pl-4">
      {smoothies.map((smoothie, idx) => (
        <div
          key={idx}
          className={`flex md-tablet:bg-[${smoothie.backgroundColor}] rounded-t-3xl md-tablet:pt-16 s-laptop:w-36 relative md-desktop:w-48 md-desktop:pb-4 lg-desktop:w-72 lg-desktop:pb-8 lg-desktop:pt-28 lg-phone:pb-2 s-laptop:pb-2 lg-phone:pt-40 max-lg-phone:h-20`}
        >
          <img
            src={smoothie.src}
            alt={smoothie.alt}
            className={`md-tablet:h-28 s-laptop:-top-12 md-desktop:h-32 absolute md-desktop:-top-16 s-laptop:left-6 rounded-full border-2 border-[${smoothie.borderColor}] md-desktop:left-8 lg-desktop:left-12 lg-desktop:w-48 lg-desktop:h-48 lg-desktop:-top-32 lg-desktop:border-4 md-tablet:-top-16 md-tablet:left-8 lg-phone:h-20 lg-phone:left-3 lg-phone:-top-8 max-md-tablet:shadow-[0_10px_20px_${smoothie.shadowColor}] md-phone:h-16 s-laptop:h-24 s-phone:h-16`}
          />
          <p
            className={`text-center font-semibold hidden md-tablet:${smoothie.className} md-tablet:flex`}
          >
            {smoothie.text}
          </p>
        </div>
      ))}
    </footer>
  );
}
