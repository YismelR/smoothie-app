import { OrderSummary } from "../../cart/OrderSummary";
import EmailAddress from "./EmailAddress";
import PaymentInfoButton from "./PaymentInfoButton";
import PaymentMethod from "./PaymentMethod";
import ShippingAddress from "./ShippingAddress";

export default function PaymentInfo() {
  return (
    <>
      <div className="flex flex-col md-tablet:flex-row md-tablet:p-8 md-tablet:gap-4 s-laptop:p-12 justify-center md-laptop:gap-8 md-desktop:gap-12">
        <div className="flex flex-col gap-4">
          <ShippingAddress />
          <PaymentMethod />
          <EmailAddress />
        </div>
        <div className="mt-4 md-tablet:mt-11 lg-desktop:mt-16">
          <OrderSummary CheckoutButton={<PaymentInfoButton />} />
        </div>
      </div>
    </>
  );
}
