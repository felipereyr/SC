import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PublicationsScreen } from "../screens/Restaurants/PublicationsScreen";
import { PublicationScreen } from "../screens/Restaurants/PublicationScreen";
import { AddReviewPublicationScreen } from "../screens/Restaurants/AddReviewPublicationScreen/AddReviewPublicationScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function FeedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.publication.publications}
        component={PublicationsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screen.publication.publication}
        component={PublicationScreen}
        options={{ title: "Garment" }}
      />
      <Stack.Screen
        name={screen.publication.addReviewPublication}
        component={AddReviewPublicationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
