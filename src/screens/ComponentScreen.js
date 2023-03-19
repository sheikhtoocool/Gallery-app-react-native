import React from 'react';
import { StyleSheet, Text, View, FlatList, Image,TouchableOpacity, Linking, Share } from 'react-native';

 async function openWhatsapp(
  phone,
  photoUrl,
) {
  try {
      await Share.share({
        title: 'Image',
        message: 'Shared By Haris Sheikh\n'+photoUrl,
        url: photoUrl,
        subject: '',
        social: 'whatsapp'
      });
    
  } catch (err) {
    console.log({ title: 'installApplication' });
  }
}

const SecondScreen = (props) => {
  const {photo, id} = props.navigation.state.params.params.image;
  const val=props.navigation.state.params.params.details;
  const removeImage =props.navigation.state.params.params.removeImage;

  return  <View style={{ justifyContent: "center", alignItems: "center", flex: 1, }}>
          <Image source={{ uri: photo }} style={{ width: 300, height: 300 }} />
          <Text>{val}</Text>
   <View style={{flexDirection: 'row'}}>
    <TouchableOpacity style={{padding: 20, backgroundColor:'grey'}} 
    onPress={()=> openWhatsapp('+923414742424', photo) }><Text style={{color: 'white'}}>{'Share on Wtsap'}</Text></TouchableOpacity>
    <TouchableOpacity style={{padding: 20, backgroundColor:'grey'}} onPress={()=> {removeImage(id)
    props.navigation.navigate('Home')} }><Text style={{color: 'white'}}>{'Delete Image'}</Text></TouchableOpacity>
    </View>
    </View>
  
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 100,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flex: 1,
      borderRadius: 5,
    },
    title: {
      fontSize: 32,
    },
});

export default(SecondScreen) 