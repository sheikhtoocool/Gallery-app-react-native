import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList, Image,TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation, route }) => {

  const imageData=[
    {
        "id": "1",
        "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
        "details":"Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    },
    {
        "id": "2",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg",
        "details":"Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    },
    {
        "id": "3",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg",
        "details":"Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    },
    {
        "id": "4",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg",
        "details":"Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    },
    {
        "id": "5",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg",
        "details":"Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    },
    {
        "id": "6",
        "photo": "https:\/\/images.pexels.com\/photos\/415829\/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
        "details":"Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    },
    {
        "id": "7",
        "photo": "https:\/\/images.unsplash.com\/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f",
        "details":"Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    },
    {
        "id": "8",
        "photo": "https:\/\/images.pexels.com\/photos\/415829\/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
        "details":"Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    },
    {
        "id": "9",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/97.jpg",
        "details":"Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    },
    {
        "id": "10",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/26.jpg",
        "details":"Sample details\n Camera is 32 Megapixel\n Captured on 19-3-2023"
    }
  ]

  const [data, setData] = useState(imageData);
  const removeImage = (id) => {
setData(imageData.filter((ele) => ele.id !==id));
  }
    return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <FlatList
            data={data}
            renderItem={({ item,index }) =>(
              <TouchableOpacity onPress={() => navigation.navigate('Second',{
        
                params: { image: item, removeImage: removeImage,details:item.details },
              })}>
              <Image source={{ uri: item.photo }} style={{ width: 100, height: 100 }} />
            </TouchableOpacity>
    )}
            numColumns={4}
            keyExtractor={item => item.id} />
    </View>
  );
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

export default(HomeScreen) 