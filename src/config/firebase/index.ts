import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";

import {
  // @ts-ignore
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlMpi0xQrmV9YZX6_jYaSBPEhIcoOnI40",
  authDomain: "react-native-store-app-cbbb9.firebaseapp.com",
  projectId: "react-native-store-app-cbbb9",
  storageBucket: "react-native-store-app-cbbb9.firebasestorage.app",
  messagingSenderId: "467097032603",
  appId: "1:467097032603:web:265453504a8a5efcdcf33e",
};

// Initialize Firebase app — singleton a nivel de aplicación
export const app = initializeApp(firebaseConfig);

/**
 * initializeAuth en lugar de getAuth para configurar la persistencia
 * con AsyncStorage. En React Native, Firebase no puede usar localStorage
 * (web), por lo que se necesita getReactNativePersistence para que la
 * sesión del usuario sobreviva entre reinicios de la app.
 *
 * En runtime Metro resuelve la versión react-native de firebase/auth
 * que contiene getReactNativePersistence.
 */
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const firebaseDB = getFirestore(app);
