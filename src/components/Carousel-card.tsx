import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useSmoothiesStore from "@/store/store";
import strawberry from "@/assets/icons/strawberry.svg";
import raspberry from "@/assets/icons/raspberry.svg";

export function CarouselDemo() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);

  return (
    <Carousel className="w-full s-phone:max-w-56 md-phone:max-w-60 lg-phone:max-w-80  md-tablet:max-w-md md-laptop:max-w-xl md-desktop:max-w-2xl lg-desktop:max-w-4xl">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center ">
                <img
                  src={selectedSmoothie.src}
                  alt="pink bowl"
                  className="md-desktop:w-[39rem] lg-desktop:w-[53rem]"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center">
                <div className="flex s-phone:gap-3 md-laptop:gap-16 s-phone:text-xs md-phone:text-sm lg-phone:text-base md-tablet:text-xl md-desktop:text-2xl lg-desktop:text-3xl font-semibold ">
                  <div className="flex flex-col gap-8">
                    <h2 className="md-desktop:text-3xl lg-desktop:text-4xl">
                      Content:
                    </h2>
                    {selectedSmoothie.content.map((fruits, idx) => {
                      return (
                        <div className="flex flex-col gap-4 place-items-center">
                          <img
                            key={idx}
                            src={fruits}
                            alt="strawberry"
                            className="s-phone:max-w-7 md-phone:max-w-8 lg-phone:max-w-9 md-tablet:max-w-10 md-desktop:max-w-14 lg-desktop:max-w-24"
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="grid gap-8 ">
                    <h2 className="place-self-center md-desktop:text-3xl lg-desktop:text-4xl">
                      Nutritional Value:
                    </h2>
                    <div className="flex">
                      <div
                        className={`grid s-phone:gap-2 s-phone:p-2 md-laptop:gap-4 md-laptop:p-4 md-desktop:gap-8 md-desktop:p-8 lg-desktop:gap-12 lg-desktop:p-12 place-items-center ${selectedSmoothie.backgroundColor} text-white rounded-l-lg`}
                      >
                        <p>155</p>
                        <p>0</p>
                        <p>35g</p>
                        <p>5g</p>
                        <p>54g</p>
                      </div>
                      <div
                        className={`grid s-phone:gap-2 s-phone:p-2 md-laptop:gap-4 md-laptop:p-4 md-desktop:gap-8 md-desktop:p-8 bg-grey-lightest rounded-r-lg`}
                      >
                        <p>Calories</p>
                        <p>Fat</p>
                        <p>Carbohydrates</p>
                        <p>Protein</p>
                        <p>Sodium</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
