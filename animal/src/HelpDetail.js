import React, { Component } from 'react';
import { View, Text, } from 'react-native';

export default function HelpDetail(props) {
    const { animal } = props;
    return (
        <View>
            <Text>HelpDetail</Text>
            <Text>{animal.id}</Text>
            <Text>{animal.title}</Text>

        </View>
    );
}
