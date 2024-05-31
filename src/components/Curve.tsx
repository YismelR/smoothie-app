import useSmoothiesStore from "@/store/store";

export default function Curve() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);

  return (
    <svg
      viewBox="250 0 900 785"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`hidden s-laptop:flex absolute w-full h-full object-contain z-10 ${selectedSmoothie.bgFill}`}
    >
      <path
        d="M0.771599 0H900C910.041 257.3 820.078 281.8 747.384 337C747.384 337 704.007 360.555 668.667 389.3C638.545 413.8 599 478 622.5 574.5C646 671 635.062 679.5 622.5 716C605.464 765.5 547.5 784.8 547.5 784.8H0.771599V0Z"
        fillOpacity="0.2"
      />
    </svg>
  );
}
