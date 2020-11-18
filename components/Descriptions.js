import React, { useState } from 'react';
import { Button, StyleSheet, Modal, Switch, ScrollView, FlatList, TextInput, Image, Text, View, Alert, SectionList, TouchableHighlightBase, SafeAreaView} from 'react-native';

export function Descriptions ({route, navigation}){
    const {isDark, gameDetails} = route.params;

    return (
        <ScrollView style={isDark ? {backgroundColor : "white"} : {backgroundColor : "rgb(25, 25, 25)"}}>
         <View style={{marginTop : 18, marginBottom : 18}}>
     
      
     
      <Image style={{marginLeft: 40, height : 100, width : 100 , borderRadius :20,}} source={{uri : gameDetails.images.small}}/>
       </View>
       <View style={{ flexDirection : "column"}}>
      <Text style={isDark ? styles.smallTitle : styles.smallTitleDark}>{gameDetails.name} </Text>
      </View>
       <View style={styles.colorTextBox}>
      <Text style={isDark ? styles.text : styles.textDark}>Description:{gameDetails.description}</Text>
      </View> 
 
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    whiteMode: {
      height : "100%",
      marginTop : 100,
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      maxHeight : "50%"
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
      color : "black",
      marginLeft : 40
      
    },
  
    smallTitleDark :{
      textAlign : "left",
      flexDirection :"row" , 
      justifyContent: "flex-end",
      fontFamily : "Futura",
      fontSize : 20,
      color : "white",
      marginLeft : 40
    },
    fakeBox :{
      borderWidth : 2, 
      borderColor : "grey",
      padding : 2,
      borderRadius : 9,
      
    },
    colorTextBox :{
      borderWidth : 2, 
      margin : 10,
      backgroundColor : "rgb(45, 45, 45)",
      color : "white",
      borderColor : "rgb(45, 45, 45)",
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
      color : "white",
    },
    slider : {
      width : "75%",
      
  
    },
    darkMode :{
      marginTop : 100,
      flex: 0.7,
      backgroundColor: 'rgb(25, 25, 25)',
      alignItems: 'center',
      maxHeight : "50%"
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