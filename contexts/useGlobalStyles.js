// useGlobalStyles.js
import { useContext } from 'react';
import { StyleSheet,Alert } from 'react-native';
import { AppContext } from './AppContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useGlobalStyles = () => {
const { darkMode } = useContext(AppContext);

return StyleSheet.create({
container:{
backgroundColor:'#f4f1ea',
},
label: {
fontSize: 16,
marginBottom: 2,
color: darkMode ? '#000' : '#fff'
},
bottomMenu: {  
position: "absolute", 
width:'100%',
bottom: 0, 
flexDirection: 'row',
alignItems: 'center',
backgroundColor: darkMode ? '#000' : '#fff',
borderTopWidth: 1,
borderTopColor: '#ccc',
justifyContent: 'center',
padding: 10  
},
textContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
    marginBottom:60,
  },
text: {
      fontSize: 24,
    textAlign: 'center', // Centers text horizontally within the Text component
    lineHeight: 30, // Adjust line height as needed
color: darkMode ? '#121212' : '#121212',
fontStyle:"italic",
alignItems: 'center',
justifyContent: 'center', 
},
input: {
height: 40,
borderColor: (darkMode ? '#121212' : '#fff'),
borderWidth: 1,
borderRadius: 5,
padding: 20,
fontSize: 18,
justifyContent: 'center', 
marginBottom: 20,
marginLeft:'10%',
backgroundColor: (darkMode ? '#222' : '#fff'),
color: (darkMode ? '#fff' : '#000'),
width:'80%' ,
},
placeholder: {
color: darkMode ? '#888' : '#aaa'
},
buttonContainer: {
flexDirection: 'row', 
justifyContent: 'space-around', 
width: '80%',
backgroundColor: (darkMode ? '#222' : '#fff'),
},
menuButton: {
justifyContent: 'center',
alignItems: 'center'
},
featureImage:{
width: "50%",
height: 200,
marginBottom: 10
},
fieldContainer: {
marginBottom: 15
},
textArea: {
height: 100
},
imageContainer: {
flexDirection: 'row',
alignItems: 'flex-start',
marginBottom: 20
},
buttonContainer2: {
flexDirection: 'column',
justifyContent: 'flex-start',
alignItems: 'center',
width: '30%',
marginLeft: 10
},
heading: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20
},
subheading: {
fontSize: 18,
fontWeight: 'bold',
marginTop: 20,
marginBottom: 10
},
calligraphicLogo: {
marginTop: 10,
resizeMode: 'contain',
marginBottom: 10
},
logoContainer: {
justifyContent: 'center',
alignItems: 'center',
width: '100%'
},
logo: {
width: '100%',
height: 200,
resizeMode: 'cover',
marginBottom: 10
},
eyeIcon: {
right:30,
bottom:7
},
passwordContainer: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10
},
button: {
width: '40%',
padding: 10,
marginLeft:'30%',
backgroundColor: '#007BFF',
borderRadius: 5,
alignItems: 'center'
},
button2: {
width: '40%',
padding: 10,
marginLeft:'30%',
marginTop:'2.5%',
marginBottom:'2.5%',
backgroundColor: (darkMode ? '#70400c' : '#fff'),
borderRadius: 5,
alignItems: 'center'
},
colorButton: {
padding: 5,
alignItems: 'center'
},
buttonText: {
color: (darkMode ? '#fff' : '#222'),
fontSize: 16,
},
loader: {
padding: 10,
alignItems: 'center',
},
listContainer: {
flex: 1,
backgroundColor: '#f5f5f5',
width: wp('100%'),
},
lightContainer: {
backgroundColor: '#f4f1ea',
},
darkContainer: {
backgroundColor: '#121212',
},
lightText: {
color: '#000',
},
darkText: {
color: '#fff',
},
settingItem: {
marginBottom: 20,
},
lightInput: {
borderColor: '#ccc',
color: '#000',
},
darkInput: {
borderColor: '#555',
color: '#fff',
},
photoContainer: {
flexDirection: 'row',
alignItems: 'center',
borderBottomWidth: 1,
borderBottomColor: '#ccc',
backgroundColor: '#fff',
width:'100%',
elevation: 2,
},
writerText: {
fontSize: 14,
color: '#333',
padding:'1%',
width: '24%',
},
titleText: {
fontSize: 14,
color: '#333',
fontWeight: 'bold',
padding:'1%',
width: '38%',
},
editorText: {
fontSize: 12,
color: '#333',
padding:'1%',
width: '12%',
},
catText: {
fontSize: 12,
color: '#333',
padding:'1%',
width: '8%',
},
photo: {  
padding:'3%',
width: '17%',
resizeMode: 'cover',
},
deleteButton: {
backgroundColor: 'none',
padding:'3%',
	width: '7%',
},
deleteButtonText: {
color: 'white',
fontWeight: 'bold',
}
});
};
export default useGlobalStyles;
