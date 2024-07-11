import useSmoothiesStore from "@/store/store";

export default function CheckoutButton() {
  const smoothie = useSmoothiesStore((state) => state.selectedSmoothie);

  return (
    <button
      className={`${smoothie.backgroundColor} ${smoothie.hoverColor} w-full text-white p-2 rounded-xl md-desktop:text-xl font-medium lg-desktop:p-3 lg-desktop:text-3xl`}
    >
      Place Order
    </button>
  );
}
