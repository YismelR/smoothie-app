import HomeDescription from "@/components/HomeDescription";
import HomeImageMore from "@/components/HomeImageMore";

export default function HomeMain() {
  return (
    <main className="grid grid-cols-2 max-lg-phone:gap-2 max-lg-phone:pr-2 max-lg-phone:pl-5 z-20">
      <HomeDescription />
      <HomeImageMore />
    </main>
  );
}
