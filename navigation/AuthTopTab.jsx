import { View, Text, ScrollView } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Registration, SignIn } from "../screens";
import { COLOR } from "../constants/theme";
import { AssetImage, HeightSpacer } from "../components";

const Tab = createMaterialTopTabNavigator();
const AuthTopTab = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLOR.lightwhite }}>
      <ScrollView style={{ flex: 1, backgroundColor: COLOR.lightwhite }}>
        <HeightSpacer height={50} />

        <AssetImage
          data={require("../assets/images/pg2.png")}
          width={"100%"}
          height={300}
          mode={"contain"}
        />

        <View style={{height: 600}}>
          <Tab.Navigator>
            <Tab.Screen name="SignIn" component={SignIn} />
            <Tab.Screen name="Registration" component={Registration} />
          </Tab.Navigator>
        </View>

      </ScrollView>
    </View>
  );
};

export default AuthTopTab;
