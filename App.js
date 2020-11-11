import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Modal, Switch, ScrollView, FlatList, TextInput, Image, Text, View, Alert, SectionList, TouchableHighlightBase} from 'react-native';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { HomeScreen } from './components/HomeScreen';
import { SettingScreen } from './components/SettingScreen';

const Stack = createStackNavigator();



export default function App (){
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Settings" component={SettingScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
  
}


/*----------------------------- ----------------------------- ----------------------------- 

  This is the actual computational programming may occur

----------------------------- ----------------------------- --------------------------------*/




const styles = StyleSheet.create({
  
});
