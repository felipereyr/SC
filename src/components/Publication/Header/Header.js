import { View, Linking } from "react-native";
import React from "react";
import { Text, Rating, Button } from "react-native-elements";
import { styles } from "./Header.styles";
import { Delete } from "../Delete";

export function Header(props) {
  const { publication } = props;

  const link = publication.shop;

  const openLink = (url) => {
    Linking.openURL(url).catch((error) =>
      console.error("Failed to open URL: ", error)
    );
  };

  return (
    <View style={styles.content}>
      <View style={styles.titleView}>
        <Text style={styles.name}>{publication.name}</Text>
        <Rating
          imageSize={20}
          readonly
          startingValue={publication.ratingMedia | 0}
        />
      </View>
      <Text style={styles.description}>{publication.description}</Text>
      <Button
        title="Shop Product"
        onPress={() => openLink(link)}
        buttonStyle={{ backgroundColor: "#D6445B", marginTop: 40 }}
      />
      <Delete />
    </View>
  );
}
