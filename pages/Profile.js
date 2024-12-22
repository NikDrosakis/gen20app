import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button,Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import G from '../G.json'; 
import { Picker } from '@react-native-picker/picker';
import Footer from '../components/Footer';
import Imagine from '../contexts/Imagine';
import API_ENDPOINTS from '../utils/apiConfig'; 
import useGlobalStyles from '../contexts/useGlobalStyles';

const Profile = ({ route, navigation}) => {
const gstyle=useGlobalStyles();
const { gsid } = route.params || {};
console.log("gsid:"+gsid)
  const [userData, setuserData] = useState({
    uri:'',img:'',title: '',name:'',mail:'',firstname:'',lastname:'',content:'',lang:'',
  });
const { selectPhoto, takePhoto } = Imagine(gsid, setuserData,'user');

const handleChange = (field, value) => {
  setuserData({
    ...userData,
    [field]: value,
  });

  // POST request to update user details dynamically
  fetch(API_ENDPOINTS.EDIT('user'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      key: field,
      value: value,
      id: gsid,
    }),
  })
  .then(response => {
    console.log('Book details updated successfully:', response.data);
  })
  .catch(error => {
    console.error('Error updating book details:', error);
  });
};
 return (
    <ScrollView contentContainerStyle={gstyle.container}>      
     <View style={gstyle.imageContainer}>
        <Image
          source={{ uri: userData.uri }}
          style={gstyle.featureImage}
        />
        <View style={gstyle.buttonContainer}>
          <TouchableOpacity style={gstyle.menuButton} onPress={selectPhoto}>
            <Ionicons name="images" size={30} color={gstyle.colorButton} />
          </TouchableOpacity>
          <TouchableOpacity style={gstyle.menuButton} onPress={takePhoto}>
            <Ionicons name="camera" size={30} color={gstyle.colorButton} />
          </TouchableOpacity>
        </View>
        </View>
        <View style={gstyle.fieldContainer}>
        <Text style={gstyle.label}>Userame:</Text>
        <TextInput
          style={gstyle.input}
          value={userData.name}
          onChangeText={text => handleChange('name', text)}
        />
      </View>
              <View style={gstyle.fieldContainer}>
        <Text style={gstyle.label}>Mail:</Text>
        <TextInput
          style={gstyle.input}
          value={userData.mail}
          onChangeText={text => handleChange('mail', text)}
        />
      </View>
                    <View style={gstyle.fieldContainer}>
        <Text style={gstyle.label}>Firstname:</Text>
        <TextInput
          style={gstyle.input}
          value={userData.firstname}
          onChangeText={text => handleChange('firstname', text)}
        />
      </View>
                    <View style={gstyle.fieldContainer}>
        <Text style={gstyle.label}>Lastname:</Text>
        <TextInput
          style={gstyle.input}
          value={userData.lastname}
          onChangeText={text => handleChange('lastname', text)}
        />
      </View>
       <View style={gstyle.fieldContainer}>
        <Text style={gstyle.label}>Link:</Text>
        <TextInput
          style={gstyle.input}
          value={userData.link}
          onChangeText={text => handleChange('link', text)}
        />
      </View>
      <View style={gstyle.fieldContainer}>
        <Text style={gstyle.label}>Bio:</Text>
        <TextInput
          style={[gstyle.input, gstyle.textArea]}
          value={userData.content}
          onChangeText={text => handleChange('content', text)}
          multiline
        />
      </View>
            <Footer navigation={navigation} />   
    </ScrollView>
  );
};

export default Profile;