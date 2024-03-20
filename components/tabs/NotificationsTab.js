import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NotificationTab = () => {

  return (
    <View style={style.container}>
      <LottieView
        style={{width: 250, height: 250}}
        source={require('../assets/anim/empty.json')}
        autoPlay
        loop
      />
      <Text style={style.noNotificationText}>No notifications yet</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noNotificationText: {
    fontSize: 12,
    fontFamily: 'Sora-Regular',
  }
})

export default NotificationTab;
