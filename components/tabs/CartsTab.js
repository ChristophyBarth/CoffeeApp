import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import IonIcon from 'react-native-vector-icons/Ionicons'
import colors from '../assets/colors/colors'

import { addQuantity, subtractQuantity } from '../redux/actions/cartActions';
import LottieView from 'lottie-react-native';

const CartsTab = ({ cartItems, add, subtract }) => {
  const plusPress = (item) => {
    add(item)
  }
  const minusPress = (item) => {
    subtract(item)
  }

  return (
    <View style={style.container}>
      <FlatList
        style={{ marginTop: 10 }}
        data={cartItems}
        renderItem={({ item }) => (
          <View style={style.cartItemWrapper}>
            <View style={style.normalRow}>
              <Image source={item.item.image} style={style.cartItemImageWrapper} />
              <View style={style.coffeeInfoTextWrapper}>
                <Text style={style.coffeeTypeText}>{item.item.type}</Text>
                <Text style={style.coffeeFlavourText}>with {item.item.flavour}</Text>
                <Text style={style.coffeeItemPriceText}>${(item.item.price * item.quantity).toFixed(2)}</Text>
              </View>
            </View>
            <View style={style.column}>
              <TouchableOpacity style={[style.buttonElevatedView, { margin: 7.5 }]} onPress={() => minusPress(item)}>
                <IonIcon name={"remove"} size={20} color={colors.diffBlack} />
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 7.5, marginVertical: -2.5, alignSelf: 'center', color: colors.diffBlack }}>
                {item.quantity}
              </Text>
              <TouchableOpacity style={[style.buttonElevatedView, { margin: 7.5 }]} onPress={() => plusPress(item)}>
                <IonIcon name={"add"} size={20} color={colors.diffBlack} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      {
        cartItems.length === 0 &&
        <View style={style.noItemsTextWrapper}>
          <LottieView
            style={{ width: 250, height: 250 }}
            source={require('../assets/anim/empty.json')}
            autoPlay
            loop
          />
          <Text style={style.coffeeFlavourText}>No items added to your cart yet</Text>
        </View>
      }
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  noItemsTextWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartItemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 30,

    backgroundColor: 'white',
    borderRadius: 30,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  cartItemImageWrapper: {
    width: 95,
    height: 95,
    marginStart: 10,
    borderRadius: 25
  },
  coffeeInfoTextWrapper: {
    marginStart: 12
  },
  coffeeTypeText: {
    fontSize: 14,
    fontFamily: 'Sora-SemiBold',
    color: colors.diffBlack

  },
  coffeeFlavourText: {
    fontSize: 12,
    fontFamily: 'Sora-Regular',
  },
  coffeeItemPriceText: {
    fontSize: 20,
    fontFamily: 'Sora-SemiBold',
    color: colors.diffBlack,
    marginTop: 10
  },
  column: {
    justifyContent: 'space-between',
    padding: 5
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  normalRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonElevatedView: {
    alignItems: "center",
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 30,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  }
})

const mapStateToProps = (state) => ({
  cartItems: state.cartReducer.cartItems
})

const mapDispatchToProps = (dispatch) => ({
  add: (item) => dispatch(addQuantity(item)),
  subtract: (item) => dispatch(subtractQuantity(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartsTab);
