import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MylibCard = ({ item, index, deletePhoto }) => {
  const navigation = useNavigation();

  const navigateToBook = () => {
    navigation.navigate('Book', { bookId: item.id }); // Navigate to Book screen with bookId
  };

  const navigateToWriter = () => {
    navigation.navigate('Writer', { writername:item.writername, writerId: item.writerId }); // Navigate to Writer screen with writerId
  };

  const navigateToPublisher = () => {
    navigation.navigate('Publisher', { Publishername:item.Publishername,PublisherId: item.PublisherId }); // Navigate to Publisher screen with PublisherId
  };

  const navigateToCat = () => {
    navigation.navigate('Cat', { catname:item.catname,cat: item.cat }); // Navigate to Publisher screen with PublisherId
  };

  return (
    <View style={styles.photoContainer}>
      <Image source={{ uri: item.uri }} style={styles.photo} />
      <Text style={styles.writerText} onPress={navigateToWriter}>{item.writername}</Text>
      <Text style={styles.titleText} onPress={navigateToBook}>{item.title}</Text>
      <Text style={styles.editorText} onPress={navigateToPublisher}>{item.Publishername}</Text>
      <Text style={styles.catText} onPress={navigateToCat}>{item.catname}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={() => deletePhoto(index)}>
        <Ionicons style={styles.deleteButtonText} name="trash" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};
export default MylibCard;
