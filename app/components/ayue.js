import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet } from 'react-native';

export default class Bananas extends Component {
  render() {
    return (
      <Image source={require('../resources/img/ayue.jpg')} style={styles.image} resizeMode='cover'/>
    );
  }
}

const styles = StyleSheet.create({
  image: { flex:1, width: null, height: null }
});