import useSmoothiesStore from "@/store/store";
import { ContactForm } from "./ContactForm";
import contactImg from "@/assets/images/contact-image.svg";
export default function ContactUs() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);
  return (
    <div className=" s-phone:px-4 s-phone:grid s-phone:gap-4 s-phone:mt-4 md-tablet:place-items-center md-tablet:px-16 s-laptop:grid-cols-2">
      <div className="s-phone:grid s-phone:gap-4">
        <h1
          className={`${selectedSmoothie.textColor} s-phone:font-semibold s-phone:text-2xl lg-phone:text-3xl md-tablet:text-4xl`}
        >
          Contact Us
        </h1>
        <p className="s-phone:text-sm lg-phone:text-base md-tablet:text-lg">
          We’re here to help! Whether you have questions, feedback, or need
          assistance, our team is ready to assist you.
        </p>
        <ContactForm />
      </div>
      <img
        src={contactImg}
        alt="contact us"
        className="s-phone:row-start-1 s-laptop:col-start-2"
      />
    </div>
  );
}
