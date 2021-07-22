/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */

import dayjs from "dayjs";

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (time === "0") {
    return "";
  }
  if (!time) {
    return "";
  }
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "number" && time <= 0) {
      return "";
    }
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
    // date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    return value.toString().padStart(2, "0");
  });
  return time_str;
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (("" + time).length === 10) {
    time = parseInt(time) * 1000;
  } else {
    time = +time;
  }
  const d = new Date(time);
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return "刚刚";
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + "分钟前";
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + "小时前";
  } else if (diff < 3600 * 24 * 2) {
    return "1天前";
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return (
      d.getMonth() +
      1 +
      "月" +
      d.getDate() +
      "日" +
      d.getHours() +
      "时" +
      d.getMinutes() +
      "分"
    );
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url;
  const search = url.substring(url.lastIndexOf("?") + 1);
  const obj = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}

/**
 * @param {string} input value
 * @returns {number} output value
 */
export function byteLength(str) {
  // returns the byte length of an utf8 string
  let s = str.length;
  for (var i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i);
    if (code > 0x7f && code <= 0x7ff) s++;
    else if (code > 0x7ff && code <= 0xffff) s += 2;
    if (code >= 0xdc00 && code <= 0xdfff) i--;
  }
  return s;
}

/**
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray(actual) {
  const newArray = [];
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

/**
 * @param {Object} json
 * @returns {Array}
 */
export function param(json) {
  if (!json) return "";
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return "";
      return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
    })
  ).join("&");
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, " ") +
      '"}'
  );
}

/**
 * @param {string} val
 * @returns {string}
 */
export function html2Text(val) {
  const div = document.createElement("div");
  div.innerHTML = val;
  return div.textContent || div.innerText;
}

/**
 * Merges two objects, giving the last one precedence
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export function objectMerge(target, source) {
  if (typeof target !== "object") {
    target = {};
  }
  if (Array.isArray(source)) {
    return source.slice();
  }
  Object.keys(source).forEach(property => {
    const sourceProperty = source[property];
    if (typeof sourceProperty === "object") {
      target[property] = objectMerge(target[property], sourceProperty);
    } else {
      target[property] = sourceProperty;
    }
  });
  return target;
}

/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element, className) {
  if (!element || !className) {
    return;
  }
  let classString = element.className;
  const nameIndex = classString.indexOf(className);
  if (nameIndex === -1) {
    classString += "" + className;
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length);
  }
  element.className = classString;
}

/**
 * @param {string} type
 * @returns {Date}
 */
export function getTime(type) {
  if (type === "start") {
    return new Date().getTime() - 3600 * 1000 * 24 * 90;
  } else {
    return new Date(new Date().toDateString());
  }
}

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result;

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp;

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function(...args) {
    context = this;
    timestamp = +new Date();
    const callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== "object") {
    throw new Error("error arguments", "deepClone");
  }
  const targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === "object") {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr));
}

/**
 * @returns {string}
 */
export function createUniqueString() {
  const timestamp = +new Date() + "";
  const randomNum = parseInt((1 + Math.random()) * 65536) + "";
  return (+(randomNum + timestamp)).toString(32);
}

/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += " " + cls;
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, " ");
  }
}

/**
 * get age from idcard no
 * @param {identityCard} str
 */
