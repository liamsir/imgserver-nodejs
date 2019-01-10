# imgserver-nodejs

## Usage
```javascript
var imgServer = new ImgServer({
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
