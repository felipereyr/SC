import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Image, Icon, Text } from "react-native-elements";
import { styles } from "./PublicationFav.styles";
import { useNavigation } from "@react-navigation/native";
import { doc, deleteDoc } from "firebase/firestore";
import { db, screen } from "../../../utils";

export function PublicationFav(props) {
  const { publication } = props;
  const navigation = useNavigation();

  const goToPublication = () => {
    navigation.navigate(screen.restaurant.tab, {
      screen: screen.restaurant.restaurant,
      params: {
        id: publication.id,
      },
    });
  };

  const onRemoveFavorite = async () => {
    try {
      await deleteDoc(doc(db, "favorites", publication.idFavorite));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableOpacity onPress={goToPublication}>
      <View style={styles.content}>
        <Image source={{ uri: publication.images[0] }} style={styles.image} />
        <View style={styles.infoContent}>
          <Text>{publication.name}</Text>
          <Icon
            type="material-community"
            name="heart"
            color="#f10"
            size={35}
            containerStyle={styles.iconContainer}
            onPress={onRemoveFavorite}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
