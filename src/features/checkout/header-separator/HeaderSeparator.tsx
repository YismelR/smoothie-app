import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import straightLine from "@/assets/icons/straight-line.svg";
import BulletPoint1 from "./BulletPoint1";
import BulletPoint2 from "./BulletPoint2";
import BulletPoint3 from "./BulletPoint3";
import HomeLogo from "./HomeLogo";
import { Outlet } from "react-router-dom";

export function HeaderSeparator() {
  return (
    <>
      <HomeLogo />
      <Breadcrumb className="mb-4 pt-8 s-laptop:mb-0">
        <BreadcrumbList className="flex-nowrap justify-center gap-0">
          <BreadcrumbItem className="relative left-11 top-[10px] md-phone:left-14 lg-phone:top-0 md-desktop:left-[70px] lg-desktop:left-20">
            <div className="flex flex-col place-items-center">
              <BulletPoint1 />
              <p className="text-center md-desktop:text-lg lg-desktop:text-2xl">
                Payment Info
              </p>
            </div>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="relative bottom-[10px] left-[20px] md-desktop:bottom-3 md-desktop:left-7 lg-desktop:bottom-4 lg-desktop:left-7">
            <img src={straightLine} alt="straight line" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <div className="flex flex-col place-items-center">
              <BulletPoint2 />
              <p className="md-desktop:text-lg lg-desktop:text-2xl">Summary</p>
            </div>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="relative bottom-[10px] right-[22px] md-desktop:bottom-3 md-desktop:right-7 lg-desktop:bottom-4 lg-desktop:right-7">
            <img src={straightLine} alt="straight line" />
          </BreadcrumbSeparator>
          <BreadcrumbItem className="relative right-11 top-0 md-desktop:right-14 lg-desktop:right-14">
            <div className="flex flex-col place-items-center">
              <BulletPoint3 />
              <p className="md-desktop:text-lg lg-desktop:text-2xl">Checkout</p>
            </div>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Outlet />
    </>
  );
}
