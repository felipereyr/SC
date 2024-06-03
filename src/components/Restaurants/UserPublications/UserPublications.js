import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { styles } from "./UserPublications.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";

export function UserPublications(props) {
  const { publications } = props;
  const navigation = useNavigation();

  const goToPublication = (publication) => {
    navigation.navigate(screen.restaurant.restaurant, { id: publication.id });
  };
  return (
    <ScrollView>
      <FlatList
        data={publications}
        horizontal={true}
        contentContainerStyle={styles.list}
        renderItem={(doc) => {
          const publication = doc.item.data();
          console.log(publication);

          return (
            <TouchableOpacity onPress={() => goToPublication(publication)}>
              <Image
                source={{ uri: publication.images[0] }}
                style={styles.image}
              />
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
}
