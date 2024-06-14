import React, { useState, useEffect } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Avatar, Text } from "react-native-elements";
import { getAuth } from "firebase/auth";
import { LoadingModal } from "../../../components";
import { InfoUser, AccountOptions } from "../../../components/Account";
import { styles } from "./UserLoggedScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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
  const insets = useSafeAreaInsets();
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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingBottom: insets.bottom,
      }}
    >
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />
      <AccountOptions onReload={onReload} />
      <View style={styles.second}>
        <Text style={styles.text}>YOUR CLOSET</Text>
      </View>
      <View style={{ flex: 1 }}>
        <UserPublications publications={publications} />
      </View>
      <LoadingModal show={loading} text={loadingText} />
    </SafeAreaView>
  );
}
