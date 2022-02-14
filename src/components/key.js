import crypto from "crypto-js";

export default async function (password) {
  const secure = { key: "", iv: {}, iv_string: "" };
  secure.key = crypto.SHA256(password).toString(crypto.enc.Hex);
  secure.iv = crypto.SHA256(secure.key);
  secure.iv_string = secure.iv.toString(crypto.enc.Hex);
  return secure;
}
