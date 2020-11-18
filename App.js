import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Modal, Switch, ScrollView, FlatList, TextInput, Image, Text, View, Alert, SectionList, TouchableHighlightBase} from 'react-native';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { HomeScreen } from './components/HomeScreen';
import { SettingScreen } from './components/SettingScreen';
import { Descriptions } from './components/Descriptions';
import { SearchScreen } from './components/SearchScreen';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator({
//   HomeScreen : {
//     screen : HomeScreen,
//     navigationOptions : {
//       tabBarLabel : "Home",
//       tabBarIcon : ({tintColor}) => {
//         <Image source={ require('./assets/best-board-games-adults-1585587217.jpg')}
//         style={{width : 32, height : 32, tintColor : tintColor}}/>
//       }
//   }
//   },
//   SettingScreen : {
//     screen : SettingScreen,
//     navigationOptions : {
//       tabBarLabel : "Settings",
//     }
//   }

// });


export default function App (){
  
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} 
          initialParams={{isDark : false}}/>

        <Stack.Screen name="Search Screen" component={SearchScreen} 
          initialParams={{name : "", description : "", isDark : false}}/>

        <Stack.Screen name="Settings" component={SettingScreen} 
          initialParams={{isDark : false}}/>

      </Stack.Navigator>
      </NavigationContainer>
  );
  
}


/*----------------------------- ----------------------------- ----------------------------- 

  This is the actual computational programming may occur

----------------------------- ----------------------------- --------------------------------*/




const styles = StyleSheet.create({
  
});
