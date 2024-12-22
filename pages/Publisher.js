import React, {useEffect,useState} from 'react';
import { View, Text,Image,TextInput,StyleSheet,ScrollView } from 'react-native';
import API_ENDPOINTS from '../utils/apiConfig'; 
import axios from 'axios';
import Footer from '../components/Footer';
import useGlobalStyles from '../contexts/useGlobalStyles';

const Publisher = ({ route, navigation}) => {
  const gstyle=useGlobalStyles();
  const { PublisherId, Publishername } = route.params; 
      const [Data, setData] = useState({
    id:'',img:'',name: '',uri:'',
  });

 useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.GET_BY_ID('Publisher',PublisherId));
           var Details = response.data[0];
        console.log(Details)
        setData(Details);
        navigation.setOptions({ title: (Details.name!='' ? Details.name: 'Publisher '+Details.id)  });
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    fetchDetails();
  }, [PublisherId, navigation]);

const handleChange = (field, value) => {
    setData(prevState => ({
      ...prevState,
      [field]: value,
    }));
    axios.post(API_ENDPOINTS.EDIT('Publisher'), {
      key: field,
      value: value,
      id: PublisherId,
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
     <Image 
        source={{uri:Data.uri}}
        style={gstyle.featureImage}
      />
      <Text>Publisher Details Screen</Text>
      <Text>Publisher ID: {Data.id}</Text>
        <Text>Publisher Name: {Data.name}</Text>
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
export default Publisher;
