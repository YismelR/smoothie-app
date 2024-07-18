import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useMediaQuery from "@/hooks/use-media-query";
import useShoppingCartStore from "@/store/cartConfirmation";

import { ScrollArea } from "@/components/ui/scroll-area";
export function ItemsTableSummary() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const { smoothiesInCart } = useShoppingCartStore((state) => state);

  if (isDesktop) {
    return (
      <ScrollArea className="h-[600px] w-full rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="md-desktop:text-xl lg-desktop:text-2xl">
              <TableHead className="">Product</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
              <TableHead className="text-center">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {smoothiesInCart.map((smoothie) => (
              <TableRow key={smoothie.id}>
                <TableCell className="flex gap-3 place-items-center">
                  <div className="flex gap-3 place-items-center">
                    <img
                      src={smoothie.src}
                      alt={smoothie.alt}
                      className="size-20 md-desktop:size-28 lg-desktop:size-36"
                    />
                    <p className="text-base font-medium s-laptop:max-w-48 md-desktop:text-xl lg-desktop:max-w-64 lg-desktop:text-3xl">
                      {smoothie.text}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="p-0">
                  <div className="flex justify-center gap-2 md-tablet:text-2xl lg-desktop:text-3xl place-items-center">
                    <p
                      data-testid="count"
                      className="text-base md-desktop:text-lg lg-desktop:text-2xl"
                    >
                      {smoothie.quantity}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-center md-desktop:text-lg lg-desktop:text-2xl">
                  ${smoothie.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    );
  }

  return (
    <ScrollArea className="h-[600px] w-full rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Product</TableHead>
            <TableHead></TableHead>
            <TableHead>Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {smoothiesInCart.map((smoothie) => (
            <TableRow key={smoothie.id}>
              <TableCell className="font-medium flex flex-col gap-2">
                <img src={smoothie.src} alt={smoothie.alt} />
              </TableCell>
              <TableCell className="p-0">
                <p className="text-base font-medium pb-2">{smoothie.text}</p>
                <p>${smoothie.price}</p>
              </TableCell>
              <TableCell>
                <div className="flex justify-center gap-2 md-tablet:text-2xl lg-desktop:text-3xl place-items-center">
                  <p data-testid="count" className="text-base">
                    {smoothie.quantity}
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}
