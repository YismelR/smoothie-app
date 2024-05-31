import useSmoothiesStore from "@/store/store";
import HomeCard from "./HomeCard";
import HomeFooter from "./HomeFooter";

function App() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);

  return (
    <div
      className={`flex md-tablet:pb-20 h-screen  ${selectedSmoothie.mainBackgroundColor} lg-desktop:pb-28 md-phone:pt-8 md-phone:pb-8 lg-phone:pt-16 lg-phone:pb-16 md-tablet:pt-0 `}
    >
      <HomeCard />
      <HomeFooter />
    </div>
  );
}

export default App;
