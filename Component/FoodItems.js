import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function FoodItems({name, image, price}) {
  return (
    <View style={{flex: 1}}>
        <Image 
            style={styles.image}
            source={{uri: image}}
        />
        <View style={{alignItems: "center"}}>
            <Text style={{fontWeight: "bold"}}>{name}</Text>
            <Text>{price}</Text>
        </View>
    </View>
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
