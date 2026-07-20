import { TabNav } from "@/navigation/TabNav";
import { ThemeProvider } from "@/core/contexts/theme.context";

export default function TabLayout() {
  return (
    <ThemeProvider>
      <TabNav />
    </ThemeProvider>
  );
}
