import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, View, Alert } from 'react-native';
import Button from 'apsl-react-native-button';
import Sound from 'react-native-sound';

var sound;

export default class Bananas extends Component {
  _playMusic(number) {
  	Sound.setCategory('Playback');
  	if(sound!=null)sound.stop();
    sound = new Sound('32.mp3', Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('error', e);
      } else {
      	sound.play(() => {
	      sound.release();
	    });
      }
    });
  }

  render() {
    return (
    	<Image source={require('../resources/img/mchotdog.jpg')} style={styles.image} resizeMode='cover'>
    	  <View style={{width:null, height:10}}/>
	      <View style={styles.container}>
	      	<Button style={styles.button} onPress={() => this._playMusic(3)}>Hello!</Button>
	      	<Button style={styles.button} onPress={() => this._playMusic(3)}>Hello!</Button>
	      </View>
	      <View style={styles.container}>
	      	<Button style={styles.button} onPress={() => this._playMusic(3)}>Hello!</Button>
	      	<Button style={styles.button} onPress={() => this._playMusic(3)}>Hello!</Button>
	      </View>
	    </Image>
    );
  }
}

const styles = StyleSheet.create({
  image: { flex:1, width: null, height: null },
  container: {flexDirection: 'row'},
  button: {flex:1, width: null, height: 44, borderColor: '#FFDF00', backgroundColor: '#FFDF00', margin:12, borderRadius: 20}
});