import React, {useEffect,useState} from 'react';
import { View, Text,Image,TextInput,ScrollView } from 'react-native';
import axios from 'axios';
import API_ENDPOINTS from '../utils/apiConfig'; 
import Footer from '../components/Footer';
import useGlobalStyles from '../contexts/useGlobalStyles';

const Writer = ({ route,navigation }) => {
    const gstyle=useGlobalStyles();
  const { writerId } = route.params; 
        const [Data, setData] = useState({
    id:'',img:'',name: '',uri:''
  });

 useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.GET_BY_ID('writer',writerId));
        var Details = response.data[0];
        console.log(Details)
        setData(Details);
        navigation.setOptions({ title: (Details.name!='' ? Details.name:'Writer')  });
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    fetchDetails();
  }, [writerId, navigation]);

 const handleChange = (field, value) => {
    setData(prevState => ({
      ...prevState,
      [field]: value,
    }));
    axios.post(API_ENDPOINTS.EDIT('writer'), {
      key: field,
      value: value,
      id: writerId,
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
      <Text>Writer Details Screen</Text>
      <Text>Writer ID: {Data.id}</Text>
        <Text>Writer Name: {Data.name}</Text>
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
export default Writer;
