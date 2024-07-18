import { Link } from "react-router-dom";

export default function DeliveryTo() {
  return (
    <div className="flex flex-col gap-4 px-4 md-tablet:px-0 w-full">
      <h1 className="font-medium md-tablet:text-lg md-desktop:text-2xl lg-desktop:text-3xl">
        Delivering To:
      </h1>
      <div className="space-y-6 w-full border flex justify-between p-4 border-grey-dark rounded-sm s-laptop:p-7 md-laptop:p-8 md-desktop:py-12">
        <div className="md-desktop:text-lg lg-desktop:text-2xl">
          <p>First name Last Name</p>
          <p>Street Address Apt#</p>
          <p>State zip Code</p>
        </div>
        <Link to={"/payment-info"}>
          <p className="underline md-desktop:text-lg lg-desktop:text-2xl">
            Change
          </p>
        </Link>
      </div>
    </div>
  );
}
