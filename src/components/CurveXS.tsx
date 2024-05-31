import useSmoothiesStore from "@/store/store";

export default function CurveXS() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);

  return (
    <svg
      viewBox="250 0 900 2095"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`md-tablet:hidden s-phone:flex absolute w-full h-full object-contain z-10 ${selectedSmoothie.bgFill}`}
    >
      <g clipPath="url(#clip0_122_171)">
        <path
          d="M0 0H899.228C909.269 686.679 819.306 752.065 746.612 899.383C746.612 899.383 703.235 962.246 667.895 1038.96C637.773 1104.35 598.228 1275.68 621.728 1533.22C645.228 1790.76 634.29 1813.45 621.728 1910.86C604.692 2042.96 546.728 2094.47 546.728 2094.47H0V0Z"
          fillOpacity="0.2"
        />
      </g>
    </svg>
  );
}
