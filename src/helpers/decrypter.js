import crypto from "crypto-js";

export default async function (data, { key, iv }) {
  return crypto.AES.decrypt(data, key, { iv }).toString(crypto.enc.Utf8);
}
