import mainLogo from "../assets/logo/main-logo.svg";
import mainBowl from "../assets/images/berry-smoothie.png";
import arrow from "../assets/icons/arrow.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
export default function HomeMain() {
  return (
    <main className="grid grid-cols-2  h-full mb-8">
      <div className="flex flex-col gap-8  pl-16 ">
        <img src={mainLogo} alt="Main logo" />
        <p>
          Smoothies are so healthy, refreshing and the perfect way to pack some
          extra fruit and veggies into your diet.
        </p>
        <div>
          <button className="bg-[#DF4062] py-2 px-4 rounded-full text-white shadow-3xl hover:bg-[#FFA4C7]">
            Order Now
          </button>
        </div>
        <div className=" flex place-self-end pr-40">
          <p className="origin-top-right -rotate-90 text-2xl font-semibold tracking-wider mr-10 ">
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
      <div className="flex flex-col place-items-center ">
        <img
          src={mainBowl}
          alt="smoothie bowl"
          className=" shadow-2xl rounded-full"
        />
        <button className="relative bg-[#DF4062] w-24 h-10 rounded-full place-self-start shadow-3xl mt-8">
          <img
            src={arrow}
            alt="arrow next"
            className="absolute -right-6 top-2"
          />
        </button>
        <div className="flex place-self-end gap-4 pr-14">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </main>
  );
}
