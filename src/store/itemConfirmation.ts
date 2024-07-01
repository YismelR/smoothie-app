import { Smoothie } from "@/types";
import { create } from "zustand";
type ShoppingCartStore = {
  quantity: number;
  totalNumberItems: number;
  totalAmount: number;
  smoothiesInCart: Array<Smoothie>;
  addItem: (smoothie: Smoothie, count: number) => void;
};

const useShoppingCartStore = create<ShoppingCartStore>((set) => ({
  quantity: 0,
  totalNumberItems: 0,
  totalAmount: 0,
  smoothiesInCart: [],

  addItem: (smoothie: Smoothie, count: number) =>
    set((state) => {
      const smoothiesList = [...state.smoothiesInCart, smoothie];
      const quantity = count;
      const totalNumberItems = state.totalNumberItems + quantity;
      const totalAmount = state.totalAmount + Number(smoothie.price);

      return {
        smoothiesInCart: smoothiesList,
        quantity: quantity,
        totalNumberItems: totalNumberItems,
        totalAmount: totalAmount,
      };
    }),
}));

export default useShoppingCartStore;
