import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import HelpItem from './HelpItem';

export default function HelpList(props) {

    const { animals } = props;
    const { handleRedirectHelpDetail, handleRedirectHelpEditDetail } = props;

    return (
        <View style={styles.listcontent}>
            <ScrollView horizontal={true}>
                <View style={styles.list}>
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
        marginVertical: 16,
    },
    list: {
        flexDirection: 'row',
    },

});