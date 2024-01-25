import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import renewable from "../../components/Renewable/renewable.style";
import styles from "./search.style";
import { Feather } from "@expo/vector-icons";
import { COLOR } from "../../constants/theme";
import { HeightSpacer } from "../../components";
import RenewableTile from "../../components/Renewable/RenewableTile";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import HotelCard from "../../components/Tiles/Hotel/HotelCard";
import AppBar from "../../components/Renewable/AppBar";

const HotelSearch = ({ navigation }) => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState("");
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
    <SafeAreaView>

      <View style={{height: 50}}>
      <AppBar
          top={20}
          left={20}
          right={20}
          title={'Looking for Hotels'}
          color={COLOR.white}
          icon={"filter"}
          color1={COLOR.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="Where do you want to stay?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={24} color={COLOR.white} />
        </TouchableOpacity>
      </View>

      {hotels.length === 0 ? (
        <View>
          <HeightSpacer height={"20%"} />
          <Image
            source={require("../../assets/images/searchLogo2.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <View style={{ paddingLeft: 15 }}>
          <FlatList
            data={hotels}
            keyExtractor={(item) => item._id}
            numColumns={2}
            ItemSeparatorComponent={()=>(<View style={{height:15}}/>)}
            renderItem={({ item }) => (
              <HotelCard
                item={item}
                margin={10}
                onPress={() => navigation.navigate("HotelDetails", item._id)}
              />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HotelSearch;
