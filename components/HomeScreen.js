import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Modal, Switch, ScrollView, FlatList, TextInput, Image, Text, View, Alert, SectionList, TouchableHighlightBase} from 'react-native';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';



function boardGame(key, name, description){
    this.key = key;
    this.name = name;
    this.description =description;
  }
  
  
  
  let data = [
  new boardGame(1, "Gaia Project" , "Space euro game"), new boardGame(2, "War of the Ring" , "The best lord of the rings board gaame ever"), new boardGame(3,"Dominion" , "A fun card game!")
  ]
  
  

export class HomeScreen extends React.Component{
        state ={
          modalVisible : false,
          userInput : 'name',
          userDescription : "description",
          sliderInput : 0,
          gameData : data,
          isEnabled : false
    
        }
        toggleSwitch = () => this.setState({isEnabled : !this.state.isEnabled});
        addBoardGame = ()=>{
          let game = new boardGame((data.length +1), this.state.userInput, this.state.userDescription);
          data.push(game);
          console.log(data);
          this.setState({data : data});
        }
    
        renderItem = ({item})=> (<View>
          <TouchableHighlight onPress={()=>{
            this.setState({modalVisible : true})
            this.setState({description : item.description})
          }}>
          <Text style={this.state.isEnabled ? styles.smallTitle : styles.smallTitleDark}>{item.name}</Text>
          </TouchableHighlight>
        </View>);
      
    
      render (){
       
        
      return (
        <ScrollView style={this.state.isEnabled ? {backgroundColor : "white"} : {backgroundColor : "rgb(25, 25, 25)"}}>
       
        <View style={this.state.isEnabled ? styles.whiteMode : styles.darkMode}>
        <View style={{ justifyContent: "flex-end" , margin : 40 }}>
          <Text h1 style={this.state.isEnabled ? styles.bigTitle : styles.bigTitleDark}>Welcome</Text>
          <Text h4 style={this.state.isEnabled ? styles.text : styles.textDark}>to the proof that I kind of know React Native</Text>
          </View>
         
         
          <Image style={{ maxHeight : 200, maxWidth : "80%" , borderRadius :40 }} source={ require("../assets/14Remington3-superJumbo.jpg")}/>
          <View style={styles.paragraph}>
          <Text style={this.state.isEnabled ? styles.text : styles.textDark}>This is the home screen now!!!</Text>
          <Text style={this.state.isEnabled ? styles.text : styles.textDark}><Text>I am the most text!</Text><Text> I am text as well.</Text></Text>
          </View>
        
          
          
         
    
        <View style={styles.paragraph}>
          <Text style={this.state.isEnabled ? styles.smallTitle : styles.smallTitleDark}> Name </Text>
          <View style={styles.colorTextBox}>
              <TextInput 
              style={styles.textBox}
              value={this.state.userInput}
              multiline={true}
              onChangeText={text => this.setState({userInput : text})}
              />
          </View>
          <Text style={this.state.isEnabled ? styles.smallTitle : styles.smallTitleDark}> Description</Text>
          <View style={styles.colorTextBox}>
              <TextInput 
              style={styles.textBox}
              value={this.state.userDescription}
              multiline={true}
              onChangeText={text => this.setState({userDescription : text})}
              />
          </View>
          </View>
          <View style={styles.paragraph}>
           <Button title="Add Board Game" onPress= {this.addBoardGame}/>
          </View>
      
          
        <View style={{width : "100%" , justifyContent : "center" , alignItems : "center"}}>
          <Slider 
        style={styles.slider} 
        step="1" 
        minimumValue={0} 
        maximumValue={84} 
        value={this.state.sliderInput} 
        onValueChange={sliderInput =>this.setState({sliderInput : sliderInput})}>
        </Slider>
        <Text style={this.state.isEnabled ? styles.text : styles.textDark}>
          {this.state.sliderInput}
          </Text>
        </View>
        
        <View style={styles.paragraph}>
        <Switch 
        trackColor={{false: 'yellow', true : 'green'}}
        thumbColor={'white'}
        ios_backgroundColor="grey"
        onValueChange={this.toggleSwitch}
        value={this.state.isEnabled}
        />
        </View>
    
        <View style={styles.paragraph}>
          <FlatList style={{height : 100}}
          data={this.state.gameData}
          renderItem={this.renderItem}
          keyExtractor = {item => item.key.toString()}
          extraData={true}
          />
        </View>
        
          <StatusBar style="auto" />
        </View>
        <View style={{flex : 0.3, marginBottom : 500, position : "relative"}}>
        <Button  title="Go to Settings" onPress={()=>{
            this.props.navigation.navigate("Settings")

        }}/>
        </View>
        <Modal 
            animationType="slide" 
            transparent={true} 
            visible={this.state.modalVisible} 
            >
                <View style={styles.centeredView}>
                <View style={styles.modal}>
                <Text style={styles.textDark}>{this.state.description}</Text>
                <Button
                onPress={()=>{
                  this.setState({modalVisible : !this.state.modalVisible})
                }}
                  style = {styles.textDark} title={"Click to Hide"}/>
               
                </View>
              </View>
            </Modal>
        
        </ScrollView>
    
        
       
    
      );
      }
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
      