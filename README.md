# imgserver-nodejs

## Install

```
npm i falcon-img-server --save
```

## Usage

```javascript
const ImgServer = require('falcon-img-server')
```

```javascript
const imgServer = new ImgServer({
    Username: "username",
    SecretKey: "secret_key"
});
```

```javascript
const signedURL = imgServer.getSignedURL({
   Name: "the wheel.jpg",
   ContentType: "image/jpeg",
   ContentLength: 489813,
});
```
