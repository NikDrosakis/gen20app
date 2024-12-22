import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert,Image,ScrollView, useWindowDimensions } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../assets/header.png';
import calligraphicLogo from '../assets/logo.png';
import API_ENDPOINTS from '../utils/apiConfig'; 
import useGlobalStyles from '../contexts/useGlobalStyles';

export default function Signup({ navigation }) {
  const gstyle=useGlobalStyles();
  const [mail, setEmail] = useState('');
  const [name, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { width, height } = useWindowDimensions();


  const gotoLogin = async () => {
       navigation.navigate('Login');
  }
      const handleSignup = async () => {
    if (mail && name && pass && confirmPassword) {
      if (pass !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match');
        return;
      }

      try {
        const response = await axios.post(API_ENDPOINTS.SIGNUP, {
          mail:mail,
          name:name,
          pass:pass
        });

        if (response.data.affectedRows==1) {
          console.log(response.data)
          Alert.alert('Success', 'Account created successfully');
          navigation.navigate('Login');
        } else {
          Alert.alert('Error', response.data.message);
        }
      } catch (error) {
        console.error('Error during signup:', error);
        Alert.alert('Error', 'Something went wrong during signup');
      }
    } else {
      Alert.alert('Error', 'Please fill out all fields');
    }
  };
   const isPortrait = height > width;

  return (
    <ScrollView>
    <View style={[gstyle.container, { paddingHorizontal: isPortrait ? 20 : 40 }]}>
       <View  style={[gstyle.logoContainer, { height: isPortrait ? height * 0.3 : height * 0.2 }]}>
        <Image
          source={calligraphicLogo}
         style={[gstyle.calligraphicLogo, { height: isPortrait ? height * 0.2 : height * 0.15 }]}
        />
      </View>
      <TextInput
        style={gstyle.input}
        placeholder="Email"
         placeholderTextColor={gstyle.placeholder.color}
        value={mail}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={gstyle.input}
        placeholder="Username"
         placeholderTextColor={gstyle.placeholder.color}
        value={name}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
  <View style={gstyle.passwordContainer}>
        <TextInput
          style={gstyle.input}
          placeholder="Password"
           placeholderTextColor={gstyle.placeholder.color}
          value={pass}
          onChangeText={setPass}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={gstyle.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Icon name={showPassword ? "eye-off" : "eye"} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <TextInput
        style={gstyle.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity style={gstyle.button} onPress={handleSignup}>
        <Text style={gstyle.buttonText}>Sign Up</Text>
      </TouchableOpacity>
            <TouchableOpacity style={gstyle.button2} onPress={gotoLogin}>
        <Text style={gstyle.buttonText2}>Login</Text>
      </TouchableOpacity>
       <Image
        source={logo}
        style={gstyle.logo}
      />
    </View>
    </ScrollView>
  );
}