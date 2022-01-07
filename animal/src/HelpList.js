import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import HelpItem from './HelpItem';




export default function HelpList(props) {




    const { animals } = props;
    const { handleRedirectHelpDetail, handleRedirectHelpEditDetail } = props;

    return (
        <View style={styles.listcontent}>
            <ScrollView horizontal={true}>
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

        flexDirection: 'row',
    },

});