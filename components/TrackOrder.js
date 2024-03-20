import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from './assets/colors/colors';

const TrackOrder = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.appbar}>
                <TouchableOpacity style={styles.menuButton} onPress={() => navigation.goBack()}>
                    <IonIcon name='chevron-back' size={24} color={colors.specialBlack} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton}>
                    <MaterialIcons name='my-location' size={24} color={colors.specialBlack} />
                </TouchableOpacity>
            </View>

            <ScrollView>

            </ScrollView>

            <View style={styles.bottomView}>
                <View style={styles.divider} />
                <Text style={styles.timeLeft}>10 minutes left</Text>
                <View style={[styles.row, { marginBottom: 20, alignSelf: 'center' }]}>
                    <Text style={styles.deliveryTo}>Delivery to </Text>
                    <Text style={styles.deliveryAddress}>2 J.B Leton street Utako, Abuja.</Text>
                </View>

                <View style={styles.progressWrapper}>
                    <View style={[styles.progress, { backgroundColor: '#36C07E' }]} />
                    <View style={[styles.progress, { backgroundColor: '#36C07E' }]} />
                    <View style={[styles.progress, { backgroundColor: '#36C07E' }]} />
                    <View style={[styles.progress, { backgroundColor: '#DFDFDF' }]} />
                </View>

                <View style={styles.deliveryWrapper}>
                    <View style={styles.deliveryIconWrapper}>
                        <MaterialCommunityIcons name='truck-delivery' size={32} color={colors.coffee} />
                    </View>

                    <View style={{ marginHorizontal: 15, flex: 1 }}>
                        <Text style={styles.deliveryText}>Delivered your order</Text>
                        <Text style={styles.deliveryText2}>We deliver your goods to you in the shortest possible time.</Text>
                    </View>
                </View>

                <View style={styles.progressWrapper}>
                    <View style={styles.row}>
                        <Image source={{ uri: 'https://i.imgur.com/pn70Xpd.png' }} style={styles.profileImage} />
                        <View style={{ marginStart: 15, justifyContent: 'space-evenly' }}>
                            <Text style={styles.deliveryText}>Williams Olu</Text>
                            <Text style={styles.deliveryText2}>Personal Rider</Text>
                        </View>
                    </View>

                    <TouchableOpacity>
                        <View style={styles.callIconWrapper}>
                            <IonIcon name='call-sharp' size={24} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default TrackOrder;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.ash3
    },
    appbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    menuButton: {
        backgroundColor: colors.white,
        borderRadius: 14,
        height: 44,
        width: 44,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomView: {
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    divider: {
        height: 5,
        width: 44,
        backgroundColor: '#EAEAEA',
        marginTop: 10,
        marginBottom: 16,
        borderRadius: 44,
        alignSelf: 'center'
    },
    timeLeft: {
        marginBottom: 6,
        fontSize: 16,
        fontFamily: 'Sora-SemiBold',
        color: colors.diffBlack,
        alignSelf: 'center'
    },
    deliveryTo: {
        fontSize: 12,
        fontFamily: 'Sora-Regular',
        color: colors.diffBlack,
    },
    deliveryAddress: {
        fontSize: 12,
        fontFamily: 'Sora-SemiBold',
        color: colors.diffBlack,
    },
    row: {
        flexDirection: 'row',
    },
    progress: {
        height: 4,
        flex: 1,
        borderRadius: 4,
        marginHorizontal: 5
    },
    progressWrapper: {
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    deliveryText: {
        fontSize: 14,
        fontFamily: 'Sora-SemiBold',
        color: colors.diffBlack,
    },
    deliveryText2: {
        fontSize: 12,
        fontFamily: 'Sora-Regular',
        color: '#808080',
    },
    deliveryWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 14,
        borderColor: colors.ash3,
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        width: '100%',
    },
    deliveryIconWrapper: {
        width: 62,
        height: 62,
        borderRadius: 12,
        borderColor: colors.ash3,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileImage: {
        borderRadius: 14,
        width: 54,
        height: 54
    },
    callIconWrapper: {
        borderRadius: 14,
        width: 54,
        height: 54,
        borderColor: colors.ash3,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})