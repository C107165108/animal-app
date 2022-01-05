import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
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

        const { handleRedirectHelpMap, handleRedirectReportForm, handleRedirectHelpList, handleRedirectHelpStreet } = this;


        return (
            <View style={styles.container}>
                <Text style={styles.title}>Home</Text>
                <TouchableOpacity style={styles.button} onPress={handleRedirectHelpMap}><Text style={styles.text}>救援地圖</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleRedirectReportForm}><Text style={styles.text}>表單申請</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={handleRedirectHelpList}><Text style={styles.text}>救援清單</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={handleRedirectHelpStreet}><Text style={styles.text}>街景狀況</Text></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:20,
    },
    title: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize:20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 100,
        backgroundColor: '#68a0cf',
        overflow: 'hidden',
        margin: 10,
        borderradius:10,
    },
});
