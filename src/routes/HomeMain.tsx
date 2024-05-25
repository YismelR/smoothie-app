import mainLogo from "../assets/logo/main-logo.svg";
import mainBowl from "../assets/images/berry-smoothie.png";
import arrow from "../assets/icons/arrow.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
export default function HomeMain() {
  return (
    <main className="grid grid-cols-2 ">
      <div className="flex flex-col gap-8  md-tablet:pl-16 lg-phone:pl-8 ">
        <img src={mainLogo} alt="Main logo" />
        <p className="md-desktop:text-2xl lg-desktop:text-4xl s-laptop:text-sm md-laptop:text-base">
          Smoothies are so healthy, refreshing and the perfect way to pack some
          extra fruit and veggies into your diet.
        </p>
        <div>
          <button className="bg-[#DF4062] py-2 px-4 rounded-full text-white shadow-3xl hover:bg-[#FFA4C7] md-desktop:text-xl lg-desktop:text-3xl s-laptop:text-xs md-laptop:text-base lg-desktop:py-4 lg-desktop:px-6">
            Order Now
          </button>
        </div>
        <div className=" flex place-self-end md-laptop:pr-40 md-desktop:text-2xl lg-desktop:text-4xl s-laptop:text-sm s-laptop:pr-10 md-laptop:text-base lg-desktop:pr-64">
          <p className="origin-top-right -rotate-90 font-semibold tracking-wider mr-10 md-desktop:text-3xl lg-desktop:text-[40px] lg-desktop:mr-14 s-laptop:text-xl md-laptop:text-2xl">
            Benefits
          </p>
          <ul className="border-l-2 pl-4 border-[#DF4062] text-[#DF4062]">
            <li>Antioxidants</li>
            <li>Vitamins</li>
            <li>Minerals</li>
            <li>Nutrients</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col place-items-center md-laptop:justify-around md-laptop:pr-0 s-laptop:pr-4 lg-phone:justify-evenly lg-phone:pr-8 ">
        <img
          src={mainBowl}
          alt="smoothie bowl"
          className=" shadow-2xl rounded-full md-desktop:w-4/5"
        />
        <button className="relative bg-[#DF4062] md-tablet:w-24 md-tablet:h-10 rounded-full md-laptop:place-self-start shadow-3xl mt-8 md-desktop:w-32 md-desktop:h-12 lg-desktop:w-36 lg-desktop:h-16 lg-phone:w-20 lg-phone:h-8 lg-phone:mt-0">
          <img
            src={arrow}
            alt="arrow next"
            className=" md-tablet:w-16 absolute -right-6 top-2 md-desktop:w-20 md-desktop:-right-9 lg-desktop:top-3 lg-desktop:w-24 md-tablet:mb-8 s-laptop:mb-0 lg-phone:w-12 lg-phone:top-1"
          />
        </button>
        <div className="flex place-self-end gap-4 md-laptop:pr-14 s-laptop:flex-auto s-laptop:pr-0 md-tablet:mb-20 s-laptop:mb-0">
          <img
            src={facebook}
            alt="facebook"
            className="lg-desktop:w-8 md-desktop:w-6"
          />
          <img
            src={twitter}
            alt="twitter"
            className="lg-desktop:w-8 md-desktop:w-6"
          />
          <img
            src={instagram}
            alt="instagram"
            className="lg-desktop:w-8 md-desktop:w-6"
          />
        </div>
      </div>
    </main>
  );
}
