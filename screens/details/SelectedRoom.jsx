import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { COLOR, SIZES, TEXT } from "../../constants/theme";
import {
  AppBar,
  AssetImage,
  Counter,
  HeightSpacer,
  NetworkImage,
  Rating,
  RenewableText,
  RenewnableBtn,
  WidthSpacer,
} from "../../components";
import renewable from "../../components/Renewable/renewable.style";

const SelectedRoom = ({ navigation }) => {
  const router = useRoute();
  const { item } = router.params;
  console.log(item);
  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={item.title}
          color={COLOR.white}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <View style={{ backgroundColor: COLOR.lightwhite, borderRadius: 16 }}>
          <NetworkImage
            source={item.imageUrl}
            width={"100%"}
            height={200}
            radius={16}
          />

          <HeightSpacer height={20} />

          <View style={{ marginHorizontal: 10 }}>
            <View style={renewable.rowWithSpace("space-between")}>
              <RenewableText
                text={item.title}
                family={"OutfitMedium"}
                size={SIZES.medium}
                color={COLOR.black}
              />
              <View style={renewable.rowWithSpace("flex-start")}>
                <Rating rating={item.rating} />

                <WidthSpacer width={10} />

                <RenewableText
                  text={`(${item.review})`}
                  family={"OutfitRegular"}
                  size={SIZES.medium}
                  color={COLOR.gray}
                />
              </View>
            </View>
            <HeightSpacer height={10} />

            <RenewableText
              text={item.location}
              family={"OutfitMedium"}
              size={SIZES.medium}
              color={COLOR.gray}
            />
            <View
              style={{
                borderWidth: 0.5,
                borderColor: COLOR.lightgray,
                marginVertical: 15,
              }}
            ></View>

            <RenewableText
              text={"Room Requirements"}
              family={"OutfitRegular"}
              size={SIZES.medium}
              color={COLOR.black}
            />

            <HeightSpacer height={30} />

            <View style={renewable.rowWithSpace("space-between")}>
              <RenewableText
                text={"Price per night"}
                family={"OutfitRegular"}
                size={SIZES.medium}
                color={COLOR.black}
              />

              <RenewableText
                text={"$ 400"}
                family={"OutfitRegular"}
                size={SIZES.medium}
                color={COLOR.black}
              />
            </View>

            <HeightSpacer height={15} />

            <View style={renewable.rowWithSpace("space-between")}>
              <RenewableText
                text={"Payment Method"}
                family={"OutfitRegular"}
                size={SIZES.medium}
                color={COLOR.black}
              />

              <View style={renewable.rowWithSpace("flex-start")}>
                <AssetImage mode={'contain'} width={30} height={20} data={require('../../assets/images/visa.png')}/>
                <AssetImage mode={'contain'} width={30} height={15} data={require('../../assets/images/mastercard.png')}/>
              <RenewableText
                text={"Visa/Master.C"}
                family={"OutfitRegular"}
                size={SIZES.medium}
                color={COLOR.black}
              />
              </View>
             
            </View>

            <HeightSpacer height={15} />

            <View style={renewable.rowWithSpace("space-between")}>
              <RenewableText
                text={"4 Guest"}
                family={"OutfitRegular"}
                size={SIZES.medium}
                color={COLOR.black}
              />

              <Counter />
            </View>
            <HeightSpacer height={30} />

            <View style={{ margin: 10, alignItems: "center" }}>
              <RenewnableBtn
                onPress={() => navigation.navigate("Successful", { item })}
                btnText={"Book Now"}
                width={SIZES.width - 50}
                backgroundColor={COLOR.green}
                borderColor={COLOR.green}
                borderWidth={0}
                textColor={COLOR.white}
              />
              <HeightSpacer height={20} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectedRoom;

const styles = StyleSheet.create({});
