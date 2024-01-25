import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../components/Renewable/AppBar";
import { COLOR } from "../../constants/theme";
import RenewableTile from "../../components/Renewable/RenewableTile";

const Recommended = ({ navigation }) => {
  const recomendation = [
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
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 50 }}>
        <AppBar
        top={10}
        left={0}
        right={0}
          title={"Recommendations"}
          color={COLOR.white}
          icon={"search1"}
          color1={COLOR.white}
          onPress={()=> navigation.goBack()}
          onPress1={()=> navigation.navigate('Search')}
        />
      </View>
      <View style={{ paddingTop: 20 }}>
        <FlatList
          data={recomendation}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <RenewableTile
                item={item}
                onPress={() => navigation.navigate("PlaceDetails", item._id)}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Recommended;
