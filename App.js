import * as React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av';

class SoundButton1 extends React.Component {
   playSound1 = async () => {
     await Audio.Sound.createAsync(
       {
         uri:'http://soundbible.com/mp3/mallard_duck-Mike_Koenig-667013646.mp3'
       },
       {
         shouldPlay:true
       }
     )
  }

  render() {
    return (
      <TouchableOpacity 
      style={{
        backgroundColor:'green',
        borderRadius:5,
        borderWidth:5,
        justifyContent:'center',
        width:170,
        height:95,
        alignItems:'center',
        marginLeft:0,
        marginTop:-200
      }}
      onPress={this.playSound1}
      >
      <Text>
      Sound 1
      </Text>
      </TouchableOpacity>
    )
  }
}


class SoundButton2 extends React.Component {
   playCuckooClockSound = async () => {
     await Audio.Sound.createAsync(
       {
         uri:'http://www.ichime.com/s/5-5.mp3'
       },
       {
         shouldPlay:true
       }
     )
  }

  render() {
    return (
      <TouchableOpacity 
      style={{
        backgroundColor:'blue',
        borderRadius:5,
        borderWidth:5,
        justifyContent:'center',
        width:170,
        height:95,
        alignItems:'center',
        marginLeft:170,
        marginTop:30
      }}
      onPress={this.playCuckooClockSound}
      >
      <Text>
    Sound 2
      </Text>
      </TouchableOpacity>
    )
  }
}

class SoundButton3 extends React.Component {
   playLionRoarSound = async () => {
     await Audio.Sound.createAsync(
       {
         uri:'http://www.zar.co.za/sounds/lion.mp3'
       },
       {
         shouldPlay:true
       }
     )
  }

  render() {
    return (
      <TouchableOpacity 
      style={{
        backgroundColor:'purple',
        borderRadius:5,
        borderWidth:5,
        justifyContent:'center',
        width:170,
        height:95,
        alignItems:'center',
        marginLeft:0,
        marginTop:30
      }}
      onPress={this.playLionRoarSound}
      >
      <Text>
      Sound 3
      </Text>
      </TouchableOpacity>
    )
  }
}

class SoundButton4 extends React.Component {
   playSound3 = async () => {
     await Audio.Sound.createAsync(
       {
         uri:'http://soundbible.com/mp3/Bird_in_Rain-Mike_Koenig-441535833.mp3'
       },
       {
         shouldPlay:true
       }
     )
  }

  render() {
    return (
      <TouchableOpacity 
      style={{
        backgroundColor:'orange',
        borderRadius:5,
        borderWidth:5,
        justifyContent:'center',
        width:170,
        height:95,
        alignItems:'center',
        marginLeft:170,
        marginTop:30
      }}
      onPress={this.playSound3}
      >
      <Text>
      Sound 4
      </Text>
      </TouchableOpacity>
    )
  }
}

class SoundButton5 extends React.Component {
   playSound4 = async () => {
     await Audio.Sound.createAsync(
       {
         uri:'http://soundbible.com/mp3/cartoon-birds-2_daniel-simion.mp3'
       },
       {
         shouldPlay:true
       }
     )
  }

  render() {
    return (
      <TouchableOpacity 
      style={{
        backgroundColor:'pink',
        borderRadius:5,
        borderWidth:5,
        justifyContent:'center',
        width:170,
        height:95,
        alignItems:'center',
        marginLeft:0,
        marginTop:30
      }}
      onPress={this.playSound4}
      >
      <Text>
      Sound 5
      </Text>
      </TouchableOpacity>
    )
  }
}

class Stopbutton extends React.Component {
  
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          marginLeft: 90,
          marginTop: 30,
          borderWidth: 10,
          alignItems: 'center',
          justifyContent: 'center',
          width: 200,
          height: 100,
          borderRadius: 50,
        }}
        onPress={() => { 

          Audio.setIsEnabledAsync(false);
        
         }}>

        <Text style={{
        fontWeight: 'bold',
        fontSize: 25
      }}>
          Stop Sound
        </Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton1/>
        <SoundButton2/>
        <SoundButton3/>
        <SoundButton4/>
        <SoundButton5/>
        <Stopbutton/>
      </View>
    );
  }
}