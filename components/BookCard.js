import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import useGlobalStyles from '../contexts/useGlobalStyles';

const Bookcard = ({ item, index }) => {
  const navigation = useNavigation();
const gstyle=useGlobalStyles();
 return (
    <View style={gstyle.photoContainer}>
      <Image source={{ uri: item.img_m }} style={gstyle.photo} />
      <Text style={gstyle.writerText} >{item.writer}</Text> 
      <Text style={gstyle.titleText}>{item.title}</Text>
      <Text style={gstyle.editorText} >{item.publisher}</Text>      
      <Text style={gstyle.editorText} >{item.published}</Text>      
      <Text style={gstyle.editorText} >{item.isbn}</Text>      
    </View>
  );
};
export default Bookcard;
