import { OrderSummary } from "../cart/OrderSummary";
import CheckoutButton from "./CheckoutButton";
import { HeaderSeparator } from "./HeaderSeparator";
import PaymentMethod from "./PaymentMethod";
import ShippingAddress from "./ShippingAddress";

export default function CheckOut() {
  return (
    <>
      <HeaderSeparator />
      <div className="flex flex-col md-tablet:flex-row md-tablet:p-8 md-tablet:gap-4 s-laptop:p-12 justify-center md-laptop:gap-8 md-desktop:gap-12">
        <div className="flex flex-col gap-4">
          <ShippingAddress />
          <PaymentMethod />
        </div>
        <div className="mt-4 md-tablet:mt-11 lg-desktop:mt-16">
          <OrderSummary CheckoutButton={<CheckoutButton />} />
        </div>
      </div>
    </>
  );
}
