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
        let month = new Date().getMonth()+1;
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

    componentDidMount() {
        this.props.navigation.setParams({
            rightTitle: '新增',

            onRight: () => {
                Actions.ReportForm({ handleAddReport: this.handleAddReport });
                console.log('123');
            },
        });
    }



    render() {
        const { animals } = this.state;
        const { handleRedirectHelpDetail } = this;

        return (
            <View style={styles.listcontent}>
                <ScrollView>
                    <Text>HelpList</Text>
                    <TouchableOpacity onPress={handleRedirectHelpDetail}><Text>HelpDetail</Text></TouchableOpacity>
                    <View style={styles.device}>
                        {
                            animals.map((animal) =>
                                <HelpItem key={animal.id} animal={animal} />
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