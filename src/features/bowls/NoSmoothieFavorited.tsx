import notInFavorite from "@/assets/icons/not-added-favorite.svg";
import useSmoothiesStore from "@/store/store";

export default function NoSmoothieFavorited() {
  const { currentFilter, favoriteSmoothiesList } = useSmoothiesStore(
    (state) => state
  );
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
