import { View, Text, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../../../utils";
import { Firestore, deleteDoc, collection, doc } from "firebase/firestore";
import { Button } from "react-native-elements";
import { AddPublicationScreen } from "../../../screens/Restaurants/AddPublicationScreen/AddPublicationScreen";

export function DeletePublication(props) {
  const { publication } = props;

  return (
    <View>
      <Button
        title="Delete Garment"
        buttonStyle={{ backgroundColor: "#D6445B", margin: 15 }}
      ></Button>
    </View>
  );
}
