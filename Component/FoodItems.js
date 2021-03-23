import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import {useNavigation} from '@react-navigation/native'

export default function FoodItems({name, image, price, detail}) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={{flex: 1}}
      onPress={()=> navigation.navigate("Detail", {name, image, price, detail})}>
        <Image 
            style={styles.image}
            source={{uri: image}}
        />
        <View style={{alignItems: "center"}}>
            <Text style={{fontWeight: "bold"}}>{name}</Text>
            <Text>{price}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
      height: 100,
      width: 100,
      borderTopLeftRadius: 15,
      borderBottomRightRadius: 15
  }
})
