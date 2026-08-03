import { auth } from "@/config/firebase";
import { LoginScreen } from "@/modules/Auth/presentation/screens/Login.screen";
import { Redirect } from "expo-router";

export default function Index() {
  const currentUser = auth.currentUser;

  return currentUser ? <Redirect href="/products" /> : <LoginScreen />;
}
