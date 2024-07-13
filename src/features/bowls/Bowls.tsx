import useSmoothiesStore from "@/store/store";
import BowlsList from "./BowlsList";
import Favorite from "./Favorite";
import NoSmoothieFavorited from "./NoSmoothieFavorited";

export default function Bowls() {
  const { currentFilter, favoriteSmoothiesList } = useSmoothiesStore(
    (state) => state
  );
  const heightScreen =
    currentFilter === "favorite" && favoriteSmoothiesList.length === 0
      ? "h-screen"
      : "";

  return (
    <div className={`s-phone:pb-16 lg-desktop:pb-28 ${heightScreen}`}>
      <h1 className=" s-phone:text-2xl s-phone:flex s-phone:justify-center s-phone:my-8 s-phone:font-bold md-tablet:text-3xl md-tablet:mb-10 md-desktop:text-4xl lg-desktop:text-5xl lg-desktop:my-20">
        <div className="relative overflow-hidden lg-desktop:pb-4 s-phone:pb-2">
          Bowls
          <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 animate-underline"></span>
        </div>
      </h1>
      <Favorite />
      <NoSmoothieFavorited />
      <BowlsList />
    </div>
  );
}
