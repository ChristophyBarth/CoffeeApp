import React, { useState } from 'react';
import { Button, View, Text, StatusBar, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import colors from '../assets/colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

import LinearGradient from 'react-native-linear-gradient';

import coffeeTypesData from '../assets/data/coffeeTypesData'
import coffeeData from '../assets/data/coffeeData'
import { addToCart } from '../redux/actions/cartActions';
import { connect } from 'react-redux';

const HomeTab = ({ navigation, addItemToCart }) => {
  const [selectedType, setSelectedType] = useState(coffeeTypesData[0]?.id || null);

  const renderCoffeeTypesItem = ({ item }) => {
    const handleCoffeeTypePress = () => {
      // Toggle the selection state
      setSelectedType(selectedType === item.id ? null : item.id);
    };

    return (
      <TouchableOpacity
        onPress={handleCoffeeTypePress}
        style={[
          styles.coffeeTypeItemWrapper,
          {
            marginLeft: item.id === '1' ? 15 : 0,
          },
        ]}
      >
        <Text style={[styles.coffeeTypeItemText, {
          backgroundColor: item.id === selectedType ? colors.coffee : colors.white,
          color: item.id === selectedType ? colors.white : colors.turquoise
        }]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    )
  }

  const renderFlavoursItem = ({ item, index }) => {
    // const width = Dimensions.get('window').width - 20;
    // const itemWidth = (width / 2);

    const addClick = () => {
      addItemToCart({
        id: item.id,
        item: item,
        quantity: 1
      })
    }

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('CoffeeDetail', { item: item })
        }}
      >
        <View style={styles.flavourItemWrapper}>
          <Image style={styles.flavourItemImage} source={item.image}></Image>

          <Text style={styles.flavourItemTitle}>{item.type}</Text>
          <Text style={styles.flavourItemFlavour}>with {item.flavour}</Text>

          <View style={styles.flavourItemBottomWrapper}>
            <Text style={styles.flavourItemPrice}>${item.price}</Text>
            <TouchableOpacity onPress={addClick}>
              <View style={styles.addButton}>
                <IonIcon name='add' size={16} color={colors.white} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.flavourItemOverlayView}>
            <View style={styles.ratingTextWrapper}>
              <Text style={styles.ratingText}><IonIcon name='star' color={colors.gold} /> {item.rating}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#131313', '#313131']}  // Set your gradient colors
        style={styles.appBar}>

      </LinearGradient>

      <SafeAreaView style={{ position: 'absolute' }}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={styles.titleWrapper}>
                <View>
                  <Text style={styles.title1}>Location</Text>

                  <View style={styles.row}>
                    <Text style={styles.title2}>Abuja, Nigeria</Text>
                    <IonIcon name='chevron-down' size={20} color={colors.white} style={{ marginTop: 4, marginStart: 4 }} />
                  </View>
                </View>

                <Image style={styles.imageWrapper} source={{ uri: "https://i.imgur.com/gdYUkVe.jpeg" }} />
              </View>

              <View style={styles.searchBar}>
                <View style={styles.searchTextWrapper}>
                  <IonIcon name='search' size={20} style={styles.searchIcon} color={colors.white} />
                  <TextInput

                    color={colors.white}
                    placeholder='Search coffee'
                    placeholderTextColor={colors.ash5} />
                </View>

                <View style={styles.searchSettingsWrapper}>
                  <Feather name="settings" size={24} color={colors.white} />
                </View>
              </View>

              <View style={styles.promoWrapper}>
                <Image style={styles.promoImage} source={require('../assets/images/promo.png')} />

                <View style={styles.overlayView}>
                  <View style={styles.promoTextWrapper}>
                    <Text style={styles.promoTag}>Promo</Text>

                    <View>
                      <View style={[styles.overlayViewWithBackground, {
                        width: '100%'
                      }]} />
                      <Text style={styles.promoText}>Buy one get</Text>
                    </View>

                    <View>
                      <View style={[styles.overlayViewWithBackground, {
                        width: '77%'
                      }]} />
                      <Text style={[styles.promoText,]}>one FREE</Text>
                    </View>
                  </View>
                </View>
              </View>

              <FlatList
                data={coffeeTypesData}
                renderItem={renderCoffeeTypesItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </>
          }

          data={coffeeData}
          renderItem={renderFlavoursItem}
          keyExtractor={(item) => item.id}
          //scrollEnabled={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  appBar: {
    height: 280
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  title1: {
    fontSize: 12,
    fontFamily: 'Sora-Regular',
    color: colors.ash2
  },
  title2: {
    fontSize: 14,
    fontFamily: 'Sora-SemiBold',
    color: colors.ash3
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    width: 44,
    height: 44,
    borderRadius: 14
  },
  searchTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    backgroundColor: colors.ash4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 30,
    marginHorizontal: 20,
    borderRadius: 16,
    height: 52
  },
  textInput: {
    fontSize: 14,
    fontFamily: 'Sora-Regular',
    color: colors.ash5
  },
  searchIcon: {
    paddingVertical: 15,
    paddingStart: 15,
    marginEnd: 10
  },
  searchSettingsWrapper: {
    width: 44,
    height: 44,
    backgroundColor: colors.coffee,
    marginEnd: 5,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  promoWrapper: {
    marginHorizontal: 20,
    height: 140,
  },
  promoImage: {
    borderRadius: 16,
    width: '100%',
    resizeMode: 'cover'
  },
  overlayView: {
    position: 'absolute',
  },
  promoTag: {
    width: 60,
    height: 26,
    borderRadius: 8,
    backgroundColor: colors.orange,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Sora-SemiBold',
    color: colors.white,
  },
  promoText: {
    fontSize: 32,
    fontFamily: 'Sora-SemiBold',
    color: colors.white,
  },
  overlayViewWithBackground: {
    position: 'absolute',
    top: 21,
    height: 25,
    backgroundColor: colors.black
  },
  promoTextWrapper: {
    marginVertical: 13,
    marginStart: 24
  },
  coffeeTypeItemWrapper: {
    marginVertical: 20,
  },
  coffeeTypeItemText: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 12,
    fontSize: 14,
    fontFamily: 'Sora-Regular',
  },
  flavourItemOverlayView: {
    position: 'absolute'
  },
  flavourItemTitle: {
    color: '#2F2D2C',
    marginStart: 12,
    fontSize: 16,
    fontFamily: 'Sora-SemiBold',
  },
  flavourItemFlavour: {
    color: '#9B9B9B',
    fontSize: 12,
    marginStart: 12,
    fontFamily: 'Sora-Regular',
  },
  flavourItemBottomWrapper: {
    marginHorizontal: 12,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flavourItemPrice: {
    color: colors.turquoise,
    fontSize: 18,
    fontFamily: 'Sora-SemiBold',
  },
  addButton: {
    height: 32,
    width: 32,
    borderRadius: 10,
    backgroundColor: colors.coffee,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flavourItemImage: {
    height: 132,
    margin: 4,
    borderRadius: 16,
  },
  flavourItemWrapper: {
    marginVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 16,
    marginHorizontal: 20
  },
  ratingText: {
    fontSize: 10,
    fontFamily: 'Sora-SemiBold',
    color: colors.white
  },
  ratingTextWrapper: {
    backgroundColor: colors.black + '50',
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    height: 25,
    width: 51
  }
})

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addToCart(item))
})

export default connect(null, mapDispatchToProps)(HomeTab);

