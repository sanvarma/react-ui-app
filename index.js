const axios = require('axios');

// Call the backend microservice API
const fetchData = async () => {
  try {
    const response = await axios.get('http://backend:5000/api/data');
    console.log('Data from Backend:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
