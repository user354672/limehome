import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./src/navigation/RootNavigator";
import { ApartmentContextProvider } from "./src/store/ApartmentsContext";
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <SafeAreaProvider>
      <ApartmentContextProvider>
        <RootNavigator />
        <StatusBar />
      </ApartmentContextProvider>
    </SafeAreaProvider>
  );
}
