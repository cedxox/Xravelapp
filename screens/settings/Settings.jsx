import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLOR, SIZES } from "../../constants/theme";
import {
  AppBar,
  HeightSpacer,
  RenewableText,
  XettingsTile,
} from "../../components/index";

const Settings = ({ navigation }) => {
  return (
    <View
      style={{
        backgoundColor: COLOR.lightwhite,
        flex: 1,
        marginHorizontal: 20,
      }}
    >
      <View style={{ height: 120 }}>
        <AppBar
          top={50}
          left={5}
          right={5}
          color={COLOR.white}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={{ marginHorizontal: 10 }}>
        <RenewableText
          text={"Account Settings"}
          family={"OutfitRegular"}
          size={SIZES.xlarge }
          color={COLOR.lightgreen}
        />
        <HeightSpacer height={10} />

        <XettingsTile title={"Language"} />

        <HeightSpacer height={3} />

        <XettingsTile title={"Country"} title1={"Japan"} />

        <HeightSpacer height={3} />

        <XettingsTile title={"Currency"} title1={"JPY"} />

             <HeightSpacer height={40} />

        <RenewableText
          text={"Support"}
          family={"OutfitRegular"}
          size={SIZES.xlarge }
          color={COLOR.lightgreen}
        />

        <HeightSpacer height={10} />

        <XettingsTile title={"Get Help"} title1={""} />

        <HeightSpacer height={3} />

        <XettingsTile title={"Give a feedback"} title1={""} />

        <HeightSpacer height={40} />

        <RenewableText
          text={"Legal"}
          family={"OutfitRegular"}
          size={SIZES.xlarge }
          color={COLOR.lightgreen}
        />

        <HeightSpacer height={10} />

        <XettingsTile title={"Terms of Service"} title1={""} />

        <HeightSpacer height={3} />

        <XettingsTile title={"Privacy Policy"} title1={""} />

        <HeightSpacer height={10} />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});

// style={{marginHorizontal: 20}}
