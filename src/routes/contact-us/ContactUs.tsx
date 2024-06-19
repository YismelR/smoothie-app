import useSmoothiesStore from "@/store/store";
import { ContactForm } from "./ContactForm";
export default function ContactUs() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);
  return (
    <div className=" s-phone:px-4 s-phone:grid s-phone:gap-4 s-phone:mt-4">
      <h1
        className={`${selectedSmoothie.textColor} s-phone:text-2xl s-phone:font-semibold`}
      >
        Contact Us
      </h1>
      <p className="s-phone:text-sm">
        We’re here to help! Whether you have questions, feedback, or need
        assistance, our team is ready to assist you.
      </p>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
