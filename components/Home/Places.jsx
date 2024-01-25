import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React from 'react'
import HeightSpacer from '../Renewable/HeightSpacer'
import { SIZES } from '../../constants/theme'
import Country from '../Tiles/Country/Country'

const Places = () => {

  const countries = [

  {
      _id: "68e2aczi2njv9zoz43bs7ptp",
      country: "Japan",
      description: "Captivating blend of ancient traditions and modern technology, Japan offers a unique cultural experience. From historic temples in Kyoto to the high-tech streets of Tokyo, it harmonizes tradition with progress.",
      imageUrl: "https://images.pexels.com/photos/3939471/pexels-photo-3939471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      region: "Eastern Asia, Japan"
  },

  {
    _id: "68e2aj6j1hh4dboqrbkzpp9e",
    country: "SouthAfrica",
    description: "A diverse nation with iconic landmarks, vibrant cities, and a rich cultural tapestry. From Table Mountain to wild safaris, it's a blend of history and natural beauty.",
    imageUrl: "https://images.pexels.com/photos/5690809/pexels-photo-5690809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    region: "Southern Africa, SouthAfrica"
},

{
    _id: "68e2as20sdpzccc324yzajnt",
    country: "Canada",
    description: "A land of vast wilderness and friendly cities, Canada offers outdoor adventures and a welcoming mosaic of cultures. From the Rocky Mountains to cosmopolitan hubs like Vancouver, it's a captivating blend.",
    imageUrl: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    region: "North America, Canada"
},

{
    _id: "68e2a073f1itmu0g4daonn64",
    country: "Dubai",
    description: "A modern oasis in the desert, Dubai boasts futuristic architecture, luxury shopping, and opulent attractions like the Burj Khalifa.",
    imageUrl: "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    region: "Middle East ,Dubai"
},

{
    _id: "68e2awe4ab39jh0qlhupq6xp",
    country: "Switzerland",
    description: "Nestled in Europe, Switzerland is known for Alpine beauty, charming villages, and precision craftsmanship. With iconic chocolate and efficient cities like Zurich, it seamlessly blends tradition with modernity.",
    imageUrl: "https://images.pexels.com/photos/5210119/pexels-photo-5210119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    region: "Central Europe, switzerland"
},


]

  return (
    <View>
      <HeightSpacer height={20}/>
      <VirtualizedList
      data={countries}
      horizontal
      keyExtractor={(item) => item._id}
      showsHorizontalScrollIndicator={false}
      getItemCount={(data)=> data.length}
      getItem={(data, index)=>data[index]}
      renderItem={({item, index})=> (
        <View style={{marginRight: SIZES.medium}} >
          <Country item={item} />
        </View>
      )}
      
      />
    
    </View>
  )
}

export default Places

const styles = StyleSheet.create({})






