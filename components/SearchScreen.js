import React, {useState} from 'react';
import { Button, StyleSheet, Modal, Switch, ScrollView, FlatList, TextInput, Image, Text, View, Alert, TouchableHighlightBase} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useScreens } from 'react-native-screens';


const url = 'https://api.boardgameatlas.com/api/search?name=';
const clientId = 'v0EMyOsTcG';
const viewedBoardGames = []
const images = []
function boardGame(key, name, description, images){
  this.key = key;
  this.name = name;
  this.description = description;
  this.images = images;
}

// const warOfTheRing = new boardGame(viewedBoardGames.length, "War of the Ring", "is war of the ring good? Yes!!", {})

export function SearchScreen({navigation, route}){

  const {isDark, name, description} = route.params;
  const [userInput, setName] = useState("");
  const [searchDescription, setDescription]=useState("");
  const [boardGames,seeBoardGames] = useState(viewedBoardGames);
  const [refreshing, setRefreshing] = useState(false);

  /* 
  Flesh this out!
  */
  const renderItem = ({item}) =>(
    <View>
      <View>
      <Image style={{height : 200, width : "80%" , borderRadius :40}} source={{uri : item.images.original}}/>
      </View>
      <View>
      <Text style={isDark ? styles.text : styles.textDark}>Name: {item.name} </Text>
      </View>
      <View>
      <Text style={isDark ? styles.text : styles.textDark}>Description:{item.description}</Text>
      </View>
      </View>
  );

  const searchGames = async (input)=> {
    let queriedGames = [];
    let response = await fetch(url + input + "&client_id=" + clientId + "&limit=3");
    if (response.status === 200){
      let gameSearch = await response.json();
      
      for (let game of gameSearch.games){
        let queriedGame = new boardGame(game.id, game.name, game.description_preview, game.images);
        queriedGames.push(queriedGame);
      }
      setRefreshing(true);
      console.log(":::::::::::::::::::::::::::::::")
      setRefreshing(false);
      seeBoardGames(queriedGames);
      console.log(queriedGames[0].images.large);
    }
   
  }
  


  return(
    <ScrollView style={isDark ? {backgroundColor : "white"} : {backgroundColor : "rgb(25, 25, 25)"}} refreshing={refreshing}>
      <View style={styles.paragraph}>
        <View>
          <Text style={isDark ? styles.text : styles.textDark}>
            {name}
          </Text>
        </View>
        <View>
          <Text style={isDark ? styles.text : styles.textDark}>
            {description}
          </Text>
        </View>
      </View>


      <View style={styles.paragraph}>
          <Text style={isDark ? styles.smallTitle : styles.smallTitleDark}> Search board games by Name!</Text>
          <View style={styles.colorTextBox}>
              <TextInput 
              style={styles.textBox}
              value={userInput}
              multiline={true}
              onChangeText={text => setName(text)}
              />
          </View><Button title="Submit Search" style={styles.paragraph} onPress={()=>{
            searchGames(userInput);
            
          }}/>
     </View>
     <View style={styles.paragraph}>
     <FlatList style={{flex : 1}}
          data={boardGames}
          refreshing={refreshing}
          renderItem={renderItem}
          keyExtractor = {item => item.key.toString()}
          extraData={true}
          />
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
    backgroundColor : "coral",
    color : "white",
    borderColor : "coral",
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
