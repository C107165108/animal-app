import React, { Component } from 'react';
import data from './data';
import { StyleSheet, Dimensions, Animated, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import image from './data';
import HelpList from './HelpList';


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animals: data,
        };
    }

    // 新增
    handleAddReport = (animal) => {

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

    // 刪除
    handleDeleteReport = (id) => {
        let { animals } = this.state;
        animals.id !== id;
        this.setState({ animals });
        console.log('delete')
    }

    // 新增
    handleUpdateReport = () => {
        this.setState({
            animals: [
                ...this.state.animals
            ]
        });
    }

    // action 新增
    componentDidMount() {
        this.props.navigation.setParams({
            rightTitle: '新增',

            onRight: () => {
                Actions.ReportForm({ handleAddReport: this.handleAddReport });
                console.log('123');
            },
        });
    }

    // actions detail
    handleRedirectHelpDetail = (id) => {
        const { animals } = this.state;
        const animal = animals.find((animal) => animal.id === id);

        Actions.push('HelpDetail', { animal: animal });
    };

    // actions detail
    handleRedirectHelpDetail = (id) => {
        const { animals } = this.state;
        const animal = animals.find((animal) => animal.id === id);

        Actions.push('HelpDetail', { animal: animal });
    };

     // actions detail
    handleRedirectHelpListwrap = () => {
        const { animals } = this.state;
        Actions.HelpListwrap( { 
            animals: animals,
            handleRedirectHelpDetail:this.handleRedirectHelpDetail,
            handleRedirectHelpEditDetail:this.handleRedirectHelpEditDetail,
         });
    };

    // update
    handleRedirectHelpEditDetail = (id) => {
        const { animals } = this.state;
        const animal = animals.find((animal) => animal.id === id);

        Actions.HelpEditDetail({
            animal: animal, image: image,
            handleUpdateReport: this.handleUpdateReport, handleDeleteReport: this.handleDeleteReport
        });
    };

    render() {

        const { animals } = this.state;
        const { handleRedirectHelpDetail, handleRedirectHelpEditDetail ,  handleRedirectHelpListwrap} = this;

        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 22.732496753230354,
                        longitude: 120.34881461036613,
                        latitudeDelta: 0.1, //半徑
                        longitudeDelta: 0.05
                    }}
                    provider="google"
                >

                    {animals.map((animal, index) => (
                        <Marker
                            key={index}
                            coordinate={{ latitude: animal.latitude, longitude: animal.longitude }}
                            title={animal.title}
                            description={animal.description}
                            pinColor={"purple"}

                        >
                            <Callout >

                                <Animated.View style={[styles.markerWrap]}>
                                    <Animated.Image
                                        source={require('./images/cat1.jpeg')}
                                        style={styles.marker}
                                    // resizeMode="cover"
                                    />
                                </Animated.View>
                            </Callout>
                        </Marker>
                    ))}
                </MapView>
                <View >
                    <TouchableOpacity  style={styles.seeAllbtn} onPress={  handleRedirectHelpListwrap}>
                        <Text style={styles.seeAllbtnText} >查看全部</Text>
                    </TouchableOpacity></View>
                <HelpList
                    style={styles.helpList}
                    animals={animals}
                    handleRedirectHelpDetail={handleRedirectHelpDetail}
                    handleRedirectHelpEditDetail={handleRedirectHelpEditDetail} />
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
        position: 'absolute',
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - 100,
    },
    marker: {
        width: 50,
        height: 50,
    },
    seeAllbtn: {
        marginTop:20,
        alignItems:'flex-end',

    },
    seeAllbtnText:{
        color:"#E15233",
    },
    helpList: {
        position: 'relative',
        bottom: 50,
    },
})