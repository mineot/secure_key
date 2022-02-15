const lzutf8 = require("lzutf8");

export default async function (data) {
  return lzutf8.decompress(data, { inputEncoding: "Base64", outputEncoding: "String" });
}
