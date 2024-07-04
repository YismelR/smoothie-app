import fruits from "@/assets/images/fruits-about.svg";
import bowls from "@/assets/images/bowls-about.svg";
import { Features } from "./Features";
import useSmoothiesStore from "@/store/store";

export default function About() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);

  return (
    <>
      <div className="s-phone:grid s-phone:gap-8 s-phone:px-4 md-tablet:px-12 md-laptop:px-32">
        <div className="md-tablet:grid md-tablet:place-items-center md-laptop:gap-4 lg-desktop:gap-0">
          <h1 className=" s-phone:text-2xl s-phone:flex s-phone:justify-center s-phone:my-8 s-phone:font-bold md-tablet:text-3xl md-tablet:mb-8 md-desktop:text-4xl lg-desktop:text-5xl lg-desktop:my-20">
            <div className="relative overflow-hidden lg-desktop:pb-4 s-phone:pb-2">
              About
              <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 animate-underline"></span>
            </div>
          </h1>
          <p className=" text-center s-phone:text-sm lg-phone:text-base md-tablet:px-16 md-tablet:max-w-3xl md-desktop:text-xl lg-desktop:text-3xl lg-desktop:p-0">
            Welcome to Smoothie: Smoothie Bowls Edition, your go-to app for
            crafting the perfect smoothie bowl experience. Whether you’re a
            health enthusiast, a culinary adventurer, or someone who loves a
            nutritious and delicious breakfast, Smoothie is here to make your
            smoothie bowl creations easier and more enjoyable.
          </p>
        </div>
        <div className="s-phone:grid s-phone:place-items-center md-tablet:grid-cols-2">
          <div className="s-phone:grid s-phone:gap-4 s-phone:place-items-center md-tablet:place-items-start">
            <h2 className="s-phone:text-xl font-semibold md-tablet:text-2xl md-desktop:text-3xl lg-desktop:text-4xl">
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
          <img
            src={fruits}
            alt="fruits"
            className="row-start-1 md-tablet:col-start-2 "
          />
        </div>
        <div className="s-phone:grid s-phone:gap-4 md-tablet:grid-cols-2 md-tablet:place-items-center md-tablet:gap-8 md-laptop:gap-12 md-desktop:gap-16">
          <img src={bowls} alt="bowls" />
          <div className="s-phone:grid s-phone:gap-4 s-phone:place-items-center md-tablet:place-items-start">
            <h2 className="s-phone:text-xl font-semibold md-tablet:text-2xl md-desktop:text-3xl lg-desktop:text-4xl">
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
        className={`${selectedSmoothie.backgroundColor} bg-opacity-5 s-phone:grid s-phone:gap-4 s-phone:place-items-center s-phone:mt-16 s-phone:px-4 s-phone:py-8 s-phone:pb-8 md-tablet:px-12 md-tablet:py-16`}
      >
        <h2
          className={`${selectedSmoothie.textColor} s-phone:text-xl font-semibold md-tablet:text-2xl md-desktop:text-3xl lg-desktop:text-4xl`}
        >
          Join Us
        </h2>
        <p className="text-center s-phone:text-sm lg-phone:text-base md-tablet:px-16 md-tablet:max-w-3xl md-desktop:text-xl lg-desktop:text-3xl lg-desktop:p-0">
          Join the Smoothie community today and start your journey towards a
          healthier, happier you. Explore our recipes, and blend your way to
          wellness with stunning smoothie bowls. Embrace the well-crafted
          smoothie bowl with Smoothie!
        </p>
      </div>
    </>
  );
}
