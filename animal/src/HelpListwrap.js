import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import HelpItem from './HelpItem';

export default function HelpListwrap(props) {

    const { animals } = props;
    const { handleRedirectHelpDetail, handleRedirectHelpEditDetail } = props;

    return (
        <View style={styles.listcontent}>
            <ScrollView >
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