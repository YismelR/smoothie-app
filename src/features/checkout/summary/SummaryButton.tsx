import useSmoothiesStore from "@/store/store";
import { Link } from "react-router-dom";

export default function SummaryButton() {
  const smoothie = useSmoothiesStore((state) => state.selectedSmoothie);

  return (
    <Link to={"/checkout"}>
      <button
        className={`${smoothie.backgroundColor} ${smoothie.hoverColor} w-full text-white p-2 rounded-xl md-desktop:text-xl font-medium lg-desktop:p-3 lg-desktop:text-3xl`}
      >
        Place Order
      </button>
    </Link>
  );
}
