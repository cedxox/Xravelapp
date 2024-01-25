import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  DescriptionText,
  HeightSpacer,
  NetworkImage,
  PopularList,
  RenewableText,
  RenewnableBtn,
} from "../../components/index";
import AppBar from "../../components/Renewable/AppBar";
import { COLOR, SIZES, TEXT } from "../../constants/theme";
import renewable from "../../components/Renewable/renewable.style";
import { Feather } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const PlaceDetails = ({ navigation }) => {
  const route = useRoute();
  const id = route.params;
  console.log(id)

  const place = {
    _id: "73ek2x57vibb4hs90maxll83",
    country_id: "73z8vdpxrf6pg0yhtzbz3aop",
    contact_id: "73gm97345fr0tptvvy4h28fa",
    title: " The Cerulean Tower Tokyu",
    description:
      " Cerulean Tower Tokyu is a business hotel in Shibuya that provides comfortably appointed rooms and suites such as its Premier Room with luxurious amenities.Centrally located in Shibuya, Cerulean Tower Tokyu Hotel offers spacious rooms with panoramic city views.",
    imageUrl:
      "https://images.pexels.com/photos/998846/pexels-photo-998846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.8,
    latitude: "35.6566° N",
    longitude: "139.6951° E",
    review: "450 Reviews",
    location: "Tokyu, Japan ",
    popular: [
      {
        _id: "73h9b6ua2cewcqswr52kfsn5",
        title: "Kyoto's Fushimi Inari Taisha",
        imageUrl:
          "https://images.pexels.com/photos/18848731/pexels-photo-18848731/free-photo-of-torii-gates-in-fushimi-inari-shrine-kyoto-japan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 4.8,
        review: "450 Reviews",
        location: "Naka Ward, Hiroshima, Japan ",
      },
      {
        _id: "73qe94jvsdwtbhxbs6xwwi0r",
        title: "Hakone's Mount Fuji Views",
        imageUrl:
          "https://images.pexels.com/photos/6380624/pexels-photo-6380624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 4.6,
        review: "470 Reviews",
        location: " Hakone, Kanagawa Prefecture, Japan ",
      },
    ],
  };
  console.log(id);
  return (
    <ScrollView>
      <View>
        <NetworkImage
          source={place.imageUrl}
          width={"100%"}
          height={350}
          radius={30}
        />

        <AppBar
          top={50}
          left={20}
          right={20}
          title={place.title}
          color={COLOR.white}
          icon={"search1"}
          color1={COLOR.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>
      <View style={styles.discription}>
        <HeightSpacer height={15} />
        <RenewableText
          text={place.location}
          family={"OutfitBold"}
          size={TEXT.large}
          color={COLOR.black}
        />

        <DescriptionText text={place.description} />

        <View style={{ alignContent: "center" }}>
          <HeightSpacer height={20} />

          <View style={renewable.rowWithSpace("space-between")}>
            <RenewableText
              text={"Popular Hotels"}
              family={"OutfitMedium"}
              size={TEXT.large}
              color={COLOR.black}
            />

            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={20} />

          <PopularList data={place.popular} />

          <RenewnableBtn
            onPress={() => navigation.navigate("HotelSearch")}
            btnText={"Find Best Hotels"}
            width={SIZES.width - 40}
            backgroundColor={COLOR.green}
            borderColor={COLOR.green}
            borderWidth={0}
            textColor={COLOR.white}
          />
          <HeightSpacer height={50} />
        </View>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  discription: {
    marginHorizontal: 20,
  },
});
