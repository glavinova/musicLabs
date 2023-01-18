import axios from 'axios';

const dummyApiAxiosClient = () => {
  const defaultOptions = {
    baseURL: "https://dummyapi.io/data/v1/",
    headers: {
      'Content-Type': 'application/json',
      'app-id': "6112dc7c3f812e0d9b6679dd",
      'Cache-Control': 'must-revalidate, public, max-age=3600',
    },
  };

  let instance = axios.create(defaultOptions);
  return instance;
};

export default dummyApiAxiosClient;