import useShoppingCartStore from "@/store/cartConfirmation";

export function useOrderSummary() {
  const totalAmount = useShoppingCartStore((state) => state.totalAmount);

  const shippingCost = 5.5;
  const tax = 8.21;

  const totalAmountItem = totalAmount;
  const totalAmountItemDisplay = totalAmountItem.toFixed(2);

  const totalBeforeTax = totalAmountItem + shippingCost;
  const totalBeforeTaxDisplay = totalBeforeTax.toFixed(2);

  const totalAmountAfter = totalBeforeTax + tax;
  const totalAmountAfterDisplay = totalAmountAfter.toFixed(2);

  return {
    totalAmountAfterDisplay,
    totalBeforeTaxDisplay,
    shippingCost,
    tax,
    totalAmountItemDisplay,
  };
}
