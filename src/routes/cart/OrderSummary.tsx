import useShoppingCartStore from "@/store/itemConfirmation";

export function OrderSummary() {
  const { totalNumberItems, totalAmount } = useShoppingCartStore(
    (state) => state
  );

  const shippingCost = 5.5;
  const tax = 8.21;

  // Fix: Quantity of (Smoothies x Price) + totalSum
  const totalAmountItem = totalAmount;
  const totalAmountItemDisplay = totalAmountItem.toFixed(2);

  const totalBeforeTax = totalAmountItem + shippingCost;
  const totalBeforeTaxDisplay = totalBeforeTax.toFixed(2);

  const totalAmountAfter = totalBeforeTax + tax;
  const totalAmountAfterDisplay = totalAmountAfter.toFixed(2);

  return (
    <div className="bg-pink-darker bg-opacity-5 p-4 md-laptop:p-10 md-tablet:h-fit">
      <div className="flex flex-col gap-2 pb-4 border-b">
        <button className="bg-pink-darker text-white p-2 rounded-xl md-desktop:text-xl font-medium lg-desktop:p-3 lg-desktop:text-3xl">
          Proceed to Checkout
        </button>
        <p className="text-xs text-center text-grey-dark md-desktop:text-sm lg-desktop:text-base">
          By placing your order, you agree to our company{" "}
          <a className="text-black">Privacy policy </a>
          and
          <a className="text-black"> Conditions of use</a>.
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
