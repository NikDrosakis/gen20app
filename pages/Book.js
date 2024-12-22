import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button,Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import G from '../G.json'; 
import { Picker } from '@react-native-picker/picker';
import Footer from '../components/Footer';
import Imagine from '../contexts/Imagine';
import API_ENDPOINTS from '../utils/apiConfig'; 
import Autocomplete from '../components/Autocomplete';
import YearPicker from '../components/YearPicker';
import useGlobalStyles from '../contexts/useGlobalStyles';

const Book = ({ route, navigation}) => {
   // const { id, title } = route.params;
  const { bookId } = route.params;
    const [suggestions, setSuggestions] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [bookData, setBookData] = useState({
    uri:'',img:'',title: '',writer: '',writername:'',
    Publishername:'',writerId:'',Publisher: '',PublisherId:'',
    published: '',cat: '',catname: '',status: '',volume: '',
    tags: '',summary: '',
  });
const { selectPhoto, takePhoto, callSerpApi } = Imagine(bookId, setBookData,'book');
 const gstyle=useGlobalStyles();
useEffect(() => {
  const fetchBookDetails = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.GET_BY_ID('vl_book',bookId));
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const bookDetails = await response.json();
      setBookData(bookDetails);
      navigation.setOptions({ title: (bookDetails.title!='' ? bookDetails.title:bookId)  });
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };
  fetchBookDetails();
}, [bookId, navigation]);
 const handleChange = (field, value) => {
    setBookData(prevState => ({
      ...prevState,
      [field]: value,
    }));

    if (field === 'writer' || field === 'Publisher' || field === 'cat') {
      setShowNewButtons(prevState => ({
        ...prevState,
        [field]: value.trim() === '',
      }));
    }

    // POST request to update book details dynamically
    axios.post(API_ENDPOINTS.EDIT('book'), {
      key: field,
      value: value,
      id: bookId,
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
        source={{uri:bookData.uri}}
        style={gstyle.featureImage}
      />
       <View style={styles.buttonContainer}>
        <TouchableOpacity style={gstyle.menuButton} onPress={selectPhoto}>
          <Ionicons name="images" size={30} color={gstyle.colorButton} />
        </TouchableOpacity>
        <TouchableOpacity style={gstyle.menuButton} onPress={takePhoto}>
          <Ionicons name="camera" size={30} color={gstyle.colorButton} />
        </TouchableOpacity>
        <TouchableOpacity style={gstyle.menuButton} onPress={callSerpApi(bookData.uri)}>
          <Ionicons name="color-wand" size={30} color={globalStyles.colorButton} />
        </TouchableOpacity>
      </View>
      <View style={gstyle.fieldContainer}>
        <Text style={gstyle.label}>Title:</Text>
        <TextInput
          style={gstyle.input}
          value={bookData.title}
          onChangeText={text => handleChange('title', text)}
        />
      </View>
      <Autocomplete type="writer" valueid={bookData.writer} value={bookData.writername} bookId={bookId} />
      <Autocomplete valueid={bookData.Publisher} value={bookData.Publishername}  type="Publisher" bookId={bookId} />
      <View style={gstyle.fieldContainer}>
        <Text style={gstyle.label}>Publication Year:</Text>
 <YearPicker
        value={bookData.published}
        onChange={(year) => handleChange('published', year)}
      />
      </View>
      <Autocomplete valueid={bookData.cat} value={bookData.catname} type="cat" bookId={bookId} />
      <View style={gstyle.fieldContainer}>
        <Text style={gstyle.label}>Status:</Text>
         <Picker
          selectedValue={''+bookData.status}
          style={gstyle.input}
          onValueChange={itemValue => handleChange('status', itemValue)}
        >
          {Object.entries(G.book_status).map(([key, value]) => (
            <Picker.Item label={value} value={key} key={key} />
          ))}
        </Picker>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={gstyle.label}>Volume:</Text>
        <TextInput
          style={gstyle.input}
          value={bookData.volume}
          onChangeText={text => handleChange('volume', text)}
        />
      </View>
       <View style={gstyle.fieldContainer}>
        <Text style={gstyle.label}>Link:</Text>
        <TextInput
          style={gstyle.input}
          value={bookData.link}
          onChangeText={text => handleChange('link', text)}
        />
      </View>
      <View style={gstyle.fieldContainer}>
        <Text style={gstyle.label}>Price:</Text>
        <TextInput
          style={gstyle.input}
          value={bookData.price}
          onChangeText={text => handleChange('price', text)}
        />
      </View>
      <View style={gstyle.fieldContainer}>
        <Text style={globalStyles.label}>In stock:</Text>
        <TextInput
          style={gstyle.input}
          value={bookData.in_stock}
          onChangeText={text => handleChange('in_stock', text)}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={gstyle.label}>Source:</Text>
        <TextInput
          style={gstyle.input}
          value={bookData.source}
          onChangeText={text => handleChange('source', text)}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={gstyle.label}>Tags:</Text>
        <TextInput
          style={gstyle.input}
          value={bookData.tags}
          onChangeText={text => handleChange('tags', text)}
        />
      </View>
      <View style={gstyle.fieldContainer}>
        <Text style={gstyle.label}>Summary:</Text>
        <TextInput
          style={[gstyle.input, styles.textArea]}
          value={bookData.summary}
          onChangeText={text => handleChange('summary', text)}
          multiline
        />
      </View>
            <Footer navigation={navigation} />   
    </ScrollView>
  );
};
export default Book;