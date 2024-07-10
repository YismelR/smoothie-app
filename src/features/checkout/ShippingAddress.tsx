import { AddressForm } from "./AddressForm";

export default function ShippingAddress() {
  return (
    <div className="flex flex-col p-4 gap-4 md-tablet:p-0 md-tablet:pt-4 s-laptop:pt-10 md-laptop:pt-4 md-desktop:pt-10 lg-desktop:gap-8">
      <h1 className="font-medium md-tablet:text-lg md-desktop:text-2xl lg-desktop:text-3xl">
        Shipping Address
      </h1>
      <AddressForm />
    </div>
  );
}
