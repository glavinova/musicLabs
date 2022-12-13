import axios from 'axios';

const fetchClient = () => {
  const defaultOptions = {
    baseURL: "https://reqres.in/api/",
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let instance = axios.create(defaultOptions);

  instance.interceptors.request.use((config: any) => {
    const token = localStorage.getItem('token');
    config.headers!.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  });

  return instance;
};

export default fetchClient;