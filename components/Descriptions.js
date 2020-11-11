import React from 'react';
import { Button, StyleSheet, Modal, Switch, ScrollView, FlatList, TextInput, Image, Text, View, Alert, TouchableHighlightBase} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export class Descriptions extends React.Component{

    state = {
      modalVisible : false,
      description : ''
    }

    constructor(description, modalVisible){
      this.description = description;
      this.modalVisible = modalVisible;
      this.setState({description : description, modalVisible : modalVisible});
      console.log("modal clicked!")
    }

    render() {
       
    }
}

