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
                <div className="flex gap-3 s-phone:text-xs md-phone:text-sm lg-phone:text-base md-tablet:text-xl md-desktop:text-2xl lg-desktop:text-3xl font-semibold ">
                  <div className="grid">
                    <h2>Content:</h2>
                    <div className="flex flex-col gap-4 place-items-center">
                      <img
                        src={strawberry}
                        alt="strawberry"
                        className="s-phone:max-w-8"
                      />
                      <img
                        src={raspberry}
                        alt="raspberry"
                        className="s-phone:max-w-8"
                      />
                    </div>
                  </div>
                  <div className="grid gap-8 ">
                    <h2 className="place-self-center">Nutritional Value:</h2>
                    <div className="flex">
                      <div
                        className={`grid gap-2 p-2 place-items-center ${selectedSmoothie.backgroundColor} text-white rounded-l-lg`}
                      >
                        <p>155</p>
                        <p>0</p>
                        <p>35g</p>
                        <p>5g</p>
                        <p>54g</p>
                      </div>
                      <div
                        className={`grid p-2 gap-2 bg-grey-lightest rounded-r-lg`}
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
