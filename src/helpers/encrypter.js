const crypto = require("crypto-js");

export default async function (data, { key, iv }) {
  return crypto.AES.encrypt(data, key, { iv }).toString();
}
