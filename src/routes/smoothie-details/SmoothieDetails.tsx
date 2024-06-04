import { CarouselDemo } from "@/components/Carousel-card";
import plus from "@/assets/icons/plus.svg";
import minus from "@/assets/icons/minus.svg";
import backBtn from "@/assets/icons/backbtn.svg";
export default function SmoothieDetails() {
  return (
    <>
      <img src={backBtn} alt="back button" className="pl-8" />
      <div className="grid s-phone:grid-rows-2 pl-8 pr-8">
        <CarouselDemo />
        <div>
          <div className="flex justify-between">
            <h1>Berry-strawberry bowl</h1>
            <input type="checkbox" />
          </div>
          <div>
            <p>Price $18</p>
            <div className="flex gap-2">
              <button>
                <img src={plus} alt="plus sign" />
              </button>
              <p>1</p>
              <button>
                <img src={minus} alt="minus sign" />
              </button>
            </div>
          </div>
          <button className="text-white bg-pink-darker px-4 py-2 rounded-[2rem]">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
