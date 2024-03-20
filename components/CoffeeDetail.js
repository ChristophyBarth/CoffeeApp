import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import colors from './assets/colors/colors';
import Toast from 'react-native-toast-message';

import { connect } from 'react-redux';
import { addToFav, removeFromFav } from '../components/redux/actions/favActions'

const CoffeeDetail = ({ route, navigation, addToFavourites, removeFromFavourites, favItems }) => {
  const { item } = route.params;

  const numberOfWordsToShow = 34;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const truncatedDescription = item.description.split(' ').slice(0, numberOfWordsToShow).join(' ');
  const shouldTrimDescription = item.description.split(' ').length > numberOfWordsToShow;

  const options = ['S', 'M', 'L'];
  const [selectedSize, setSelectedSize] = useState(1);
  const [addedToFav, setaddedToFav] = useState(favItems.some(favItem => favItem.id === item.id));

  const handleOptionPress = (index) => {
    setSelectedSize(index);
  };

  const handleHeartPress = () => {
    setaddedToFav(!addedToFav);
    showToast();
    handleFav();
  };

  const handleFav = () => {
    !addedToFav ? addToFavourites(item) : removeFromFavourites(item)
  }

  const showToast = () => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: !addedToFav ? 'Coffee added to favourites' : 'Coffee removed from favourites',
      visibilityTime: 1500
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IonIcon name='chevron-back' size={24} color={colors.diffBlack} />
        </TouchableOpacity>

        <Text style={styles.appbarText}>Detail</Text>
        <TouchableOpacity onPress={handleHeartPress}>
          <IonIcon
            name={addedToFav ? 'heart' : 'heart-outline'}
            size={24} color={colors.diffBlack} />
        </TouchableOpacity>

      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={item.bigImage} />

        <View style={styles.infoWrapping}>
          <View>
            <Text style={styles.coffeeTypeText}>{item.type}</Text>
            <Text style={styles.flavourText}>with {item.flavour}</Text>
            <View style={styles.ratingWrapping}>
              <IonIcon name='star' size={20} color={colors.gold} />
              <Text style={styles.ratingText}> {item.rating}</Text>
              <Text style={styles.flavourText}>({item.ratingCount})</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
            <View style={styles.iconWrapper}>
              <IonIcon name='fast-food' color={colors.coffee} size={24} />
            </View>
            <View style={[styles.iconWrapper, { marginStart: 12 }]}>
              <FontAwesome6 name='bottle-water' color={colors.coffee} size={24} />
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={[styles.ratingText, { marginBottom: 12 }]}>Description</Text>

        <Text style={styles.descriptionText}>
          {showFullDescription ? item.description : truncatedDescription}
          {!showFullDescription && shouldTrimDescription && '...'}
          {!showFullDescription && shouldTrimDescription && (
            <Text style={{ color: colors.coffee, fontFamily: 'Sora-SemiBold' }} onPress={() => setShowFullDescription(true)}>
              Read More
            </Text>
          )}
        </Text>

        <Text style={[styles.ratingText, { marginBottom: 12 }]}>Size</Text>
        <View style={styles.sizeOptionsWrapper}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.sizeItemStyle,
                selectedSize === index && styles.selectedSize,
              ]}
              onPress={() => handleOptionPress(index)}
            >
              <Text style={{
                color: selectedSize === index ? colors.coffee : colors.diffBlack
              }}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      <View style={styles.bottomView}>
        <View style={styles.buyWrapper}>
          <View>
            <Text style={styles.priceText}>Price</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Checkout', { item: item })}>
            <Text style={styles.buyNowText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  appbarText: {
    fontSize: 18,
    fontFamily: 'Sora-SemiBold',
    color: colors.diffBlack
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 16,
    marginVertical: 20,
  },
  coffeeTypeText: {
    fontSize: 20,
    fontFamily: 'Sora-SemiBold',
    color: colors.diffBlack,
    marginBottom: 5
  },
  flavourText: {
    fontSize: 12,
    fontFamily: 'Sora-Regular',
    color: colors.ash6,
  },
  ratingText: {
    fontSize: 16,
    fontFamily: 'Sora-SemiBold',
    color: colors.diffBlack
  },
  ratingWrapping: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  iconWrapper: {
    width: 44,
    height: 44,
    backgroundColor: colors.ash7,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoWrapping: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    marginVertical: 20,
  },
  descriptionText: {
    fontSize: 14,
    fontFamily: 'Sora-Regular',
    color: colors.ash6,
    marginBottom: 20
  },
  readMoreText: {
    fontSize: 14,
    fontFamily: 'Sora-SemiBold',
    color: colors.coffee
  },
  sizeOptionsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sizeItemStyle: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 12,
    marginBottom: 15
  },
  selectedSize: {
    backgroundColor: '#FFF5EE',
    borderColor: colors.coffee,
  },
  bottomView: {
    height: 100,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: '#fff',
    marginHorizontal: -20,
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
    justifyContent: 'center',
  },
  priceText: {
    fontSize: 14,
    fontFamily: 'Sora-Regular',
    color: colors.ash6,
  },
  price: {
    fontSize: 18,
    fontFamily: 'Sora-SemiBold',
    color: colors.coffee
  },
  buyWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center'
  },
  buyNowText: {
    fontSize: 16,
    fontFamily: 'Sora-SemiBold',
    color: colors.white,
    backgroundColor: colors.coffee,
    height: 62,
    paddingHorizontal: 90,
    borderRadius: 16,
    textAlignVertical: 'center'
  },
});

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (item) => dispatch(addToFav(item)),
  removeFromFavourites: (item) => dispatch(removeFromFav(item))
})

const mapStateToProps = (state) => ({
  favItems: state.favReducer.favItems,
})

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeDetail);
