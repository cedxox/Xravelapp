import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import renewable from './renewable.style'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import WidthSpacer from './WidthSpacer'
import RenewableText from './RenewableText'
import { COLOR } from '../../constants/theme'

const Rating = ({rating}) => {
  return (
    <View style={renewable.rowWithSpace("flex-start")} >
      <MaterialCommunityIcons
      name='star'
      size={20}
      color={'#fd9942'}
      />

      <WidthSpacer width={5}/>

      <RenewableText
            text={rating}
            family={"OutfitMedium"}
            size={14}
            color={'#fd9942'}  
          />
    </View>
  )
}

export default Rating

const styles = StyleSheet.create({})