import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import straightLine from "@/assets/icons/straight-line.svg";
import BulletPoint1 from "./BulletPoint1";
import BulletPoint2 from "./BulletPoint2";
import BulletPoint3 from "./BulletPoint3";
import HomeLogo from "./HomeLogo";

export function HeaderSeparator() {
  return (
    <>
      <HomeLogo />
      <Breadcrumb className="pt-8 mb-4 s-laptop:mb-0">
        <BreadcrumbList className=" justify-center gap-0 flex-nowrap">
          <BreadcrumbItem className="relative top-[10px] left-11 md-phone:left-14 lg-phone:top-0 lg-desktop:left-20">
            <BreadcrumbPage className="flex flex-col place-items-center ">
              <BulletPoint1 />
              <p className="lg-desktop:text-xl text-center">Payment Info</p>
            </BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="relative bottom-[10px] left-[20px] lg-desktop:left-7">
            <img src={straightLine} alt="straight line" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/components"
              className="flex flex-col place-items-center "
            >
              <BulletPoint2 />
              <p className="lg-desktop:text-xl">Summary</p>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="relative bottom-[10px] right-[22px] lg-desktop:right-7 ">
            <img src={straightLine} alt="straight line" />
          </BreadcrumbSeparator>
          <BreadcrumbItem className="relative top-0 right-11 lg-desktop:right-14">
            <BreadcrumbLink
              href="/components"
              className="flex flex-col place-items-center "
            >
              <BulletPoint3 />
              <p className="lg-desktop:text-xl">Checkout</p>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
