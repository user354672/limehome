import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

import MapScreen from "../screens/MapScreen";
import ApartmentScreen from "../screens/ApartmentScreen";

const Stack = createSharedElementStackNavigator();
const Tab = createBottomTabNavigator();

const tabScreens = [
  {
    name: "Search",
    component: () => {},
    iconName: "search",
  },
  {
    name: "Map",
    component: MapScreen,
    iconName: "map",
  },
  {
    name: "Saved",
    component: () => {},
    iconName: "favorite-outline",
  },
  {
    name: "Profile",
    component: () => {},
    iconName: "account-circle",
  },
];

const MainStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="MapScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MapScreen" component={TabNavigator} />
      <Stack.Screen name="ApartmentScreen" component={ApartmentScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        labelStyle: styles.label,
        activeTintColor: "#fff",
        inactiveTintColor: "#fff",
        activeBackgroundColor: "#4d6447",
        inactiveBackgroundColor: "#4d6447",
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {tabScreens.map((tab) => (
        <Tab.Screen
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={[
                  styles.tabBarIcon,
                  { backgroundColor: focused ? "#5b7052" : "#4d6447" },
                ]}
              >
                <MaterialIcons
                  name={tab.iconName}
                  size={26}
                  color="white"
                  style={styles.icon}
                />
                <Text style={{ color: "white" }}>{tab.name}</Text>
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
