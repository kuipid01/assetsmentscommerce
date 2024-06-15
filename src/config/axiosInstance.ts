import axios from 'axios';

// Function to retrieve access token from local storage
const getAccessToken = () => {
  return localStorage.getItem('accessToken') || ''; // Replace 'accessToken' with your actual key
};

const AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers: {
    'X-Custom-Header': 'foobar',
    'Authorization': `Bearer ${getAccessToken()}`  // Include access token from local storage
  }
});



// Export the instance if needed
export default AxiosInstance;
