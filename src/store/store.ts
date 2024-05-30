import { create } from "zustand";

const useSmoothiesStore = create((set) => ({
  selectedSmoothie: "Berry Smoothie Bowl",
  selectSmoothie: (smoothie: string) => set({ selectedSmoothie: smoothie }),
}));

export default useSmoothiesStore;
