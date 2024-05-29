import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantsScreen } from "../screens/Restaurants/RestaurantsScreen";
import { PublicationScreen } from "../screens/Restaurants/PublicationScreen";
import { AddReviewPublicationScreen } from "../screens/Restaurants/AddReviewPublicationScreen/AddReviewPublicationScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.restaurant.restaurants}
        component={RestaurantsScreen}
        options={{ title: "Restaurantes" }}
      />
      <Stack.Screen
        name={screen.restaurant.restaurant}
        component={PublicationScreen}
        options={{ title: "Publication" }}
      />
      <Stack.Screen
        name={screen.restaurant.addReviewRestaurant}
        component={AddReviewPublicationScreen}
        options={{ title: "Review" }}
      />
    </Stack.Navigator>
  );
}
