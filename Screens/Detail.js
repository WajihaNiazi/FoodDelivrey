import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

import {useRoute} from '@react-navigation/native'
import {Rating} from 'react-native-ratings'


export default function Detail() {
 const {name, image, price, detail} = useRoute().params
  return (
    <ScrollView style={{flex: 1}}>
        <Image 
            style={{height: 190}}
            source={{uri: image}}
        />
        <View style={styles.content}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>Price: {price}</Text>
            <Rating 
                showRating
                imageSize={30}
            />
        </View>
        <View style={{margin: 8}}>
            <Text style={styles.title}>Introduction</Text>
            <Text>{detail}</Text>
        </View>
        <Button 
            color="#777"
            title="Added to Favorite"
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    textAlign: "center"
  }
  , title: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 18,
      marginTop: 8
  }
})
