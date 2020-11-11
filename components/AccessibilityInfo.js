import React from 'react';
import { Button, StyleSheet, Modal, Switch, ScrollView, FlatList, TextInput, Image, Text, View, Alert, AccessibilityInfo} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

class ScreenReaderStatusExample extends React.Component {
    state = {
        isEnabled : false
    };

    componentDidMount(){
        AccessibilityInfo.addEventListener("change", this.toggleState);
    }

    componentWillUnmount(){
        AccessibilityInfo.removeEventListener("change", this.toggleState);
    }

    toggleState = (isEnabled) => {
        this.setState({isEnabled : isEnabled});
    }

    render(){
        return (
            <View>
                <Text>
                    The screen reader is {" "}
                    {this.state.isEnabled ? "enabled" : "disabled"}.
                </Text>
            </View>


        )
    }
}