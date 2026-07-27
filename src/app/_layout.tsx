import { Stack } from "expo-router";
import { ThemeProvider } from "@/core/contexts/theme.context";
import { SQLiteProvider, SQLiteDatabase } from "expo-sqlite";

const initDatabase = async (db: SQLiteDatabase) => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );`);
};

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SQLiteProvider databaseName="store.db" onInit={initDatabase}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="register" />
        </Stack>
      </SQLiteProvider>
    </ThemeProvider>
  );
}
