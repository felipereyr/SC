import { View, Alert } from "react-native";
import React from "react";
import { Icon, Aavatar, Text } from "react-native-elements";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./UploadImagesForm.styles";
import { v4 as uuidv4 } from "uuid";

export function UploadImagesForm(props) {
  const { formik } = props;

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storage = getStorage();
    const storageRef = ref(storage, `restaurants/${uuidv4()}`);

    uploadBytes(storageRef, blob).then((snapshot) => {
      console.log(snapshot);
    });
  };
  return (
    <>
      <View style={styles.viewImage}>
        <Icon
          type="material-community"
          name="camera"
          color="#a7a7a7"
          containerStyle={styles.containerIcon}
          onPress={openGallery}
        />
      </View>
    </>
  );
}
