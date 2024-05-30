import React, { useState, useEffect } from "react";
import { ScrollView, View, Image } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  UserNotLogged,
  NotFound,
  PublicationFav,
} from "../components/Favorites";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../utils";
import { Loading } from "../components/Shared";
import { size, map } from "lodash";

export function FavoritesScreen() {
  const [hasLogged, setHasLogged] = useState(null);
  const [publications, setPublications] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  useEffect(() => {
    if (auth?.currentUser) {
      const q = query(
        collection(db, "favorites"),
        where("idUser", "==", auth.currentUser.uid)
      );
      onSnapshot(q, async (snapshot) => {
        let publicationArray = [];
        for await (const item of snapshot.docs) {
          const data = item.data();
          const docRef = doc(db, "publications", data.idPublication);
          const docSnap = await getDoc(docRef);
          const newData = docSnap.data();
          newData.idFavorite = data.id;
          publicationArray.push(newData);
        }

        setPublications(publicationArray);
      });
    }
  }, [auth]);

  if (!hasLogged) return <UserNotLogged />;

  if (!publications) return <Loading show text="Loading" />;

  if (size(publications) === 0) return <NotFound />;

  return (
    <ScrollView style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <View style={{ padding: 20 }}>
          <Image source={require("../../assets/img/LogoL.png")} />
        </View>
      </View>
      {map(publications, (publication) => (
        <PublicationFav key={publication.id} publication={publication} />
      ))}
    </ScrollView>
  );
}