export function GetAge(identityCard) {
  const len = (identityCard + "").length;
  var strBirthday = "";
  if (len == 18) {
    // 处理18位的身份证号码从号码中得到生日和性别代码
    strBirthday =
      identityCard.substr(6, 4) +
      "/" +
      identityCard.substr(10, 2) +
      "/" +
      identityCard.substr(12, 2);
  } else {
    return "";
  }
  // 时间字符串里，必须是“/”
  var birthDate = new Date(strBirthday);
  var nowDateTime = new Date();
  var age = nowDateTime.getFullYear() - birthDate.getFullYear();
  // 再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
  if (
    nowDateTime.getMonth() < birthDate.getMonth() ||
    (nowDateTime.getMonth() == birthDate.getMonth() &&
      nowDateTime.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

/**
 * base64 to blob
 * @param {dataURL} str
 */
export function dataURLtoBlob(dataURL) {
  var arr = dataURL.split(",");
  var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

/**
 * base64 to file
 * @param {dataURL} str
 */
export function dataURLtoFile(dataURL, suffix) {
  var arr = dataURL.split(",");
  var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], `tempFile.${suffix}`, { type: mime });
}

/**
 * 递归修改树中空children为undefined
 * @param {arr} array
 */
export function arrRecursive(arr) {
  if (arr && arr.length > 0) {
    arr.map(item => {
      if (item["children"] && item["children"].length === 0) {
        item["children"] = undefined;
      } else if (item["children"] && item["children"].length > 0) {
        return arrRecursive(item["children"]);
      }
    });
  }
}

/**
 * 递归取树中对应Id的Name
 * @param {arr} array
 * @param {id} string
 */
export function findNameRecursive(arr, id, res) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item.Id === id) {
      res = item.Name;
      return res;
    } else if (item["children"] && item["children"].length > 0) {
      res = findNameRecursive(item["children"], id, res);
      if (res) {
        return res;
      }
    }
  }
}

/**
 * 递归取树中第一个对象返回一个数组
 * @param {arr} array
 * @param {list} array
 */
export function firstRecursive(arr, list) {
  if (arr && arr.length > 0) {
    list.push(arr[0]);
    if (arr[0].children && arr[0].children.length > 0) {
      return firstRecursive(arr[0].children, list);
    } else {
      return list;
    }
  }
}

/**
 * 递归取树中叶子节点对应值的完整路径数组
 * @param {arr} array
 * @param {id} string
 * @param {list} array
 */
export function pathRecursive(arr, id, list) {
  try {
    function getValue(arr) {
      for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        list.push(item.Id);
        if (item.children && item.children.length > 0) {
          getValue(item.children);
        } else if (item.Id == id) {
          throw ("GOT", list);
        }
        list.pop();
      }
      return [];
    }
    getValue(arr);
  } catch (res) {
    console.log("res:", res);
    return res;
  }
}

/**
 * 递归取树中叶子节点对应值的完整路径数组
 * @param {arr} array
 * @param {keyword} string
 * @param {list} array
 */
export function filterRecursive(arr, keyword, list) {
  function getValue(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      const item = arr[i];
      if (item.children && item.children.length > 0) {
        if (getValue(item.children)) {
          arr.splice(i, 1);
        }
      } else if (item.label.indexOf(keyword) !== -1) {
        continue;
      } else {
        arr.splice(i, 1);
      }
    }
    if (arr.length == 0) {
      return true;
    }
  }
  getValue(arr);
  return arr;
}

/**
 * 递归过滤菜单中hidden为true的元素，且赋值title
 * @param {arr} array
 * @param {list} array
 */
export function menuRecursive(arr, list) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!item.hidden) {
      item.title = item.meta.title;
      if (item["children"] && item["children"].length > 0) {
        const children = menuRecursive(item["children"], []);
        item.children = children;
      }
      list.push(item);
    }
  }
  return list;
}

/**
 * sleep
 * @param {number} time
 */
export function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

/**
 * 迭代修改json属性
 */
export function renameJsonProp(originProp, targetProp, arr) {
  arr = arr.slice();
  function toParse(arr) {
    arr.forEach(function(item) {
      if (item[originProp]) {
        item[targetProp] = item[originProp];
        if (Array.isArray(item[originProp])) toParse(item[targetProp]);
      }
      delete item[originProp];
    });
    return arr;
  }
  return toParse(arr);
}
/**
 * 迭代json数组中json得属性名
 */
export function renameProps(originProp, targetProp, data) {
  for (let obj of data) {
    obj[targetProp] = obj[originProp];
    delete obj[originProp];
    for (let k in obj) {
      if (typeof obj[k] == "object" && Array.isArray(obj[k])) {
        renameProps(originProp, targetProp, obj[k]);
      }
    }
  }
  return data;
}

/**
 * {
 *   name : zxw   ==>   [{label : name, value : zxw}]
 * }
 */
export function unwarpJsonToArray(jsonObj) {
  if (!jsonObj) return [];
  let result = [];
  Object.entries(jsonObj).forEach(([key, value]) => {
    result.push({ label: value, value: key });
  });
  return result;
}

