import mainLogo from "../assets/logo/main-logo.svg";
export default function MainDescription() {
  return (
    <div className="flex flex-col gap-8  md-tablet:pl-16 lg-phone:pl-8 ">
      <img src={mainLogo} alt="Main logo" />
      <p className="md-desktop:text-2xl lg-desktop:text-4xl s-laptop:text-sm md-laptop:text-base">
        Smoothies are so healthy, refreshing and the perfect way to pack some
        extra fruit and veggies into your diet.
      </p>
      <div>
        <button className="bg-[#DF4062] py-2 px-4 rounded-full text-white shadow-3xl hover:bg-[#FFA4C7] md-desktop:text-xl lg-desktop:text-3xl s-laptop:text-xs md-tablet:text-base lg-desktop:py-4 lg-desktop:px-6 lg-phone:text-xs">
          Order Now
        </button>
      </div>
      <div className=" flex place-self-end md-laptop:pr-40 md-desktop:text-2xl lg-desktop:text-4xl s-laptop:text-sm s-laptop:pr-10 md-laptop:text-base lg-desktop:pr-64">
        <p className="origin-top-right -rotate-90 font-semibold tracking-wider mr-10 md-desktop:text-3xl lg-desktop:text-[40px] lg-desktop:mr-14 md-laptop:text-2xl s-laptop:text-xl lg-phone:text-2xl">
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
  );
}
