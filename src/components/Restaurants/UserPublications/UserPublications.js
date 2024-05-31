import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { styles } from "./UserPublications.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { getAuth } from "firebase/auth";
import { Avatar, Button } from "react-native-elements";
import { doc } from "firebase/firestore";

export function UserPublications(props) {
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
          <View style={{}}>
            <View style={styles.publication}>
              <View style={styles.user}>
                <Avatar source={{ uri: publication.photo }} rounded />
                <Text>{publication.user}</Text>
              </View>
              <Image
                source={{ uri: publication.images[0] }}
                style={styles.image}
              />
              <View style={styles.info}>
                <Text style={styles.name}>{publication.name}</Text>
                <Button
                  title="Details"
                  buttonStyle={{ backgroundColor: "#352D2E", borderRadius: 6 }}
                  onPress={() => goToPublication(publication)}
                ></Button>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
}
