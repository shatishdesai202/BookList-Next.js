import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface ApiResponseData {
  message: string;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://15.165.74.54:3000/',
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<ApiResponseData>) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
