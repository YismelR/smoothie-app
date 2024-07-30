import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useSmoothiesStore from "@/store/store";
import { generateListOfSmoothies } from "@/store/store";
import { Link, useLoaderData } from "react-router-dom";
import { Smoothie } from "@/types";
import FavoriteButton from "../favorite/FavoriteButton";

export default function RelatedSmoothies() {
  const { smoothiesList } = useSmoothiesStore((state) => state);
  const smoothie = useLoaderData() as Smoothie;

  const relatedSmoothieIDs = smoothie.relatedSmoothies;

  const relatedSmoothies = generateListOfSmoothies(
    smoothiesList,
    relatedSmoothieIDs,
  );

  return (
    <div className="flex-col s-phone:flex s-phone:gap-8 s-laptop:grid s-laptop:grid-cols-3 md-laptop:gap-12 md-desktop:gap-20">
      {relatedSmoothies.map((smoothie, idx) => {
        const heartId = `heartChecked-${idx}`;
        return (
          <Card
            key={idx}
            className="cursor-pointer place-items-center overflow-hidden bg-white shadow-cardShadow s-phone:flex s-phone:rounded-2xl s-laptop:grid"
          >
            <Link to={`/details/${smoothie.id}`} className="w-full">
              <CardContent className="bg-grey-lightCard p-4 s-phone:flex s-phone:w-full s-phone:justify-center md-desktop:p-8 lg-desktop:p-12">
                <img
                  src={smoothie.src}
                  alt={smoothie.alt}
                  className="s-phone:max-w-28 md-laptop:max-w-36 md-desktop:max-w-44 lg-desktop:max-w-60"
                />
              </CardContent>
            </Link>
            <CardHeader className="bg-white px-4 s-phone:w-full s-laptop:p-4 md-desktop:p-8">
              <div className="relative s-phone:flex s-phone:place-items-center s-phone:gap-4 md-phone:justify-between md-tablet:gap-0">
                <Link to={`/details/${smoothie.id}`} className="w-full">
                  <CardTitle className="s-phone:text-sm md-phone:text-base md-tablet:text-xl s-laptop:text-lg md-desktop:text-2xl lg-desktop:text-3xl">
                    {smoothie.text}
                  </CardTitle>
                </Link>
                <FavoriteButton heartId={heartId} smoothie={smoothie} />
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
