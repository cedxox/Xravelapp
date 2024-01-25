import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import renewable from "../../components/Renewable/renewable.style";
import { HeightSpacer,Recomendation,RenewableText } from "../../components";
import Places from "../../components/Home/Places"
import { TEXT, COLOR, SIZES } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import stylex from "./home.style";
import BestHotel from "../../components/Home/BestHotels";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={renewable.container}>
      <View>
        <View style={renewable.rowWithSpace('space-between')}>
          <RenewableText
            text={"Hey user!"}
            family={"OutfitRegular"}
            size={TEXT.large}
            color={COLOR.black}
          />

          <TouchableOpacity
            style={stylex.box}
            onPress={() => navigation.navigate('Search')}>
            <AntDesign 
            name="search1" 
            size={30} />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={SIZES.large}/>

        <RenewableText
            text={"Places"}
            family={"OutfitMedium"}
            size={TEXT.large}
            color={COLOR.black}
          />

         <Places />

         <HeightSpacer height={15}/>

         <Recomendation />

         <HeightSpacer height={15}/>

         <BestHotel />

      </View>
    </SafeAreaView>
  );
};

export default Home;
