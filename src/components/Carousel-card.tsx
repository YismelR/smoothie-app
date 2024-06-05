import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useSmoothiesStore from "@/store/store";

export function CarouselDemo() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);

  return (
    <Carousel className="w-full s-phone:max-w-48 md-phone:max-w-60 lg-phone:max-w-80  md-tablet:max-w-md md-laptop:max-w-xl md-desktop:max-w-2xl lg-desktop:max-w-4xl">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
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
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="s-phone:text-xs md-phone:text-sm lg-phone:text-base md-tablet:text-xl md-desktop:text-2xl lg-desktop:text-3xl font-semibold grid grid-cols-2">
                  <div>
                    <h2>Content:</h2>
                    <p>strawberry</p>
                    <p>raspberrries</p>
                  </div>
                  <div>
                    <h2>Nutritional Value:</h2>
                    <table>
                      <tr>
                        <td>155</td>
                        <td>Calories</td>
                      </tr>
                      <tr>
                        <td>0</td>
                        <td>Fat</td>
                      </tr>
                      <tr>
                        <td>35g</td>
                        <td>Carbohydrate</td>
                      </tr>
                      <tr>
                        <td>5g</td>
                        <td>Protein</td>
                      </tr>
                      <tr>
                        <td>54g</td>
                        <td>Sodium</td>
                      </tr>
                    </table>
                  </div>
                </span>
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
