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
  const [isHeartChecked, setIsHeartChecked] = useState(false);

  const handleCheckbox = () => {
    setIsHeartChecked(!isHeartChecked);
  };
  return (
    <>
      {selectedSmoothie.relatedSmoothies.map((smoothie, idx) => {
        const heartId = `heartChecked-${idx}`;
        return (
          <Card
            key={idx}
            className="s-phone:flex place-items-center bg-grey-lightCard s-phone:rounded-2xl shadow-cardShadow"
          >
            <CardContent className="px-4">
              <img
                src={smoothie.src}
                alt={smoothie.alt}
                className="s-phone:max-w-28"
              />
            </CardContent>
            <CardHeader className="bg-white">
              <CardTitle className="s-phone:text-base">
                {smoothie.text}
              </CardTitle>
              <input
                type="checkbox"
                id={heartId}
                className="hidden"
                checked={isHeartChecked}
                onChange={handleCheckbox}
              />
              <label htmlFor={heartId} className="cursor-pointer">
                <img
                  src={isHeartChecked ? heartChecked : heartUnchecked}
                  alt="heart favorite"
                  className="h-5 w-5 md-tablet:h-8 md-tablet:w-8 lg-desktop:h-10 lg-desktop:w-10"
                />
              </label>
              <CardDescription>${smoothie.price}</CardDescription>
            </CardHeader>
          </Card>
        );
      })}
    </>
  );
}
