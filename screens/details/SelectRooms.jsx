import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppBar, HeightSpacer, RenewnableBtn } from '../../components';
import { COLOR, SIZES } from '../../constants/theme';
import RenewableTile from '../../components/Renewable/RenewableTile';

const SelectRooms = ({navigation}) => {
  const rooms = [
    {
      _id: "73h9b6ua2cewcqswr52kfsn5",
      country_id: "73z8vdpxrf6pg0yhtzbz3aop",
      title: "Kyoto's Fushimi Inari Taisha",
      location: "Fushimi Ward, Kyoto, Japan",
      imageUrl:
        "https://images.pexels.com/photos/18848731/pexels-photo-18848731/free-photo-of-torii-gates-in-fushimi-inari-shrine-kyoto-japan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.8,
      review: "450 Reviews",
    },

    {
      _id: "73tl82x8ask1gex07mlhsv9j",
      country_id: "73z8vdpxrf6pg0yhtzbz3aop",
      title: "Tokyo's Shibuya Crossing",
      location: "Shibuya, Tokyo, Japan",
      imageUrl:
        "https://images.pexels.com/photos/19035807/pexels-photo-19035807/free-photo-of-aerial-view-of-shibuya-in-tokyo-japan-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.5,
      review: "500 Reviews",
    },

    {
      _id: "73svj8m2eb6pfwr1jicpl4px",
      country_id: "73z8vdpxrf6pg0yhtzbz3aop",
      title: "Hiroshima Genbaku Dome",
      location: "Hiroshima Peace park, Japan",
      imageUrl:
        "https://images.pexels.com/photos/14331552/pexels-photo-14331552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.7,
      review: "480 Reviews",
    },

    {
      _id: "73qe94jvsdwtbhxbs6xwwi0r",
      country_id: "73z8vdpxrf6pg0yhtzbz3aop",
      title: "Hakone's Mount Fuji Views",
      location: "Hakone, Prefecture, Japan",
      imageUrl:
        "https://images.pexels.com/photos/6380624/pexels-photo-6380624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.6,
      review: "470 Reviews",
    },
  ];

  return (
    <View>



      <View style={{height: 100}}>
      <AppBar
        top={50}
        left={20}
        right={20}
          title={"Recommendations"}
          color={COLOR.white}
          onPress={()=> navigation.goBack()}
        />
      </View>
      <FlatList
      data={rooms}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item)=> item._id}
      renderItem={({item})=>(
        <View style={styles.tileColumn}>
        <View style={styles.tile}>
        <RenewableTile item={item}/>
        <HeightSpacer height={10}/>


        <View style={styles.btnStyle}>
            <RenewnableBtn
                onPress={() => navigation.navigate("SelectedRoom", {item})}
                btnText={"Cancel"}
                width={SIZES.width - 50}
                backgroundColor={COLOR.green}
                borderColor={COLOR.red}
                borderWidth={0}
                textColor={COLOR.white}
              />
            </View>
        </View>
        </View>
      )}
      />
    </View>
  )
}

export default SelectRooms

const styles = StyleSheet.create({
  tileColumn: {
    marginHorizontal: 20, marginBottom:10
  },
  tile: {
    backgroundColor: COLOR.lightwhite, borderRadius: 12
  },
  btnStyle: {
    margin: 10, alignItems: 'center'
  },
})