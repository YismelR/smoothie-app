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
import useShoppingCartStore, { CartSmoothie } from "@/store/cartConfirmation";
import { Link } from "react-router-dom";

export function ItemTable() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const {
    smoothiesInCart,
    incrementSmoothie,
    decrementSmoothie,
    removeSmoothie,
  } = useShoppingCartStore((state) => state);

  const handlePlus = (smoothie: CartSmoothie) => {
    incrementSmoothie(smoothie);
  };
  const handleMinus = (smoothie: CartSmoothie) => {
    if (smoothie.quantity > 1) {
      decrementSmoothie(smoothie);
    }
  };

  const handleRemove = (smoothie: CartSmoothie) => {
    removeSmoothie(smoothie);
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
                <Link
                  to={`/details/${smoothie.id}`}
                  className="flex gap-3 place-items-center"
                >
                  <img
                    src={smoothie.src}
                    alt={smoothie.alt}
                    className="size-20 md-desktop:size-28 lg-desktop:size-36"
                  />
                  <p className="text-base font-medium s-laptop:max-w-48 md-desktop:text-xl lg-desktop:max-w-64 lg-desktop:text-3xl">
                    {smoothie.text}
                  </p>
                </Link>
              </TableCell>
              <TableCell className="p-0">
                <div className="flex justify-center gap-2 md-tablet:text-2xl lg-desktop:text-3xl place-items-center">
                  <button
                    title="minus"
                    className="cursor-pointer disabled:opacity-25 disabled:cursor-default"
                    onClick={() => handleMinus(smoothie)}
                    disabled={smoothie.quantity === 1}
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
                    {smoothie.quantity}
                  </p>
                  <button
                    title="plus"
                    className="cursor-pointer"
                    onClick={() => handlePlus(smoothie)}
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
                <div
                  className="flex justify-center"
                  title="delete-button"
                  onClick={() => handleRemove(smoothie)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 md-desktop:size-6 lg-desktop:start-8 cursor-pointer"
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
        {smoothiesInCart.map((smoothie) => (
          <TableRow key={smoothie.id}>
            <TableCell className="font-medium flex flex-col gap-2">
              <Link to={`/details/${smoothie.id}`}>
                <img src={smoothie.src} alt={smoothie.alt} />
              </Link>
              <div className="flex gap-2 md-tablet:text-2xl lg-desktop:text-3xl place-items-center">
                <button
                  title="minus"
                  className="cursor-pointer disabled:opacity-25 disabled:cursor-default"
                  onClick={() => handleMinus(smoothie)}
                  disabled={smoothie.quantity === 0}
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
                  {smoothie.quantity}
                </p>
                <button
                  title="plus"
                  className="cursor-pointer"
                  onClick={() => handlePlus(smoothie)}
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
              <Link to={`/details/${smoothie.id}`}>
                <p className="text-base font-medium">{smoothie.text}</p>
                <p>${smoothie.price}</p>
              </Link>
            </TableCell>
            <TableCell>
              <div
                className="flex h-24 justify-end"
                title="delete-button"
                onClick={() => handleRemove(smoothie)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 cursor-pointer"
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
