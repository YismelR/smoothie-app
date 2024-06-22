import fruits from "@/assets/images/fruits-about.svg";
import bowls from "@/assets/images/bowls-about.svg";
import { CarouselFeatures } from "@/components/CarouselFeatures";
export default function About() {
  return (
    <div className="s-phone:grid s-phone:gap-4 s-phone:px-4">
      <div>
        <h1 className=" s-phone:text-2xl s-phone:flex s-phone:justify-center s-phone:my-8 s-phone:font-bold md-tablet:text-3xl md-tablet:mb-16 md-desktop:text-4xl lg-desktop:text-5xl lg-desktop:my-20">
          <div className="relative overflow-hidden lg-desktop:pb-4 s-phone:pb-2">
            About
            <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 animate-underline"></span>
          </div>
        </h1>
        <p className="s-phone:text-sm">
          Welcome to Smoothie: Smoothie Bowls Edition, your go-to app for
          crafting the perfect smoothie bowl experience. Whether you’re a health
          enthusiast, a culinary adventurer, or someone who loves a nutritious
          and delicious breakfast, Smoothie is here to make your smoothie bowl
          creations easier and more enjoyable.
        </p>
      </div>
      <div className="s-phone:grid s-phone:place-items-center">
        <div className="s-phone:grid s-phone:gap-4 s-phone:place-items-center">
          <h2 className="s-phone:text-xl font-semibold">Our Mission</h2>
          <p className="s-phone:text-sm">
            At Smoothie, our mission is to inspire a healthier lifestyle by
            making it easy and fun to create delicious, nutrient-packed smoothie
            bowls. We believe that everyone deserves to enjoy the benefits of
            fresh, wholesome ingredients, beautifully presented in vibrant,
            satisfying bowls that nourish both body and soul.
          </p>
        </div>
        <img src={fruits} alt="fruits" className="row-start-1" />
      </div>
      <div className="s-phone:grid s-phone:gap-4">
        <img src={bowls} alt="bowls" />
        <div className="s-phone:grid s-phone:gap-4 s-phone:place-items-center">
          <h2 className="s-phone:text-xl font-semibold">Why Smoothie Bowls?</h2>
          <p className="s-phone:text-sm">
            Smoothie bowls are not only visually appealing but also a fantastic
            way to pack a variety of nutrients into a satisfying meal. They help
            you increase your intake of fruits and vegetables, improve
            digestion, boost your immune system, and provide sustained energy
            throughout the day. With Smoothie, making healthy choices has never
            been easier or more enjoyable.
          </p>
        </div>
      </div>
      <div className="s-phone:grid s-phone:gap-4 s-phone:place-items-center">
        <h2 className="s-phone:text-xl font-semibold">Features</h2>
        <div className="s-phone:grid ">
          <CarouselFeatures />
        </div>
      </div>
      <div className="s-phone:grid s-phone:gap-4 s-phone:place-items-center">
        <h2 className="s-phone:text-xl font-semibold">Join Us</h2>
        <p className="s-phone:text-sm">
          Join the Smoothie community today and start your journey towards a
          healthier, happier you. Explore our recipes, and blend your way to
          wellness with stunning smoothie bowls. Embrace the well-crafted
          smoothie bowl with Smoothie!
        </p>
      </div>
    </div>
  );
}
