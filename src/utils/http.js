import axios from "axios";

let env = "h5";

const service = axios.create({
  baseURL:'api',
  timeout: 20000,
  headers: {
    "Content-Type": "application/json"
  }
});

service.interceptors.request.use(
  config => {
    if (env == "h5") {
      config.headers.sign = "1111";
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