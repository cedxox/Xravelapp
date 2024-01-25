import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import renewable from "./renewable.style";
import { COLOR, SIZES, TEXT } from "../../constants/theme";
import {
  HeightSpacer,
  NetworkImage,
  Rating,
  RenewableText,
  WidthSpacer,
} from "../../components/index";

const RenewableTile = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={renewable.rowWithSpace("flex-start")}>
        <NetworkImage
          source={item.imageUrl}
          width={80}
          height={80}
          radius={12}
        />
        <WidthSpacer width={15} />

        <View>
          <RenewableText
            text={item.title}
            family={"OutfitMedium"}
            size={SIZES.medium}
            color={COLOR.black}
          />

          <HeightSpacer height={8} />

          <RenewableText
            text={item.location}
            family={"OutfitMedium"}
            size={14}
            color={COLOR.gray}
          />

          <HeightSpacer height={8} />

          <View style={renewable.rowWithSpace("flex-start")}>
            <Rating rating={item.rating} />

            <WidthSpacer width={5} />

            <RenewableText
              text={` (${item.review}) `}
              family={"OutfitMedium"}
              size={14}
              color={COLOR.gray}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RenewableTile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLOR.lightwhite,
    borderRadius: 12,
  },
});
