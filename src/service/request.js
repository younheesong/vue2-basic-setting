import axios from "axios";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 100000 * 10, // request timeout
});

// request interceptor
service.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    return response;
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    //   return res
    // }
  },
  (error) => {
    return error; //Promise.reject(error)
  }
);

export default service;
