import useSmoothiesStore from "@/store/store";
import { ContactForm } from "./ContactForm";
import contactImg from "@/assets/images/contact-image.svg";
export default function ContactUs() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);
  return (
    <div className=" s-phone:px-4 s-phone:grid s-phone:gap-4 s-phone:mt-4 md-tablet:place-items-center md-tablet:px-12 s-laptop:grid-cols-2 s-laptop:my-12 md-laptop:pl-32 md-laptop:pr-24 md-desktop:my-32 md-desktop:pr-16 lg-desktop:h-[50rem] lg-desktop:my-0 lg-desktop:mt-24">
      <div className="s-phone:grid s-phone:gap-4 lg-desktop:h-full lg-desktop:flex lg-desktop:flex-col lg-desktop:justify-center lg-desktop:gap-16">
        <h1
          className={`${selectedSmoothie.textColor} s-phone:font-semibold s-phone:text-2xl lg-phone:text-3xl md-tablet:text-4xl md-desktop:text-5xl lg-desktop:text-6xl`}
        >
          Contact Us
        </h1>
        <p className="s-phone:text-sm lg-phone:text-base md-tablet:text-lg md-desktop:text-xl lg-desktop:text-2xl">
          We’re here to help! Whether you have questions, feedback, or need
          assistance, our team is ready to assist you.
        </p>
        <ContactForm />
      </div>
      <img
        src={contactImg}
        alt="contact us"
        className="s-phone:row-start-1 s-laptop:col-start-2 lg-desktop:h-full"
      />
    </div>
  );
}
