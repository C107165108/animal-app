import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import StreetView from 'react-native-streetview';


export default function HelpDetailStrettView(props) {
    const { animal, latitude, longitude } = props;
    return (
        <View  >


            <View>
                {animal.latitude === null
                    ?
                    <StreetView
                        style={styles.streetView}
                        allGesturesEnabled={true}
                        coordinate={{
                            latitude: latitude,
                            longitude: longitude,
                        }}
                        pov={{
                            tilt: parseFloat(0),
                            bearing: parseFloat(0),
                            zoom: parseInt(1),
                        }}

                    />
                    :
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

                    />}
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


