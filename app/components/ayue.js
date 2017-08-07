import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet } from 'react-native';
import Button from 'apsl-react-native-button';
import {playMusic} from '../helper/playsound';

export default class AYue extends Component {
  render() {
    return (
      <Image source={require('../resources/img/ayue.jpg')} style={styles.image} resizeMode='cover'>
          <Button style={styles.button} onPress={() => playMusic('ayue1')}>我觉得不行</Button>
          <Button style={styles.button} onPress={() => playMusic('ayue2')}>我觉得普通</Button>
          <Button style={styles.button} onPress={() => playMusic('ayue3')}>糖糖，你先记</Button>
          <Button style={styles.button} onPress={() => playMusic('ayue4')}>他好像还好，你好像也可以</Button>
          <Button style={styles.button} onPress={() => playMusic('ayue5')}>对对对对对</Button>
          <Button style={styles.button} onPress={() => playMusic('ayue6')}>我标准是比较严格一点</Button>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  image: { flex:1, width: null, height: null },
  container: {flexDirection: 'column'},
  button: {flex:1, width: null, height: null, borderColor: '#FFDF00', backgroundColor: '#FFDF00', margin:30, borderRadius: 5}
});

