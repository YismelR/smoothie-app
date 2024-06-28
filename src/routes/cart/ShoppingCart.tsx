import { ItemTable } from "./ItemTable";

export function ShoppingCart() {
  return (
    <div className="flex flex-col h-screen">
      <h1 className=" s-phone:text-2xl s-phone:flex s-phone:justify-center s-phone:my-2 s-phone:font-bold md-tablet:text-3xl md-tablet:mb-8 md-desktop:text-4xl lg-desktop:text-5xl lg-desktop:my-20">
        <div className="relative overflow-hidden lg-desktop:pb-4 s-phone:pb-2">
          Your Order
          <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 animate-underline"></span>
        </div>
      </h1>
      <div>
        <div>
          <ItemTable />
        </div>
      </div>
    </div>
  );
}
