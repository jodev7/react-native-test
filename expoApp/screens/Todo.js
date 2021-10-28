import React from 'react';
import { StyleSheet, Text, SafeAreaView, ImageBackground } from 'react-native';
import Header from '../components/Header';

export default function Todo() {
  return (
    <SafeAreaView style={styles.container}>
    <Header/>
    <ImageBackground source={require('../assets/adaptive-icon.png')} style={styles.bg}>

    </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bg: {
    flex: 1,

  }
})
//dfdf