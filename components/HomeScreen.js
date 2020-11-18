import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Modal, Switch, ScrollView, FlatList, TextInput, Image, Text, View, Alert, SectionList, TouchableHighlightBase, SafeAreaView} from 'react-native';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';



function boardGame(key, name, description){
    this.key = key;
    this.name = name;
    this.description =description;
  }
  
  
  
  const data = [
  new boardGame(1, "Gaia Project" , "Space euro game"), new boardGame(2, "War of the Ring" , "The best lord of the rings board gaame ever"), new boardGame(3,"Dominion" , "A fun card game!")
  ]
  
  const extraData = []
  

export function HomeScreen ({navigation, route}){
          const {isDark} = route.params;
          const [modalVisible, setVisible] = useState(false);
          const [userInput,setName] = useState('name');
          const [userDescription, setDescription] = useState("description");
          const [gameData, setGameData]  = useState(data);
          const [gameDescription, seeGameDescription] = useState('')
          const [refreshing, setRefreshing] = useState(false);
          const [gameKey,setGameKey] = useState(gameData.length +1);

     
        const addBoardGame = ()=>{
          
          setRefreshing(true);
          extraData.push(new boardGame((gameKey),userInput,userDescription));
          let allGames = data.concat(extraData);
          setGameData(allGames);
          setGameKey(allGames.length +1);
          setRefreshing(false);

        }
    
        const renderItem = ({item})=> (
        <View>
          <TouchableHighlight onPress={()=>{
            seeGameDescription(item.description);
            navigation.navigate("Search Screen", {isDark : isDark, name : item.name, description : item.description});
          }}>
          <Text style={isDark ? styles.smallTitle : styles.smallTitleDark}>{item.key}. {item.name}</Text>
          </TouchableHighlight>
        </View>);
      
    
   
       
        
      return (
        <ScrollView 
        style={isDark ? {backgroundColor : "white"} : {backgroundColor : "rgb(25, 25, 25)"}}
        refreshing={true}
        >
       
        <View style={isDark ? styles.whiteMode : styles.darkMode}>
        <View style={{ justifyContent: "flex-end" , margin : 40 }}>
          <Text h1 style={isDark ? styles.bigTitle : styles.bigTitleDark}>Welcome</Text>
          <Text h4 style={isDark ? styles.text : styles.textDark}>to the proof that I kind of know React Native</Text>
          </View>
         
         
          <Image style={{ maxHeight : 200, maxWidth : "80%" , borderRadius :40 }} source={ require("../assets/14Remington3-superJumbo.jpg")}/>
          <View style={styles.paragraph}>
          <Text style={isDark ? styles.text : styles.textDark}>This is the home screen now!!!</Text>
          <Text style={isDark ? styles.text : styles.textDark}><Text>I am the most text!</Text><Text> I am text as well.</Text></Text>
          </View>
        <View style={styles.paragraph}>
          <Text style={isDark ? styles.smallTitle : styles.smallTitleDark}> Name </Text>
          <View style={styles.colorTextBox}>
              <TextInput 
              style={styles.textBox}
              value={userInput}
              multiline={true}
              onChangeText={text => setName(text)}
              />
          </View>
          <Text style={isDark ? styles.smallTitle : styles.smallTitleDark}> Description</Text>
          <View style={styles.colorTextBox}>
              <TextInput 
              style={styles.textBox}
              value={userDescription}
              multiline={true}
              onChangeText={text => setDescription(text)}
              />
          </View>
          </View>
          <View style={styles.paragraph}>
           <Button title="Add Board Game" onPress= {addBoardGame}/>
          </View>
      
          
        
    
        <View style={styles.paragraph}>
          <FlatList style={{height : 100}}
          data={gameData}
          refreshing={refreshing}
          renderItem={renderItem}
          keyExtractor = {item => item.key.toString()}
          extraData={true}
          />
        </View>
          <StatusBar style="auto" />
          </View>
          <View style={{marginTop: 200, height : "20%", position : "relative"}}>
          <Button  title="Go to Settings" onPress={()=>{
            navigation.navigate("Settings", {isDark : isDark})}}/>
        </View>
        
        </ScrollView>
    
        
       
    
      );
      
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
      