import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "./Carouselimg.styles";
import { Image } from "react-native-elements";
import Carousel from "react-native-reanimated-carousel";

export function Carouselimg(props) {
  const { arrayImages, width, height } = props;

  const baseOptions = {
    parallaxScrollingOffset: 220,
    parallaxScrollingScale: 1,
    parallaxAdjacentItemScale: 1,
  };

  const renderItem = ({ item }) => (
    <Image source={{ uri: item }} style={{ height, width }} />
  );

  return (
    <View style={styles.content}>
      <Carousel
        autoplay={false}
        loop={false}
        data={arrayImages}
        width={width}
        height={height}
        modeConfig={baseOptions}
        renderItem={renderItem}
      ></Carousel>
    </View>
  );
}
