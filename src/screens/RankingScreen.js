import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { map } from "lodash";
import { db } from "../utils";
import { PublicationRanking } from "../components/Restaurants";

export function RankingScreen() {
  const [publications, setPublications] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, "publications"),
      orderBy("ratingMedia", "desc"),
      limit(10)
    );

    onSnapshot(q, (snapshot) => {
      setPublications(snapshot.docs);
    });
  });

  return (
    <ScrollView>
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
