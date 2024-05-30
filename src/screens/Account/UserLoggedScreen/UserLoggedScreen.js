import React, { useState } from "react";
import { Image, View } from "react-native";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { LoadingModal } from "../../../components";
import { InfoUser, AccountOptions } from "../../../components/Account";
import { styles } from "./UserLoggedScreen.styles";
import {
  height,
  width,
} from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { BackgroundImage } from "react-native-elements/dist/config";
import { SafeAreaView } from "react-native";

export function UserLoggedScreen() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [_, setReload] = useState(false);

  const onReload = () => setReload((prevState) => !prevState);

  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />

      <AccountOptions onReload={onReload} />

      <Button
        title="Cerrar sesión"
        buttonStyle={styles.btnStyles}
        titleStyle={styles.btnTextStyle}
        onPress={logout}
      />

      <LoadingModal show={loading} text={loadingText} />
    </SafeAreaView>
  );
}
