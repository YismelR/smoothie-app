import { forwardRef, LegacyRef } from "react";
import { Button } from "@/components/ui/button";
import useShoppingCartStore, { CartSmoothie } from "@/store/cartConfirmation";
import { Smoothie } from "@/types";
import { DialogTrigger } from "@/components/ui/dialog";
import useSmoothiesStore from "@/store/store";
// import AddCart from "@/assets/icons/add-to-cart.svg";
type BowlsCartProps = {
  count: number;
  id: number;
};

export default forwardRef(function BowlCartButton(
  { count, id }: BowlsCartProps,
  ref: LegacyRef<HTMLButtonElement>
) {
  const addItem = useShoppingCartStore((state) => state.addItem);
  const smoothie = useSmoothiesStore((state) =>
    state.smoothiesList.find((smoothie) => smoothie.id === id)
  );
  const handleAddToCart = (count: number, smoothie?: Smoothie) => {
    if (smoothie === undefined) {
      return;
    }
    const copy: CartSmoothie = { ...smoothie, quantity: count };
    addItem(copy);
  };
  return (
    <DialogTrigger asChild>
      <Button
        variant="outline"
        className={`text-white bg-pink-darker px-4 py-2 rounded-[2rem] cursor-pointer lg-phone:text-xl md-tablet:text-2xl s-laptop:text-xl md-laptop:text-2xl md-desktop:py-7 lg-desktop:text-4xl lg-desktop:py-8`}
        onClick={() => handleAddToCart(count, smoothie)}
        ref={ref}
      >
        Add To Cart
      </Button>
    </DialogTrigger>
  );
});
