import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'https://api.spacexdata.com/v4',
});

export default AxiosInstance;
