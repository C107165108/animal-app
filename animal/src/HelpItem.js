import React from 'react';
import { View, Text} from 'react-native';



export default function HelpItem(props) {


    const { animal } = props;

    return (
        <View>
            <Text>{animal.id}</Text>
            <Text>{animal.id}</Text>
            <Text>{animal.title}</Text>
            <Text>{animal.description}</Text>
            <Text>{animal.phone}</Text>
            <Text>{animal.species}</Text>
            <Text>{animal.city}</Text>
            <Text>{animal.time}</Text>
        </View>
    );

}