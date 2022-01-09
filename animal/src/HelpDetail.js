import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StreetView from 'react-native-streetview';
import { Actions } from 'react-native-router-flux';
import MapView, { Marker, Callout } from 'react-native-maps';
import { WebView } from 'react-native-webview';



export default function HelpDetail(props) {

    const { animal, latitude, longitude } = props;
    return (
        <View style={styles.content} >
            <ScrollView>
                <Image style={styles.image} source={{ uri: animal.url }}></Image>
                <View style={styles.information}>
                    <View style={styles.informationContent}>
                        <View>
                            <View style={styles.titleContent}>
                                <Text style={styles.title}>{animal.title}</Text>
                                <Text style={styles.cityText}>{animal.city} {animal.region}</Text>
                            </View>

                            <View style={styles.phoneContent}>
                                <Image style={styles.phoneIcon} source={require('./images/phone.png')}></Image>
                                <Text style={styles.phoneText}>{animal.phone}</Text>
                            </View>

                            <View style={styles.phoneContent}>
                                <Image style={styles.phoneIcon} source={require('./images/animal.png')}></Image>
                                <Text style={styles.phoneText}>{animal.description}</Text>
                            </View>

                            <View style={styles.phoneContent}>
                                <Image style={styles.phoneIcon} source={require('./images/markers.png')}></Image>
                                <Text style={styles.phoneText}>{animal.locationdescript}</Text>
                            </View>

                        </View>



                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: 22.729890557063307,
                                longitude: 120.3555999613627,
                                latitudeDelta: 0.1, //半徑
                                longitudeDelta: 0.05
                            }}
                            provider="google"
                        >

                            {animal.latitude === 0
                                ?
                                // console.log(latitude,longitude)

                                <Marker
                                    coordinate={{ latitude: latitude, longitude: longitude }}
                                    image={require('./images/marker.png')}
                                />
                                :
                                // console.log(animal.latitude,animal.longitude)
                                <Marker
                                    coordinate={{ latitude: animal.latitude, longitude: animal.longitude }}
                                    image={require('./images/marker.png')}
                                />
                                }
                         

                        </MapView>

                        <View style={styles.seeAllbtnContent}>
                            <TouchableOpacity style={styles.seeAllbtn} >
                                <Text style={styles.seeAllbtnText}
                                    onPress={() =>
                                        Actions.HelpDetailStrettView({
                                            animal: animal,
                                            latitude: latitude,
                                            longitude: longitude,
                                        })} > 查看街景 →</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    content: {
        marginHorizontal: 16,
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
        borderRadius: 40,
        marginBottom: 16,
    },
    information: {
        alignItems: "center",
    },

    informationContent: {
        marginHorizontal: 4,
        marginBottom: 4,
        height: Dimensions.get('window').height / 1.75,
        justifyContent: 'space-between',
        alignContent: 'space-between',

    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        color: 'black',
        marginTop: 4,
    },
    phoneContent: {
        flexDirection: 'row',
        marginTop: 8,
        alignContent: 'center',
    },
    phoneIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },

    descriptionText: {
        marginTop: 8,
        marginBottom: 16,
    },
    map: {
        width: Dimensions.get("window").width - 32,
        height: Dimensions.get("window").height / 4,
        alignItems: "center",
    },
    streetView: {
        width: Dimensions.get('window').width - 60,
        height: Dimensions.get('window').height / 4,
    },
    seeAllbtnContent: {
        alignItems: 'flex-end',
    },
    seeAllbtn: {
        width: Dimensions.get('window').width - 40,
        borderRadius: 50,
        backgroundColor: '#FA8B70',
        alignItems: "center",
    },
    seeAllbtnText: {
        color: "#fff",
        paddingVertical: 16,
        fontWeight: '600',
    },
    cityText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#fff',
        marginVertical: 8,
        marginHorizontal: 4,
        backgroundColor: '#FA8B70',

        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: 120,
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 16,
    },
    titleContent: {
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        marginTop: 12,

    },


});


