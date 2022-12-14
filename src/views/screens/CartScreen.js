import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import readers from '../../consts/ereader';
import { PrimaryButton } from '../components/Button';

import readers2 from '../../consts/ereader2';
import { useState } from 'react';




const CartScreen = ({ navigation }) => {

  
  const [quatity, setquatity] = useState(1);
  const [priceT, setpriceT] = useState(5);


  const increase = () => {
    setquatity(quatity + 1)
  }

  const decrease = () => {
    setquatity(quatity - 1)
  }


  const CartCard = ({ item }) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{ height: 80, width: 80 }} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
          <Text style={{ fontSize: 13, color: COLORS.grey }}>
            {item.ingredients}
          </Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>${item.price} </Text>
          
        </View>
        <View style={{ marginRight: 20, alignItems: 'center' }}>

          <View style={style.actionBtn}>
            <TouchableOpacity
              onPress={decrease}>
              <Icon name="remove" size={25} color={COLORS.white} />
            </TouchableOpacity>
            <Text style={{ fontWeight: 'bold', fontSize: 18, backgroundColor: 'white', paddingHorizontal: 3 }}>{quatity}</Text>

            <TouchableOpacity
              onPress={increase}>
              <Icon name="add" size={25} color={COLORS.white} />
            </TouchableOpacity>



          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Gi??? h??ng</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={readers2}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        
        
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                T???ng c???ng:
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>$ {priceT}</Text>
            </View>
            <View style={{ marginHorizontal: 30 }}>
              <PrimaryButton title="Thanh to??n"
                onPress={navigation.goBack} />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CartScreen;
