import { create } from "zustand";

type FavoriteSmoothieStore = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const useFavoriteSmoothieStore = create<FavoriteSmoothieStore>((set) => ({
  open: false,

  setOpen: (open) =>
    set(() => ({
      open: open,
    })),
}));

export default useFavoriteSmoothieStore;
