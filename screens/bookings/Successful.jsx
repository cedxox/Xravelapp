import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import {
  AssetImage,
  HeightSpacer,
  RenewableText,
  RenewnableBtn,
} from "../../components";
import { COLOR, SIZES, TEXT } from "../../constants/theme";
import RenewableTile from "../../components/Renewable/RenewableTile";

const Successful = ({ navigation }) => {
  const hotel = {
    _id: "73mt9gegqhbh1uy29mokspej",
    country_id: "73z8vdpxrf6pg0yhtzbz3aop",
    title: " Hakone Ginyu Hotel",
    imageUrl:
      "https://images.pexels.com/photos/5059247/pexels-photo-5059247.jpeg",
    rating: 4.8,
    review: "1420 Reviews",
    location: "  Kanagawa makuwashi Prefecture, Japan ",
  };

  return (
    <View>
      <View style={{ marginTop: "40%" }}>
        <AssetImage
          data={require("../../assets/images/Checked.png")}
          width={"100%"}
          height={250}
          mode={"contain"}
        />

        <HeightSpacer height={40} />

        <View style={{ alignItems: "center" }}>
          <RenewableText
            text={"Booking Successful"}
            family={"OutfitMedium"}
            size={TEXT.xlarge}
            color={COLOR.black}
          />

          <HeightSpacer height={20} />

          <RenewableText
            text={"You can find your booking details below "}
            family={"OutfitRegular"}
            size={TEXT.medium}
            color={COLOR.gray}
          />
        </View>
        <View style={{ margin: 20 }}>
          <RenewableText
            text={"Room Details"}
            family={"OutfitBold"}
            size={TEXT.medium}
            color={COLOR.dark}
          />

          <HeightSpacer height={20} />

          <RenewableTile item={hotel} />

          <HeightSpacer height={40} />

          <RenewnableBtn
            onPress={() => navigation.navigate("Bottom")}
            btnText={"Done"}
            width={SIZES.width - 50}
            backgroundColor={COLOR.green}
            borderColor={COLOR.green}
            borderWidth={0}
            textColor={COLOR.white}
          />
        </View>
      </View>
    </View>
  );
};

export default Successful;

const styles = StyleSheet.create({});
