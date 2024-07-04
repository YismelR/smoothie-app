import HomeDescription from "@/features/home-app/HomeDescription";
import HomeImage from "@/features/home-app/HomeImage";

export default function HomeMain() {
  return (
    <main className="grid grid-cols-2 max-lg-phone:gap-2 max-lg-phone:pr-2 max-lg-phone:pl-5 z-20">
      <HomeDescription />
      <HomeImage />
    </main>
  );
}
