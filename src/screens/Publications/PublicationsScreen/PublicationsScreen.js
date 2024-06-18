import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { Text } from "react-native-elements";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { LoadingModal, Loading } from "../../../components/Shared";
import { ListPublications } from "../../../components/Publications";
import { PublicationsNotLogged } from "../../../components/Publications";
import { styles } from "./PublicationsScreen.styles";

export function PublicationsScreen(props) {
  const [publications, setPublications] = useState(null);
  const [hasLogged, setHasLogged] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setHasLogged(!!user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (hasLogged) {
      try {
        const q = query(
          collection(db, "publications"),
          where("idUser", "!=", auth.currentUser.uid),
          orderBy("idUser")
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
          setPublications(snapshot.docs);
        }, (error) => {
          console.error("Error fetching publications:", error);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error("Error in Firestore query:", error);
      }
    }
  }, [hasLogged]);

  if (hasLogged === null) return <LoadingModal show text="Cargando" />;
  if (!hasLogged) return <PublicationsNotLogged />;

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View style={{ display: "flex", alignItems: "center" }}>
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