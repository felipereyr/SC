import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { styles } from "./ListPublications.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";

export function ListPublications(props) {
  const { publications } = props;
  const navigation = useNavigation();

  const goToPublication = (publication) => {
    navigation.navigate(screen.publication.publication, {
      id: publication.id,
    });
  };
  const renderItem = async (doc) => {
    const publication = doc.item.data();
    return (
      <TouchableOpacity onPress={() => goToPublication(publication)}>
        <Image source={{ uri: publication.images[0] }} style={styles.image} />
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={publications}
      renderItem={renderItem}
      columnWrapperStyle={styles.container}
      numColumns={2}
      contentContainerStyle={{ paddingBottom: 100, marginTop: 20 }}
    />
  );
}
