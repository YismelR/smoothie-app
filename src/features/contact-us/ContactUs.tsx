import useSmoothiesStore from "@/store/store";
import { ContactForm } from "./ContactForm";
import contactImg from "@/assets/images/contact-image.svg";
import ImageSkeleton from "../about/ImageSkeleton";
export default function ContactUs() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);
  return (
    <div className="s-phone:mt-4 s-phone:grid s-phone:gap-4 s-phone:px-4 s-phone:pb-16 md-tablet:place-items-center md-tablet:px-12 s-laptop:my-12 s-laptop:grid-cols-2 md-laptop:pl-32 md-laptop:pr-24 md-desktop:my-32 md-desktop:pr-16 lg-desktop:my-0 lg-desktop:mt-24 lg-desktop:h-[50rem] lg-desktop:pb-28">
      <div className="s-phone:grid s-phone:gap-4 lg-desktop:flex lg-desktop:h-full lg-desktop:flex-col lg-desktop:justify-center lg-desktop:gap-16">
        <h1
          className={`${selectedSmoothie.textColor} s-phone:text-2xl s-phone:font-semibold lg-phone:text-3xl md-tablet:text-4xl md-desktop:text-5xl lg-desktop:text-6xl`}
        >
          Contact Us
        </h1>
        <p className="s-phone:text-sm lg-phone:text-base md-tablet:text-lg md-desktop:text-xl lg-desktop:text-2xl">
          We’re here to help! Whether you have questions, feedback, or need
          assistance, our team is ready to assist you.
        </p>
        <ContactForm />
      </div>
      <ImageSkeleton
        src={contactImg}
        alt="contactImg"
        className="row-start-1 h-[204px] place-self-center md-tablet:h-[404px] s-laptop:col-start-2 md-laptop:h-[424px] md-desktop:h-[504px] lg-desktop:h-[624px]"
      />
    </div>
  );
}
