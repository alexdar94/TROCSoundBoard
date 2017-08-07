import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, View, Alert } from 'react-native';
import Button from 'apsl-react-native-button';
import Sound from 'react-native-sound';

var sound;

export default class MCHotDog extends Component {
  _playMusic(fileName) {
  	Sound.setCategory('Playback');
  	if(sound!=null)sound.stop();
    sound = new Sound(fileName+'.mp3', Sound.MAIN_BUNDLE, (e) => {
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
    	    <Button style={styles.button} onPress={() => this._playMusic('mchotdog1')}>我觉得其实可以</Button>
	      	<Button style={styles.button} onPress={() => this._playMusic('mchotdog2')}>真的吗？</Button>
	      	<Button style={styles.button} onPress={() => this._playMusic('mchotdog3')}>却得到一个那样的反馈</Button>
	      	<Button style={styles.button} onPress={() => this._playMusic('mchotdog4')}>这样就有点尴尬</Button>
	      	<Button style={styles.button} onPress={() => this._playMusic('mchotdog5')}>阿岳真的很严格</Button>
	      	<Button style={styles.button} onPress={() => this._playMusic('mchotdog6')}>糖糖帮我们记着</Button>
	      	<Button style={styles.button} onPress={() => this._playMusic('mchotdog7')}>英文真的稍嫌多了一些</Button>
	    </Image>
    );
  }
}

const styles = StyleSheet.create({
  image: { flex:1, width: null, height: null },
  container: {flexDirection: 'column'},
  button: {flex:1, width: null, height: null, borderColor: '#FFDF00', backgroundColor: '#FFDF00', margin:20, borderRadius: 5}
});