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
    handleRedirectHelpList = () => {
        Actions.push('HelpList');
    }


    render() {
        
        const { handleRedirectHelpMap, handleRedirectReportForm, handleRedirectHelpList } = this;


        return (
            <View>
                <Text>Home</Text>
                <TouchableOpacity onPress={handleRedirectHelpMap}><Text>map</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleRedirectReportForm}><Text>ReportForm</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleRedirectHelpList}><Text>HelpList</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleRedirectHelpList}><Text>HelpList</Text></TouchableOpacity>
            </View>
        );
    }
}