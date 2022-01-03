import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Home extends Component {

    handleRedirectHelpMap = () => {
        Actions.push('HelpMap');
    }
    handleRedirectReportForm = () => {
        Actions.push('ReportForm');
    }
    handleRedirectHelpList = () => {
        Actions.push('HelpList');
    }
    handleRedirectHelpStreet = () => {
        Actions.push('HelpStreet');
    }

    
    render() {

        const { handleRedirectHelpMap, handleRedirectReportForm, handleRedirectHelpList ,handleRedirectHelpStreet} = this;


        return (
            <View>
                <Text>Home</Text>
                <TouchableOpacity onPress={handleRedirectHelpMap}><Text>map</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleRedirectReportForm}><Text>ReportForm</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleRedirectHelpList}><Text>HelpList</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleRedirectHelpStreet}><Text>HelpStreet</Text></TouchableOpacity>
            </View>
        );
    }
}