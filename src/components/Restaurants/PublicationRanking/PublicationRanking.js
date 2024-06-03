import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Text, Rating, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./PublicationRanking.styles";

export function PublicationRanking(props) {
  const { publication, index } = props;
  const navigation = useNavigation();

  const goToPublication = () => {
    navigation.navigate(screen.restaurant.tab, {
      screen: screen.restaurant.restaurant,
      params: {
        id: publication.id,
      },
    });
  };

  const renderMedal = () => {
    if (index > 2) return null;

    let color = "";
    if (index === 0) color = "#FFD700";
    if (index === 1) color = "#BEBEBE";
    if (index === 2) color = "#CD7F32";
    return (
      <Icon
        type="material-community"
        name="medal-outline"
        color={color}
        style={styles.medal}
      />
    );
  };

  return (
    <TouchableOpacity onPress={goToPublication}>
      <View style={styles.content}>
        <Image source={{ uri: publication.images[0] }} style={styles.image} />
        <View style={styles.infoContent}>
          <View style={styles.nameContent}>
            {renderMedal()}
            <Text style={styles.name}>{publication.name}</Text>
          </View>
          <Rating imageSize={15} readonly />
        </View>
      </View>
    </TouchableOpacity>
  );
}
