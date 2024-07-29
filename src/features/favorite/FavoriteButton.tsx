import { Smoothie } from "@/types";
import heartChecked from "@/assets/icons/heart-checked.svg";
import heartUnchecked from "@/assets/icons/heart-unchecked.svg";
import useSmoothiesStore from "@/store/store";
type FavoriteSmoothieProps = {
  heartId: string;
  smoothie: Smoothie;
};
export default function FavoriteButton({
  heartId,
  smoothie,
}: FavoriteSmoothieProps) {
  const { changeFavorite, filterFavoriteSmoothie } = useSmoothiesStore(
    (state) => state,
  );
  const handleCheckbox = (smoothie: Smoothie) => {
    let isFavorite = !smoothie.isFavorite;
    changeFavorite(smoothie, isFavorite);
    filterFavoriteSmoothie();
  };
  return (
    <>
      <input
        type="checkbox"
        id={heartId}
        className="hidden"
        checked={smoothie.isFavorite}
        onChange={() => handleCheckbox(smoothie)}
      />
      <label
        htmlFor={heartId}
        className="cursor-pointer s-phone:h-5 s-phone:w-5 s-phone:flex-shrink-0 md-tablet:h-5 md-tablet:w-5 md-tablet:flex-shrink md-desktop:h-6 md-desktop:w-6 lg-desktop:h-10 lg-desktop:w-10"
      >
        <img
          src={smoothie.isFavorite ? heartChecked : heartUnchecked}
          alt="heart favorite"
          className="lg-desktop:h-10 lg-desktop:w-10"
        />
      </label>
    </>
  );
}
