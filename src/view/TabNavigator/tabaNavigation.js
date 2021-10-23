import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";

import { COLORS } from "../../theme/theme";

import Home from "../Home";
import Details from "../Details";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
          tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: "white",
          height: 60,
          marginTop: 10,
          position: 'absolute',
          elevation: 5,

        },
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <Entypo
              name="home"
              size={size}
              color={focused ? COLORS.primary : COLORS.grey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <Entypo
              name="book"
              size={size}
              color={focused ? COLORS.primary : COLORS.grey}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
