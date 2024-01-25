import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import renewable from "../../components/Renewable/renewable.style";
import styles from "./search.style";
import { Feather } from "@expo/vector-icons";
import { COLOR } from "../../constants/theme";
import { HeightSpacer } from "../../components";
import RenewableTile from "../../components/Renewable/RenewableTile";


const Search = ({navigation}) => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const search = [
    {
      _id: "73h9b6ua2cewcqswr52kfsn5",
      country_id: "73z8vdpxrf6pg0yhtzbz3aop",
      title: "Kyoto's Fushimi Inari Taisha",
      location: "Fushimi Ward, Kyoto, Japan",
      imageUrl:
        "https://images.pexels.com/photos/18848731/pexels-photo-18848731/free-photo-of-torii-gates-in-fushimi-inari-shrine-kyoto-japan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.8,
      review: "450 Reviews",
    },

    {
      _id: "73tl82x8ask1gex07mlhsv9j",
      country_id: "73z8vdpxrf6pg0yhtzbz3aop",
      title: "Tokyo's Shibuya Crossing",
      location: "Shibuya, Tokyo, Japan",
      imageUrl:
        "https://images.pexels.com/photos/19035807/pexels-photo-19035807/free-photo-of-aerial-view-of-shibuya-in-tokyo-japan-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.5,
      review: "500 Reviews",
    },

    {
      _id: "73svj8m2eb6pfwr1jicpl4px",
      country_id: "73z8vdpxrf6pg0yhtzbz3aop",
      title: "Hiroshima Genbaku Dome",
      location: "Hiroshima Peace Memorial Park, Hiroshima, Japan",
      imageUrl:
        "https://images.pexels.com/photos/14331552/pexels-photo-14331552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.7,
      review: "480 Reviews",
    },

    {
      _id: "73qe94jvsdwtbhxbs6xwwi0r",
      country_id: "73z8vdpxrf6pg0yhtzbz3aop",
      title: "Hakone's Mount Fuji Views",
      location: "Hakone, Kanagawa Prefecture, Japan",
      imageUrl:
        "https://images.pexels.com/photos/6380624/pexels-photo-6380624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.6,
      review: "470 Reviews",
    },
  ];

  return (
    <SafeAreaView style={renewable.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="Where do you want to visit?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={24} color={COLOR.white} />
        </TouchableOpacity>
      </View>

      {search.length === 0 ? (
        <View>
          <HeightSpacer height={'20%'}/>
          <Image
            source={require("../../assets/images/searchLogo2.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
        data={search}
        keyExtractor={(item)=> item._id}
        renderItem={({item})=> (
          <View style={styles.tile}>
            <RenewableTile item={item} onPress={()=>navigation.navigate('PlaceDetails', item._id)}/>
          </View>
        )}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
