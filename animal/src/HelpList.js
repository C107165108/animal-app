import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import data from './data';
import HelpItem from './HelpItem';
import { Actions } from 'react-native-router-flux';



export default class HelpList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animals: data,
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

    handleUpdateReport = (animal) => {

        this.setState({
            animals: [
                ...this.state.animals,
                {
                    ...animal
                }
            ]
        });
    }

    pressEditBtn = () => {
        let animals = this.state.animals;
        animals.isEditing = true;
        this.setState({
            animals
        });
    }

    componentDidMount() {
        this.props.navigation.setParams({
            rightTitle: '新增',

            onRight: () => {
                Actions.ReportForm({ handleAddReport: this.handleAddReport });
                console.log('123');
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

        Actions.HelpEditDetail({ animal: animal, handleUpdateReport: this.handleUpdateReport, pressEditBtn: this.pressEditBtn, updateAnimals: this.updateAnimals, pressDelete: this.pressDelete });
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