import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddPublicationScreen } from "../screens/Publications/AddPublicationScreen/AddPublicationScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function AddPublicationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.search.search}
        component={AddPublicationScreen}
        options={{ title: "New Garment" }}
      />
    </Stack.Navigator>
  );
}
