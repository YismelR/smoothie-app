import { create } from "zustand";
import { Smoothie } from "@/types";
import pinkBowl from "@/assets/images/berry-smoothie.png";

import strawberry from "@/assets/icons/strawberry.svg";
import raspberry from "@/assets/icons/raspberry.svg";
import { smoothiesList } from "./smoothiesList";

type SmoothieStore = {
  selectedSmoothie: Smoothie;
  smoothies: Array<Smoothie>;
  smoothiesList: Array<Smoothie>;
  selectSmoothie: (smoothie: Smoothie) => void;
  addSmoothie: (idx: number) => void;
  deleteSmoothie: (idx: number) => void;
  changeFavorite: (smoothie: Smoothie, isFavorite: boolean) => void;
};

const ids = [1, 4, 10, 13];

export function generateListOfSmoothies(
  smoothieList: Array<Smoothie>,
  ids: Array<number>
) {
  const res: Array<Smoothie> = [];

  for (let idx = 0; idx < ids.length; idx++) {
    const id = ids[idx];

    const smoothie = smoothieList.find((smoothie) => smoothie.id === id);
    if (smoothie === undefined) {
      continue;
    }

    res.push(smoothie);
  }

  return res;
}

const useSmoothiesStore = create<SmoothieStore>((set) => ({
  smoothies: generateListOfSmoothies(smoothiesList, ids),
  smoothiesList: smoothiesList,
  selectedSmoothie: {
    id: 7,
    src: pinkBowl,
    alt: "Berry Strawberry Smoothie",
    borderColor: "border-pink-darker",
    shadowColor: "max-md-tablet:shadow-[0_10px_20px_rgb(223,64,98)]",
    backgroundColor: "bg-pink-darker",
    hoverColor: "hover:bg-pink-light",
    mainBackgroundColor:
      "bg-gradient-to-r from-pink-darker from-50% to-pink-light to-50% ",
    footerBackgroundColor: "md-tablet:bg-pink-lightest",
    bgFill: "fill-pink-lightest",
    logoFill: "fill-pink-darker",
    textColor: "text-pink-darker",
    shadowBtnColor: "shadow-pink-darker",
    text: "Berry-Strawberry Smoothie",
    isFavorite: false,
    className: "",
    content: [strawberry, raspberry],
    nutritionalVal: ["155", "0g", "35g", "5g", "54mg"],
    price: "18.99",
    relatedSmoothies: [8, 9, 7],
  },

  selectSmoothie: (smoothie) => set({ selectedSmoothie: smoothie }),

  deleteSmoothie: (idx: number) =>
    set((state) => {
      state.smoothies.splice(idx + 1, 1);
      return {
        smoothies: state.smoothies,
      };
    }),

  changeFavorite: (smoothie: Smoothie, isFavorite: boolean) =>
    set((state) => {
      return {
        ...state,
        smoothiesList: state.smoothiesList.map((stateSmoothie) => {
          if (stateSmoothie.id === smoothie.id) {
            stateSmoothie.isFavorite = isFavorite;
          }

          return stateSmoothie;
        }),
      };
    }),

  addSmoothie: (idx: number) =>
    set((state) => {
      const smoothie = [
        ...state.smoothies.slice(0, idx),
        state.selectedSmoothie,
        ...state.smoothies.slice(idx),
      ];

      return {
        smoothies: smoothie,
      };
    }),
}));

export default useSmoothiesStore;
