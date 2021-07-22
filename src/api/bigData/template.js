import request from "@/utils/request";
const server_prefix = "/dt/api";
const service = {
  list(data, options) {
    return request({
      url: `${server_prefix}/bms/bigdataTemplate/list`,
      method: "post",
      data,
      ...options
    });
  },
  add(data, options) {
    return request({
      url: `${server_prefix}/bms/bigdataTemplate/createTemplate`,
      method: "post",
      data,
      ...options
    });
  },
  remove(id) {
    return request({
      url: `${server_prefix}/bms/bigdataTemplate/delete?id=${id}`,
      method: "post"
    });
  },
  multipleRemove(data, options) {
    return request({
      url: `${server_prefix}/bms/bigdataTemplate/deletes`,
      method: "post",
      data,
      ...options
    });
  },
  update(data, options) {
    return request({
      url: `${server_prefix}/bms/bigdataTemplate/updateTemplate`,
      method: "post",
      data,
      ...options
    });
  },
  get(id) {
    return request({
      url: `${server_prefix}/bms/bigdataTemplate/findVOById?id=${id}`,
      method: "post"
    });
  },
  getChildrenList(data, options) {
    return request({
      url: `${server_prefix}/bms/bigdataTemplate/queryMap`,
      method: "post",
      data,
      ...options
    });
  },
  updateBean(data, options) {
    return request({
      url: `${server_prefix}/bms/bigdataTemplate/updateBean`,
      method: "post",
      data,
      ...options
    });
  },
  updateStaticData(data, options) {
    return request({
      url: `${server_prefix}/bms/bigdataTemplate/updateStaticData`,
      method: "post",
      data,
      ...options
    });
  }
};
export default service;
