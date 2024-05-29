import React from "react";
import { View } from "react-native";
import { Image, Text } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RegisterForm } from "../../../components/Auth";
import { styles } from "./RegisterScreen.styles";

export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView style={{ backgroundColor: "#D6445B" }}>
      <Image
        source={require("../../../../assets/img/logoRBG.png")}
        style={styles.image}
      />
      <View style={{ display: "flex", alignItems: "center" }}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.text}>
          Sign up now for free and start sharing your clothes
        </Text>
      </View>
      <View style={styles.content}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
}
