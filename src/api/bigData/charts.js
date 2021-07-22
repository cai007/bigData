import request from "@/utils/request";
const server_prefix = "/dt/api";
const service = {
  getChart(data, options) {
    return request({
      url: `${server_prefix}/bms/bigdataChart/getChart`,
      method: "post",
      data,
      ...options
    });
  }
};
export default service;
