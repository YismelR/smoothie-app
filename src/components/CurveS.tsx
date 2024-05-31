import useSmoothiesStore from "@/store/store";

export default function CurveS() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);

  return (
    <svg
      viewBox="150 0 900 1425"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`hidden s-laptop:hidden md-tablet:flex absolute w-full h-full object-contain ${selectedSmoothie.bgFill}`}
    >
      <g clipPath="url(#clip0_98_2)">
        <path
          d="M0.771606 0H900C910.041 467.073 820.078 511.548 747.384 611.752C747.384 611.752 704.007 654.511 668.667 706.691C638.545 751.166 599 867.707 622.5 1042.88C646 1218.06 635.062 1233.49 622.5 1299.75C605.464 1389.6 547.5 1424.64 547.5 1424.64H0.771606V0Z"
          fillOpacity="0.2"
        />
      </g>
    </svg>
  );
}
