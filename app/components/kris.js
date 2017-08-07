import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet } from 'react-native';
import Button from 'apsl-react-native-button';
import {playMusic} from '../helper/playsound';

export default class AYue extends Component {
  render() {
    return (
      <Image source={require('../resources/img/kris.jpg')} style={styles.image} resizeMode='cover'>
    	    <Button style={styles.button} onPress={() => playMusic('kris1')}>谢谢</Button>
	      	<Button style={styles.button} onPress={() => playMusic('kris2')}>不好意识，我真的是不服气</Button>
	      	<Button style={styles.button} onPress={() => playMusic('kris3')}>你有freestyle吗？</Button>
	      	<Button style={styles.button} onPress={() => playMusic('kris4')}>节拍</Button>
	      	<Button style={styles.button} onPress={() => playMusic('kris5')}>节拍？！</Button>
	      	<Button style={styles.button} onPress={() => playMusic('kris6')}>一跟三，二跟四</Button>
	      	<Button style={styles.button} onPress={() => playMusic('kris7')}>一开口就知道老江湖了</Button>
	      	<Button style={styles.button} onPress={() => playMusic('kris8')}>你看这个面它又长又宽</Button>
	    </Image>
    );
  }
}

const styles = StyleSheet.create({
  image: { flex:1, width: null, height: null },
  container: {flexDirection: 'column'},
  button: {flex:1, width: null, height: null, borderColor: '#FFDF00', backgroundColor: '#FFDF00', margin:30, borderRadius: 5}
});