import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import colors from './assets/colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Checkout = ({ route, navigation }) => {
    const { item } = route.params;
    const [orderNumber, setOrderNumber] = useState(1);
    const [total, setTotal] = useState(item.price);
    const deliveryFee = 2;
    const discount = 1;

    const addClicked = () => {
        setOrderNumber(prevOrderNumber => prevOrderNumber + 1);
        setTotal(prevTotal => (parseFloat(prevTotal) + item.price).toFixed(2));
    }
    const minusClicked = () => {
        orderNumber > 1 ? setOrderNumber(prevOrderNumber => prevOrderNumber - 1) : 1
        orderNumber > 1 ? setTotal(prevTotal => (parseFloat(prevTotal) - item.price).toFixed(2)) : item.price
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.appbar}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <IonIcon name='chevron-back' size={24} color={colors.diffBlack} />
                    </TouchableOpacity>

                    <Text style={[styles.appbar, styles.appbarText, { position: 'absolute' }]}>
                        Order
                    </Text>
                </View>
            </SafeAreaView>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.tabLayout}>
                    <Text style={[styles.tabItem, { backgroundColor: colors.coffee, fontFamily: 'Sora-SemiBold', color: colors.white }]}>Deliver</Text>
                    <Text style={[styles.tabItem, { fontFamily: 'Sora-Regular', color: colors.diffBlack }]}>Pick Up</Text>
                </View>

                <Text style={styles.subTitle}>Delivery Address</Text>
                <Text style={[styles.deliveryAddressTitle, { marginBottom: 4, paddingHorizontal: 20 }]}>Abuja</Text>
                <Text style={[styles.deliveryAddress, { paddingHorizontal: 20, }]}>2 J.B Leton street Utako, Abuja.</Text>
                <View style={[styles.row, { marginTop: 10, paddingHorizontal: 20, }]}>
                    <View style={[styles.row, styles.options]}>
                        <FontAwesome name='edit' size={14} color={colors.crazyBlack} style={{ marginTop: 2 }} />
                        <Text style={styles.optionsText}>Edit Address</Text>
                    </View>

                    <View style={[styles.row, styles.options]}>
                        <MaterialCommunityIcons name='note-text-outline' size={14} color={colors.crazyBlack} style={{ marginTop: 1 }} />
                        <Text style={styles.optionsText}>Add Note</Text>
                    </View>
                </View>

                <View style={[styles.divider, { marginVertical: 20 }]} />

                <View style={[styles.row2, { paddingHorizontal: 20 }]}>
                    <View style={styles.row}>
                        <Image style={styles.image} source={item.image} />
                        <View style={styles.coffeeInfoTextWrapper}>
                            <Text style={styles.deliveryAddressTitle}>{item.type}</Text>
                            <Text style={styles.deliveryAddress}>with {item.flavour}</Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => minusClicked()}>
                            <View style={styles.circle}>
                                <Feather name='minus' size={20} color={orderNumber <= 1 ? colors.faintBlack : colors.diffBlack} />
                            </View>
                        </TouchableOpacity>

                        <Text style={[styles.deliveryAddressTitle, { paddingHorizontal: 10 }]}>{orderNumber}</Text>

                        <TouchableOpacity onPress={() => addClicked()}>
                            <View style={styles.circle}>
                                <Feather name='plus' size={20} color={colors.diffBlack} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.divider2} />

                <View style={styles.discountWrapper}>
                    <View style={styles.row}>
                        <MaterialIcons name='discount' size={20} color={colors.coffee} />
                        <Text style={[styles.deliveryAddressTitle, { marginStart: 6 }]}>1 Discount is applied</Text>
                    </View>

                    <IonIcon name='chevron-forward' size={20} color={colors.diffBlack} />
                </View>

                <Text style={styles.subTitle}>Payment Summary</Text>
                <View style={[styles.row2, { marginBottom: 8 }]}>
                    <Text style={styles.priceText}>Price</Text>
                    <Text style={styles.price}>$ {total}</Text>
                </View>
                <View style={styles.row2}>
                    <Text style={styles.priceText}>Delivery Fee</Text>
                    <View style={styles.row}>
                        <Text style={[{
                            fontSize: 14,
                            fontFamily: 'Sora-Regular',
                            color: colors.diffBlack, marginEnd: 8, textDecorationLine: 'line-through'
                        }]}>$ {deliveryFee.toFixed(1)}</Text>
                        <Text style={styles.price}>$ {(deliveryFee - discount).toFixed(1)}</Text>
                    </View>
                </View>

                <View style={[styles.divider, { marginVertical: 16 }]} />
                <View style={[styles.row2, { marginBottom: 8 }]}>
                    <Text style={styles.priceText}>Total Payment</Text>
                    <Text style={styles.price}>$ {(parseFloat(total) + deliveryFee - discount).toFixed(2)}</Text>
                </View>
            </ScrollView>

            <View style={styles.bottomView}>
                <View style={[styles.row2, { alignItems: 'center', marginEnd: 20 }]}>
                    <View style={styles.row}>
                        <FontAwesome6 name='money-bills' size={24} color={colors.coffee} style={{ marginStart: 20, marginEnd: 12 }} />
                        <View style={styles.tabLayout2}>
                            <Text style={[styles.tabItem2, { backgroundColor: colors.coffee, color: colors.white }]}>Cash</Text>
                            <Text style={[styles.tabItem2, { color: colors.diffBlack, marginEnd: 5 }]}>$ {(parseFloat(total) + deliveryFee - discount).toFixed(2)}</Text>
                        </View>
                    </View>
                    <IonIcon name='ellipsis-horizontal-circle-sharp' size={24} />
                </View>


                <TouchableOpacity onPress={() => navigation.navigate('TrackOrder')}>
                    <View style={styles.orderButton}>
                        <Text style={styles.orderText}>Order</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    appbar: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    appbarText: {
        fontSize: 18,
        fontFamily: 'Sora-SemiBold',
        color: colors.diffBlack,
        alignSelf: 'center'
    },
    tabLayout: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 5,
        backgroundColor: colors.ash7,
        borderRadius: 14,
        marginVertical: 25,
        marginHorizontal: 20,
    },
    tabItem: {
        flex: 1,
        paddingVertical: 15,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 16
    },
    subTitle: {
        fontSize: 16,
        fontFamily: 'Sora-SemiBold',
        color: colors.diffBlack,
        marginBottom: 8,
        paddingHorizontal: 20,
    },
    deliveryAddressTitle: {
        fontSize: 14,
        fontFamily: 'Sora-SemiBold',
        color: colors.diffBlack

    },
    deliveryAddress: {
        fontSize: 12,
        fontFamily: 'Sora-Regular',
    },
    options: {
        borderRadius: 16,
        borderColor: colors.ash7,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: 'center',
        fontSize: 12,
        justifyContent: 'center',
        marginEnd: 10
    },
    optionsText: {
        fontSize: 12,
        marginStart: 5,
        color: colors.crazyBlack
    },
    divider: {
        borderBottomWidth: 1.5,
        borderBottomColor: '#EAEAEA',
        marginHorizontal: 20,
    },
    divider2: {
        borderBottomWidth: 4,
        borderBottomColor: '#EAEAEA',
        marginVertical: 20,
        marginHorizontal: -20
    },
    image: {
        width: 54,
        height: 54,
        borderRadius: 12
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    coffeeInfoTextWrapper: {
        marginStart: 12
    },
    circle: {
        borderRadius: 30,
        width: 30,
        height: 30,
        borderWidth: 1.5,
        borderColor: '#AAADB0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    discountWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderColor: "#EAEAEA",
        borderWidth: 2,
        borderRadius: 14,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    discountTextWrapper: {
        flexDirection: 'row',
    },
    priceText: {
        fontSize: 14,
        fontFamily: 'Sora-Regular',
        color: colors.diffBlack,
        paddingHorizontal: 20,
    },
    price: {
        fontSize: 14,
        fontFamily: 'Sora-SemiBold',
        color: colors.diffBlack,
        paddingEnd: 20,
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
    },
    orderButton: {
        backgroundColor: colors.coffee,
        height: 62,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginHorizontal: 20
    },
    orderText: {
        fontSize: 16,
        fontFamily: 'Sora-SemiBold',
        color: colors.white,
    },
    tabLayout2: {
        flexDirection: 'row',
        backgroundColor: colors.ash7,
        borderRadius: 20,
        marginVertical: 20,
    },
    tabItem2: {
        borderRadius: 20,
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Sora-Regular',
        padding: 5
    }
});

export default Checkout;
