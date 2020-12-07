import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Color from '../constants/color';

const MainButton = props => {
    return <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Color.primary,
        paddingVertical: 12,
        paddingBottom: 12,
        borderRadius: 18,
        padding: 8
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 16
    }
});

export default MainButton;