import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Share } from 'react-native';
const width = Dimensions.get('window').width;//full width
const height = Dimensions.get('window').height; //full 
//we are using async function here as we want to check for the outcome of this function which is either 
//image sent or not sent
async function openWhatsapp(
  phone,
  photoUrl,
) {
  
  try {
    await Share.share({//Share Function is accessed using Share Component
      title: 'Image',
      message: 'Shared By Haris Sheikh\n' + photoUrl,
      //url: photoUrl,
      subject: '',
      social: 'whatsapp'
    });

  } catch (err) {
    console.log('Please install WhatsApp.');
  }
}

const SecondScreen = (props) => {
  //using props, we can de struct its objects and access the params passed in previous screen
  const { photo, id } = props.navigation.state.params.params.image;
  const val = props.navigation.state.params.params.details;
  const removeImage = props.navigation.state.params.params.removeImage;//

  return (<View style={{ alignItems: "center", flex: 1, padding: 20 }}>
    <Image source={{ uri: photo }} style={{ width: width, height: height / 2 }} />
    <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Details</Text>
    <Text style={{ fontSize: 20 }}>{val}</Text>

    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity style={{ padding: 20, backgroundColor: 'green' }}
      //Here we will call the share function
        onPress={() => openWhatsapp('+923414742424', photo)}><Text style={{ color: 'white' }}>{'Share on Wtsap'}</Text></TouchableOpacity>
      <TouchableOpacity style={{ padding: 20, backgroundColor: 'red' }} onPress={() => {
        //Here we used removeImage that is accessed using params of props,
        removeImage(id)
        props.navigation.navigate('Home')
      }}><Text style={{ color: 'white' }}>{'Delete Image'}</Text></TouchableOpacity>
    </View>
  </View>);

};

export default (SecondScreen) 