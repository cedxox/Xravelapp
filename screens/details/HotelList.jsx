import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../components/Renewable/AppBar";
import { COLOR } from "../../constants/theme";
import RenewableTile from "../../components/Renewable/RenewableTile";

const HotelList = ({ navigation }) => {
  const hotels = [
    {
      _id: "73nu6640rardh8hahjz1n6pd",
      country_id: "73z8vdpxrf6pg0yhtzbz3aop",
      title: "The Ritz-Carlton, Kyoto",
      imageUrl:
        "https://images.pexels.com/photos/1413833/pexels-photo-1413833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.9,
      review: "1400 Reviews",
      location: "Kamogawa Nijo-Ohashi Hotori,, Japan ",
    },
    {
      _id: "73ek2x57vibb4hs90maxll83",
      country_id: "73z8vdpxrf6pg0yhtzbz3aop",
      title: " Cerulean Tower Tokyu Hotel",
      imageUrl:
        "https://images.pexels.com/photos/998846/pexels-photo-998846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.8,
      review: "1450 Reviews",
      location: "Shibuya, Tokyo, Japan ",
    },
    {
      _id: "73fn9143vlrnastvuo06p83a",
      country_id: "73z8vdpxrf6pg0yhtzbz3aop",
      title: "Sheraton Grand Hiroshima Hotel",
      imageUrl:
        "https://images.pexels.com/photos/6010421/pexels-photo-6010421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.7,
      review: "1380 Reviews",
      location: " Hiroshima, Japan ",
    },
    {
      _id: "73mt9gegqhbh1uy29mokspej",
      country_id: "73z8vdpxrf6pg0yhtzbz3aop",
      title: " Hakone Ginyu Hotel",
      imageUrl:
        "https://images.pexels.com/photos/5059247/pexels-photo-5059247.jpeg",
      rating: 4.8,
      review: "1420 Reviews",
      location: "  Kanagawa makuwashi Prefecture, Japan ",
    },
  ];

  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 50 }}>
        <AppBar
        top={10}
        left={0}
        right={0}
          title={"Nearby Hotels"}
          color={COLOR.white}
          icon={"search1"}
          color1={COLOR.white}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate("HotelSearch")}
        />
      </View>
      <View style={{ paddingTop: 20 }}>
        <FlatList
          data={hotels}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <RenewableTile
                item={item}
                onPress={() => navigation.navigate("HotelDetails", item._id)}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HotelList;
