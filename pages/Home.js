import React, {useEffect,useState} from 'react';
import { View, Text,Image,Header,TextInput,Button, ScrollView,Appearance } from 'react-native';
import API_ENDPOINTS from '../utils/apiConfig'; 
import axios from 'axios';
import Footer from '../components/Footer';
import useGlobalStyles from '../contexts/useGlobalStyles';

const Home = ({ navigation}) => {
  const gstyle=useGlobalStyles();
      const [Data, setData] = useState({
    id:1,img:'',name: '',uri:'',created:'',
  });
 useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.GET_BY_ID('libdetails',1));
        var Details = response.data[0];
        console.log(Details)
        setData(Details);
   navigation.setOptions({title: `Library of ${Details.name} - id: ${Details.id}`});
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    fetchDetails();
  }, [1, navigation]);

 return (   
    <ScrollView style={gstyle.container}>
     <Image 
        source={{uri:Data.uri}}
        style={gstyle.featureImage}
      />            
       <View style={gstyle.fieldContainer}>            
        <Text style={gstyle.label}>Categories: {Data.catcount}</Text>        
        <Text style={gstyle.label}>Writers: {Data.writercount}</Text>        
        <Text style={gstyle.label}>Publishers: {Data.Publishercount}</Text>        
        <Text style={gstyle.label}>Total Titles: {Data.bookcount}</Text>     
         <Text style={gstyle.label}>Created at: {Data.created}</Text>         
      </View>
      <Button
  onPress={()=>{navigation.navigate('Mylib',{gsid:1})}}
  title="Open Library"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
   <Footer navigation={navigation} /> 
   </ScrollView>
  );
};
export default Home;
