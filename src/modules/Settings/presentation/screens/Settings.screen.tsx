import { BackgroundView } from "@/core/components/BackgroundView.component";
import { Header } from "@/core/components/Header.component";
import { ScrollView } from "react-native";
import { SettingItem } from "../components/SettingItem.component";
import { useRouter } from "expo-router";

export const SettingsScreen = () => {
  const router = useRouter();

  return (
    <BackgroundView>
      <Header title="Configuración" />
      <ScrollView contentContainerStyle={{ gap: 12 }}>
        <SettingItem
          title="Perfil"
          onPress={() => router.push("/settings/profile")}
        />
        <SettingItem title="Mi cuenta" onPress={() => {}} />
        <SettingItem title="Idiomas" onPress={() => {}} />
        <SettingItem title="Modo oscuro" onPress={() => {}} />
      </ScrollView>
    </BackgroundView>
  );
};
