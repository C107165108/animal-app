import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import HelpItemWrap from './HelpItemWrap';

export default function HelpListwrap(props) {

    const { animals } = props;
    const { handleRedirectHelpDetail, handleRedirectHelpEditDetail } = props;

    return (
        <View style={styles.listcontent}>
            <ScrollView >
                <View style={styles.device}>
                    {
                        animals.map((animal) =>
                            <HelpItemWrap
                                key={animal.id}
                                animal={animal}
                                onPress={handleRedirectHelpDetail}
                                onLongPress={handleRedirectHelpEditDetail} />
                        )

                    }
                </View>
                
            </ScrollView>
            <TouchableOpacity style={styles.addBtn}>
                    <Text style={styles.addBtnIcon}>+</Text>
                </TouchableOpacity>
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
        paddingTop:9,
        paddingBottom:11,
        paddingHorizontal:35,
        fontWeight: '600',
        color: '#fff',
        elevation: 5,
    },

});