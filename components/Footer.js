import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useGlobalStyles from '../contexts/useGlobalStyles';

const Footer = ({ navigation }) => {
  const gstyle=useGlobalStyles();
  const handleLogout = async () => {
    await AsyncStorage.removeItem('GSID');
    await AsyncStorage.removeItem('GSGRP');
    await AsyncStorage.removeItem('GSLIBID');
    navigation.navigate('Login');
  };
  return (
    <View style={gstyle.bottomMenu}>
      <TouchableOpacity style={gstyle.menuButton} onPress={() => navigation.navigate('Books')}>
      <Ionicons name="book" size={30} color={gstyle.colorButton} />
            </TouchableOpacity>
      <TouchableOpacity style={gstyle.menuButton} onPress={() => navigation.navigate('Search')}>
        <Ionicons name="search" size={30} color={gstyle.colorButton} />
      </TouchableOpacity>
      <TouchableOpacity style={gstyle.menuButton} onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings" size={30} color={gstyle.colorButton} />
      </TouchableOpacity>
      <TouchableOpacity style={gstyle.menuButton} onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person" size={30} color={gstyle.colorButton} />
      </TouchableOpacity>
      <TouchableOpacity style={gstyle.menuButton} onPress={() => navigation.navigate('Documentation')}>
        <Ionicons name="help-buoy" size={30} color={gstyle.colorButton} />
      </TouchableOpacity>
            <TouchableOpacity style={gstyle.menuButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={30} color={gstyle.colorButton} />
      </TouchableOpacity>
    </View>
  );
};
export default Footer;
