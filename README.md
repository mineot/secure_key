# secure_key

A simple way to generate hash keys, encode and decode objects or arrays 

## Instalation

```
npm i @mineot/secure_key
```

## Use

We have two way that can be implemented:

```
import { Key, Encoder, Decoder } from "@mineot/secure_key";
```

```
const hashed_password = await Key("your-password");
const encoded_data = await Encoder(data, { key: hashed_password.key, iv: hashed_password.iv });
const decoded_data = await Decoder(encoded_data, { key: hashed_password.key, iv: hashed_password.iv });
```

```~
Key("your-password").then(hashed_password => {
    Encoder(data, { key: hashed_password.key, iv: hashed_password.iv }).then(encoded_data => {
        Decoder(encoded_data, { key: hashed_password.key, iv: hashed_password.iv }).then(decoded_data => {
            console.log(decoded_data);
        });
    });
});
```

## Objects definitions

- Key receive: string
- Key return: { key: string, iv: object, iv_string: string }
- Encoder receive: object or array
- Encoder return: string
- Decoder receive: string
- Decoder return: object or array

## License

[MIT License](./LICENSE)

## Donate

If you wanna contribute with this project, feel free to donate the value that you desire, thanks a lot!

- Bitcoin: bc1q02u42ky4y2u8apd9vuhglmgmsh2402w24exnwx
- Pix (for brazilians): 74d3034f-22f8-46c6-91a8-8e2eaecf0225
