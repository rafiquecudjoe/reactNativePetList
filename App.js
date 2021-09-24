import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,TextInput } from 'react-native';
import PetList from './petList';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.sarea}>
       
      <TextInput style={styles.search} placeholder="Search Here"/>

      </View>
      

      <PetList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:50,
    flex: 1,
    backgroundColor: '#E6E6E6',
 
  },
  search: {
   backgroundColor: 'white',
    marginHorizontal: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    paddingLeft:40

  },
  
});
