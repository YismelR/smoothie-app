import useSmoothiesStore from "@/store/store";

import { Smoothie } from "@/types";

export default function HomeFooter() {
  const { selectSmoothie, addSmoothie, deleteSmoothie, smoothies } =
    useSmoothiesStore((state) => state);

  const handleClick = (idx: number, smoothie: Smoothie) => {
    addSmoothie(idx);
    selectSmoothie(smoothie);
    deleteSmoothie(idx);
  };

  return (
    <footer className="max-md-tablet:w-full s-laptop:flex md-tablet:text-base s-phone:grid grid-cols-4 s-laptop:gap-8 absolute bottom-0 md-laptop:left-32 md-desktop:gap-12 md-desktop:left-24 lg-desktop:gap-16 lg-desktop:left-8 lg-desktop:text-3xl s-laptop:left-32 md-tablet:gap-5 md-tablet:right-0 lg-phone:text-sm md-desktop:text-xl max-md-phone:pb-4 max-lg-phone:pb-12 max-lg-phone:pl-4 z-20">
      {smoothies.map((smoothie, idx) => {
        return (
          <div
            key={idx}
            className={`flex ${smoothie.footerBackgroundColor} rounded-t-3xl md-tablet:pt-16 s-laptop:w-36 relative md-desktop:w-48 md-desktop:pb-4 lg-desktop:w-72 lg-desktop:pb-8 lg-desktop:pt-28 lg-phone:pb-2 s-laptop:pb-2 lg-phone:pt-40 max-lg-phone:h-20 cursor-pointer justify-center`}
            onClick={() => handleClick(idx, smoothie)}
          >
            <img
              src={smoothie.src}
              alt={smoothie.alt}
              className={`md-tablet:h-28 s-laptop:-top-12 md-desktop:h-32 absolute md-desktop:-top-20 s-laptop:left-6 rounded-full border-2 ${smoothie.borderColor} md-desktop:left-8 lg-desktop:left-12 lg-desktop:w-48 lg-desktop:h-48 lg-desktop:-top-24 lg-desktop:border-4 md-tablet:-top-16 md-tablet:left-8 lg-phone:h-20 lg-phone:left-3 lg-phone:-top-8 ${smoothie.shadowColor} md-phone:h-16 s-laptop:h-24 s-phone:h-16`}
            />
            <p
              className={`text-center font-semibold hidden ${smoothie.className} md-tablet:flex md-tablet:max-w-48 lg-desktop:max-w-64`}
            >
              {smoothie.text}
            </p>
          </div>
        );
      })}
    </footer>
  );
}
