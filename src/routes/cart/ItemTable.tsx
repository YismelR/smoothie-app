import {
  Table,
  TableBody,
  TableCell,
  //   TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useMediaQuery from "@/hooks/use-media-query";
import fruit from "@/assets/images/berry-smoothie.png";
import { useState } from "react";
import useShoppingCartStore from "@/store/itemConfirmation";

export function ItemTable() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [count, setCount] = useState(1);
  const smoothiesInCart = useShoppingCartStore(
    (state) => state.smoothiesInCart
  );
  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };

  if (isDesktop) {
    return (
      <Table>
        <TableHeader>
          <TableRow className="md-desktop:text-xl lg-desktop:text-2xl">
            <TableHead className="">Product</TableHead>
            <TableHead className="text-center">Quantity</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-center">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {smoothiesInCart.map((smoothie) => (
            <TableRow key={smoothie.id}>
              <TableCell className="flex gap-3 place-items-center">
                <img
                  src={smoothie.src}
                  alt={smoothie.alt}
                  className="size-20 md-desktop:size-28 lg-desktop:size-36"
                />
                <p className="text-base font-medium s-laptop:max-w-48 md-desktop:text-xl lg-desktop:max-w-64 lg-desktop:text-3xl">
                  {smoothie.text}
                </p>
              </TableCell>
              <TableCell className="p-0">
                <div className="flex justify-center gap-2 md-tablet:text-2xl lg-desktop:text-3xl place-items-center">
                  <button
                    title="minus"
                    className="cursor-pointer disabled:opacity-25 disabled:cursor-default"
                    onClick={handleMinus}
                    disabled={count === 1}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 md-desktop:size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                  <p
                    data-testid="count"
                    className="text-base md-desktop:text-lg lg-desktop:text-2xl"
                  >
                    {count}
                  </p>
                  <button
                    title="plus"
                    className="cursor-pointer"
                    onClick={handlePlus}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 md-desktop:size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </TableCell>
              <TableCell className="text-center md-desktop:text-lg lg-desktop:text-2xl">
                ${smoothie.price}
              </TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 md-desktop:size-6 lg-desktop:start-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Product</TableHead>
          <TableHead></TableHead>
          <TableHead>Remove</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow key={1}>
          <TableCell className="font-medium flex flex-col gap-2">
            <img src={fruit} alt="fruit" />
            <div className="flex gap-2 md-tablet:text-2xl lg-desktop:text-3xl place-items-center">
              <button
                title="minus"
                className="cursor-pointer disabled:opacity-25 disabled:cursor-default"
                onClick={handleMinus}
                disabled={count === 0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 md-desktop:size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
              <p data-testid="count" className="text-base">
                {count}
              </p>
              <button
                title="plus"
                className="cursor-pointer"
                onClick={handlePlus}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 md-desktop:size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          </TableCell>
          <TableCell className="p-0">
            <p className="text-base font-medium">Berry Strawberry Smoothie</p>
            <p>$18.75</p>
          </TableCell>
          <TableCell>
            <div className="flex h-24 justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
