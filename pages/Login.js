import React, { useState } from 'react';
import { Alert,View, Text, TextInput, TouchableOpacity, Image, useWindowDimensions  } from 'react-native';
import axios from 'axios';
import { Buffer } from 'buffer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../assets/header.png';
import calligraphicLogo from '../assets/logo.png'; 
import API_ENDPOINTS from '../utils/apiConfig'; 
import useGlobalStyles from '../contexts/useGlobalStyles';

export default function Login({ navigation }) {
  const gstyle=useGlobalStyles();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);
    const { width, height } = useWindowDimensions();
    
  const handleLogin = async () => {
    if (email && pass) {
   try {
    // Construct the query string for the GET request
    const url = `${API_ENDPOINTS.LOGIN}?email=${encodeURIComponent(email)}&pass=${encodeURIComponent(pass)}`;
    console.log(url);
    // Fetch data using the GET request
    const response = await fetch(url, {
        method: 'GET',
         headers: {
    'Content-Type': 'application/json',
    'Authorization': Buffer.from('nikos:130177').toString('base64'), 
  },
    });

    // Parse the JSON response
    const result = await response.json();
        console.log(response);
        if(response.success){
        var res=result.data;        
          // Store the token and navigate to the main app screen
          // For example, using AsyncStorage and navigation:
          // await 
         await AsyncStorage.setItem('GSID', res.id.toString());
         await AsyncStorage.setItem('GSGRP', res.grp.toString());
        await  AsyncStorage.setItem('GSLIBID', res.libid.toString());
          navigation.navigate('Mylib');
          console.log('Login successful');
          console.log(res)
        } else {
         Alert.alert("Wrong combination. Try again!");
          console.error('Login failed:', response.data.message);
        }
      } catch (error) {
    console.error('Error during login:', error);
    Alert.alert("Login Error", "There was an issue connecting to the server. Please try again.");
      }
    } else {
      alert('Please enter both email and password');
    }
  };
 const isPortrait = height > width;
  return (
    <View style={[gstyle.container, { paddingHorizontal: isPortrait ? 20 : 40 }]}>
       <View  style={[gstyle.logoContainer, { height: isPortrait ? height * 0.3 : height * 0.2 }]}>
        <Image
          source={calligraphicLogo}
         style={[gstyle.calligraphicLogo, { height: isPortrait ? height * 0.2 : height * 0.15 }]}
        />
         <View style={gstyle.textContainer}>
      <Text style={gstyle.text}>Discover the wealth{'\n'}of book libraries</Text>
    </View>
      </View>
      <TextInput
        style={gstyle.input}
        placeholderTextColor={gstyle.placeholder.color}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
  <View style={gstyle.passwordContainer}>
        <TextInput
          style={gstyle.input}
           placeholderTextColor={gstyle.placeholder.color}
          placeholder="Password"
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
      <TouchableOpacity style={gstyle.button} onPress={handleLogin}>
        <Text style={gstyle.buttonText}>Login</Text>
      </TouchableOpacity>
     <TouchableOpacity style={gstyle.button2} onPress={() => navigation.navigate('Signup')}>
        <Text style={gstyle.buttonText}>Signup</Text>
      </TouchableOpacity>
           <TouchableOpacity style={gstyle.button2} onPress={() => navigation.navigate('GoogleLogin')}>
        <Text style={gstyle.buttonText}>Google Login</Text>
      </TouchableOpacity>
  <Image source={logo} style={[gstyle.logo, { height: isPortrait ? height * 0.2 : height * 0.15 }]} />
    </View>
  );
}