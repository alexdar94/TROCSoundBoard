import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet } from 'react-native';
import Button from 'apsl-react-native-button';
import {playMusic} from '../helper/playsound';

export default class AYue extends Component {
  render() {
    return (
      <Image source={require('../resources/img/hiphopman.jpg')} style={styles.image} resizeMode='cover'>
    	    <Button style={styles.button} onPress={() => playMusic('hiphopman1')}>我说嘻哈,你们说侠</Button>
	      	<Button style={styles.button} onPress={() => playMusic('hiphopman2')}>这首歌作为约定</Button>
	      	<Button style={styles.button} onPress={() => playMusic('hiphopman3')}>对对对</Button>
	      	<Button style={styles.button} onPress={() => playMusic('hiphopman4')}>美国见</Button>
	      	<Button style={styles.button} onPress={() => playMusic('hiphopman5')}>Freestyle 没有压力</Button>
	      	<Button style={styles.button} onPress={() => playMusic('hiphopman6')}>我就是 hiphopman</Button>
	    </Image>
    );
  }
}

const styles = StyleSheet.create({
  image: { flex:1, width: null, height: null },
  container: {flexDirection: 'column'},
  button: {flex:1, width: null, height: null, borderColor: '#FFDF00', backgroundColor: '#FFDF00', margin:30, borderRadius: 5}
});