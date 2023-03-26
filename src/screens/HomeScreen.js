import React, { useState/*this is a Hook*/  } from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation/*Navigation prop to access the functionality of navigation*/ }) => {

  //Data Array
  const imageData = [
    {
      "id": "1",
      "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
      "details": "Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    },
    {
      "id": "2",
      "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg",
      "details": "Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    },
    {
      "id": "3",
      "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg",
      "details": "Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    },
    {
      "id": "4",
      "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg",
      "details": "Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    },
    {
      "id": "5",
      "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg",
      "details": "Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    },
    {
      "id": "6",
      "photo": "https:\/\/images.pexels.com\/photos\/415829\/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
      "details": "Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    },
    {
      "id": "7",
      "photo": "https:\/\/images.unsplash.com\/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f",
      "details": "Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    },
    {
      "id": "8",
      "photo": "https:\/\/images.pexels.com\/photos\/415829\/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
      "details": "Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    },
    {
      "id": "9",
      "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/97.jpg",
      "details": "Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    },
    {
      "id": "10",
      "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/26.jpg",
      "details": "Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    }
  ];
  const [data, setData] = useState(imageData);//We will be using a state to access data as State upon cchange in 
  //its data re-renders the component on screen so our app is dynamically updated.
  //this function will delete an image from the data array
  const removeImage = (id) => {
    setData(imageData.filter((ele) => ele.id !== id));//it will iterate and check every object's data and compare it with 
    //provided Id param, if matched it will filter it out hence deleting it
  }
  return (
    //parent view
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}> 
      <FlatList /*FlatList is like a grid view*/
        data={data}//passing data from state not directly as we have to change it on runtime
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Second', {

            params: { image: item, removeImage: removeImage, details: item.details },
          })}>
            <Image source={{ uri: item.photo }} style={{ width: 100, height: 100 }} />
          </TouchableOpacity>
        )}
        numColumns={4}
        keyExtractor={item => item.id} />
    </View>
  );
};
export default (HomeScreen) 