import useShoppingCartStore from "@/store/itemConfirmation";
import { ItemTable } from "./ItemTable";
import { OrderSummary } from "./OrderSummary";

export function ShoppingCart() {
  const totalNumberOfItems = useShoppingCartStore(
    (state) => state.totalNumberItems
  );
  if (totalNumberOfItems === 0) {
    return (
      <h1 className="text-grey-dark flex place-items-center justify-center h-screen font-bold text-xl lg-desktop:text-3xl">
        YOUR CART IS EMPTY
      </h1>
    );
  }
  return (
    <div className="flex flex-col  md-tablet:px-12 md-laptop:px-32 md-tablet:mb-20">
      <h1 className=" s-phone:text-2xl s-phone:flex s-phone:justify-center s-phone:my-2 md-tablet:my-8 s-phone:font-bold md-tablet:text-3xl md-tablet:mb-16 md-desktop:text-4xl md-desktop:my-12 lg-desktop:text-5xl lg-desktop:my-20">
        <div className="relative overflow-hidden lg-desktop:pb-4 s-phone:pb-2">
          Your Order
          <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 animate-underline"></span>
        </div>
      </h1>
      <div className="flex flex-col gap-8 md-tablet:flex-row">
        <ItemTable />
        <OrderSummary />
      </div>
    </div>
  );
}
