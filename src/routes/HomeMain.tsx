import MainDescription from "@/components/MainDescription";
import MainImage from "@/components/MainImage";
export default function HomeMain() {
  return (
    <main className="grid grid-cols-2 ">
      <MainDescription />
      <MainImage />
    </main>
  );
}
