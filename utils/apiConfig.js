const BASE_URL = 'https://vivalibro.com/api/v1';

const API_ENDPOINTS = {
  GET_BY_ID: (table,id) => `${BASE_URL}/${table}/${id}`,
  GET_USER: (id) => `${BASE_URL}/user/${id}`,
  BOOKS: () => `${BASE_URL}/vl_book`,
  LOOKUP: (type) => `${BASE_URL}/lookup/${type}`,
  GET_BOOKS_BY_LIB: (libid) => `${BASE_URL}/lib/${libid}`,
  LOGIN: `${BASE_URL}/local/login`,    
  //POST 
  SIGNUP: `${BASE_URL}/local/signup`,
  NEWBOOK: `${BASE_URL}/newbook`,
  BOOKUSER: `${BASE_URL}/bookuser`,
  UPLOAD_IMAGE: (table) => `${BASE_URL}/upload/${table}/img`,
  EDIT: (table) => `${BASE_URL}/edit/${table}`,
  LOOKUPSAVE: (table) => `${BASE_URL}/lookupsave/${table}`,
  SAVENEW: (table) => `${BASE_URL}/savenew/${table}`,
  
  // Add more endpoints as needed
  // e.g., GET_BOOKS: `${BASE_URL}/books`,
  //       UPDATE_BOOK: `${BASE_URL}/books/update`,
};

export default API_ENDPOINTS;