import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import HelpItem from './HelpItem';
import { Actions } from 'react-native-router-flux';

export default function HelpListwrap(props) {

    const { animals } = props;
    const { handleRedirectHelpDetail, handleRedirectHelpEditDetail, handleAddReport } = props;

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

            </ScrollView>
            {/* <TouchableOpacity style={styles.addBtn} onPress={() => Actions.ReportForm({ handleAddReport: handleAddReport })}>
                <Text style={styles.addBtnIcon}>+</Text>
                
            </TouchableOpacity> */}
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
        backgroundColor: '#FA8B70',
        elevation: 4,

        borderRadius: 50,

        position: 'absolute',
        right: 16,
        top: 600,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',

    },
    addBtnIcon: {
        fontSize: 40,
        paddingTop: 7,
        paddingBottom: 11,
        paddingHorizontal: 35,
        color: '#fff',
        elevation: 5,
    },

});