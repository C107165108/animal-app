import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import StreetView from 'react-native-streetview';


export default function HelpDetailStrettView(props) {
    const { animal } = props;
    return (
        <View style={styles.content} >


            <View>
                <StreetView
                    style={styles.streetView}
                    allGesturesEnabled={true}
                    coordinate={{
                        latitude: animal.latitude,
                        longitude: animal.longitude,
                    }}
                    pov={{
                        tilt: parseFloat(0),
                        bearing: parseFloat(0),
                        zoom: parseInt(1),
                    }}

                />
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    content: {
        marginHorizontal: 16,
        marginVertical: 16,
    },

    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#EEE',
    },
    image: {
        width: Dimensions.get('window').width - 32,
        height: Dimensions.get('window').height / 3.5,
        borderRadius: 20,
        position: 'relative',
    },
    information: {
        marginHorizontal: 8,
    },

    title: {
        fontSize: 30,
        fontWeight: '600',
        color: 'black',
        marginTop: 16,

    },
    phoneicon: {
        width: 100,
    },
    phoneText: {
        marginTop: 8,
    },
    descriptionText: {
        marginTop: 8,
    },
    streetView: {
        width: Dimensions.get('window').width - 40,
        height: Dimensions.get('window').height / 4,
    },

    

});


