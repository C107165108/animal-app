import React, { Component } from 'react';
import { View, Text, TouchableOpacity ,ScrollView} from 'react-native';
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

        this.setState({
            animals: [
                ...this.state.animals,
                {
                    id: this.state.animals.length + 1,
                    time: new Date().getHours() + ':' + new Date().getMinutes(),

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
            <View>
                <ScrollView>
                    <Text>HelpList</Text>
                    <TouchableOpacity onPress={handleRedirectHelpDetail}><Text>HelpDetail</Text></TouchableOpacity>
                    <View>
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