import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const Page = () => {
  //main page below it redirects to the welcome page/onboarding page
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    console.log("User is signed in, redirecting to home page");
    return <Redirect href={"/(drawer)/(tabs)"} />;
  }
  console.log("User is not signed in, redirecting to welcome page");
  return <Redirect href={"/(auth)/welcome"} />;
};

export default Page;
