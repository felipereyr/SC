import React, { useState } from "react";
import { styles } from "./PublicationsScreen.styles";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { LoadingModal } from "../../../components/Shared";
import { ListPublications } from "../../../components/Publications";
import { View, Image } from "react-native";
import { Text } from "react-native-elements";
import { Loading } from "../../../components/Shared";
import { FixedOffsetZone } from "luxon";

export function PublicationsScreen(props) {
  const [publications, setPublications] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    const q = query(
      collection(db, "publications"),
      where("idUser", "!=", auth.currentUser.uid),
      orderBy("createdAt", "desc")
    );

    onSnapshot(q, (snapshot) => {
      setPublications(snapshot.docs);
    });
  }, []);

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <View style={{ padding: 20 }}>
          <Image source={require("../../../../assets/img/LogoL.png")} />
        </View>
      </View>
      {!publications ? (
        <LoadingModal show text="Cargando" />
      ) : (
        <ListPublications publications={publications} />
      )}
    </View>
  );
}
