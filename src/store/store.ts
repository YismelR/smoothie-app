import { create } from "zustand";
import { Smoothie } from "@/types";
import PinkBowl from "@/assets/images/berry-smoothie.png";
import blueBowl from "@/assets/images/blueberry-banana.png";
import greenBowl from "@/assets/images/cucumber-smoothie.png";
import yellowBowl from "@/assets/images/Mango-almond.png";
import purpleBowl from "@/assets/images/purple-hibuscus.png";

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
