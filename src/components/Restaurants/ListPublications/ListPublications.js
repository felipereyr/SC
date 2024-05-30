import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Image, Button, Avatar } from "react-native-elements";
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
          <View style={{}}>
            <View style={styles.publication}>
              <View style={styles.user}>
                <Avatar
                  size={40}
                  rounded
                  containerStyle={{ backgroundColor: "black" }}
                  icon={{ type: "material", name: "person" }}
                ></Avatar>
                <Text>Felipe__75</Text>
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
