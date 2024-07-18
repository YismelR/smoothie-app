import { OrderSummary } from "../../cart/OrderSummary";
import DeliveryTo from "./DeliveryTo";
import { ItemsTableSummary } from "./ItemsTableSummary";
import PayingWith from "./PayingWith";
import SummaryButton from "./SummaryButton";

export default function CheckoutSummary() {
  return (
    <div className="flex flex-col justify-center md-tablet:grid md-tablet:grid-cols-2 md-tablet:gap-4 md-tablet:px-12 md-tablet:pb-8 s-laptop:p-12 md-laptop:grid-cols-3 md-laptop:gap-4 md-laptop:px-32 md-desktop:gap-8">
      <div className="mt-8 flex flex-col gap-4 md-tablet:mt-0 md-tablet:gap-8 md-laptop:col-span-2">
        <DeliveryTo />
        <PayingWith />
        <ItemsTableSummary />
      </div>
      <div className="mt-4 md-tablet:mt-11 lg-desktop:mt-16">
        <OrderSummary CheckoutButton={<SummaryButton />} />
      </div>
    </div>
  );
}
