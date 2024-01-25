import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLOR, SIZES, TEXT } from "../../../constants/theme";
import NetworkImage from "../../Renewable/NetworkImage";
import HeightSpacer from "../../Renewable/HeightSpacer";
import RenewableText from "../../Renewable/RenewableText";
import Rating from "../../Renewable/Rating";

const HotelCard = ({ item, margin, onPress }) => {
  return (
    <TouchableOpacity style={styles.card(margin)} onPress={onPress}>
      <View>
        <View style={styles.imageContainer}>
          <NetworkImage
            source={item.imageUrl}
            width={"90%"}
            height={"100%"}
            radius={16}
          />
        </View>

        <HeightSpacer height={5} />

        <View style={{ padding: 10 }}>
          <RenewableText
            text={item.title}
            family={"OutfitMedium"}
            size={SIZES.medium}
            color={COLOR.black}
          />

          <HeightSpacer height={5} />

          <RenewableText
            text={item.location}
            family={"OutfitMedium"}
            size={SIZES.small}
            color={COLOR.gray}
          />

          <HeightSpacer height={5} />

          <Rating rating={item.rating} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  card: (margin) => ({
    width: SIZES.width / 2.2,
    height: 280,
    borderRadius: 16,
    backgroundColor: COLOR.lightwhite,
    marginRight: margin,
  }),
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
    height: 150,
  },
});
