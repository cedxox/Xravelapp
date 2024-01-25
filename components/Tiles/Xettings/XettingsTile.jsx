import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import renewable from "../../Renewable/renewable.style";
import { COLOR, TEXT } from "../../../constants/theme";
import RenewableText from "../../Renewable/RenewableText";
import WidthSpacer from "../../Renewable/WidthSpacer";
import { AntDesign } from "@expo/vector-icons";

const XettingsTile = ({ title, title1, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[renewable.rowWithSpace("space-between"), styles.container]}
    >
      <RenewableText
        text={title}
        family={"OutfitRegular"}
        size={TEXT.large}
        color={COLOR.dark}
      />
      {title === "Language" ? (
        <View style={renewable.rowWithSpace("flex-start")}>
          <Image source={require('../../../assets/images/japan1.png')}
            
            style={styles.image}
          />
          <WidthSpacer width={5} />

          <RenewableText
            text={"Japanese"}
            family={"OutfitRegular"}
            size={TEXT.large}
            color={COLOR.gray}
          />
          <WidthSpacer width={5} />

          <AntDesign name="right" size={20} color={COLOR.dark} />
        </View>
      ) : (
        <View style={renewable.rowWithSpace("flex-start")}>
          <RenewableText
            text={title1}
            family={"OutfitRegular"}
            size={TEXT.large}
            color={COLOR.gray}
          />
          <WidthSpacer width={5} />

          <AntDesign name="right" size={20} color={COLOR.dark} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default XettingsTile;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: COLOR.lightgray,
    paddingVertical: 15,
  },
  image: {
    width: 40,
    height: 30,
    resizeMode: "contain",
  },
});
