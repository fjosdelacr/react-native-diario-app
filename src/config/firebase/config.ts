const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "react-native-store-app-cbbb9.firebaseapp.com",
  projectId: "react-native-store-app-cbbb9",
  storageBucket: "react-native-store-app-cbbb9.firebasestorage.app",
  messagingSenderId: "467097032603",
  appId: "1:467097032603:web:265453504a8a5efcdcf33e",
};

/**
 * Proporciona la configuración de Firebase como objeto inmutable
 * para evitar mutaciones accidentales en runtime.
 */
export function getFirebaseConfig(): Readonly<typeof firebaseConfig> {
  return Object.freeze(firebaseConfig);
}
