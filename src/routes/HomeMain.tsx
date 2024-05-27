import MainDescription from "@/components/MainDescription";
import MainImage from "@/components/MainImage";
export default function HomeMain() {
  return (
    <main className="grid grid-cols-2 max-lg-phone:gap-2 max-lg-phone:pr-2 max-lg-phone:pl-8 ">
      <MainDescription />
      <MainImage />
    </main>
  );
}
