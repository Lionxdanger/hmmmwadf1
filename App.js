import * as React from 'react';
import { Text, View, Button,TouchableOpacity } from 'react-native';
import{Audio} from "expo-av"

class SoundButton extends React.Component {
   playSound = async () => {
await Audio.Sound.createAsync(

{uri:"https://vgmsite.com/soundtracks/fortnite-battle-royale-soundtrack/qdzznxov/31.%20New%20Main%20Menu.mp3"},
{shouldPlay: true}


);

  }

  render() {
    return (
      <TouchableOpacity style={{backgroundColor : "red",width:200, height:200,justifyContent:"center",borderWidth:3,borderColor:"yellow",alignItems:"center",alignSelf:"center",borderRadius:47}}>
<Text>Button</Text>




      </TouchableOpacity>

    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
      </View>
    );
  }
}


