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
                    ...animal
                }
            ]
        });
    }




    // pressEditBtn = (i) => {
    //     let animals = this.state.animals;
    //     animals[i].isEditing = true;
    //     this.setState({
    //         animals
    //     });
    // }

    // // (i, name, age) is received from animals.js
    // updateUser = (i, title, url, city, time) => {
    //     let animals = this.state.animals;
    //     animals[i].title = title;
    //     animals[i].url = url;
    //     animals[i].city = city;
    //     animals[i].time = time;
    //     animals[i].isEditing = false;

    //     this.setState({
    //         animals
    //     });

    // }
    // // (i) is received from animals.js
    // pressDelete = (i) => {
    //     let animals = this.state.animals.filter((u, index) => {
    //         return index !== i;
    //     });
    //     this.setState({
    //         animals
    //     });
    // }




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


    render() {
        const { animals } = this.state;
        const { handleRedirectHelpDetail } = this;

        return (
            <View style={styles.listcontent}>
                <ScrollView>
                    <Text>HelpList</Text>

                    <View style={styles.device}>
                        {
                            animals.map((animal) =>
                                <HelpItem key={animal.id} animal={animal} onPress={handleRedirectHelpDetail} />
                            )
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listcontent: {
        marginHorizontal: 16
    },

    device: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },

});