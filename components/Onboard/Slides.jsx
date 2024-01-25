import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from "./slides.style"
import {HeightSpacer, RenewableText, RenewnableBtn} from '../../components/index'
import { COLOR, SIZES } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const Slides = ({ item }) => {
const navigation = useNavigation();

  return (
    <View>
   <Image source={item.imagez} style={styles.containimg} />

   <View style={styles.slack}>

    <RenewableText 
    text={item.title}
    family={"OutfitMedium"}
    size={SIZES.xxlarge}
    color={COLOR.white}
    />

    <HeightSpacer height={40}/>
    
    <RenewnableBtn  
    onPress={()=> navigation.navigate('Bottom')}
    btnText={"Get Started"}
    width={(SIZES.width-50)/2.2}
    backgroundColor={COLOR.red}
    borderColor={COLOR.red}
    borderWidth={0}
    textColor={COLOR.white}
    />

   </View>
    </View>
  )
}

export default Slides