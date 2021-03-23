import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import ProfileItem from '../Component/ProfileItem'
export default function Profile() {
      return (
      <View style={styles.container}>
       <View>
          <Image
              style={styles.image}
              source={{ uri: require('../assets/profile.jpg') }}
          />
          
       </View>
        <ProfileItem name="Username" value="Wajiha Niazi"/>
        <ProfileItem name="Gmail" value="wajihaniazi@gmail.com"/>
        <ProfileItem name="Gender" value="Female"/>
        <ProfileItem name="Mobile" value="+93 700 409 295"/>
        <ProfileItem name="Address" value="Herat/Afghanistan"/>
      </View>
    );
    
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },

    image: {
        height: 200,
        backgroundColor: '#fff'
    },
  });