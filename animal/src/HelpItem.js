import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HelpItem(props) {

    const { animal, onPress, onLongPress } = props;

    return (
        <TouchableOpacity
            onPress={() => onPress(animal.id)}
            onLongPress={() => onLongPress(animal.id)}
            style={styles.deviceItem}>

            <Image source={{ uri: animal.url }} style={styles.Img} />
            <Text style={styles.title}>{animal.title}</Text>
            <Text style={styles.cityText}>{animal.city} {animal.region}</Text>
            <Text style={styles.timeText}>{animal.time}</Text>
            
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    deviceItem: {
        backgroundColor: '#FFF',
        width: 172,
        height: 235,
        borderRadius: 20,
        marginHorizontal: 8,
        marginVertical: 4,
        marginBottom: 10,
        elevation: 4,
    },
    Img: {
        width: 172,
        height: 140,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        marginTop: 8,
        marginHorizontal: 16,
    },
    cityText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#FA8B70',
        marginVertical: 4,
        marginHorizontal: 16,
    },
    timeText: {
        fontSize: 12,
        color: 'gray',
        marginBottom: 8,
        marginHorizontal: 16,
    }


});