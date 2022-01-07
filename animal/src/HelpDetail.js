import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StreetView from 'react-native-streetview';


export default function HelpDetail(props) {
    const { animal ,handleRedirectHelpDetailStrettView} = props;
    return (
        <View style={styles.content} >
            <Image style={styles.image} source={{ uri: animal.url }}></Image>
            <View style={styles.information}>
                <Text style={styles.title}>{animal.title}</Text>
                <Image style={styles.phoneicon}
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1/1257.png' }} />
                <Text style={styles.phoneText}>{animal.phone}</Text>
                <Text style={styles.descriptionText}>{animal.description}</Text>

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
                     <TouchableOpacity style={styles.seeAllbtn} >
                            <Text style={styles.seeAllbtnText} onPress={handleRedirectHelpDetailStrettView} >查看街景 →</Text>
                        </TouchableOpacity>
                </View>
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
        marginBottom:16,
    },
    streetView: {
        width: Dimensions.get('window').width - 40,
        height: Dimensions.get('window').height / 4,
        position: 'absolute',
    },
    seeAllbtn: {
       

        width: 100,
        borderRadius: 50,
        backgroundColor: '#fff',
        position: 'relative',
        left:16,
        top:45,
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,

    },
    seeAllbtnText: {
        color: "#FA8B70",
        paddingVertical: 12,
        fontWeight: '600',
    },
   

});


