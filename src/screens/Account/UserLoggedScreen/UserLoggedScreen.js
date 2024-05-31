import React, { useState, useEffect } from "react";
import { Image, View, ScrollView } from "react-native";
import { Button, Avatar } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { LoadingModal } from "../../../components";
import { InfoUser, AccountOptions } from "../../../components/Account";
import { styles } from "./UserLoggedScreen.styles";
import { SafeAreaView } from "react-native";
import { UserPublications } from "../../../components/Restaurants";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../utils";

export function UserLoggedScreen(props) {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [_, setReload] = useState(false);
  const onReload = () => setReload((prevState) => !prevState);
  const [publications, setPublications] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, "publications"),
      orderBy("createdAt", "desc")
    );

    onSnapshot(q, (snapshot) => {
      setPublications(snapshot.docs);
    });
  }, []);

  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  return (
    <ScrollView style={{ backgroundColor: "white", height: "100%" }}>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />
      <UserPublications publications={publications} />
      <AccountOptions onReload={onReload} />

      <Button
        title="Cerrar sesión"
        buttonStyle={styles.btnStyles}
        titleStyle={styles.btnTextStyle}
        onPress={logout}
      />

      <LoadingModal show={loading} text={loadingText} />
    </ScrollView>
  );
}