import store from "@/store";
export const PAGE_NAME = {
  systemManagement: "systemManagement",
  business: "business",
  pipe: "pipe",
  equipment: "equipment",
  generalManagement: "generalManagement",
  userCenter: "userCenter",
  smartSecurityProtection: "smartSecurityProtection"
};
export function getMenus(module, level) {
  function delBtnMenus(list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].type == 2) {
        list.splice(i--, 1);
      } else {
        if (list[i].children && list[i].children.length) {
          delBtnMenus(list[i].children);
        }
      }
    }
  }
  function delChildren(list) {
    list.forEach(item => {
      if (level == item.level_temp) {
        item.children = null;
      } else {
        if (item.children && item.children.length) {
          delChildren(item.children);
        }
      }
    });
  }
  function recursion(list = [], level_temp = 1) {
    list.forEach(item => {
      item.level_temp = level_temp;
      if (item.children && item.children.length) {
        recursion(item.children, level_temp + 1);
      }
    });
    return list;
  }
  let list = JSON.parse(JSON.stringify(store.state.permission.permissionMenus));
  let target = [];
  if (list.length) {
    list.forEach(item => {
      if (item.name == module) {
        target = item.children && item.children.length ? item.children : [];
      }
    });
  }
  target = recursion(target);
  delChildren(target);
  delBtnMenus(target);
  return target;
}
/**
 * 表单封装，把form转化为formProp结构
 */
export function formatForm(form, formProp, params) {
  //深复制
  let _f = JSON.parse(JSON.stringify(formProp));
  _f.forEach(e => {
    if (e.type == "checkbox") {
      e.data = form[e.prop] || [];
    } else if (e.type == "file") {
      // if (form[e.prop] == null || form[e.prop] == "") e.data = [];
      // else
      if (typeof form[e.prop] == Array) {
        e.data = form[e.prop];
      } else e.data = [{ url: form[e.prop] }] || [];
    } else if (e.type == "date") {
      e.value = dayjs(form[e.prop]).format("YYYY-MM-DD") || "";
    } else {
      e.value = form[e.prop] || "";
    }
    //特殊处理的数据通过参数传递
    if (params && params[e.prop]) {
      let p = params[e.prop];
      Object.keys(p).forEach(key => {
        e[key] = p[key];
      });
    }
  });

  return _f;
}

// 设置 rem 函数
export function setRem(bottomDis) {
  if (!bottomDis) bottomDis = 0;
  // 基准大小 fontsize默认大小
  let baseSize = 10;
  let basePc = baseSize / 1080; // 表示1080的设计图,使用16PX的默认值
  // let vW = window.innerWidth; // 当前窗口的宽度
  let vH = window.innerHeight - bottomDis; // 当前窗口的高度
  let rem = vH * basePc; // 以默认比例值乘以当前窗口高度,得到该宽度下的相应font-size值
  document.documentElement.style.fontSize = 1.05 * rem + "px";
}

// 设置 chart fontsize 函数
export function setChartFontsize(size) {
  // 基准大小 fontsize默认大小
  let baseSize = 1;
  let basePc = baseSize / 1080; // 表示1080的设计图,使用16PX的默认值
  // let vW = window.innerWidth; // 当前窗口的宽度
  let vH = window.innerHeight; // 当前窗口的高度
  let rem = vH * basePc; // 以默认比例值乘以当前窗口高度,得到该宽度下的相应font-size值
  // console.log("size * rem", size * rem);
  return parseInt(size * rem);
}

export function sendMessageToMap(type, message) {
  if (window.vuplex) {
    // The window.vuplex object already exists, so go ahead and send the message.
    sendMessageToCSharp();
  } else {
    // The window.vuplex object hasn't been initialized yet because the page is still
    // loading, so add an event listener to send the message once it's initialized.
    window.addEventListener("vuplexready", sendMessageToCSharp);
  }

  function sendMessageToCSharp() {
    // This object passed to postMessage() automatically gets serialized as JSON
    // and is emitted via the C# MessageEmitted event. This API mimics the window.postMessage API.
    window.vuplex.postMessage({
      Type: type,
      Message: message
    });
  }
}
