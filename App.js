import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Modal, Switch, ScrollView, FlatList, TextInput, Image, Text, View, Alert, SectionList, TouchableHighlightBase} from 'react-native';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { HomeScreen } from './components/HomeScreen';
import { SettingScreen } from './components/SettingScreen';
import { Descriptions } from './components/Descriptions';
import {BoardStack } from './components/SearchScreen';


const Drawer = createDrawerNavigator();

function BoardDrawer(){
  return(
    <Drawer.Navigator>

      <Drawer.Screen name="Home" component={HomeScreen} 
        initialParams={{isDark : false}}/>

      <Drawer.Screen name="Search Screen" component={BoardStack} 
        initialParams={{name : "", description : "", isDark : false}}/>

      <Drawer.Screen name="Settings" component={SettingScreen} 
        initialParams={{isDark : false}}/>

    </Drawer.Navigator>
  )
}


export default function App (){
  
  return (
    <NavigationContainer>
      <BoardDrawer />
      </NavigationContainer>
  );
  
}


/*----------------------------- ----------------------------- ----------------------------- 

  This is the actual computational programming may occur

----------------------------- ----------------------------- --------------------------------*/




const styles = StyleSheet.create({
  
});
