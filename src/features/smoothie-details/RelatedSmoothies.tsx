import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useSmoothiesStore from "@/store/store";
import heartChecked from "@/assets/icons/heart-checked.svg";
import heartUnchecked from "@/assets/icons/heart-unchecked.svg";
import { generateListOfSmoothies } from "@/store/store";
import { Link, useLoaderData } from "react-router-dom";
import { Smoothie } from "@/types";

export default function RelatedSmoothies() {
  const { smoothiesList, changeFavorite } = useSmoothiesStore((state) => state);
  const smoothie = useLoaderData() as Smoothie;

  const relatedSmoothieIDs = smoothie.relatedSmoothies;

  const relatedSmoothies = generateListOfSmoothies(
    smoothiesList,
    relatedSmoothieIDs
  );

  const handleCheckbox = (smoothie: Smoothie) => {
    let isFavorite = !smoothie.isFavorite;
    changeFavorite(smoothie, isFavorite);
  };

  return (
    <div className="s-phone:flex flex-col s-phone:gap-8 md-laptop:gap-12 md-desktop:gap-20 s-laptop:grid s-laptop:grid-cols-3">
      {relatedSmoothies.map((smoothie, idx) => {
        const heartId = `heartChecked-${idx}`;
        return (
          <Card
            key={idx}
            className="s-phone:flex s-laptop:grid place-items-center bg-white s-phone:rounded-2xl shadow-cardShadow overflow-hidden cursor-pointer"
          >
            <Link to={`/details/${smoothie.id}`} className="w-full">
              <CardContent className="p-4 md-desktop:p-8 lg-desktop:p-12 s-phone:w-full s-phone:flex s-phone:justify-center bg-grey-lightCard">
                <img
                  src={smoothie.src}
                  alt={smoothie.alt}
                  className="s-phone:max-w-28 md-laptop:max-w-36 md-desktop:max-w-44 lg-desktop:max-w-60"
                />
              </CardContent>
            </Link>
            <CardHeader className="bg-white px-4 s-laptop:p-4 md-desktop:p-8  s-phone:w-full">
              <div className="s-phone:flex s-phone:place-items-center s-phone:gap-4 md-tablet:gap-0 md-phone:justify-between relative">
                <Link to={`/details/${smoothie.id}`} className="w-full">
                  <CardTitle className="s-phone:text-sm md-phone:text-base md-tablet:text-xl s-laptop:text-lg md-desktop:text-2xl lg-desktop:text-3xl  ">
                    {smoothie.text}
                  </CardTitle>
                </Link>
                <input
                  type="checkbox"
                  id={heartId}
                  className="hidden"
                  checked={smoothie.isFavorite}
                  onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleCheckbox(smoothie);
                  }}
                />
                <label
                  htmlFor={heartId}
                  className="cursor-pointer s-phone:flex-shrink-0 md-tablet:flex-shrink s-phone:h-5 s-phone:w-5 md-tablet:h-5 md-tablet:w-5 md-desktop:h-6 md-desktop:w-6 lg-desktop:h-10 lg-desktop:w-10 z-50"
                >
                  <img
                    src={smoothie.isFavorite ? heartChecked : heartUnchecked}
                    alt="heart favorite"
                    className="lg-desktop:h-10 lg-desktop:w-10 "
                  />
                </label>
              </div>
              <Link to={`/details/${smoothie.id}`}>
                <CardDescription className="md-tablet:text-base md-desktop:text-xl lg-desktop:text-2xl">
                  ${smoothie.price}
                </CardDescription>
              </Link>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}