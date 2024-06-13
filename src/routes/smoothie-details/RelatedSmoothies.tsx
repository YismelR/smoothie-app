import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import pinkBowl from "@/assets/images/berry-smoothie.png";

export default function RelatedSmoothies() {
  return (
    <>
      <Card className="s-phone:flex place-items-center bg-grey-lightCard s-phone:rounded-2xl shadow-cardShadow">
        <CardContent className="px-4">
          <img
            src={pinkBowl}
            alt="pink smoothie"
            className="s-phone:max-w-28"
          />
        </CardContent>
        <CardHeader className="bg-white">
          <CardTitle className="s-phone:text-base">
            Berry Strawberry Smoothie
          </CardTitle>
          <CardDescription>$18.99</CardDescription>
        </CardHeader>
      </Card>
      <Card className="s-phone:flex s-phone:place-items-center bg-grey-lightCard s-phone:rounded-2xl shadow-cardShadow">
        <CardContent className=" px-4">
          <img
            src={pinkBowl}
            alt="pink smoothie"
            className="s-phone:max-w-28"
          />
        </CardContent>
        <CardHeader className="bg-white">
          <CardTitle className="s-phone:text-base">
            Berry Strawberry Smoothie
          </CardTitle>
          <CardDescription>$18.99</CardDescription>
        </CardHeader>
      </Card>
      <Card className="s-phone:flex s-phone:place-items-center bg-grey-lightCard s-phone:rounded-2xl shadow-cardShadow">
        <CardContent className=" px-4">
          <img
            src={pinkBowl}
            alt="pink smoothie"
            className="s-phone:max-w-28"
          />
        </CardContent>
        <CardHeader className="bg-white">
          <CardTitle className="s-phone:text-base">
            Berry Strawberry Smoothie
          </CardTitle>
          <CardDescription>$18.99</CardDescription>
        </CardHeader>
      </Card>
    </>
  );
}
