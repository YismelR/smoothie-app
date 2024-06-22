import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="s-phone:grid s-phone:gap-4">
                    <h3 className="font-medium">Customizable Recipes</h3>
                    <p className="s-phone:text-sm">
                      Tailor your smoothie bowls to your taste and dietary
                      preferences with our extensive library of customizable
                      recipes. Choose from a variety of fruits, vegetables,
                      superfoods, nuts, seeds, and granola options to create
                      your perfect blend.
                    </p>
                  </div>
                  <div className="s-phone:grid s-phone:gap-4">
                    <h3 className="font-medium">Shopping List</h3>
                    <p className="s-phone:text-sm">
                      Simplify your grocery shopping with our integrated
                      shopping list feature. Add ingredients from your favorite
                      recipes with a single tap, and never miss an essential
                      item again.
                    </p>
                  </div>
                  <div className="s-phone:grid s-phone:gap-4">
                    <h3 className="font-medium">Nutritional Information</h3>
                    <p className="s-phone:text-sm">
                      Stay informed about what you’re consuming with detailed
                      nutritional breakdowns for each recipe. Track your intake
                      of calories, vitamins, minerals, and macronutrients
                      effortlessly.
                    </p>
                  </div>
                  <div className="s-phone:grid s-phone:gap-4">
                    <h3 className="font-medium">
                      Seasonal and Local Ingredients
                    </h3>
                    <p className="s-phone:text-sm">
                      Enjoy the freshest ingredients by accessing recipes that
                      highlight seasonal and locally sourced produce. Support
                      local farmers and reduce your carbon footprint while
                      enjoying peak flavor and nutrition.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
