import { useOrderSummary } from "@/hooks/useOrderSummary";
import useShoppingCartStore from "@/store/cartConfirmation";
import useSmoothiesStore from "@/store/store";
import { ReactNode } from "react";

type OrderSummaryProps = {
  CheckoutButton: ReactNode;
};

export function OrderSummary({ CheckoutButton }: OrderSummaryProps) {
  const totalNumberItems = useShoppingCartStore(
    (state) => state.totalNumberItems
  );
  const smoothie = useSmoothiesStore((state) => state.selectedSmoothie);
  const {
    totalAmountAfterDisplay,
    totalBeforeTaxDisplay,
    shippingCost,
    tax,
    totalAmountItemDisplay,
  } = useOrderSummary();

  return (
    <div
      className={`${smoothie.backgroundColor} bg-opacity-5 p-4 md-laptop:p-10 md-tablet:h-fit rounded-md`}
    >
      <div className="flex flex-col gap-2 pb-4 border-b">
        {CheckoutButton}
        <p className="text-xs text-center text-grey-dark md-desktop:text-sm lg-desktop:text-base">
          By placing your order, you agree to our company{" "}
          <a className="text-black underline">Privacy policy </a>
          and <a className="text-black underline">Conditions of use</a>.
        </p>
      </div>
      <div className="grid pt-4 gap-5 pb-8 border-b-2">
        <h1 className="text-lg md-desktop:text-2xl lg-desktop:text-3xl">
          Order Summary
        </h1>
        <div className="text-sm grid grid-cols-2 text-grey-dark md-desktop:text-lg lg-desktop:text-2xl">
          <div className="grid auto-cols-max gap-2">
            <p>Items({totalNumberItems})</p>
            <p>Shipping and handling:</p>
            <p>Total Before tax:</p>
            <p>Tax Collected:</p>
          </div>
          <div className="grid place-items-end gap-2">
            <p>{totalAmountItemDisplay}</p>
            <p>{shippingCost + "0"}</p>
            <p>{totalBeforeTaxDisplay}</p>
            <p>{tax}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-4 text-lg font-medium md-desktop:text-2xl lg-desktop:text-3xl">
        <h2>Order Total:</h2>
        <p>{totalAmountAfterDisplay}</p>
      </div>
    </div>
  );
}
