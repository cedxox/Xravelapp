import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import renewable from "../../components/Renewable/renewable.style";
import { AntDesign } from "@expo/vector-icons";
import { COLOR, SIZES, TEXT } from "../../constants/theme";
import RenewableText from "./RenewableText";

const AppBar = ({ color, title, color1, icon, onPress, onPress1, top, left, right }) => {
  return (
    <View style={styles.overlay(top, left, right)}>
      <View style={renewable.rowWithSpace("space-between")}>
        <TouchableOpacity style={styles.box(color)} onPress={onPress}>
          <AntDesign name="left" size={26} />
        </TouchableOpacity>

        <RenewableText
          text={title}
          family={"OutfitMedium"}
          size={TEXT.large}
          color={COLOR.black}
        />

        <TouchableOpacity style={styles.box1(color1)} onPress={onPress1}>
          <AntDesign name={icon} size={26} />
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  overlay: (top, left, right) => ({
    position: "absolute",
    top: top,
    left: left,
    right: right,
    justifyContent: "center",
  }),
  box: (color) => ({
    backgroundColor: color,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
  box1: (color1) => ({
    backgroundColor: color1,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
});
