import { CarouselDemo } from "@/components/Carousel-card";
import plus from "@/assets/icons/plus.svg";
import minus from "@/assets/icons/minus.svg";
import backBtn from "@/assets/icons/backbtn.svg";
import { useState } from "react";
import heartChecked from "@/assets/icons/heart-checked.svg";
import heartUnchecked from "@/assets/icons/heart-unchecked.svg";
export default function SmoothieDetails() {
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
    <>
      <img src={backBtn} alt="back button" className="pl-8 cursor-pointer" />
      <div className="s-phone:flex flex-col place-items-center pl-8 pr-8">
        <CarouselDemo />
        <div className="flex flex-col gap-4 py-4 lg-phone:gap-12">
          <div className="flex justify-between">
            <h1 className="s-phone:text-lg font-semibold lg-phone:text-2xl">
              Berry-strawberry bowl
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
                className="h-5 w-5"
              />
            </label>
          </div>
          <p className="s-phone:text-xs md-phone:text-sm lg-phone:text-base">
            The bowls feature a wide range of toppings for you to enjoy with
            each scoop. Unlike a typical smoothie that you slurp down quickly, a
            smoothie bowl is meant to be savored as a wholesome and tasty meal.
          </p>
          <div className="lg-phone:flex flex-col gap-2">
            <p className="font-medium lg-phone:text-xl">Price $18</p>
            <div className="flex gap-2">
              <button className="cursor-pointer" onClick={handlePlus}>
                <img src={plus} alt="plus sign" />
              </button>
              <p>{count}</p>
              <button className="cursor-pointer" onClick={handleMinus}>
                <img src={minus} alt="minus sign" />
              </button>
            </div>
          </div>
          <button className="text-white bg-pink-darker px-4 py-2 rounded-[2rem] cursor-pointer lg-phone:text-xl">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
