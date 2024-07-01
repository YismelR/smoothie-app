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
  DialogTrigger,
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
import { Link, useLoaderData } from "react-router-dom";
import { Smoothie } from "@/types";
import addedCart from "@/assets/icons/added-to-cart.svg";
import useShoppingCartStore from "@/store/itemConfirmation";

export function DrawerDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const smoothie = useLoaderData() as Smoothie;
  const addItems = useShoppingCartStore((state) => state.addItem);

  const handleAddToCart = (smoothie: Smoothie) => {
    addItems(smoothie);
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className={`text-white ${smoothie.hoverColor}  ${smoothie.backgroundColor} px-4 py-2 rounded-[2rem] cursor-pointer lg-phone:text-xl md-tablet:text-2xl s-laptop:text-xl md-laptop:text-2xl md-desktop:py-7 lg-desktop:text-4xl lg-desktop:py-8`}
            onClick={() => handleAddToCart(smoothie)}
          >
            Add To Cart
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] gap-6 lg-desktop:gap-8">
          <DialogHeader className=" flex flex-row gap-4">
            <img src={addedCart} alt="added to cart" className="w-10" />
            <div className="flex flex-col">
              <DialogTitle className="lg-desktop:text-3xl">
                1 Item Added to the Cart
              </DialogTitle>
              <DialogDescription className="lg-desktop:text-2xl">
                (2) items in the cart for $40.99
              </DialogDescription>
            </div>
          </DialogHeader>
          <ProfileForm />
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
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className={`text-white ${smoothie.hoverColor} ${smoothie.backgroundColor} px-4 py-2 rounded-[2rem] cursor-pointer lg-phone:text-xl md-tablet:text-2xl s-laptop:text-xl md-laptop:text-2xl lg-desktop:text-4xl lg-desktop:py-4`}
        >
          Add To Cart
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left flex gap-4">
          <img src={addedCart} alt="added to cart" className="w-8" />
          <div className="flex flex-col">
            <DrawerTitle>1 Item Added to the Cart</DrawerTitle>
            <DrawerDescription>
              (2) items in the cart for $40.99
            </DrawerDescription>
          </div>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Continue Shopping</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  const smoothie = useLoaderData() as Smoothie;

  return (
    <form
      className={cn(
        "grid items-start gap-4 md-tablet:gap-6 lg-desktop:gap-8",
        className
      )}
    >
      <div className="flex gap-4 lg-desktop:gap-8">
        <img
          src={smoothie.src}
          alt={smoothie.alt}
          className="max-w-28 md-tablet:max-w-36 lg-desktop:max-w-44"
        />
        <div className="flex flex-col gap-4 justify-center md-tablet:justify-start lg-desktop:justify-center">
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
          className={`text-white w-full ${smoothie.hoverColor}  ${smoothie.backgroundColor} px-4 py-2 rounded-[2rem] cursor-pointer lg-phone:text-xl md-tablet:text-2xl md-tablet:py-6 s-laptop:text-xl md-laptop:text-2xl lg-desktop:text-4xl lg-desktop:py-7`}
        >
          View Cart (2)
        </Button>
      </Link>
    </form>
  );
}
