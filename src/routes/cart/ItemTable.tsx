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

export function ItemTable() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  //   const smoothie = useLoaderData() as Smoothie;
  if (isDesktop) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Product</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow key={1}>
            <TableCell className="font-medium">
              <img src={fruit} alt="fruit" />
            </TableCell>
            <TableCell>1</TableCell>
            <TableCell className="text-right">$18</TableCell>
            <TableCell>X</TableCell>
          </TableRow>
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
              <p data-testid="count">{count}</p>
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
          <TableCell className="">
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
