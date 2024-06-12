import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Avatar, Text } from "react-native-elements";
import { getAuth } from "firebase/auth";
import { LoadingModal } from "../../../components";
import { InfoUser, AccountOptions } from "../../../components/Account";
import { styles } from "./UserLoggedScreen.styles";
import { useNavigation } from "@react-navigation/native";

import { UserPublications } from "../../../components/Publications";
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
  const navigation = useNavigation();

  const auth = getAuth();

  useEffect(() => {
    const q = query(
      collection(db, "publications"),
      where("idUser", "==", auth.currentUser.uid),
      orderBy("createdAt", "desc")
    );

    onSnapshot(q, (snapshot) => {
      setPublications(snapshot.docs);
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "white", height: "100%" }}>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />
      <AccountOptions onReload={onReload} />
      <View style={styles.second}>
        <Text style={styles.text}>YOUR CLOSET</Text>
      </View>
      <UserPublications publications={publications} />
      <LoadingModal show={loading} text={loadingText} />
    </ScrollView>
  );
}
