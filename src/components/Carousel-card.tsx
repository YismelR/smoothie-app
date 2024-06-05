import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import pinkBowl from "@/assets/images/berry-smoothie.png";

export function CarouselDemo() {
  return (
    <Carousel className="w-full s-phone:max-w-48 md-phone:max-w-60 lg-phone:max-w-80  md-tablet:max-w-md md-laptop:max-w-xl md-desktop:max-w-2xl lg-desktop:max-w-4xl">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <img
                  src={pinkBowl}
                  alt="pink bowl"
                  className="md-desktop:w-[39rem] lg-desktop:w-[53rem]"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">Description</span>
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
