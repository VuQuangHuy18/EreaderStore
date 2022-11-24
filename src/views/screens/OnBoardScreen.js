import React, { useRef,useEffect, useState } from "react";
import {Text, StyleSheet, View, Image,Animated} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import {PrimaryButton} from '../components/Button';

const OnBoardScreen = ({navigation}) => {


  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(fadeIn, []);



  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <Animated.View style={{height: 400,opacity:fadeAnim}}>
        <Image
          style={{
            width: '100%',
            resizeMode: 'contain',
            top: -150,
          }}
          source={require('../../assets/as3nen.png')}
        />
      </Animated.View>
      <View style={style.textContainer}>
        <View>
          <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center',marginTop:-10,color:"blue"}}>
              Ereader Store
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
            We will help you choose the most suitable ereader
          </Text>
        </View>
        <View style={style.indicatorContainer}>
          
          <View style={style.currentIndicator} />
          <View style={style.indicator} />
          <View style={style.indicator} />
          <View style={style.indicator} />
        </View>
        <PrimaryButton
          onPress={() => navigation.navigate('Home')}
          title="Get Started"
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
});

export default OnBoardScreen;
