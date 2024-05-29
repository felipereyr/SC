import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Image } from "react-native-elements";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./ListPublications.styles";
import { screen } from "../../../utils";

export function ListPublications(props) {
  const { publications } = props;
  const navigation = useNavigation();

  const goToPublication = (publication) => {
    navigation.navigate(screen.restaurant.restaurant, { id: publication.id });
  };
  return (
    <FlatList
      data={publications}
      renderItem={(doc) => {
        const publication = doc.item.data();
        console.log(publication);
        return (
          <TouchableOpacity onPress={() => goToPublication(publication)}>
            <View style={styles.publication}>
              <Image
                source={{ uri: publication.images[0] }}
                style={styles.image}
              />
              <View>
                <Text style={styles.name}>{publication.name}</Text>
                <Text style={styles.info}>{publication.shop}</Text>
                <Text style={styles.info}>{publication.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
