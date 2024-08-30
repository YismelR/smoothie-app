import fruits from "@/assets/images/fruits-about.webp";
import bowls from "@/assets/images/bowls-about.webp";
import { Features } from "./Features";
import useSmoothiesStore from "@/store/store";
import ImageSkeleton from "./ImageSkeleton";

export default function About() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);

  return (
    <>
      <div className="s-phone:grid s-phone:gap-8 s-phone:px-4 md-tablet:px-12 md-laptop:px-32 lg-desktop:gap-16">
        <div className="md-tablet:grid md-tablet:place-items-center md-laptop:gap-4 lg-desktop:gap-0">
          <h1 className="s-phone:my-8 s-phone:flex s-phone:justify-center s-phone:text-2xl s-phone:font-bold md-tablet:mb-8 md-tablet:text-3xl md-desktop:text-4xl lg-desktop:my-20 lg-desktop:text-5xl">
            <div className="relative overflow-hidden s-phone:pb-2 lg-desktop:pb-4">
              About
              <span className="absolute bottom-0 left-0 h-0.5 animate-underline bg-gradient-to-r from-purple-500 to-pink-500"></span>
            </div>
          </h1>
          <p className="text-center s-phone:text-sm lg-phone:text-base md-tablet:max-w-3xl md-tablet:px-16 md-desktop:text-xl lg-desktop:p-0 lg-desktop:text-3xl">
            Welcome to Smoothie: Smoothie Bowls Edition, your go-to app for
            crafting the perfect smoothie bowl experience. Whether you’re a
            health enthusiast, a culinary adventurer, or someone who loves a
            nutritious and delicious breakfast, Smoothie is here to make your
            smoothie bowl creations easier and more enjoyable.
          </p>
        </div>
        <div className="s-phone:grid s-phone:place-items-center md-tablet:grid-cols-2 md-tablet:gap-4">
          <div className="flex-col s-phone:flex s-phone:place-items-center s-phone:gap-4 md-tablet:place-items-start">
            <h2 className="font-semibold s-phone:text-xl md-tablet:text-2xl md-desktop:text-3xl lg-desktop:text-4xl">
              Our Mission
            </h2>
            <p className="s-phone:text-sm lg-phone:text-base md-desktop:text-xl lg-desktop:text-3xl">
              At Smoothie, our mission is to inspire a healthier lifestyle by
              making it easy and fun to create delicious, nutrient-packed
              smoothie bowls. We believe that everyone deserves to enjoy the
              benefits of fresh, wholesome ingredients, beautifully presented in
              vibrant, satisfying bowls that nourish both body and soul.
            </p>
          </div>
          <ImageSkeleton
            src={fruits}
            alt="fruits"
            className="row-start-1 h-[240px] md-tablet:col-start-2 md-laptop:h-[400px] lg-desktop:h-[600px]"
          />
        </div>
        <div className="s-phone:grid s-phone:gap-4 md-tablet:grid-cols-2 md-tablet:place-items-center md-tablet:gap-8 md-laptop:gap-12 md-desktop:gap-16">
          <ImageSkeleton
            src={bowls}
            alt="bowls"
            className="h-[240px] lg-desktop:h-[400px]"
          />
          <div className="s-phone:grid s-phone:place-items-center s-phone:gap-4 md-tablet:place-items-start">
            <h2 className="font-semibold s-phone:text-xl md-tablet:text-2xl md-desktop:text-3xl lg-desktop:text-4xl">
              Why Smoothie Bowls?
            </h2>
            <p className="s-phone:text-sm lg-phone:text-base md-desktop:text-xl lg-desktop:text-3xl">
              Smoothie bowls are not only visually appealing but also a
              fantastic way to pack a variety of nutrients into a satisfying
              meal. They help you increase your intake of fruits and vegetables,
              improve digestion, boost your immune system, and provide sustained
              energy throughout the day. With Smoothie, making healthy choices
              has never been easier or more enjoyable.
            </p>
          </div>
        </div>
        <Features />
      </div>
      <div
        className={`${selectedSmoothie.backgroundColor} bg-opacity-5 s-phone:mt-16 s-phone:grid s-phone:place-items-center s-phone:gap-4 s-phone:px-4 s-phone:py-8 s-phone:pb-8 md-tablet:px-12 md-tablet:py-16`}
      >
        <h2
          className={`${selectedSmoothie.textColor} font-semibold s-phone:text-xl md-tablet:text-2xl md-desktop:text-3xl lg-desktop:text-4xl`}
        >
          Join Us
        </h2>
        <p className="text-center s-phone:text-sm lg-phone:text-base md-tablet:max-w-3xl md-tablet:px-16 md-desktop:text-xl lg-desktop:p-0 lg-desktop:text-3xl">
          Join the Smoothie community today and start your journey towards a
          healthier, happier you. Explore our recipes, and blend your way to
          wellness with stunning smoothie bowls. Embrace the well-crafted
          smoothie bowl with Smoothie!
        </p>
      </div>
    </>
  );
}
