import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import colors from '../assets/colors/colors';
import IonIcon from 'react-native-vector-icons/Ionicons'
import { removeFromFav } from '../redux/actions/favActions';
import LottieView from 'lottie-react-native';

const FavouritesTab = ({ favouriteItems, removeFromFavourites }) => {
  const handleHeartPress = (item) => {
    removeFromFavourites(item)
  }

  return (
    <View style={style.container}>
      <FlatList
        style={{ marginTop: 10 }}
        data={favouriteItems}
        renderItem={({ item }) => (
          <View style={style.row2}>
            <View style={style.row}>
              <Image source={item.image} style={style.favItemImageWrapper} />
              <View style={style.coffeeInfoTextWrapper}>
                <Text style={style.coffeeTypeText}>{item.type}</Text>
                <Text style={style.coffeeFlavourText}>with {item.flavour}</Text>
              </View>
            </View>

            <TouchableOpacity style={{ padding: 5 }} onPress={() => handleHeartPress(item)}>
              <IonIcon name={"heart"} size={40} color={colors.red} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      {
        favouriteItems.length === 0 &&
        <View style={style.noItemsTextWrapper}>
          <LottieView
            style={{ width: 250, height: 250 }}
            source={require('../assets/anim/empty.json')}
            autoPlay
            loop
          />
          <Text style={style.coffeeFlavourText}>No items added to favourties yet</Text>
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
  favItemImageWrapper: {
    width: 54,
    height: 54,
    borderRadius: 12
  },
  favItemStyle: {
    flex: 1
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
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.ash3,
    marginHorizontal: 20,
    marginVertical: 7.5,
    borderRadius: 10
  }
})

const mapStateToProps = (state) => ({
  favouriteItems: state.favReducer.favItems,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFavourites: (item) => dispatch(removeFromFav(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesTab);