import { ScrollView, Text, Dimension, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./PublicationUserScreen.styles";
import {
  doc,
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import { Carouselimg } from "../../../components/Shared";
import { Loading } from "../../../components/Shared";
import { db } from "../../../utils";
import { BtnFavorite } from "../../../components/Publication";
import { Header } from "../../../components/Publication";
import { BtnReviewForm } from "../../../components/Publication";
import { Reviews } from "../../../components/Publication";
import { DeletePublication } from "../../../components/Restaurants/DeletePublication";

const { width } = Dimensions.get("window");

export function PublicationUserScreen(props) {
  const { route } = props;
  const [publication, setPublication] = useState(null);

  useEffect(() => {
    setPublication(null);
    onSnapshot(doc(db, "publications", route.params.id), (doc) => {
      setPublication(doc.data());
    });
  }, [route.params.id]);

  if (!publication) return <Loading show text="Cargando publicaciones" />;

  return (
    <ScrollView scrollEnabled style={styles.content}>
      <Carouselimg
        arrayImages={publication.images}
        height={250}
        width={width}
      />

      <Header publication={publication} />
      <DeletePublication idPublication={route.params.id} />
      <BtnReviewForm idPublication={route.params.id} />
      <Reviews idPublication={route.params.id} />
    </ScrollView>
  );
}
