import { View, FlatList } from "react-native";
import { Text, Image, Button, Avatar } from "react-native-elements";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./ListPublications.styles";
import { screen } from "../../../utils";

export function ListPublications(props) {
  const { publications, onReload } = props;
  const navigation = useNavigation();

  const goToPublication = (publication) => {
    navigation.navigate(screen.publication.publication, { id: publication.id });
  };

  return (
    <FlatList
      data={publications}
      horizontal={true}
      renderItem={(doc) => {
        const publication = doc.item.data();
        return (
          <View
            style={{
              marginTop: 50,
            }}
          >
            <View style={styles.publication}>
              <View style={styles.user}>
                <Avatar source={{ uri: publication.photo }} rounded />
                <Text>{"@" + publication.user}</Text>
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
