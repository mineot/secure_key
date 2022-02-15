const lzutf8 = require("lzutf8");

export default async function (data) {
  return lzutf8.compress(data, { outputEncoding: "Base64" });
}
