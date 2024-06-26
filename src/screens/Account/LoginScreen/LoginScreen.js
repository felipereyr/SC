import React from "react";
import { View, ScrollView } from "react-native";
import { Text, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { LoginForm } from "../../../components/Auth";
import { screen } from "../../../utils";
import { styles } from "./LoginScreen.styles";

export function LoginScreen() {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };

  return (
    <ScrollView style={{ backgroundColor: "#D6445B" }}>
      <Image
        source={require("../../../../assets/img/logoRBG.png")}
        style={styles.image}
      />
      <View style={{ display: "flex", alignItems: "center" }}>
        <Text style={styles.title}>Log in</Text>
        <Text style={styles.text}>
          Log in now for and start sharing your clothes
        </Text>
      </View>
      <View style={styles.content}>
        <LoginForm />

        <Text style={styles.textRegister}>
          ¿Aún no tienes cuenta?{"  "}
          <Text style={styles.btnRegister} onPress={goToRegister}>
            Regístrarse
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
