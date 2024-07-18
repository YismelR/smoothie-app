import { Link } from "react-router-dom";
import visa from "@/assets/icons/visa.svg";
export default function PayingWith() {
  return (
    <div className="flex flex-col gap-4 px-4 w-full">
      <h1 className="font-medium md-tablet:text-lg md-desktop:text-2xl lg-desktop:text-3xl">
        Paying With:
      </h1>
      <div className="space-y-6 w-full border flex justify-between p-4 border-grey-dark rounded-sm s-laptop:p-7 md-laptop:p-8 md-desktop:py-12">
        <div className="md-desktop:text-lg lg-desktop:text-2xl">
          <p className="flex gap-4 place-items-center mb-3">
            Ending in XXXX
            <img
              src={visa}
              alt="visa"
              className=" size-8 md-desktop:size-10 lg-desktop:size-12"
            />
          </p>
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
