import React, { useContext, useState } from 'react';
import { View, Text, Switch, TouchableOpacity,TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AppContext } from '../contexts/AppContext';
import Footer from '../components/Footer';
import useGlobalStyles from '../contexts/useGlobalStyles';

const Settings = ({ navigation }) => {
    const gstyle=useGlobalStyles();
const { darkMode, toggleDarkMode } = useContext(AppContext);
  const [lang, setLang] = useState('en');
    const [push, setPush] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    mail: '',
    pass: '',
  });

const handleChange = (field, value) => {
  setuserData(prevState => ({
    ...prevState,
    [field]: value,
  }));
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
  const handleLanguageChange = (itemValue) => {
    setLang(itemValue);
  };
  return (
    <View style={gstyle.container}>
      <Text style={[gstyle.heading, darkMode ? gstyle.darkText : gstyle.lightText]}>Settings</Text>

      {/* Dark Mode */}
      <View style={gstyle.settingItem}>
        <Text style={darkMode ? gstyle.darkText : gstyle.lightText}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>


      {/* Push Notifications */}
      <View style={gstyle.settingItem}>
        <Text style={darkMode ? gstyle.darkText : gstyle.lightText}>Active Push Notifications</Text>
        <Switch value={push} onValueChange={value => handleChange('push', value)} />
      </View>

      {/* Language Preferences */}
      <View style={gstyle.settingItem}>
        <Text style={darkMode ? gstyle.darkText : gstyle.lightText}>Language Preferences</Text>
        <Picker
          selectedValue={lang}
          style={{ height: 50, width: 150 }}
          onValueChange={value => handleChange('push', value)} 
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Ελληνικά" value="el" />
        </Picker>
      </View>

      {/* Delete Account */}
      <TouchableOpacity style={gstyle.settingItem} onPress={() => alert('Account deleted')}>
        <Text style={darkMode ? gstyle.darkText : gstyle.lightText}>Delete Account</Text>
      </TouchableOpacity>
               <Footer navigation={navigation} /> 
    </View>
  );
};
export default Settings;
