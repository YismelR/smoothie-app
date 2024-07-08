import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useSmoothiesStore from "@/store/store";
export default function Favorite() {
  const { setFilter, filterFavoriteSmoothie } = useSmoothiesStore(
    (state) => state
  );

  function handleChange(value: string) {
    setFilter(value);
    filterFavoriteSmoothie();
  }
  {
    return (
      <div className="flex justify-end px-4 lg-phone:px-8 md-tablet:px-10 md-laptop:px-32 mb-8 ">
        <Select onValueChange={handleChange}>
          <SelectTrigger className="max-w-36 md-tablet:max-w-[180px] bg-grey-lightCard lg-desktop:max-w-56">
            <SelectValue placeholder="Filter Favorites" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem
                value="favorite"
                className="font-medium md-tablet:text-base md-desktop:text-xl lg-desktop:text-2xl"
              >
                Favorite
              </SelectItem>
              <SelectItem
                value="all bowls"
                className="font-medium md-tablet:text-base md-desktop:text-xl lg-desktop:text-2xl"
              >
                All Bowls
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  }
}
