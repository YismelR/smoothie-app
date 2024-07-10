import { OrderSummary } from "../cart/OrderSummary";
import PaymentMethod from "./PaymentMethod";
import ShippingAddress from "./ShippingAddress";

export default function CheckOut() {
  return (
    <div className="flex flex-col place-items-center md-tablet:flex-row md-tablet:p-8 md-tablet:gap-4 s-laptop:p-12 justify-center md-laptop:gap-8 md-desktop:gap-12">
      <div>
        <ShippingAddress />
        <PaymentMethod />
      </div>
      <OrderSummary />
    </div>
  );
}
