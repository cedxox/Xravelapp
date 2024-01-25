import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import renewable from '../Renewable/renewable.style'
import RenewableText from '../Renewable/RenewableText'
import { COLOR, SIZES, TEXT } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import HotelCard from '../Tiles/Hotel/HotelCard'



const BestHotel = () => {
const navigation = useNavigation()

const hotels =[
  {
      "_id": "73nu6640rardh8hahjz1n6pd",
      "country_id": "73z8vdpxrf6pg0yhtzbz3aop",
      "title": "The Ritz-Carlton, Kyoto",
      "imageUrl": "https://images.pexels.com/photos/1413833/pexels-photo-1413833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "rating": 4.9,
      "review": "1400 Reviews",
      "location": "Kamogawa Nijo-Ohashi Hotori,, Japan ",
  },
  {
      "_id": "73ek2x57vibb4hs90maxll83",
      "country_id": "73z8vdpxrf6pg0yhtzbz3aop",
      "title": " Cerulean Tower Tokyu Hotel",
      "imageUrl": "https://images.pexels.com/photos/998846/pexels-photo-998846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "rating": 4.8,
      "review": "1450 Reviews",
      "location": "Shibuya, Tokyo, Japan ",
  },
  {
      "_id": "73fn9143vlrnastvuo06p83a",
      "country_id": "73z8vdpxrf6pg0yhtzbz3aop",
      "title": "Sheraton Grand Hiroshima Hotel",
      "imageUrl": "https://images.pexels.com/photos/6010421/pexels-photo-6010421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "rating": 4.7,
      "review": "1380 Reviews",
      "location": " Hiroshima, Japan ",
  },
  {
      "_id": "73mt9gegqhbh1uy29mokspej",
      "country_id": "73z8vdpxrf6pg0yhtzbz3aop",
      "title": " Hakone Ginyu Hotel",
      "imageUrl": "https://images.pexels.com/photos/5059247/pexels-photo-5059247.jpeg",
      "rating": 4.8,
      "review": "1420 Reviews",
      "location": "  Kanagawa makuwashi Prefecture, Japan ",
  },

]

  return (
    <View>
      <View
        style={[renewable.rowWithSpace("space-between"), { paddingBottom:10 }]}
      >
        <RenewableText
          text={"Nearby Hotels"}
          family={"OutfitMedium"}
          size={TEXT.large}
          color={COLOR.black}
        />

        <TouchableOpacity onPress={()=>navigation.navigate('HotelList')} >
            <Feather
            name="list"
            size={20}
            />
        </TouchableOpacity>
      </View>

      <FlatList 
      data={hotels}
      horizontal
      keyExtractor={(item)=> item._id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{columnGap: SIZES.medium}}
      renderItem={({item})=> (
        <HotelCard item={item} margin={20} onPress={()=> navigation.navigate('HotelDetails')}/>
      )}

      />

   
    </View>
  )
}

export default BestHotel

const styles = StyleSheet.create({})