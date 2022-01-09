import React, { Component } from 'react';
import data from './data';
import { StyleSheet, Dimensions, View, Text, TouchableOpacity, Linking, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import { WebView } from 'react-native-webview';
import icon from './data';
import HelpList from './HelpList';
navigator.geolocation = require('@react-native-community/geolocation');

const telURL = 'tel:0912345678';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animals: data,
            icon: icon.icon,
            latitude: 0,
            longitude: 0,
            error: null,
        };
    }

    // 電話鍵
    handleOpenURL = (url) => Linking.openURL(url);


    // 新增經緯度
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position.coords.latitude,position.coords.longitude);
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
                console.log(this.state.latitude,this.state.longitude)
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }


    // 新增資料
    handleAddReport = (animal) => {
        const latitude = this.state.latitude;
        const longitude = this.state.longitude;

        let year = new Date().getFullYear();
        let month = new Date().getMonth() + 1;
        let date = new Date().getDate();
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();

        this.setState({
            animals: [
                ...this.state.animals,
                {
                    id: this.state.animals.length + 1,
                    time: year + '/' + month + '/' + date + ' ' + hours + ':' + minutes,
                    latitude: latitude,
                    longitude: longitude,
                    isEditing: true,
                    ...animal
                }
            ]
        });
    }

    // handleDelete = (id) => {
    //     let { animal } = this.state;
    //     animal.id !== id;
    //     this.setState({
    //         animal
    //     });
    // }

    // 刪除資料
    handleDeleteReport = (id) => {
        let { animals } = this.state;
        animals.id !== id;
        this.setState({
            animals
        });
    }

    // 更新資料
    handleUpdateReport = () => {
        this.setState({
            animals: [
                ...this.state.animals
            ]
        });

    }

    // 轉換到新增頁面
    // componentDidMount() {
    //     this.props.navigation.setParams({
    //         rightTitle: 'vu',

    //         onRight: () => {
    //             Actions.ReportForm({ handleAddReport: this.handleAddReport });
    //         },
    //     });
    // }

    // 轉換到新增頁面
    handleRedirectReportForm = () => {
        Actions.ReportForm({
            handleAddReport: this.handleAddReport
        });
    }

    // 轉換到detail頁面(HelpDetail)
    handleRedirectHelpDetail = (id) => {
        const { animals, latitude, longitude } = this.state;
        const animal = animals.find((animal) => animal.id === id);

        Actions.HelpDetail({
            animal: animal,
            latitude: latitude,
            longitude: longitude,
            handleRedirectHelpDetailStrettView: this.handleRedirectHelpDetailStrettView
        });
        console.log(latitude,longitude)
    };

    // 轉換到查看全部頁面(HelpListwrap)
    handleRedirectHelpListwrap = () => {
        const { animals, icon } = this.state;
        Actions.HelpListwrap({
            animals: animals,
            icon: icon,
            handleRedirectHelpDetail: this.handleRedirectHelpDetail,
            handleRedirectHelpEditDetail: this.handleRedirectHelpEditDetail,
            handleAddReport: this.handleAddReport,
        });
    };

    // 轉換到編輯頁面(HelpEditDetail)
    handleRedirectHelpEditDetail = (id) => {
        const { animals } = this.state;
        const animal = animals.find((animal) => animal.id === id);

        Actions.HelpEditDetail({
            animal: animal,
            handleUpdateReport: this.handleUpdateReport, handleDeleteReport: this.handleDeleteReport
        });
    };

    render() {

        const { animals } = this.state;
        const { handleRedirectHelpDetail, handleRedirectHelpEditDetail, handleRedirectHelpListwrap, handleRedirectReportForm, handleOpenURL } = this;

        return (
            <View style={styles.container}>

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
                    {animals.map((animal, index) => (
                        <Marker
                            key={index}
                            coordinate={{ latitude: animal.latitude, longitude: animal.longitude }}
                            image={require('./images/marker.png')}

                        >
                            <Callout tooltip>
                                <View style={styles.callOut}>
                                    <Text style={styles.callOutText}>  {animal.title}</Text>
                                    {/* <Text >
                                        <Image style={styles.callOutImg} source={{ uri: animal.url }} />
                                    </Text> */}
                                    <View style={{ flex: 1 }}>
                                        <WebView style={styles.callOutImg} source={{ uri: animal.url }} />
                                    </View>
                                </View>
                            </Callout>
                        </Marker>
                    ))}

                </MapView>

                <View style={styles.helpListContent} >

                    <TouchableOpacity style={styles.addBtn} onPress={handleRedirectReportForm}>
                        {/* <Text style={styles.addBtnIcon} >+</Text> */}
                        <Image style={styles.addBtnIcon} source={require('./images/add.png')}></Image>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.addBtn} onPress={() => handleOpenURL(telURL)}>
                        {/* <Text style={styles.addBtnIcon} >☼</Text> */}
                        <Image style={styles.addBtnIcon} source={require('./images/phoneicon.png')}></Image>
                    </TouchableOpacity>

                    <View >
                        <TouchableOpacity style={styles.seeAllbtn} onPress={handleRedirectHelpListwrap}>
                            <Text style={styles.seeAllbtnText} >查看全部</Text>
                        </TouchableOpacity>
                    </View>

                    <HelpList
                        style={styles.helpList}
                        animals={animals}
                        handleRedirectHelpDetail={handleRedirectHelpDetail}
                        handleRedirectHelpEditDetail={handleRedirectHelpEditDetail}
                    />

                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 0,

    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        position: 'absolute',

    },
    callOut: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
        flexDirection: 'column',
        alignItems: "center",
        marginBottom: 5,
    },
    callOutText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',

    },
    callOutImg: {
        height: 120,
        width: 120,
        borderRadius: 20,
        marginTop: 0,
        backgroundColor: '#fff',
    },

    helpListContent: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        top: Dimensions.get("window").height - 440,
        position: 'relative',
        left: 0,

    },

    addBtn: {
        backgroundColor: '#FA8B70',
        elevation: 4,
        borderRadius: 50,
        width: 70,
        height: 70,
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignContent: 'flex-end',
        marginTop: 8,
        position: 'relative',
        left: 325,
    },

    addBtnIcon: {
        width: 30,
        height: 30,
        justifyContent: 'center',
    },
    seeAllbtn: {
        marginTop: 20,
        marginRight: 16,
        width: 100,
        borderRadius: 50,
        backgroundColor: '#fff',
        position: 'relative',
        left: 298,
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,

    },
    seeAllbtnText: {
        color: "#FA8B70",
        paddingVertical: 12,
        fontWeight: '600',
    },

})