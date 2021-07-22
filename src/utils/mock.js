import axios from "axios";
import { Notify, Dialog, SessionStorage } from "quasar";
import loginService from "@/api/login.js";
import router from "../router/index";

// create an axios instance
const service = axios.create({
  baseURL: '/mock', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 6000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    console.log("拦截request参数：", config);
    // do something before request is sent
    config.url = decodeURI(encodeURI(config.url).replace(/%E2%80%8B/g, ""));
    let token = SessionStorage.getItem("access_token");
    if (token) config.headers["Authorization"] = token;
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

//用refreshtoken获取最新accesstoken
function getRefreshToken(token) {
  let form = new FormData();
  form.append("refresh_token", token);
  return new Promise((resolve, reject) => {
    loginService.refreshToken(form).then(
      res => {
        if (res && res.status) resolve(res);
        else {
          router().push("/login");
          Notify.create({
            type: "negative",
            message: res.msg || "接口返回失败！",
            position: "center"
          });
          return;
        }
      },
      err => {
        reject(err);
        // backToLogin(err, "登录失效，请重新登录！");
      }
    );
  });
}

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
    console.log(response.config.url + "返回的数据为：", response);
    // if the custom code is not 20000, it is judged as an error.
    if (!res.status) {
      if (res.code == "10230") {
        let token = SessionStorage.getItem("refresh_token");

        if (token == null) {
          // router().push({ path: "/login", name: "login" });
          Dialog.create({
            title: "通知",
            message: "登录失效，请重新登录！",
            cancel: true,
            persistent: true
          })
            .onOk(() => {
              SessionStorage.clear();
              location.reload();
            })
            .onCancel(() => {
              return;
            });
          return;
        }
        let refreshRes = await getRefreshToken(token);

        //将刷新后的token保存到SessionStorage
        SessionStorage.set("access_token", refreshRes.data.access_token);
        SessionStorage.set("refresh_token", refreshRes.data.refresh_token);

        response.config.url = response.config.url.replace(
          process.env.BASE_API,
          ""
        );
        return service.request(response.config);
      } else {
        Notify.create({
          type: "negative",
          message: res.msg,
          position: "center"
        });
      }
    } else {
      return res;
    }
  },
  error => {
    console.log("debug", error); // for debug
    Notify.create({
      type: "negative",
      message: "接口返回失败",
      position: "center"
    });
    return Promise.reject(error);
  }
);

export default service;
