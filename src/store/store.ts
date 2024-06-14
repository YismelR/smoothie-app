import { create } from "zustand";
import { Smoothie } from "@/types";
import pinkBowl from "@/assets/images/berry-smoothie.png";
import pinkBowl2 from "@/assets/images/pink-paradise.png";
import pinkBowl3 from "@/assets/images/strawberry-banana-smoothie.png";

import strawberry from "@/assets/icons/strawberry.svg";
import raspberry from "@/assets/icons/raspberry.svg";
import { smoothies } from "@/store/smoothies";
import { smoothiesList } from "./smoothiesList";

type SmoothieStore = {
  selectedSmoothie: Smoothie;
  smoothies: Array<Smoothie>;
  smoothiesList: Array<Smoothie>;
  selectSmoothie: (smoothie: Smoothie) => void;
  addSmoothie: (idx: number) => void;
  deleteSmoothie: (idx: number) => void;
};

const useSmoothiesStore = create<SmoothieStore>((set) => ({
  smoothies: smoothies,
  smoothiesList: smoothiesList,
  selectedSmoothie: {
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
    relatedSmoothies: [
      {
        src: pinkBowl2,
        alt: "Pink Paradise Smoothie",
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
        text: "Pink Paradise Smoothie",
        isFavorite: false,
        className: "",
        content: [strawberry, raspberry],
        nutritionalVal: ["155", "0g", "35g", "5g", "54mg"],
        price: "10.99",
        relatedSmoothies: [],
      },
      {
        src: pinkBowl3,
        alt: "Strawberry Banana Smoothie",
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
        text: "Strawberry Banana Smoothie",
        className: "",
        content: [strawberry, raspberry],
        nutritionalVal: ["155", "0g", "35g", "5g", "54mg"],
        price: "19.75",
        relatedSmoothies: [],
      },
      {
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
        className: "",
        content: [strawberry, raspberry],
        nutritionalVal: ["155", "0g", "35g", "5g", "54mg"],
        price: "18.99",
        relatedSmoothies: [],
      },
    ],
  },

  selectSmoothie: (smoothie) => set({ selectedSmoothie: smoothie }),

  deleteSmoothie: (idx: number) =>
    set((state) => {
      state.smoothies.splice(idx + 1, 1);
      return {
        smoothies: state.smoothies,
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
