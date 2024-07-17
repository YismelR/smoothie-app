import useShoppingCartStore from "@/store/cartConfirmation";

export function useOrderSummary() {
  const totalAmount = useShoppingCartStore((state) => state.totalAmount);

  const shippingCost = totalAmount > 0 ? 1.75 : 0;
  const totalAmountItem = totalAmount;
  const totalAmountItemDisplay = totalAmountItem.toFixed(2);

  const totalBeforeTax = totalAmountItem + shippingCost;
  const totalBeforeTaxDisplay = totalBeforeTax.toFixed(2);

  const taxTotal = totalAmount > 0 ? 0.08875 * totalBeforeTax : 0;
  const tax = taxTotal.toFixed(2);

  const totalAmountAfter = totalBeforeTax + taxTotal;
  const totalAmountAfterDisplay = totalAmountAfter.toFixed(2);

  return {
    totalAmountAfterDisplay,
    totalBeforeTaxDisplay,
    shippingCost,
    tax,
    totalAmountItemDisplay,
  };
}
