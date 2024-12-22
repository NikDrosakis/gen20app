// DocumentationScreen.js

import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Footer from '../components/Footer';
import useGlobalStyles from '../contexts/useGlobalStyles';

const Documentation = ({navigation}) => {
  const gstyle=useGlobalStyles();
  return (
    <ScrollView style={gstyle.container}>
      <Text style={gstyle.heading}>Viva Libro v0.5 Documentation</Text>
      
      <Text style={gstyle.subheading}>Overview</Text>
      <Text style={gstyle.text}>
        Viva Libro is a Progressive Web App (PWA) and mobile application that allows users to manage their personal libraries, find book details, and more. This documentation covers the features, APIs, database, services, and setup for both web and mobile versions.
      </Text>

      <Text style={gstyle.subheading}>Web v0.5</Text>
      <Text style={gstyle.text}>Status: READY (8/10)</Text>
      <Text style={gstyle.text}>
        The web version includes all the mobile features except for image recognition. The `fimg` feature is used to find images from the web using the Google Custom Search API instead of Serpapi with Google Lens API.
      </Text>

      <Text style={gstyle.subheading}>Features</Text>
      <Text style={gstyle.text}>
        1. **Profile**: Facebook-style profile (To-Do)
        2. **Bug Fixes**: Correct existing bugs (To-Do)
        3. **UI Improvements**: Enhance the user interface (To-Do)
      </Text>

      <Text style={gstyle.subheading}>APIs</Text>
      <Text style={gstyle.text}>1. **fimg**: Finds image from the web.
        Uses `https://www.googleapis.com/customsearch`
      </Text>

      <Text style={gstyle.subheading}>Database</Text>
      <Text style={gstyle.text}>MariaDB</Text>

      <Text style={gstyle.subheading}>Services v0.5</Text>
      <Text style={gstyle.text}>Status: READY (11/12)</Text>
      <Text style={gstyle.text}>
        The services are built using Node.js to facilitate communication with non-relational databases and the mobile app.
      </Text>

      <Text style={gstyle.subheading}>API Endpoints</Text>
      <Text style={gstyle.text}>
        GET
        - MyLib: Fetch library details with optional search parameter.
        `GET https://vivalibro.com:3002/ma/lib/id/1?q=[query]`
        - Book: Fetch book details by ID.
        `GET https://vivalibro.com:3002/ma/book/id/[id]`
        - Editor: Fetch editor details by ID.
        `GET https://vivalibro.com:3002/ma/editor/id/[id]`
        - Writer: Fetch writer details by ID.
        `GET https://vivalibro.com:3002/ma/writer/id/[id]`
      </Text>
      <Text style={gstyle.text}>
        POST
        - Login: User login.
        - Signup: User signup.
        - New Book: Create a new book.
        `POST https://vivalibro.com:3002/newbook`
        - Book User: Associate a book with a user’s library.
        - Edit Book: Edit book details.
        `POST https://vivalibro.com:3002/bookedit
        - Edit Editor: Edit editor details by ID.
        `POST https://vivalibro.com:3002/editoredit/id/[id]`
        - Edit Writer: Edit writer details with a query.
        `POST https://vivalibro.com:3002/writeredit
      </Text>

      <Text style={gstyle.subheading}>TODO</Text>
      <Text style={gstyle.text}>
        1. **Authentication**: Implement user authentication.
      </Text>

      <Text style={gstyle.subheading}>Mobile v0.5</Text>
      <Text style={gstyle.text}>Status: READY (6/20)</Text>
      <Text style={gstyle.text}>
        Developed using React Native.
      </Text>

      <Text style={gstyle.subheading}>Features</Text>
      <Text style={gstyle.text}>
        1. **Login Page**: Implemented
        2. **Signup Page**: Implemented
        3. **Google Login**: Pending
        4. **My Library (LIMIT 10)**: Implemented with infinite scroll
        5. **Library Search**: Implemented
        6. **Edit Book Page**: Pending
        7. **Writer's Page**: Linkable from book (Pending)
        8. **Editor's Page**: Linkable from book (Pending)
        9. **New Book**: Create and edit new book record (Implemented)
        10. **Edit Book - Upload Photo**: Pending
        11. **Edit Book - Recognize Image**: Pending
        12. **Edit Book - Embed Feature Image and Details**: Pending
        13. **Home Page**: Auto-create library for new users (Pending)
        14. **Profile Settings**: Editable (Pending)
        15. **Light/Dark Mode**: Pending
        16. **Splash Screen**: Implemented
        17. **Upload to Google Play Store**: Pending
        18. **Documentation**: Pending
        19. **GitHub Page**: Pending
        20. **Home Library Page**: Create new library for users (Pending)
      </Text>

      <Text style={gstyle.subheading}>Setup</Text>
      <Text style={gstyle.subheading}>Web</Text>
      <Text style={gstyle.text}>
        1. Clone the repository:
        `git clone https://github.com/vivalibro/vivalibro-web.git`
        2. Install dependencies:
        `cd vivalibro-web && npm install`
        3. Run the development server:
        `npm start`
      </Text>

      <Text style={gstyle.subheading}>Mobile</Text>
      <Text style={gstyle.text}>
        1. Clone the repository:
        `git clone https://github.com/vivalibro/vivalibro-mobile.git`
        2. Install dependencies:
        `cd vivalibro-mobile && npm install`
        3. Start the Expo development server:
        `expo start`
      </Text>

      <Text style={gstyle.subheading}>Contribution</Text>
      <Text style={gstyle.text}>
        Feel free to contribute to the project by opening issues and submitting pull requests. Make sure to follow the code of conduct and the contribution guidelines.
      </Text>

      <Text style={gstyle.subheading}>License</Text>
      <Text style={gstyle.text}>
        This project is licensed under the MIT License. See the LICENSE file for more details.
      </Text>

      <Text style={gstyle.subheading}>Contact</Text>
      <Text style={gstyle.text}>
        For any questions or inquiries, please contact us at support@vivalibro.com.
      </Text>
               <Footer navigation={navigation} /> 
    </ScrollView>
  );
};

export default Documentation;
