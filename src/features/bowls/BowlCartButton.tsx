import { forwardRef, LegacyRef } from "react";
import { Button } from "@/components/ui/button";
import useShoppingCartStore, { CartSmoothie } from "@/store/cartConfirmation";
import { Smoothie } from "@/types";
import { DialogTrigger } from "@/components/ui/dialog";
import useSmoothiesStore from "@/store/store";
import useMediaQuery from "@/hooks/use-media-query";
import AddCart from "@/assets/icons/add-to-cart.svg";
type BowlsCartProps = {
  count: number;
  id: number;
};

export default forwardRef(function BowlCartButton(
  { count, id }: BowlsCartProps,
  ref: LegacyRef<HTMLButtonElement>
) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const addItem = useShoppingCartStore((state) => state.addItem);
  const smoothie = useSmoothiesStore((state) =>
    state.smoothiesList.find((smoothie) => smoothie.id === id)
  );
  const currSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);
  const handleAddToCart = (count: number, smoothie?: Smoothie) => {
    if (smoothie === undefined) {
      return;
    }
    const copy: CartSmoothie = { ...smoothie, quantity: count };
    addItem(copy);
  };

  const buttonText = isDesktop ? "Add To Cart" : "";

  return (
    <DialogTrigger asChild>
      <Button
        variant="outline"
        className={`flex gap-2 text-white ${currSmoothie?.backgroundColor} opacity-80 ${currSmoothie.hoverColor} rounded-xl cursor-pointer md-tablet:text-base md-desktop:text-xl md-desktop:py-7 lg-desktop:text-2xl lg-desktop:py-8`}
        onClick={() => handleAddToCart(count, smoothie)}
        ref={ref}
      >
        <img src={AddCart} alt="add to cart" className="lg-desktop:size-8" />
        {buttonText}
      </Button>
    </DialogTrigger>
  );
});
