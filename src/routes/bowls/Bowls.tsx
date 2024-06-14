import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import useSmoothiesStore from "@/store/store";
import { useState } from "react";
import heartChecked from "@/assets/icons/heart-checked.svg";
import heartUnchecked from "@/assets/icons/heart-unchecked.svg";

export default function Bowls() {
  const { selectedSmoothie, smoothiesList } = useSmoothiesStore(
    (state) => state
  );
  const [isHeartChecked, setHeartChecked] = useState(
    selectedSmoothie.relatedSmoothies.map(() => false)
  );

  const handleCheckbox = (idx: number) => {
    setHeartChecked((prev: any) => {
      const newCheckedStates = [...prev];
      newCheckedStates[idx] = !newCheckedStates[idx];
      return newCheckedStates;
    });
  };
  return (
    <div className="md-tablet:mb-16">
      <h1 className=" s-phone:text-2xl s-phone:flex s-phone:justify-center s-phone:my-8 s-phone:font-semibold md-tablet:text-3xl md-tablet:mb-16">
        <div className="relative overflow-hidden">
          Bowls
          <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 animate-underline"></span>
        </div>
      </h1>
      <div className="s-phone:flex flex-col s-phone:px-4 s-phone:gap-8 lg-phone:px-8  md-tablet:grid md-tablet:grid-cols-2 md-tablet:gap-10 md-tablet:px-10 s-laptop:grid-cols-3 md-laptop:gap-12 md-desktop:gap-20 ">
        {smoothiesList.map((smoothie, idx) => {
          const heartId = `heartChecked-${idx}`;
          return (
            <Card
              key={idx}
              className="s-phone:flex md-tablet:grid place-items-center bg-white s-phone:rounded-2xl shadow-cardShadow overflow-hidden cursor-pointer"
            >
              <CardContent className="p-4 md-desktop:p-8 lg-desktop:p-12 s-phone:w-full s-phone:flex s-phone:justify-center bg-grey-lightCard">
                <img
                  src={smoothie.src}
                  alt={smoothie.alt}
                  className="s-phone:max-w-28 md-laptop:max-w-36 md-desktop:max-w-44 lg-desktop:max-w-60"
                />
              </CardContent>
              <CardHeader className="bg-white px-4 md-tablet:p-4 md-desktop:p-8  s-phone:w-full">
                <div className="s-phone:flex s-phone:place-items-center s-phone:gap-4 md-tablet:gap-0 md-phone:justify-between">
                  <CardTitle className="s-phone:text-sm md-phone:text-base md-tablet:text-xl s-laptop:text-lg md-desktop:text-2xl lg-desktop:text-3xl ">
                    {smoothie.text}
                  </CardTitle>
                  <input
                    type="checkbox"
                    id={heartId}
                    className="hidden"
                    checked={isHeartChecked[idx]}
                    onChange={() => handleCheckbox(idx)}
                  />
                  <label
                    htmlFor={heartId}
                    className="cursor-pointer s-phone:flex-shrink-0 md-tablet:flex-shrink s-phone:h-5 s-phone:w-5 md-tablet:h-5 md-tablet:w-5 md-desktop:h-6 md-desktop:w-6 lg-desktop:h-10 lg-desktop:w-10 "
                  >
                    <img
                      src={isHeartChecked[idx] ? heartChecked : heartUnchecked}
                      alt="heart favorite"
                      className="lg-desktop:h-10 lg-desktop:w-10 "
                    />
                  </label>
                </div>

                <CardDescription className="md-tablet:text-base md-desktop:text-xl lg-desktop:text-2xl">
                  ${smoothie.price}
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
