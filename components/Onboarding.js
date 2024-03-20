import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import colors from '../components/assets/colors/colors.js';


export default Onboarding = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor="transparent" translucent />
            <Image style={styles.image} source={require('./assets/images/coffee_cup.png')} />
            <View style={styles.textsWrapper}>
                <Text style={styles.textTitle}>
                    Coffee so good, your taste buds will love it.
                </Text>
                <Text style={styles.subTitle}>
                    The best grain, the finest roast, the powerful flavor.
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    image: {
        width: '100%',
        resizeMode: 'cover'
    },
    textsWrapper: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.black,
        paddingHorizontal: 20
    },
    textTitle: {
        fontSize: 34,
        fontFamily: 'Sora-SemiBold',
        color: colors.white,
        textAlign: 'center',
        bottom: 30
    },
    subTitle: {
        fontSize: 14,
        fontFamily: 'Sora-Regular',
        color: colors.ash,
        textAlign: 'center',
    },
    button: {
        backgroundColor: colors.coffee,
        width: '100%',
        height: 62,
        marginVertical: 20,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Sora-SemiBold',
        fontSize: 16,
        color: colors.white
    }
})