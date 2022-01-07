import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import data from './data';
import HelpItem from './HelpItem';
import { Actions } from 'react-native-router-flux';
import image from './data';
import { Marker } from 'react-native-maps';



export default class HelpList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animals: data,
            image: image,
        };
    }

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



    handleDeleteReport = (id) => {
        let { animals } = this.state;
        animals.id !== id;
        this.setState({ animals });
        console.log('delete')
    }

    handleUpdateReport = () => {
        this.setState({
            animals: [
                ...this.state.animals
            ]
        });
    }

    mapMarkers = () => {
        return this.state.animals.map((animal) =>
            <Marker
                key={animal.id}
                coordinate={{ latitude: animal.latitude, longitude: animal.longitude }}
                title={animal.title}
                description={animal.description}
                pinColor={"purple"}
              
            >
            </Marker >)
    }



    // componentDidMount() {
    //     this.props.navigation.setParams({
    //         rightTitle: '新增',

    //         onRight: () => {
    //             Actions.ReportForm({ handleAddReport: this.handleAddReport });
    //             console.log('123');
    //         },
    //     });
    // }


    componentDidMount() {
        let { animals } = this.state;
        this.props.navigation.setParams({
            rightTitle: '地圖',

            onRight: () => {
                Actions.HelpMap({ animals: animals, mapMarkers: this.mapMarkers });

            },
        });
    }


    handleRedirectHelpDetail = (id) => {
        const { animals } = this.state;
        const animal = animals.find((animal) => animal.id === id);

        Actions.push('HelpDetail', { animal: animal });
    };


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
        const { handleRedirectHelpDetail, handleRedirectHelpEditDetail } = this;

        return (
            <View style={styles.listcontent}>
                <ScrollView>
                    <View style={styles.device}>
                        {
                            animals.map((animal) =>
                                <HelpItem
                                    key={animal.id}
                                    animal={animal}
                                    onPress={handleRedirectHelpDetail}
                                    onLongPress={handleRedirectHelpEditDetail} />
                            )

                        }
                    </View>
                    <TouchableOpacity style={styles.addBtn}>
                        <Text style={styles.addBtnIcon}>+</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listcontent: {
        marginHorizontal: 16,
        marginVertical: 16,
        position: 'relative',

    },

    device: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    addBtn: {
        backgroundColor: '#E15233',
        elevation: 4,
        width: 100,
        height: 80,
        borderRadius: 50,

        position: 'absolute',
        right: 30,
        top: 600,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',

    },
    addBtnIcon: {
        fontSize: 30,
        fontWeight: '600',
        color: '#fff',
        elevation: 5,
    },

});