import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Modal, Switch, ScrollView, FlatList, TextInput, Image, Text, View, Alert, SectionList, TouchableHighlightBase} from 'react-native';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack'


export function SettingScreen({navigation, route}) {
    
    

        let {isDark} = route.params;
        const [modalVisible, setModalVisible] = useState(false);
        const [sliderInput, inputSlider] = useState(0);
        const [isEnabled, setDark] = useState(isDark);
        
      
      const toggleSwitch = () => {
      setDark(!isEnabled)
      };

        return(
            <View style={isEnabled ? styles.whiteMode : styles.centeredView}>
            <View style={{width : "100%" , justifyContent : "center" , alignItems : "center"}}>
            <Slider 
          style={styles.slider} 
          step="1" 
          minimumValue={0} 
          maximumValue={84} 
          value={sliderInput} 
          onValueChange={sliderInput =>inputSlider(sliderInput)}>
          </Slider>
          <Text style={isEnabled? styles.text : styles.textDark}>
            {sliderInput}
            </Text>
          </View>
          
          <View style={styles.paragraph}>
          <Switch 
          trackColor={{false: 'yellow', true : 'green'}}
          thumbColor={'white'}
          ios_backgroundColor="grey"
          onValueChange={toggleSwitch}
          value={isEnabled}
          />
          </View>

          <View style={styles.paragraph}>
            <Button title="Go Back" onPress={()=>{              
              navigation.navigate("Home" , {isDark: isEnabled})
            }}/>
          </View>
          </View>
        );
}




const styles = StyleSheet.create({
    whiteMode: {
     
      backgroundColor: 'white',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    paragraph : {
      margin : 40,
      fontFamily : "Futura",
      alignItems : "flex-start"
    },
    bigTitle :{
      fontFamily : "Futura",
      fontSize : 30,
      color : "black"
    },
  
    bigTitleDark : {
      fontFamily : "Futura",
      fontSize : 30,
      color : "white"
    },
  
    smallTitle :{
      textAlign : "left",
      flexDirection :"row" , 
      justifyContent: "flex-end",
      fontFamily : "Futura",
      fontSize : 20,
      color : "black"
      
    },
  
    smallTitleDark :{
      textAlign : "left",
      flexDirection :"row" , 
      justifyContent: "flex-end",
      fontFamily : "Futura",
      fontSize : 20,
      color : "white"
    },
    fakeBox :{
      borderWidth : 2, 
      borderColor : "grey",
      padding : 2,
      borderRadius : 9,
      
    },
    colorTextBox :{
      borderWidth : 2, 
      backgroundColor : "purple",
      color : "white",
      borderColor : "purple",
      padding : 2,
      borderRadius : 9,
    },
  
    textBox : {
      color : "white",
      margin : 20,
      minWidth : "80%",
      maxWidth : "80%",
      maxHeight : 200
    },
    text : {
      color : "black"
    },
    textDark : {
      color : "white"
    },
    slider : {
      width : "75%",
      
  
    },
    darkMode :{
      marginTop : 100,
      flex: 0.7,
      backgroundColor: 'rgb(25, 25, 25)',
      alignItems: 'center',
    },
    centeredView : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      backgroundColor : "rgb(25, 25, 25)"
    },
    modal :{
      margin: 20,
      backgroundColor: 'rgb(25, 25, 25)',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      backgroundColor : "rgb(25, 25, 25)"
    },
    modalDark : {
  
    }
  });
  


  