import useSmoothiesStore from "@/store/store";
import BowlsList from "./BowlsList";
import Favorite from "./Favorite";
import notInFavorite from "@/assets/icons/not-added-favorite.svg";

export default function Bowls() {
  const { currentFilter, favoriteSmoothiesList } = useSmoothiesStore(
    (state) => state
  );
  const heightScreen =
    currentFilter === "favorite" && favoriteSmoothiesList.length === 0
      ? "h-screen"
      : "";

  function noSmoothieFavorited() {
    if (currentFilter === "favorite" && favoriteSmoothiesList.length === 0) {
      return (
        <div className="flex flex-col place-items-center gap-8 mt-12">
          <h1 className="font-semibold text-center px-4 md-desktop:text-xl lg-desktop:text-3xl">
            YOUR FAVORITE BOWLS LIST IS EMPTY. WHY NOT ADD SOME NOW?
          </h1>
          <img src={notInFavorite} alt="not in favorite" className="size-24" />
        </div>
      );
    }
  }
  return (
    <div className={`s-phone:pb-16 lg-desktop:pb-28 ${heightScreen}`}>
      <h1 className=" s-phone:text-2xl s-phone:flex s-phone:justify-center s-phone:my-8 s-phone:font-bold md-tablet:text-3xl md-tablet:mb-10 md-desktop:text-4xl lg-desktop:text-5xl lg-desktop:my-20">
        <div className="relative overflow-hidden lg-desktop:pb-4 s-phone:pb-2">
          Bowls
          <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 animate-underline"></span>
        </div>
      </h1>
      <Favorite />
      {noSmoothieFavorited()}
      <BowlsList />
    </div>
  );
}
