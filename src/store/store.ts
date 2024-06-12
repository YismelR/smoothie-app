import { create } from "zustand";
import { Smoothie } from "@/types";
import PinkBowl from "@/assets/images/berry-smoothie.png";
import blueBowl from "@/assets/images/blueberry-banana.png";
import greenBowl from "@/assets/images/cucumber-smoothie.png";
import yellowBowl from "@/assets/images/Mango-almond.png";
import purpleBowl from "@/assets/images/purple-hibuscus.png";
import strawberry from "@/assets/icons/strawberry.svg";
import raspberry from "@/assets/icons/raspberry.svg";
import blueberry from "@/assets/icons/blueberries.svg";
import blueRaspberry from "@/assets/icons/blue-raspberry.svg";
import banana from "@/assets/icons/banana.svg";
import coconut from "@/assets/icons/coconut.svg";
import cucumber from "@/assets/icons/cucumber.svg";
import dragonFruit from "@/assets/icons/dragonfruit.svg";
import mango from "@/assets/icons/mango.svg";
import pineapple from "@/assets/icons/pineapple.svg";

type SmoothieStore = {
  selectedSmoothie: Smoothie;
  smoothies: Array<Smoothie>;
  selectSmoothie: (smoothie: Smoothie) => void;
  addSmoothie: (idx: number) => void;
  deleteSmoothie: (idx: number) => void;
};

const useSmoothiesStore = create<SmoothieStore>((set) => ({
  smoothies: [
    {
      src: blueBowl,
      alt: "blueberry bowl",
      borderColor: "border-blue-darker",
      shadowColor: "max-md-tablet:shadow-[0_10px_20px_rgb(100,149,237)]",
      backgroundColor: "bg-blue-darker",
      footerBackgroundColor: "md-tablet:bg-blue-lightest",
      mainBackgroundColor:
        "bg-gradient-to-r from-blue-darker from-50% to-blue-light to-50% ",
      bgFill: "fill-blue-light",
      hoverColor: "hover:bg-blue-light",
      text: "Blueberry Banana Smoothie",
      textColor: "text-blue-darker",
      shadowBtnColor: "shadow-blue-darker",
      logoFill: "fill-blue-darker",
      className: "",
      content: [blueberry, blueRaspberry],
      nutritionalVal: ["209", "3g", "35g", "14g", "44mg"],
      price: "15.75",
    },
    {
      src: greenBowl,
      alt: "cucumber bowl",
      borderColor: "border-green-darker",
      shadowColor: "max-md-tablet:shadow-[0_10px_20px_rgb(85,107,47)]",
      backgroundColor: "bg-green-darker",
      footerBackgroundColor: "md-tablet:bg-green-lightest",
      mainBackgroundColor:
        "bg-gradient-to-r from-green-darker from-50% to-green-light to-50% ",
      bgFill: "fill-green-light",
      logoFill: "fill-green-darker",
      hoverColor: "hover:bg-green-light",
      shadowBtnColor: "shadow-green-darker",
      text: "Cucumber Smoothie",
      textColor: "text-green-darker",
      className: "md-tablet:px-8",
      content: [banana, cucumber, pineapple],
      nutritionalVal: ["389", "1.4g", "96.6g", "4.8g", "17.2mg"],
      price: "13.25",
    },
    {
      src: purpleBowl,
      alt: "hibiscus chia bowl",
      borderColor: "border-purple-darker",
      shadowColor: "max-md-tablet:shadow-[0_10px_20px_rgb(128,0,128)]",
      backgroundColor: "bg-purple-darker",
      footerBackgroundColor: "md-tablet:bg-purple-lightest",
      mainBackgroundColor:
        "bg-gradient-to-r from-purple-darker from-50% to-purple-light to-50% ",
      bgFill: "fill-purple-light",
      logoFill: "fill-purple-darker",
      hoverColor: "hover:bg-purple-light",
      shadowBtnColor: "shadow-purple-darker",
      text: "Hibiscus Chia Smoothie",
      textColor: "text-purple-darker",
      className: "md-tablet:px-5",
      content: [banana, strawberry, dragonFruit],
      nutritionalVal: ["209", "3g", "35g", "14g", "44mg"],
      price: "17.99",
    },
    {
      src: yellowBowl,
      alt: "mango bowl",
      borderColor: "border-yellow-darker",
      shadowColor: "max-md-tablet:shadow-[0_10px_20px_rgb(240,128,128)]",
      backgroundColor: "bg-yellow-darker",
      footerBackgroundColor: "md-tablet:bg-yellow-lightest",
      text: "Mango-Almond Smoothie",
      mainBackgroundColor:
        "bg-gradient-to-r from-yellow-darker from-50% to-yellow-light to-50% ",
      bgFill: "fill-yellow-light",
      logoFill: "fill-yellow-darker",
      hoverColor: "hover:bg-yellow-light",
      shadowBtnColor: "shadow-yellow-darker",
      textColor: "text-yellow-darker",
      className: "",
      content: [mango, pineapple, banana, coconut],
      nutritionalVal: ["209", "3g", "35g", "14g", "44mg"],
      price: "19.99",
    },
  ],

  selectedSmoothie: {
    src: PinkBowl,
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
