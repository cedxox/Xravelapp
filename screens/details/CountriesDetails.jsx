import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
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

const CountriesDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  const country = {
    "-id": "68e2aczi2njv9zoz43bs7ptp",
    country: "japan",
    description:
      "Captivating blend of ancient traditions and modern technology, Japan offers a unique cultural experience. From historic temples in Kyoto to the high-tech streets of Tokyo, it harmonizes tradition with progress Japan, an enchanting island nation in East Asia, seamlessly blends ancient traditions with modern marvels. From the historic temples of Kyoto to the neon-lit skyscrapers of Tokyo, Japan offers a captivating journey through time and technology. Nature adds its beauty, with Mount Fuji's iconic silhouette and cherry blossoms painting the landscape. Culinary delights, efficient transportation, and warm hospitality make exploring Japan a diverse and unforgettable experience where the past and future coexist in harmony.",
    imageUrl:
      "https://images.pexels.com/photos/3939471/pexels-photo-3939471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    popular: [
      {
        _id: "73h9b6ua2cewcqswr52kfsn5",
        country_id: "73z8vdpxrf6pg0yhtzbz3aop",
        title: "Kyoto's Fushimi Inari Taisha",
        imageUrl:
          "https://images.pexels.com/photos/18848731/pexels-photo-18848731/free-photo-of-torii-gates-in-fushimi-inari-shrine-kyoto-japan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 4.8,
        review: "450 Reviews",
        location: "Shibuya, Tokyo, Japan "
      },
      {
        _id: "73qe94jvsdwtbhxbs6xwwi0r",
        country_id: "73z8vdpxrf6pg0yhtzbz3aop",
        title: "Hakone's Mount Fuji Views",
        imageUrl:
          "https://images.pexels.com/photos/6380624/pexels-photo-6380624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 4.6,
        review: "470 Reviews",
        location: " Hakone, Kanagawa Prefecture, Japan "
        
      },
    ],
    region: "Eastern Asia, Japan",
  };

  return (
    
      <ScrollView>
        <View>
          <NetworkImage
            source={country.imageUrl}
            width={"100%"}
            height={350}
            radius={30}
          />

          <AppBar
          top={50}
          left={20}
          right={20}
            title={country.country}
            color={COLOR.white}
            icon={"search1"}
            color1={COLOR.white}
            onPress={() => navigation.goBack()}
            onPress1={() => {}}
          />
        </View>
        <View style={styles.discription}>
          <RenewableText
            text={country.region}
            family={"OutfitMedium"}
            size={TEXT.xlarge}
            color={COLOR.black}
          />

          <DescriptionText text={country.description} />

          <View style={{ alignContent: "center" }}>
          <HeightSpacer height={20}/>

            <View style={renewable.rowWithSpace("space-between")}>
              <RenewableText
                text={"Popular Destination"}
                family={"OutfitMedium"}
                size={TEXT.large}
                color={COLOR.black}
              />

              <TouchableOpacity onPress={() => {}}>
                <Feather name="list" size={20} />
              </TouchableOpacity>

              
            </View>


            <HeightSpacer height={20}/>


            <PopularList data={country.popular} />

              <RenewnableBtn
                onPress={() => navigation.navigate("HotelSearch")}
                btnText={"Find Best Hotels"}
                width={SIZES.width - 40}
                backgroundColor={COLOR.green}
                borderColor={COLOR.green}
                borderWidth={0}
                textColor={COLOR.white}
              />
              <HeightSpacer height={50}/>
          </View>
        </View>
      </ScrollView>
   
  );
};

export default CountriesDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f4f8",
  },
  discription: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
});
