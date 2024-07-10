import { AddressForm } from "./AddressForm";

export default function ShippingAddress() {
  return (
    <div className="flex flex-col p-4 gap-4 md-tablet:p-0">
      <h1 className="font-medium md-laptop:text-lg md-desktop:text-2xl lg-desktop:text-3xl">
        Shipping Address
      </h1>
      <AddressForm />
    </div>
  );
}
