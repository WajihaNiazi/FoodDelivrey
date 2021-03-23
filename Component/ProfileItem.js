import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Profiletem({name, value}) {
      return (
       <View style={styles.info}>
          <View>
            <Text style={styles.txt}>{name}</Text>
            <Text>{value}</Text>
          </View>
        </View>
    );
    
  }
  
  const styles = StyleSheet.create({
    info: {
      margin: 8
    },
    txt: {
      fontWeight: "bold",
      marginTop: 8,
      fontSize: 16
    }
  });