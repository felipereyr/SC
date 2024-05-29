import React from "react";
import { ScrollView, View } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./UserGuestScreen.styles";
import { ImageBackground } from "react-native";

export function UserGuestScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  };

  return (
    <ScrollView centerContent={true} style={styles.content}>
      <ImageBackground
        source={require("../../../../assets/img/bk.png")}
        style={styles.bk}
        imageStyle={{ resizeMode: "stretch" }}
      >
        <View>
          <Image
            source={require("../../../../assets/img/logoRBG.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.description}>
            Publish, research and save your best outfits
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            title="Join us"
            titleStyle={{ color: "#000000" }}
            onPress={goToLogin}
            buttonStyle={styles.btnStyle}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
