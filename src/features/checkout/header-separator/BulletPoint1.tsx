import { useLocation } from "react-router-dom";

export default function BulletPoint1() {
  const location = useLocation();
  const colorChangeBg =
    location.pathname === "/payment-info" ? "#979797" : "white";
  const colorChangeNum =
    location.pathname === "/payment-info" ? "white" : "#979797";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="md-desktop:size-8 lg-desktop:size-12"
    >
      <path
        d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
        fill={colorChangeBg}
        stroke="#979797"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2402 8.86621V16H12.0635V10.2627L10.3203 10.8535V9.88184L13.0986 8.86621H13.2402Z"
        fill={colorChangeNum}
      />
    </svg>
  );
}
