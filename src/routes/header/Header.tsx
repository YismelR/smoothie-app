// import topLogo from "../assets/logo/top-logo.svg";
import MenuDropDown from "@/components/MenuDropDown";
import useSmoothiesStore from "@/store/store";
import { Outlet } from "react-router-dom";
import shoppingCart from "@/assets/icons/shoppingCart.svg";
import Curve from "@/components/Curve";

export default function Header() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);

  return (
    <div className="relative md-phone:h-screen">
      <Curve />
      <header className="flex relative justify-between items-center md-tablet:pl-10 md-tablet:pr-16  lg-phone:pr-6 s-phone:pl-4 s-phone:pr-4 z-20 md-tablet:pt-8">
        <svg
          viewBox="0 0 203 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`s-phone:w-24 s-laptop:w-28 md-desktop:w-36 lg-desktop:w-48 ${selectedSmoothie.logoFill}`}
        >
          <path
            d="M76.6 17C77.4667 23.4667 82 29.3334 86.0667 29.3334C88.5333 29.3334 88.5333 28 85.9333 24.2667C83.2667 20.4667 84.9333 20.4667 89.1333 24.3334L92.4 27.3334L91.4 23.3334C90.2667 18.6 87.3333 15.0667 82.4 12.5334C76.4 9.40004 75.6 10 76.6 17Z"
            fill="#12A34E"
          />
          <path
            d="M98.8 17C96.6667 19 94.4667 22.1334 93.9333 24L93 27.3334L95.9333 24.7334L98.8667 22.0667L97.9333 25.7334C97.4667 27.6667 97.4667 29.3334 97.9333 29.3334C100.6 29.3334 103.867 26.2 105.2 22.4667C108.533 13 105.667 10.5334 98.8 17Z"
            fill="#12A34E"
          />
          <path d="M135 19.5333C132.867 20.4 132.6 59.4 134.733 60.7333C138 62.7333 140 58.4 139.667 49.8667C139.267 39.5333 143.267 33.4 147.6 37.6667C149.667 39.7333 149.733 40.8667 148.2 49C145.6 62.6 145.6 63.2667 148.867 63.7333C152.4 64.2667 154.467 57 154.867 43C155.067 32.7333 148.933 28.3333 142.4 34.2C138.933 37.3333 138.333 35.9333 140 28.6C142 19.7333 140.667 17.2667 135 19.5333Z" />
          <path d="M162.667 24C162.667 29.2667 167.4 29.6667 169.333 24.6C171.133 19.9334 171.2 20 166.667 20C163.133 20 162.667 20.4667 162.667 24Z" />
          <path d="M114 28C113.533 30.2 112.267 32 111.2 32C110.2 32 109.333 32.8667 109.333 33.9334C109.333 35.1334 110.133 35.6 111.333 35.1334C113.067 34.4667 113.333 35.9334 113.2 44.4667C113.067 51.9334 113.6 55.5334 115.2 58C119.267 64.1334 128.6 60.8667 127.733 53.6C127.2 49.2 124.333 48.2667 123.8 52.2667C122.667 60.0667 119.333 55.3334 119.333 46V36.6667L123.667 36.2667C129.333 35.7334 129.667 32 124.067 32C120.333 32 120.133 31.7334 120.867 28C121.6 24.4 121.333 24 118.267 24C115.6 24 114.667 24.8 114 28Z" />
          <path d="M61.6666 29.4C60 30.0667 58.2666 31.4667 57.8666 32.6C57.2666 34.1334 55.7333 34.4 51.4 33.8C47.8 33.3334 45.3333 33.6 44.7333 34.5334C43.3333 36.8667 41.2 36.2667 41.6 33.6667C41.8666 31.9334 41.1333 31.3334 38.6666 31.3334H35.3333L35.8 47.3334C36.4 65.2 36.2666 64.7334 39.4666 62.9334C41.3333 61.8667 41.7333 60 41.4666 52.2667C41.2 44.3334 41.6 42.4 43.8666 40.1334C48.8666 35.1334 51 37.8 49.9333 47.6C49.4 52.3334 48.9333 57.2667 48.8 58.4667C48.7333 59.7334 49.8 60.8 51.4666 61.0667C54.8 61.5334 55.9333 58.5334 56 48.9334C56 41.7334 59 34.6667 62.0666 34.6667C65.3333 34.6667 65.7333 37.9334 64 50.1334C62.2666 62.3334 63.3333 66.7334 67.1333 62.6C69.5333 60 72.2666 40.3334 70.9333 35.4667C69.5333 30.4 65.6666 27.8667 61.6666 29.4Z" />
          <path d="M17.3333 30.3333C9.99998 33.2 10.3333 40.9333 18 47.7333C24.1333 53.1333 25.8 58.0667 22 59.5333C19.3333 60.5333 16 57.6667 16 54.3333C16 52.4667 15.4 51.9333 13.8667 52.5333C12.7333 53 11.5333 53.3333 11.2 53.3333C9.39998 53.3333 11.1333 58.6667 13.7333 61.1333C17.8667 64.9333 24.0667 64.8667 27.8 60.9333C32.4667 55.9333 31.5333 51.5333 24.6667 45.8C20.7333 42.5333 18.6667 39.7333 18.6667 37.7333C18.6667 33.8 23.4667 33.5333 24.6667 37.4C25.6 40.2 29.4 40.5333 30.2667 37.8667C31.8 33.2 23.0667 28.0667 17.3333 30.3333Z" />
          <path d="M177.733 33.8667C167.667 42.3334 169.933 62.6667 180.933 62.6667C187.467 62.6667 194.8 56.7334 192.6 53.2C191.467 51.3334 188.4 51.8 187.533 53.9334C185.133 60.1334 177.333 58.1334 177.333 51.3334C177.333 48.4 177.933 48.1334 184.333 47.7334L191.333 47.3334L191.667 41.3334C192.267 31.0667 185.4 27.4 177.733 33.8667ZM186.667 40C186.667 43.6667 186.267 44 182 44C176.8 44 176.4 43.2667 179.4 38.9334C182.533 34.4667 186.667 35.0667 186.667 40Z" />
          <path d="M82.3333 33.4667C75.4666 37.4 73.8 51.8 79.3333 58.4667C84.1333 64.0667 95.6 64.2 101.8 58.6667C107.333 53.7333 108.733 39.4 104.133 34.8C101 31.6667 86.8666 30.8 82.3333 33.4667ZM88 35.2C88 35.4667 87.1333 37.8 86 40.4667C83.6 46.2 83.4 52.2 85.6 54.4C86.4666 55.2667 86.6666 56.4 86.1333 57C82.2666 60.8667 80 47 83.2666 39.2667C84.8 35.6 88 32.8 88 35.2ZM101.333 43.1333C101.333 49.5333 98.8666 57 96.4666 57.8667C94.8666 58.5333 94.6 58.1333 95.3333 56.3333C97.2666 51.7333 98.4666 43.2667 97.6666 39.3333C96.9333 35.7333 97.0666 35.5333 99.1333 37.1333C100.333 38.2 101.333 40.8667 101.333 43.1333ZM93.3333 44.5333C93.3333 50.1333 92.1333 53.6 90.5333 52.6C89.1333 51.7333 88.8666 42.2 90.2 40.8667C92.2 38.9333 93.3333 40.2667 93.3333 44.5333Z" />
          <path d="M162.867 33.2C159.333 35.4667 160 61.9334 163.667 62.4C166.533 62.8667 166.667 62.4667 166.667 52.4C166.667 46.6667 167.067 39.7334 167.533 37C168.4 31.8 166.933 30.6 162.867 33.2Z" />
        </svg>
        <div className="flex justify-center place-items-center">
          <MenuDropDown />
          <img
            src={shoppingCart}
            alt="shopping cart"
            className="lg-desktop:h-10"
          />
        </div>
      </header>
      <div id="detail" className="z-20 relative">
        <Outlet />
      </div>
    </div>
  );
}
