import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import straightLine from "@/assets/icons/straight-line.svg";
import bulletpoint1 from "@/assets/icons/bullet-point-1.svg";
import bulletpoint2 from "@/assets/icons/bullet-point-2.svg";

export function HeaderSeparator() {
  return (
    <Breadcrumb className="pt-8 mb-4 s-laptop:mb-0">
      <BreadcrumbList className="justify-center gap-0">
        <BreadcrumbItem className="relative left-12 top-2 lg-desktop:top-3">
          <BreadcrumbPage className="flex flex-col place-items-center ">
            <img
              src={bulletpoint1}
              alt="checkout page"
              className="md-desktop:w-8 lg-desktop:w-10"
            />
            <p className="lg-desktop:text-xl">Payment Info</p>
          </BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <img src={straightLine} alt="straight line" />
        </BreadcrumbSeparator>
        <BreadcrumbItem className="relative top-2 right-6 md-desktop:right-5 lg-desktop:top-3 lg-desktop:right-7">
          <BreadcrumbLink
            href="/components"
            className="flex flex-col place-items-center "
          >
            <img
              src={bulletpoint2}
              alt="order placed"
              className="md-desktop:w-8 lg-desktop:w-10"
            />
            <p className="lg-desktop:text-xl">Checkout</p>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
