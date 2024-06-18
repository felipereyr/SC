import React, { useState, useEffect } from "react";
import { ScrollView, View, Image, Text } from "react-native";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { map } from "lodash";
import { db } from "../utils";
import { UserNotLogged } from "../components/Favorites/UserNotLogged";
import { PublicationRanking } from "../components/Publications";

export function RankingScreen() {
  const [publications, setPublications] = useState(null);
  const [hasLogged, setHasLogged] = useState(null);
 
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  useEffect(() => {
    if(auth?.currentUser){
      const q = query(
        collection(db, "publications"),
        orderBy("ratingMedia", "desc"),
        limit(10)
      );
  
      onSnapshot(q, (snapshot) => {
        setPublications(snapshot.docs);
      });
    }
    
  }, [auth]);

  if (!hasLogged) return <UserNotLogged />;

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
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Ranking
      </Text>
      {map(publications, (publication, index) => (
        <PublicationRanking
          key={index}
          index={index}
          publication={publication.data()}
        />
      ))}
    </ScrollView>
  );
}
