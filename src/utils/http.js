import axios from "axios";
import store from "../store";


const service = axios.create({
  baseURL: 'api',
  timeout: 20000,
  headers: {
    "Content-Type": "application/json"
  }
});
service.interceptors.request.use(
  config => {
    if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `JWT ${store.state.token}`;
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    if (response.data.code == 1001) {}
    return response.data;
  },
  error => {
    if (error.response == undefined) {}
    return Promise.reject(error);
  }
);

export default service;