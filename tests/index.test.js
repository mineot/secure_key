import { Key, Encoder, Decoder } from "@/index";

const password = "Abc123!@#";
const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "!", "@", "#"];

test("Key", async () => {
  const hashed_password = await Key(password);
  expect(hashed_password.key).toBe("e969fff7a9d795ae4fd4120b8547d29512e76d50764fd0c87178cdd0fd6dd42d");
  expect(hashed_password.iv_string).toBe("f201b55209892d14862c2819fb5430b0bc7f49cba276a0c6886fb7b8f6fd88f4");
});

test("Encoder and Decoder", async () => {
  const hashed_password = await Key(password);
  const encoded_data = await Encoder(data, { key: hashed_password.key, iv: hashed_password.iv });
  const decoded_data = await Decoder(encoded_data, { key: hashed_password.key, iv: hashed_password.iv });
  expect(decoded_data.join("")).toBe(data.join(""));
});
