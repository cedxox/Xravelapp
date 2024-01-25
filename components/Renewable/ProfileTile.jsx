import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import renewable from './renewable.style'
import { AntDesign } from '@expo/vector-icons'
import WidthSpacer from './WidthSpacer'
import RenewableText from './RenewableText'
import { COLOR, SIZES } from '../../constants/theme'


const ProfileTile = ({onPress, title, icon}) => {
  return (
    <TouchableOpacity style={styles.tile} onPress={onPress}>
      <View style={renewable.rowWithSpace('space-between')}>
        <View style={renewable.rowWithSpace('flex-start')}>
            <AntDesign name={icon} size={20}/>

            <WidthSpacer width={20}/>

            <RenewableText
            text={title}
            family={"OutfitRegular"}
            size={SIZES.medium}
            color={COLOR.gray}
          />
        </View>

        <AntDesign name="right" size={22} color="black" />

      </View>
    </TouchableOpacity>
  )
}

export default ProfileTile

const styles = StyleSheet.create({
    tile:{
    backgroundColor: COLOR.white,
    marginBottom: 20,
    padding: 20,
    borderRadius:15
    }
})