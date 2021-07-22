import axios from "axios";
import { Notify, Loading } from "quasar";
// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 10000 // request timeout
});
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    config.url = decodeURI(encodeURI(config.url).replace(/%E2%80%8B/g, ""));
    return config;
  },
  error => {
    // do something with request error
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  async response => {
    const res = response.data;
    // console.log(response.config.url + "返回的数据为：", response);
    if (response.headers["content-type"].indexOf("x-zip-compressed") > -1) {
      return Promise.resolve(res);
    }
    // if the custom code is not 20000, it is judged as an error.
    if (!res.status) {
      Loading.hide();

      Notify.create({
        type: "negative",
        message: res.msg,
        position: "center"
      });
      return Promise.reject(res.msg);
    } else {
      return res;
    }
  },
  error => {
    if (axios.isCancel(error)) {
      console.log("Request canceled", error.message);
      return Promise.reject(error);
    } else {
      Notify.create({
        type: "negative",
        message: "接口返回失败",
        position: "center"
      });
      return Promise.reject(error);
    }
  }
);

export default service;
