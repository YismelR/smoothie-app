import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import useSmoothiesStore from "@/store/store";
import { DrawerDialog } from "../dialog-pop-drawer/DrawerDialog";
import BowlCartButton from "./BowlCartButton";
import FavoriteButton from "../favorite/FavoriteButton";
import { useEffect, useState } from "react";
import { CardSkeleton } from "./CardSkeleton";

export default function BowlsList() {
  const {
    smoothiesList,

    currentFilter,
    favoriteSmoothiesList,
  } = useSmoothiesStore((state) => state);

  const smoothiesDisplay =
    currentFilter === "favorite" ? favoriteSmoothiesList : smoothiesList;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or fetch your data here
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  }, []);

  return (
    <div className="flex-col s-phone:flex s-phone:gap-8 s-phone:px-4 lg-phone:px-8 md-tablet:grid md-tablet:grid-cols-2 md-tablet:gap-10 md-tablet:px-10 s-laptop:grid-cols-3 md-laptop:gap-12 md-laptop:px-32 md-desktop:gap-20">
      {smoothiesDisplay.map((smoothie, idx) => {
        const heartId = `heartChecked-${idx}`;
        if (isLoading) {
          return <CardSkeleton key={idx} />;
        }
        return (
          <Card
            key={idx}
            className="cursor-pointer place-items-center overflow-hidden bg-white shadow-cardShadow s-phone:flex s-phone:rounded-2xl md-tablet:grid"
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
            <CardHeader className="gap-2 bg-white px-4 s-phone:w-full md-tablet:p-4 md-desktop:gap-6 md-desktop:p-8">
              <div className="s-phone:flex s-phone:place-items-center s-phone:gap-4 md-phone:justify-between md-tablet:gap-0">
                <Link to={`/details/${smoothie.id}`} className="w-full">
                  <CardTitle className="s-phone:text-sm md-phone:text-base md-tablet:text-xl s-laptop:text-lg md-desktop:text-2xl lg-desktop:text-3xl">
                    {smoothie.text}
                  </CardTitle>
                </Link>
                <FavoriteButton heartId={heartId} smoothie={smoothie} />
              </div>
              <div className="flex place-items-center justify-between gap-4">
                <Link to={`/details/${smoothie.id}`}>
                  <CardDescription className="md-tablet:text-base md-desktop:text-xl lg-desktop:text-2xl">
                    ${smoothie.price}
                  </CardDescription>
                </Link>
                <DrawerDialog
                  count={1}
                  ButtonTrigger={<BowlCartButton count={1} id={smoothie.id} />}
                  smoothieId={smoothie.id}
                />
              </div>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}
