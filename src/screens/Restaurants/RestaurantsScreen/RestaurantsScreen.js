import React, { useState } from "react";
import { styles } from "./RestaurantsScreen.styles";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { useEffect } from "react";
import { LoadingModal } from "../../../components/Shared";
import { ListPublications } from "../../../components/Restaurants";
import { View, Image } from "react-native";
import { Text } from "react-native-elements";
import { FixedOffsetZone } from "luxon";

export function RestaurantsScreen(props) {
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
