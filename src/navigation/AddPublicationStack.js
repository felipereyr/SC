import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddPublicationScreen } from "../screens/Restaurants/AddPublicationScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function AddPublicationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.AddPublication.addPublication}
        component={AddPublicationScreen}
        options={{ title: "New Garmet" }}
      />
    </Stack.Navigator>
  );
}
