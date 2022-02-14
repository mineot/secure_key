import decodifier from "@/helpers/decodifier";
import decompressor from "@/helpers/decompressor";
import decrypter from "@/helpers/decrypter";

export default async function (data, { key, iv }) {
  const decrypted = await decrypter(data, { key, iv });
  const decompressed = await decompressor(decrypted);
  return await decodifier(decompressed);
}
