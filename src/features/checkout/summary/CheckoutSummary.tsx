import { OrderSummary } from "../../cart/OrderSummary";
import DeliveryTo from "./DeliveryTo";
import PayingTo from "./PayingTo";

import SummaryButton from "./SummaryButton";

export default function CheckoutSummary() {
  return (
    <div className="flex flex-col md-tablet:grid md-tablet:grid-cols-2 md-tablet:p-8 md-tablet:gap-4 s-laptop:p-12 md-laptop:px-32 justify-center md-laptop:gap-4 md-desktop:gap-12 md-laptop:grid-cols-3">
      <div className="flex flex-col gap-4 md-laptop:col-span-2">
        <DeliveryTo />
        <PayingTo />
      </div>
      <div className="mt-4 md-tablet:mt-11 lg-desktop:mt-16">
        <OrderSummary CheckoutButton={<SummaryButton />} />
      </div>
    </div>
  );
}
