import { Smoothie } from "@/types";
import { create } from "zustand";

export type CartSmoothie = Smoothie & {
  quantity: number;
};

type ShoppingCartStore = {
  totalNumberItems: number;
  totalAmount: number;
  smoothiesInCart: Array<CartSmoothie>;
  addItem: (smoothie: CartSmoothie) => void;
};

function generateSmoothies(
  stateSmoothies: Array<CartSmoothie>,
  smoothie: CartSmoothie
) {
  const searched = stateSmoothies.findIndex(
    (element) => element.id === smoothie.id
  );

  if (searched > -1) {
    const item = stateSmoothies[searched];
    item.quantity = smoothie.quantity;
    return stateSmoothies;
  }

  return [...stateSmoothies, smoothie];
}

const useShoppingCartStore = create<ShoppingCartStore>((set) => ({
  totalNumberItems: 0,
  totalAmount: 0,
  smoothiesInCart: [],

  addItem: (smoothie: CartSmoothie) =>
    set((state) => {
      const smoothiesList = generateSmoothies(state.smoothiesInCart, smoothie);
      const totalNumberItems = smoothiesList.reduce(
        (prev, curr) => prev + curr.quantity,
        0
      );
      const totalAmount = smoothiesList.reduce(
        (prev, curr) => prev + curr.quantity * Number(curr.price),
        0
      );

      return {
        smoothiesInCart: smoothiesList,
        totalNumberItems: totalNumberItems,
        totalAmount: totalAmount,
      };
    }),
}));

export default useShoppingCartStore;
