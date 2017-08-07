import Sound from 'react-native-sound';

var sound;

export const playMusic = (fileName)=>{
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

// exports.playMusic = function(fileName) {
//   	Sound.setCategory('Playback');
//   	if(sound!=null)sound.stop();
//     sound = new Sound(fileName+'.mp3', Sound.MAIN_BUNDLE, (e) => {
//       if (e) {
//         console.log('error', e);
//       } else {
//       	sound.play(() => {
// 	      sound.release();
// 	    });
//       }
//     });
// }