import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./review.style";
import renewable from "../../Renewable/renewable.style";
import NetworkImage from "../../Renewable/NetworkImage";
import WidthSpacer from "../../Renewable/WidthSpacer";
import RenewableText from "../../Renewable/RenewableText";
import { COLOR, SIZES } from "../../../constants/theme";
import Rating from "../../Renewable/Rating";
import DescriptionText from "../../Renewable/DescriptionText";

const ReviewTile = ({ review }) => {
  return (
    <View style={styles.reviewBorder}>
      <View style={renewable.rowWithSpace("space-between")}>
        <View style={renewable.rowWithSpace("flex-start")}>
          <NetworkImage
            source={review.user.profile}
            width={54}
            height={54}
            radius={10}
          />

          <WidthSpacer width={20} />

          <View style={{width: "80%"}}>
            <View style={renewable.rowWithSpace("space-between")}>
              <RenewableText
                text={review.user.username}
                family={"OutfitMedium"}
                size={SIZES.small + 2}
                color={COLOR.black}
              />

              <WidthSpacer width={"30%"} />

              <View style={renewable.rowWithSpace("space-between")}>
                <Rating rating={review.rating} />
                <WidthSpacer width={10} />
                <RenewableText
                  text={review.updatedAt}
                  family={"OutfitMedium"}
                  size={SIZES.small + 2}
                  color={COLOR.black}
                />
              </View>
            </View>
            <DescriptionText text={review.review} lines={2}/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewTile;
