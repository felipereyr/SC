import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./BtnReviewForm.styles";
import { Text, Button } from "react-native-elements";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import { size } from "lodash";
import { screen } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../../utils";

export function BtnReviewForm(props) {
  const { idPublication } = props;
  const navigation = useNavigation();
  const [hasLogged, setHasLogged] = useState(false);
  const [hasReview, setHasReview] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  useEffect(() => {
    if (hasLogged) {
      const q = query(
        collection(db, "reviews"),
        where("idPublication", "==", idPublication),
        where("idUser", "==", auth.currentUser.uid)
      );

      onSnapshot(q, (snapshot) => {
        if (size(snapshot.docs) > 0) setHasReview(true);
      });
    }
  }, [hasLogged]);

  const goToLogin = () => {
    navigation.navigate(screen.account.tab, {
      screen: screen.account.login,
    });
  };

  const goToAddReview = () => {
    navigation.navigate(screen.restaurant.addReviewRestaurant, {
      idPublication,
    });
  };

  if (hasLogged && hasReview) {
    return (
      <View style={styles.content}>
        <Text style={styles.textSendReview}>Ya has enviado una review</Text>
      </View>
    );
  }

  return (
    <View style={styles.content}>
      {hasLogged ? (
        <Button
          title="Type a review"
          icon={{
            type: "material-community",
            name: "square-edit-outline",
            color: "#D6445B",
          }}
          buttonStyle={styles.button}
          titleStyle={styles.btnText}
          onPress={goToAddReview}
        />
      ) : (
        <Text style={styles.text} onPress={goToLogin}>
          For type, you need to stay logged.
          <Text style={styles.textClick}>Pulse HERE to log in</Text>
        </Text>
      )}
    </View>
  );
}
