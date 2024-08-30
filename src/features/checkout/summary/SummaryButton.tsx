import useSmoothiesStore from "@/store/store";
import { Link } from "react-router-dom";

export default function SummaryButton() {
  const smoothie = useSmoothiesStore((state) => state.selectedSmoothie);

  return (
    <Link to={"/success"}>
      <button
        className={`${smoothie.backgroundColor} ${smoothie.hoverColor} w-full rounded-xl p-2 font-medium text-white md-desktop:text-xl lg-desktop:p-3 lg-desktop:text-3xl`}
      >
        Place Order
      </button>
    </Link>
  );
}
