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
    navigation.navigate(screen.publication.publicationUser, {
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
    <ScrollView style={{ marginTop: 30 }}>
      <FlatList
        data={publications}
        renderItem={renderItem}
        columnWrapperStyle={styles.container}
        numColumns={3}
      />
    </ScrollView>
  );
}
