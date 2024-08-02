import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

export function TabSwitch() {
  return (
    <Tabs defaultValue="account" className="w-[300px] md-tablet:w-[450px]">
      <TabsList className="grid w-full grid-cols-2 lg-desktop:h-12">
        <TabsTrigger value="account" className="lg-desktop:text-xl">
          Sign In
        </TabsTrigger>
        <TabsTrigger value="password" className="lg-desktop:text-xl">
          Sign Up
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle className="py-3">Sign In</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <SignInForm />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader className="mb-4">
            <CardTitle className="py-2 md-phone:py-3">Sign Up</CardTitle>
            <CardDescription className="lg-desktop:text-xl">
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <SignUpForm />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
