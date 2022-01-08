import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import StreetView from 'react-native-streetview';


export default function HelpDetailStrettView(props) {
    const { animal } = props;
    return (
        <View  >


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

    streetView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },



});


