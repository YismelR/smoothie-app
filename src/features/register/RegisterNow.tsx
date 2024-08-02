import * as React from "react";
import useMediaQuery from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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

import { TabSwitch } from "./TabSwitch";
import useFavoriteSmoothieStore from "@/store/favoriteSmoothie";

export function RegisterNow() {
  const { open, setOpen } = useFavoriteSmoothieStore((state) => state);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className="sm:max-w-[425px] rounded-md">
          <DialogHeader>
            <DialogTitle className="text-2xl lg-desktop:text-4xl">
              Register Now
            </DialogTitle>
            <DialogDescription className="lg-desktop:text-lg"></DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild></DrawerTrigger>
      <DrawerContent className="place-items-center">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-2xl">Register Now</DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline" className="pb-0">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({}: React.ComponentProps<"form">) {
  return <TabSwitch />;
}
