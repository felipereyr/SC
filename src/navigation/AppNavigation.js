import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { PublicationStack } from "./PublicationStack";
import { RankingStack } from "../navigation/RankingStack";
import { AddPublicationStack } from "./AddPublicationStack";
import { FavoritesStack } from "../navigation/FavoritesStack";
import { AccountStack } from "../navigation/AccountStack";
import { screen } from "../utils";
import { View, Platform } from "react-native";
import {
  Fontisto,
  MaterialCommunityIcons,
  FontAwesome6,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "white",
  },
};

export function AppNavigation() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  });
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      initialRouteName={screen.account.tab}
    >
      <Tab.Screen
        name={screen.publication.tab}
        component={PublicationStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name="home"
                size={24}
                color={focused ? "#D6445B" : "black"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome6
                name="ranking-star"
                size={24}
                color={focused ? "#D6445B" : "black"}
              />
            );
          },
        }}
      />
      {currentUser && (
        <Tab.Screen
          name={screen.search.tab}
          component={AddPublicationStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#D6445B",
                    height: Platform.OS == "ios" ? 50 : 60,
                    width: Platform.OS == "ios" ? 50 : 60,
                    top: Platform.OS == "ios" ? -5 : -10,

                    borderRadius: Platform.OS == "ios" ? 25 : 30,
                    borderWidth: 2,
                    borderColor: "white",
                  }}
                >
                  <Fontisto name="plus-a" size={24} color="white" />
                </View>
              );
            },
          }}
        />
      )}

      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoritesStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="hanger"
                size={32}
                color={focused ? "#D6445B" : "black"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="user"
                size={24}
                color={focused ? "#D6445B" : "black"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
