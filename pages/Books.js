import React, { useCallback,useState, useEffect } from 'react';
import { View, Text, SafeAreaView,ActivityIndicator, TouchableOpacity, Stylesheet,FlatList, TextInput  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BookCard from '../components/BookCard';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Footer from '../components/Footer';
import API_ENDPOINTS from '../utils/apiConfig'; 
import { useFocusEffect } from '@react-navigation/native';
import useGlobalStyles from '../contexts/useGlobalStyles';

export default function Books({ navigation }) {
  const gstyle=useGlobalStyles();
  const [bookList, setBookList] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
 const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useFocusEffect(
    useCallback(() => {
     getBookList('')
    }, [getBookList])
  );
const getBookList = async (query = '',newPage=1) => {
  setLoading(true);
  try {
    const response = await fetch(API_ENDPOINTS.BOOKS(), {
      params: { q: query, page: newPage },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const bookresponse = await response.json();
        console.log(bookresponse)
    const books=bookresponse.data;
    setBookList(prevBooks => newPage === 1 ? books : [...prevBooks, ...books]);  
  } catch (error) {
    console.error('Error loading library:', error);
  }
  setLoading(false);
};

const handleLoadMore = () => {
    if (!loading) {
       setPage(prevPage => prevPage + 1);
      getBookList(searchQuery, page + 1);
    }
  };

   const handleSearch = (query) => {
    setSearchQuery(query);
     setPage(1);
    getBookList(query, 1);
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={gstyle.menuButton} onPress={() => setSearchVisible(!searchVisible)}>
          <Ionicons name="search" size={30} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, searchVisible]);

  const renderFooter = () => {
    return loading ? (
      <View style={gstyle.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };
  return (
    <View style={gstyle.container}>
{searchVisible && (
        <TextInput
          style={gstyle.input}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      )}
       <SafeAreaView style={gstyle.listContainer}>
        <FlatList
            ListFooterComponent={renderFooter}
          data={bookList}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <BookCard item={item} index={index} />
          )}
        />
      </SafeAreaView>
      <Footer navigation={navigation} />      
    </View> 
  );
}