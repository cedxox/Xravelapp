import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AppBar from "../../components/Renewable/AppBar";
import { COLOR, SIZES, TEXT } from "../../constants/theme";
import styles from "./hotelDetails.style";
import {
  DescriptionText,
  HeightSpacer,
  HotelMap,
  NetworkImage,
  RenewableText,
  RenewnableBtn,
  ReviewList,
} from "../../components";
import renewable from "../../components/Renewable/renewable.style";
import { Rating } from "react-native-stock-star-rating";
import { Feather } from "@expo/vector-icons";

const HotelDetails = ({ navigation }) => {
  const hotel = {
    availability: {
      start: "2024-08-20T00:00:00.000Z",
      end: "2024-08-25T00:00:00.000Z",
    },
    coordinates: {
      latitude: 35.6866,
      longitude: 139.7632,
    },

    _id: "74b1yrobetsx7usx4zr31aks",
    country_id: "73z8vdpxrf6pg0yhtzbz3aop",
    title: "Aman Tokyo Hotel",
    description:
      "Aman Tokyo, located in Otemachi, offers a harmonious blend of traditional Japanese aesthetics and modern luxury. This five-star hotel provides spacious rooms with panoramic views of Tokyo's skyline. With its central location, Aman Tokyo is an ideal choice for those seeking a serene escape with easy access to Tokyo's cultural and business districts.",
    contact: "",
    imageUrl:
      "https://images.pexels.com/photos/2067057/pexels-photo-2067057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.8,
    review: "2312362 Reviews",
    location: "Otemachi, Tokyo, Japan",
    price: 350,
    facilities: [
      {
        wifi: true,
        _id: "74b1hsdrt7h4vafpjktdcy7q",
      },
    ],
    _v: 1,
    reviews: [
      {
        _id: "76b1hoqonf540145gf6c3nbw",
        review:
          "Aman Tokyo, nestled in the heart of Otemachi, embodies the epitome of luxury and tranquility in the bustling metropolis of Tokyo. This five-star hotel seamlessly blends traditional Japanese aesthetics with modern sophistication, offering guests a serene escape above the city's vibrant energy.",
        rating: 4.6,
        user: {
          _id: "74b1rtzbv59lbq5e6q5s24to",
          username: "John joe",
          profile:
            "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        updatedAt: "2024-08-09",
      },

      {
        _id: "76b1rtzbv59lbq5e6q5s24to",
        review:
          "The spacious and elegantly designed rooms provide panoramic views of the iconic Tokyo skyline, and the hotel's exquisite spa and dining options add to the overall experience of refined indulgence.",
        rating: 4.2,
        user: {
          _id: "74b1rtzbv59lbq5e6q6z24ti",
          username: "Bane pat",
          profile:
            "https://images.pexels.com/photos/2778211/pexels-photo-2778211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        updatedAt: "2024-08-09",
      },
    ],
  };

  let coordinates = {
    id: hotel._id,
    title: hotel.title,
    latitude: hotel.coordinates.latitude,
    longitude: hotel.coordinates.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={hotel.title}
          color={COLOR.white}
          icon={"search1"}
          color1={COLOR.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>

      <View>
        <View style={styles.container}>
          <NetworkImage
            source={hotel.imageUrl}
            width={"100%"}
            height={220}
            radius={25}
          />

          <View style={styles.titleContainer}>
            <View style={styles.titleColumn}>
              <RenewableText
                text={hotel.title}
                family={"OutfitMedium"}
                size={SIZES.xlarge}
                color={COLOR.black}
              />

              <HeightSpacer height={10} />

              <RenewableText
                text={hotel.location}
                family={"OutfitMedium"}
                size={SIZES.medium}
                color={COLOR.black}
              />
              <HeightSpacer height={15} />

              <View style={renewable.rowWithSpace("space-between")}>
                <Rating
                  maxStars={5}
                  stars={hotel.rating}
                  bordered={false}
                  color={"#fd9942"}
                />

                <RenewableText
                  text={`(${hotel.review})`}
                  family={"OutfitBold"}
                  size={SIZES.medium}
                  color={COLOR.gray}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.container, { paddingTop: 90 }]}>
          <RenewableText
            text={"Description"}
            family={"OutfitMedium"}
            size={SIZES.large}
            color={COLOR.black}
          />
          <HeightSpacer height={10} />

          <DescriptionText text={hotel.description} />

          <HeightSpacer height={10} />

          <RenewableText
            text={"Location"}
            family={"OutfitMedium"}
            size={SIZES.large}
            color={COLOR.black}
          />

          <HeightSpacer height={15} />

          <RenewableText
            text={hotel.location}
            family={"OutfitRegular"}
            size={SIZES.small + 2}
            color={COLOR.gray}
          />

          <HotelMap coordinates={coordinates} />

          <View style={renewable.rowWithSpace("space-between")}>
            <RenewableText
              text={"Reviews"}
              family={"OutfitMedium"}
              size={SIZES.large}
              color={COLOR.black}
            />

            <TouchableOpacity>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>
          <HeightSpacer height={15} />

          <ReviewList reviews={hotel.reviews} />

        </View>

        <View style={[renewable.rowWithSpace("space-between"), styles.bottom]}>
          <View>
          <RenewableText
            text={`\$ ${hotel.price}`}
            family={"OutfitMedium"}
            size={SIZES.large}
            color={COLOR.black}
          />
          <HeightSpacer height={5} />

          <RenewableText
            text={"Jan 01 - Dec 25 "}
            family={"OutfitMedium"}
            size={SIZES.medium}
            color={COLOR.gray}
          />
          </View>

          <RenewnableBtn
            onPress={() => navigation.navigate("SelectRooms")}
            btnText={"Select Room"}
            width={(SIZES.width - 40)/2.2}
            backgroundColor={COLOR.green}
            borderColor={COLOR.green}
            borderWidth={0}
            textColor={COLOR.white}
          />
          </View>
      </View>
    </ScrollView>
  );
};

export default HotelDetails;
