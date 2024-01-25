import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import RenewableTile from "../../components/Renewable/RenewableTile";
import { COLOR, SIZES } from "../../constants/theme";
import renewable from "../../components/Renewable/renewable.style";
import { HeightSpacer, RenewnableBtn } from "../../components";

const TopBookings = ({navigation}) => {
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
    <View style={{ margin: 20 }}>
      <FlatList
        data={hotels}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: COLOR.lightwhite,
              marginBottom: 10,
              borderRadius: 16,
            }}
          >
            <RenewableTile item={item} />

            <View style={renewable.rowWithSpace("space-between")}>
              <HeightSpacer height={50} />
              <RenewnableBtn
                onPress={() => navigation.navigate("")}
                btnText={"Details"}
                width={(SIZES.width - 50) / 2.2}
                backgroundColor={COLOR.white}
                borderColor={COLOR.blue}
                borderWidth={1}
                textColor={COLOR.blue}
              />
              
              <HeightSpacer height={50} />

            <View style={{margin: 10, alignItems: 'center'}}>
            <RenewnableBtn
                onPress={() => navigation.navigate("")}
                btnText={"Cancel"}
                width={(SIZES.width - 50) / 2.2}
                backgroundColor={COLOR.green}
                borderColor={COLOR.red}
                borderWidth={0}
                textColor={COLOR.white}
              />
            </View>
        
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TopBookings;

const styles = StyleSheet.create({});
