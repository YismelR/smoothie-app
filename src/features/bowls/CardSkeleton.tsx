import { Skeleton } from "@/components/ui/skeleton";

export function CardSkeleton() {
  return (
    <div className="grid w-full grid-cols-2 rounded-xl shadow-cardShadow md-tablet:flex md-tablet:flex-col">
      <Skeleton className="h-36 w-36 rounded-xl md-phone:w-[163px] lg-phone:w-[173px] md-tablet:w-[324px] md-tablet:rounded-b-none md-tablet:rounded-t-xl s-laptop:w-72 md-laptop:h-[176px] md-laptop:w-[363px] md-desktop:h-60 md-desktop:w-[501px] lg-desktop:h-[336px] lg-desktop:w-[715px]" />
      <div className="flex flex-col justify-center gap-4 px-2 md-tablet:p-4 md-desktop:gap-6 md-desktop:p-8">
        <div className="flex place-items-center justify-between md-tablet:place-items-start">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-20 md-tablet:w-56 md-desktop:h-8 lg-desktop:w-96" />
            <Skeleton className="h-5 w-20 md-tablet:h-0" />
          </div>
          <Skeleton className="h-5 w-5 md-desktop:h-[22px] md-desktop:w-[22px] lg-desktop:h-10 lg-desktop:w-10" />
        </div>
        <div className="flex place-items-center justify-between">
          <Skeleton className="h-5 w-[38px] md-tablet:w-[49px] md-laptop:h-4 md-desktop:h-7 lg-desktop:h-8 lg-desktop:w-16" />
          <Skeleton className="h-10 w-[53px] md-tablet:w-[152px] md-desktop:h-14 md-desktop:w-[169px] lg-desktop:w-48" />
        </div>
      </div>
    </div>
  );
}
