import { View, Text, Image } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopBookings, TopInfo, TopTrips } from "../screens";
import { COLOR, SIZES } from "../constants/theme";
import { HeightSpacer, NetworkImage, RenewableText } from "../components";
import AppBar from "../components/Renewable/AppBar";
import styles from "./topTab.style";

const Tab = createMaterialTopTabNavigator();

const TopTab = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLOR.lightwhite }}>
        <View>
          <NetworkImage
            source={
              "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg"
            }
            width={"100%"}
            height={300}
            radius={0}
          />

          <AppBar
            top={40}
            left={20}
            right={20}
            color={COLOR.white}
            icon={"logout"}
            color1={COLOR.white}
            onPress={() => navigation.goBack()}
            onPress1={() => {}}
          />

          <View style={styles.profile}>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              }}
              style={styles.image}
            />

            <HeightSpacer height={5} />

            <View style={styles.zame}>
              <View style={{ alignItems: "center" }}>
                <RenewableText
                  text={"Jackie bangal"}
                  family={"OutfitMedium"}
                  size={SIZES.medium}
                  color={COLOR.black}
                />
              </View>
            </View>
            <HeightSpacer height={5} />

            
              <View style={{ alignItems: "center" }}>
                <RenewableText
                  text={"Jackie219B@Gmail.com"}
                  family={"OutfitMedium"}
                  size={SIZES.medium}
                  color={COLOR.white}
                />
              </View>
          

          </View>
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBookings} />
        <Tab.Screen name="Trips" component={TopTrips} />
        <Tab.Screen name="Info" component={TopInfo} />
      </Tab.Navigator>
    </View>
  );
};

export default TopTab;
