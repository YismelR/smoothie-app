import useSmoothiesStore from "@/store/store";

export default function Curve() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);

  return (
    <>
      <svg
        viewBox="300 0 1023 785"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`hidden s-laptop:flex max-md-laptop:w-[108%] absolute w-full h-full object-contain z-10 ${selectedSmoothie.bgFill}`}
      >
        <path
          d="M-8.45335e-06 0H1022.12C1033.54 257.365 931.278 281.872 848.65 337.086C848.65 337.086 799.344 360.647 759.174 389.399C724.936 413.905 679.986 478.122 706.698 574.646C733.41 671.171 720.977 679.673 706.698 716.182C687.334 765.695 621.448 785 621.448 785H-8.45335e-06V0Z"
          fillOpacity="0.2"
        />
      </svg>
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
    </>
  );
}
