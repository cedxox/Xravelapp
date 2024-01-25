import {useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding , Search, CountriesDetails, Recommended, PlaceDetails, HotelDetails, HotelList, HotelSearch, SelectRooms, Payments, Settings, SelectedRoom, Failed, Successful } from './screens';
import BottomTabNavigation from './navigation/BottomTabNavigation';



const Stack = createNativeStackNavigator()

export default function App() {
const [fontsLoaded] = useFonts({
      "OutfitThin": require ('./assets/fonts/Outfit-Thin.ttf'),
      "OutfitBold": require ('./assets/fonts/Outfit-Bold.ttf'),
      "OutfitExtraBold": require ('./assets/fonts/Outfit-ExtraBold.ttf'),
      "OutfitBlack": require ('./assets/fonts/Outfit-Black.ttf'),
      "OutfitExtraLight": require ('./assets/fonts/Outfit-ExtraLight.ttf'),
      "OutfitLight": require ('./assets/fonts/Outfit-Light.ttf'),
      "OutfitMedium": require ('./assets/fonts/Outfit-Medium.ttf'),
      "OutfitRegular": require ('./assets/fonts/Outfit-Regular.ttf'),
      "OutfitSemiBold": require ('./assets/fonts/Outfit-SemiBold.ttf')
});

const onLayoutRootView = useCallback (async () => {
  if(fontsLoaded){
  await SplashScreen.hideAsync();
  }
},[fontsLoaded]);

if (!fontsLoaded) {
  return null;
}

 return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Onboard' component={Onboarding} options={{headerShown: false}}/>
      <Stack.Screen name='Bottom' component={BottomTabNavigation} options={{headerShown: false}}/>
      <Stack.Screen name='Search' component={Search} options={{headerShown: false}}/>
      <Stack.Screen name='CountriesDetails' component={CountriesDetails} options={{headerShown: false}}/>
      <Stack.Screen name='Recommended' component={Recommended} options={{headerShown: false}}/>
      <Stack.Screen name='PlaceDetails' component={PlaceDetails} options={{headerShown: false}}/>
      <Stack.Screen name='HotelDetails' component={HotelDetails} options={{headerShown: false}}/>
      <Stack.Screen name='HotelList' component={HotelList} options={{headerShown: false}}/>
      <Stack.Screen name='HotelSearch' component={HotelSearch} options={{headerShown: false}}/>
      <Stack.Screen name='SelectRooms' component={SelectRooms} options={{headerShown: false}}/>
      <Stack.Screen name='Payments' component={Payments} options={{headerShown: false}}/>
      <Stack.Screen name='Settings' component={Settings} options={{headerShown: false}}/>
      <Stack.Screen name='SelectedRoom' component={SelectedRoom} options={{headerShown: false}}/>
      <Stack.Screen name='Successful' component={Successful} options={{headerShown: false}}/>
      <Stack.Screen name='Failed' component={Failed} options={{headerShown: false}}/>

     
    </Stack.Navigator>
  </NavigationContainer>
 )
}


















































// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { useState, useEffect, useCallback } from 'react';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const stack = createNativeStackNavigator() 

// SplashScreen.preventAutoHideAsync();
// export default function App() {

//   const [ appIsHappy, setAppIsHappy ]= useState(false);
//    const [fontsLoaded]=useFonts({
//     "OutfitThin": require ('./assets/fonts/Outfit-Thin.ttf'),
//     "OutfitBold": require ('./assets/fonts/Outfit-Bold.ttf'),
//     "OutfitExtraBold": require ('./assets/fonts/Outfit-ExtraBold.ttf'),
//     "OutfitBlack": require ('./assets/fonts/Outfit-Black.ttf'),
//     "OutfitExtraLight": require ('./assets/fonts/Outfit-ExtraLight.ttf'),
//     "OutfitLight": require ('./assets/fonts/Outfit-Light.ttf'),
//     "OutfitMedium": require ('./assets/fonts/Outfit-Medium.ttf'),
//     "OutfitRegular": require ('./assets/fonts/Outfit-Regular.ttf'),
//     "OutfitSemiBold": require ('./assets/fonts/Outfit-SemiBold.ttf')
//   });
 
 
//    useEffect( () =>{
//     async function prepare() {
//       try {
//         await new Promise ((resolve ) => setTimeout(resolve,1000));

//       }catch (e) {
//         console.warn(e);
//         await SplashScreen.hideAsync();

//       }finally {
//         if (fontsLoaded) {
//           setAppIsHappy (true);
//           await SplashScreen.hideAsync();
//         }
//       }
//     }
// prepare();
//    },[fontsLoaded]);

//    const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
  
//     textstyle: {
//       fontFamily:"OutfitSemiBold",
//       fontSize: 20,
//     }
//   });

//   if (appIsHappy && fontsLoaded) {

//   return (
//     <View style={styles.container}>
//       <Text style={styles.textstyle}>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// }