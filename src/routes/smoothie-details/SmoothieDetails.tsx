import { CarouselDemo } from "@/components/Carousel-card";
import { useState } from "react";
import heartChecked from "@/assets/icons/heart-checked.svg";
import heartUnchecked from "@/assets/icons/heart-unchecked.svg";
import useSmoothiesStore from "@/store/store";
import { Link } from "react-router-dom";
import RelatedSmoothies from "./RelatedSmoothies";
export default function SmoothieDetails() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);
  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(0);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className="s-phone:pb-8">
      <Link to={"/bowls"}>
        <svg
          data-testid="back-button"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 ml-4 cursor-pointer md-tablet:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
          />
        </svg>
      </Link>
      <div className="s-phone:flex flex-col md-tablet:gap-8 place-items-center px-8 md-tablet:px-12 s-laptop:grid grid-cols-2 s-laptop:mt-20 md-laptop:px-32">
        <CarouselDemo />
        <div className="flex flex-col gap-4 py-4 lg-phone:gap-12 s-laptop:px-8 md-desktop:px-16 lg-desktop:pr-40 lg-desktop:gap-20 ">
          <div className="flex justify-between place-items-center">
            <h1
              className={`${selectedSmoothie.textColor} s-phone:text-lg font-semibold lg-phone:text-2xl md-tablet:text-3xl md-desktop:text-5xl lg-desktop:text-6xl`}
            >
              {selectedSmoothie.text}
            </h1>
            <input
              type="checkbox"
              id="heartCheckbox"
              className="hidden"
              checked={isChecked}
              onChange={handleCheckbox}
            />
            <label htmlFor="heartCheckbox" className="cursor-pointer">
              <img
                src={isChecked ? heartChecked : heartUnchecked}
                alt="heart favorite"
                className="h-5 w-5 md-tablet:h-8 md-tablet:w-8 s-laptop:w-6 md-laptop:w-8 lg-desktop:h-10 lg-desktop:w-10"
              />
            </label>
          </div>
          <p className="s-phone:text-xs md-phone:text-sm lg-phone:text-base md-tablet:text-xl md-desktop:text-2xl lg-desktop:text-3xl">
            The bowls feature a wide range of toppings for you to enjoy with
            each scoop. Unlike a typical smoothie that you slurp down quickly, a
            smoothie bowl is meant to be savored as a wholesome and tasty meal.
          </p>
          <div className="lg-phone:flex flex-col gap-2">
            <p className="font-medium lg-phone:text-xl md-tablet:text-2xl md-desktop:text-3xl lg-desktop:text-4xl">
              Price ${selectedSmoothie.price}
            </p>
            <div className="flex gap-2 md-tablet:text-2xl lg-desktop:text-3xl">
              <button
                title="minus"
                className="cursor-pointer disabled:opacity-25 disabled:cursor-default"
                onClick={handleMinus}
                disabled={count === 0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 md-desktop:size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
              <p data-testid="count">{count}</p>
              <button
                title="plus"
                className="cursor-pointer"
                onClick={handlePlus}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 md-desktop:size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button
            className={`text-white ${selectedSmoothie.hoverColor}  ${selectedSmoothie.backgroundColor} px-4 py-2 rounded-[2rem] cursor-pointer lg-phone:text-xl md-tablet:text-2xl s-laptop:text-xl md-laptop:text-2xl lg-desktop:text-4xl lg-desktop:py-4`}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="s-phone:flex s-phone:flex-col s-phone:gap-8 lg-desktop:gap-16 s-phone:pl-4 s-phone:pr-4 md-tablet:px-12 md-laptop:px-32 s-phone:mt-4 md-tablet:mt-8 s-laptop:mt-12 md-desktop:mt-20">
        <h2 className="s-phone:text-base font-semibold lg-phone:text-lg md-tablet:text-2xl md-desktop:text-3xl lg-desktop:text-4xl">
          Related Products
        </h2>
        <RelatedSmoothies />
      </div>
    </div>
  );
}
