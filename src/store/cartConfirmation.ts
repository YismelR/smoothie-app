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
  incrementSmoothie: (Smoothie: CartSmoothie) => void;
  decrementSmoothie: (Smoothie: CartSmoothie) => void;
  removeSmoothie: (Smoothie: CartSmoothie) => void;
  removeAllSmoothie: () => void;
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

function incrementSmoothies(
  stateSmoothies: Array<CartSmoothie>,
  smoothie: CartSmoothie
) {
  const searched = stateSmoothies.findIndex(
    (element) => element.id === smoothie.id
  );

  if (searched > -1) {
    const item = stateSmoothies[searched];
    item.quantity++;
    return stateSmoothies;
  }

  return [...stateSmoothies, smoothie];
}
function decrementSmoothies(
  stateSmoothies: Array<CartSmoothie>,
  smoothie: CartSmoothie
) {
  const searched = stateSmoothies.findIndex(
    (element) => element.id === smoothie.id
  );

  if (searched > -1) {
    const item = stateSmoothies[searched];
    item.quantity--;
    return stateSmoothies;
  }

  return [...stateSmoothies, smoothie];
}

function removeSmoothies(
  stateSmoothies: Array<CartSmoothie>,
  smoothie: CartSmoothie
) {
  const searched = stateSmoothies.findIndex(
    (element) => element.id === smoothie.id
  );

  if (searched > -1) {
    const item = stateSmoothies[searched];
    item.quantity = 0;
    stateSmoothies.splice(searched, 1);
    return stateSmoothies;
  }

  return stateSmoothies;
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

  incrementSmoothie: (smoothie: CartSmoothie) =>
    set((state) => {
      const incrementedSmoothie = incrementSmoothies(
        state.smoothiesInCart,
        smoothie
      );
      const totalNumberItems = incrementedSmoothie.reduce(
        (prev, curr) => prev + curr.quantity,
        0
      );
      const totalAmount = incrementedSmoothie.reduce(
        (prev, curr) => prev + curr.quantity * Number(curr.price),
        0
      );
      return {
        smoothiesInCart: incrementedSmoothie,
        totalNumberItems: totalNumberItems,
        totalAmount: totalAmount,
      };
    }),

  decrementSmoothie: (smoothie: CartSmoothie) =>
    set((state) => {
      const decrementedSmoothie = decrementSmoothies(
        state.smoothiesInCart,
        smoothie
      );
      const totalNumberItems = decrementedSmoothie.reduce(
        (prev, curr) => prev + curr.quantity,
        0
      );
      const totalAmount = decrementedSmoothie.reduce(
        (prev, curr) => prev + curr.quantity * Number(curr.price),
        0
      );
      return {
        smoothiesInCart: decrementedSmoothie,
        totalNumberItems: totalNumberItems,
        totalAmount: totalAmount,
      };
    }),

  removeSmoothie: (smoothie: CartSmoothie) =>
    set((state) => {
      const removedSmoothie = removeSmoothies(state.smoothiesInCart, smoothie);

      const totalNumberItems = removedSmoothie.reduce(
        (prev, curr) => prev + curr.quantity,
        0
      );
      const totalAmount = removedSmoothie.reduce(
        (prev, curr) => prev + curr.quantity * Number(curr.price),
        0
      );
      return {
        smoothiesInCart: removedSmoothie,
        totalNumberItems: totalNumberItems,
        totalAmount: totalAmount,
      };
    }),

  removeAllSmoothie: () =>
    set(() => {
      return {
        smoothiesInCart: [],
        totalNumberItems: 0,
        totalAmount: 0,
      };
    }),
}));

export default useShoppingCartStore;
