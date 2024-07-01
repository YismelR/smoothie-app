import { Smoothie } from "@/types";
import { create } from "zustand";
type ShoppingCartStore = {
  quantity: number;
  totalNumberItems: number;
  totalAmount: number;
  smoothiesInCart: Array<Smoothie>;
  addItem: (smoothie: Smoothie) => void;
};

const useShoppingCartStore = create<ShoppingCartStore>((set) => ({
  quantity: 0,
  totalNumberItems: 0,
  totalAmount: 0,
  smoothiesInCart: [],

  addItem: (smoothie: Smoothie) =>
    set((state) => {
      const smoothiesList = [...state.smoothiesInCart, smoothie];
      const quantity = state.quantity + 1;
      const totalNumberItems = state.totalNumberItems + 1;
      const totalAmount = state.totalAmount + parseFloat(smoothie.price);
      return {
        smoothiesInCart: smoothiesList,
        quantity: quantity,
        totalNumberItems: totalNumberItems,
        totalAmount: totalAmount,
      };
    }),
}));

export default useShoppingCartStore;
