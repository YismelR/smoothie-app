import { forwardRef, LegacyRef } from "react";
import { Button } from "@/components/ui/button";
import useShoppingCartStore, { CartSmoothie } from "@/store/cartConfirmation";
import { Smoothie } from "@/types";
import { useLoaderData } from "react-router-dom";
import { DialogTrigger } from "@radix-ui/react-dialog";
type DrawerProps = {
  count: number;
};

export default forwardRef(function DetailsCartButton(
  { count }: DrawerProps,
  ref: LegacyRef<HTMLButtonElement>
) {
  const addItem = useShoppingCartStore((state) => state.addItem);
  const smoothie = useLoaderData() as Smoothie;
  const handleAddToCart = (smoothie: Smoothie, count: number) => {
    const copy: CartSmoothie = { ...smoothie, quantity: count };
    addItem(copy);
  };
  return (
    <DialogTrigger asChild>
      <Button
        variant="outline"
        className={`text-white ${smoothie.hoverColor}  ${smoothie.backgroundColor} px-4 py-2 rounded-[2rem] cursor-pointer lg-phone:text-xl md-tablet:text-2xl s-laptop:text-xl md-laptop:text-2xl md-desktop:py-7 lg-desktop:text-4xl lg-desktop:py-8`}
        onClick={() => handleAddToCart(smoothie, count)}
        ref={ref}
      >
        Add To Cart
      </Button>
    </DialogTrigger>
  );
});
