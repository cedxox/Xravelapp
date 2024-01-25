import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLOR, SIZES } from "../../constants/theme";
import RenewableText from "./RenewableText";
import renewable from "./renewable.style";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <View style={renewable.rowWithSpace("space-between")}>
      <AntDesign
        name="minussquareo"
        size={26}
        color={COLOR.gray}
        onPress={decrement}
      />

      <RenewableText
        text={`   ${count}   `}
        family={"OutfitRegular"}
        size={SIZES.medium}
        color={COLOR.black}
      />

      <AntDesign
        name="plussquareo"
        size={26}
        color={COLOR.gray}
        onPress={increment}
      />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
