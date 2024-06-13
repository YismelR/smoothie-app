import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useSmoothiesStore from "@/store/store";
import { useState } from "react";
import heartChecked from "@/assets/icons/heart-checked.svg";
import heartUnchecked from "@/assets/icons/heart-unchecked.svg";

export default function RelatedSmoothies() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);
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
    <>
      {selectedSmoothie.relatedSmoothies.map((smoothie, idx) => {
        const heartId = `heartChecked-${idx}`;
        return (
          <Card
            key={idx}
            className="s-phone:flex place-items-center bg-white s-phone:rounded-2xl shadow-cardShadow"
          >
            <CardContent className="p-4 bg-grey-lightCard">
              <img
                src={smoothie.src}
                alt={smoothie.alt}
                className="s-phone:max-w-28"
              />
            </CardContent>
            <CardHeader className="bg-white px-4">
              <CardTitle className="s-phone:text-base s-phone:flex s-phone:place-items-center s-phone:gap-4">
                {smoothie.text}
                <input
                  type="checkbox"
                  id={heartId}
                  className="hidden"
                  checked={isHeartChecked[idx]}
                  onChange={() => handleCheckbox(idx)}
                />
                <label htmlFor={heartId} className="cursor-pointer">
                  <img
                    src={isHeartChecked[idx] ? heartChecked : heartUnchecked}
                    alt="heart favorite"
                    className="s-phone:max-h-5 s-phone:max-w-5 md-tablet:h-8 md-tablet:w-8 lg-desktop:h-10 lg-desktop:w-10 "
                  />
                </label>
              </CardTitle>

              <CardDescription>${smoothie.price}</CardDescription>
            </CardHeader>
          </Card>
        );
      })}
    </>
  );
}
