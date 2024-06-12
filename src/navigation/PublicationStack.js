import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PublicationsScreen } from "../screens/Publications/PublicationsScreen/PublicationsScreen";
import { PublicationScreen } from "../screens/Publications/PublicationScreen";
import { AddReviewPublicationScreen } from "../screens/Publications/AddReviewPublicationScreen/AddReviewPublicationScreen";
import { PublicationUserScreen } from "../screens/Publications/PublicationUserScreen/PublicationUserScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function PublicationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.publication.publications}
        component={PublicationsScreen}
        options={{ title: "Feed", headerShown: false }}
      />
      <Stack.Screen
        name={screen.publication.publication}
        component={PublicationScreen}
        options={{ title: "Garment" }}
      />
      <Stack.Screen
        name={screen.publication.addReviewPublication}
        component={AddReviewPublicationScreen}
        options={{ title: "Review" }}
      />
      <Stack.Screen
        name={screen.publication.publicationUser}
        component={PublicationUserScreen}
        options={{ title: "Your Garment" }}
      />
    </Stack.Navigator>
  );
}
