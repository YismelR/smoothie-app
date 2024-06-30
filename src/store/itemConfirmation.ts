import { Smoothie } from "@/types";
import { create } from "zustand";
type ShoppingCartStore = {
  quantity: number;
  totalNumberItems: number;
  totalAmount: number;
  smoothiesInCart: Array<Smoothie>;
};

const useShoppingCartStore = create<ShoppingCartStore>((set) => ({
  quantity: 0,
  totalNumberItems: 0,
  totalAmount: 0,
  smoothiesInCart: [],
}));

export default useShoppingCartStore;
