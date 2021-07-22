import JSEncrypt from "jsencrypt";
const CryptoJS = require("crypto-js");
const keyAES = "WuHanDigitalTwin";
export function encrypt(key, text) {
  let operator = new JSEncrypt();
  let publicKey = `-----BEGIN PUBLIC KEY-----${key}-----END PUBLIC KEY-----`;
  operator.setPublicKey(publicKey);
  return operator.encrypt(text);
}

/**
 * AES加密
 * @param {number} data
 */
export function encryptAES(data) {
  let key = CryptoJS.enc.Utf8.parse(keyAES);
  let text = CryptoJS.enc.Utf8.parse(data);
  let encrypted = CryptoJS.AES.encrypt(text, key, {
    iv: CryptoJS.enc.Utf8.parse(""),
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

/**
 * AES解密
 * @param {number} data
 */
export function decryptAES(data) {
  let key = CryptoJS.enc.Utf8.parse(keyAES);
  let text = CryptoJS.enc.Utf8.parse(data);
  let decrypted = CryptoJS.AES.decrypt(text, key, {
    iv: CryptoJS.enc.Utf8.parse(""),
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString();
}
