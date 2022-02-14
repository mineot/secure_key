import codifier from "@/helpers/codifier";
import compressor from "@/helpers/compressor";
import encrypter from "@/helpers/encrypter";

export default async function (json, { key, iv }) {
  const codified = await codifier(json);
  const compressed = await compressor(codified);
  return await encrypter(compressed, { key, iv });
}
