import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function FavoriteItems({name, image, price}) {
  return (
    <TouchableOpacity style={styles.container}>
        <Image
            style={styles.image}
            source={{uri: image}}
        />
        <View style={styles.content}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
        <MaterialCommunityIcons 
            style={{alignSelf: "center"}}
            name="delete"
            size={40}
        />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5,
    borderBottomColor: "#548841",
    borderBottomWidth: 0.1
},
 image: {
     height: 120,
     width: 120,
     margin: 5
 },
 content: {
     flex: 1,
     justifyContent: "center"
     ,marginLeft: 5
 },
 name: {
     color: "green",
     fontSize: 16
 },
 price:{
     color: "red",
     fontSize: 14
 }
})
