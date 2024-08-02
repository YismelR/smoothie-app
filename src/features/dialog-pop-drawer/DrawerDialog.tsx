import * as React from "react";

import { cn } from "@/lib/utils";
import useMediaQuery from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Link } from "react-router-dom";
import addedCart from "@/assets/icons/added-to-cart.svg";
import useShoppingCartStore from "@/store/cartConfirmation";
import useSmoothiesStore from "@/store/store";

type DrawerProps = {
  count: number;
  ButtonTrigger: React.ReactNode;
  smoothieId: number;
};

export function DrawerDialog({
  count,
  ButtonTrigger,
  smoothieId,
}: DrawerProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const { totalAmount, totalNumberItems } = useShoppingCartStore(
    (state) => state,
  );

  // Derived State
  const totalString = totalAmount.toFixed(2);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        {ButtonTrigger}
        <DialogContent className="sm:max-w-[425px] gap-6 rounded-lg lg-desktop:max-w-[700px] lg-desktop:gap-8">
          <DialogHeader className="flex flex-row gap-4">
            <img src={addedCart} alt="added to cart" className="w-10" />
            <div className="flex flex-col">
              <DialogTitle className="lg-desktop:text-3xl">
                {count} Item Added to the Cart
              </DialogTitle>
              <DialogDescription className="lg-desktop:text-2xl">
                ({totalNumberItems}) items in the cart for ${totalString}
              </DialogDescription>
            </div>
          </DialogHeader>
          <ProfileForm smoothieId={smoothieId} />
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="lg-desktop:text-2xl"
              >
                Continue Shopping
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{ButtonTrigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex gap-4 text-left">
          <img src={addedCart} alt="added to cart" className="w-8" />
          <div className="flex flex-col">
            <DrawerTitle>{count} Item Added to the Cart</DrawerTitle>
            <DrawerDescription>
              ({totalNumberItems}) items in the cart for ${totalString}
            </DrawerDescription>
          </div>
        </DrawerHeader>
        <ProfileForm className="px-4" smoothieId={smoothieId} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Continue Shopping</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
type ProfileFormProps = {
  className?: string;
  smoothieId: number;
};

function ProfileForm({ className, smoothieId }: ProfileFormProps) {
  const { totalNumberItems } = useShoppingCartStore((state) => state);
  const smoothie = useSmoothiesStore((state) =>
    state.smoothiesList.find((smoothie) => smoothie.id === smoothieId),
  );
  const currSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);
  if (smoothie === undefined) {
    return;
  }
  return (
    <form
      className={cn(
        "grid items-start gap-4 md-tablet:gap-6 lg-desktop:gap-8",
        className,
      )}
    >
      <div className="flex gap-4 lg-desktop:gap-8">
        <img
          src={smoothie.src}
          alt={smoothie.alt}
          className="max-w-28 md-tablet:max-w-36 lg-desktop:max-w-44"
        />
        <div className="flex flex-col justify-center gap-4 md-tablet:justify-start lg-desktop:justify-center">
          <p className="font-semibold md-tablet:text-2xl lg-desktop:text-3xl">
            {smoothie.text}
          </p>
          <p className="md-tablet:text-xl lg-desktop:text-3xl">
            ${smoothie.price}
          </p>
        </div>
      </div>
      <Link to={"/shopping-cart"} className="flex">
        <Button
          type="submit"
          className={`w-full text-white ${currSmoothie.hoverColor} ${currSmoothie.backgroundColor} shadow-3xl ${currSmoothie.shadowBtnColor} cursor-pointer rounded-[2rem] px-4 py-2 lg-phone:text-xl md-tablet:py-6 md-tablet:text-2xl s-laptop:text-xl md-laptop:text-2xl lg-desktop:py-7 lg-desktop:text-4xl`}
        >
          View Cart ({totalNumberItems})
        </Button>
      </Link>
    </form>
  );
}
