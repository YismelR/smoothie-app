import thumbsUp from "@/assets/videos/thumbs-up.mp4";
export default function Checkout() {
  return (
    <main className="grid place-items-center gap-4 pt-8 lg-phone:gap-8 lg-phone:pt-24 lg-desktop:gap-12 lg-desktop:pt-32">
      <h1 className="text-2xl font-semibold lg-phone:text-3xl md-desktop:text-4xl lg-desktop:text-5xl">
        Thank You!
      </h1>
      <video width="150" height="150" autoPlay loop muted>
        <source src={thumbsUp} type="video/mp4" />
      </video>
      <p className="text-center text-2xl font-semibold lg-desktop:text-4xl">
        Your order has been successful!
      </p>
      <p className="px-4 text-center text-sm md-desktop:text-lg lg-desktop:text-xl">
        we'll take care of your order soon. <br /> In the meantime, You'll
        received an email from us with the details of your order, feel free to
        contact us with any questions.
      </p>
    </main>
  );
}
