import React, {useEffect,useState} from 'react';
import { View, Text,Image,TextInput,ScrollView } from 'react-native';
import axios from 'axios';
import API_ENDPOINTS from '../utils/apiConfig'; 
import Footer from '../components/Footer';
import useGlobalStyles from '../contexts/useGlobalStyles';

const Cat = ({ route, navigation}) => {
  const { cat,catname } = route.params; 
    const [Data, setData] = useState({
    id:'',img:'',name: '',uri:''
  });
      const gstyle=useGlobalStyles();
useEffect(() => {
  const fetchCatDetails = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.GET_BY_ID('cat',cat), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      const Details = data[0];
      console.log(Details)
      setData(Details);
      navigation.setOptions({ title: (Details.name!='' ? Details.name:cat)  });
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };
  fetchCatDetails();
}, [cat, navigation]);

const handleChange = (field, value) => {
    setData(prevState => ({
      ...prevState,
      [field]: value,
    }));
    axios.post(API_ENDPOINTS.EDIT('cat'), {
      key: field,
      value: value,
      id: cat,
    })
    .then(response => {
      console.log('Book details updated successfully:', response.data);
    })
    .catch(error => {
      console.error('Error updating book details:', error);
    });
  };

  return (
    <ScrollView style={gstyle.container}>
     <Image 
        source={{uri:Data.uri}}
        style={gstyle.featureImage}
      />
      <Text style={gstyle.text}>Category Details Screen</Text>
      <Text style={gstyle.text}>Category ID: {Data.id}</Text>
        <Text style={gstyle.text}>Category Name: {Data.name}</Text>
       <View style={gstyle.fieldContainer}>
        <Text style={gstyle.label}>Volume:</Text>
        <TextInput
          style={gstyle.input}
          value={Data.name}
          onChangeText={text => handleChange('name', text)}
        />
      </View>
         <Footer navigation={navigation} />  
   </ScrollView>
  );
};
export default Cat;
