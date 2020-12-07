import React from 'react';
import { View, 
    Text,
    Button,
    Image,
    StyleSheet } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Color from '../constants/color';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image 
                    fadeDuration={1000}
                    // source={require('../assets/success.png')} 
                    source={{
                        uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'
                        }} 
                    style={styles.image}
                    resizeMode="cover" />
            </View>
            <View style={styles.reusltContainter}>
                <BodyText style={styles.resultText}>Your phone needed{' '}
                    <Text style={styles.highlight}> {props.roundsNumber}</Text> rounds to guess the number{' '}
                    <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
            </View>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden'
    },
    highlight: {
        color: Color.primary,
        fontFamily: 'open-sans-bold',
    },
    reusltContainter:{
        marginHorizontal: 20,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default GameOverScreen;