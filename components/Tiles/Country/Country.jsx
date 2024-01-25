import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLOR, TEXT } from "../../../constants/theme";
import { HeightSpacer, NetworkImage, RenewableText } from "../../../components/index";
import { useNavigation } from "@react-navigation/native";

const Country = ({ item }) => {
    const navigation = useNavigation();


  return (
    <TouchableOpacity onPress={()=> navigation.navigate('CountriesDetails', {item})} >
      <View>
        <NetworkImage
          source={item.imageUrl}
          width={85}
          height={85}
          radius={12}
        />

        <HeightSpacer height={5}/>

        <RenewableText
          text={item.country}
          family={"OutfitMedium"}
          size={TEXT.medium}
          color={COLOR.black}
          align={"center"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Country;
