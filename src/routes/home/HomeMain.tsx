import HomeDescription from "@/routes/home/HomeDescription";
import HomeImageMore from "@/routes/home/HomeImageMore";

export default function HomeMain() {
  return (
    <main className="grid grid-cols-2 max-lg-phone:gap-2 max-lg-phone:pr-2 max-lg-phone:pl-5 z-20">
      <HomeDescription />
      <HomeImageMore />
    </main>
  );
}
