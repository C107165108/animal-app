import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class HelpList extends Component {

    handleRedirectHelpDetail = () => {
        Actions.push('HelpDetail');
    }

    render() {

        const { handleRedirectHelpDetail } = this;

        return (
            <View>
                <Text>HelpList</Text>
                <TouchableOpacity onPress={handleRedirectHelpDetail}><Text>HelpDetail</Text></TouchableOpacity>
            </View>
        );
    }
}