const crypto = require('crypto');
const c = require('./config')

module.exports = (function(){

  function ImgServer(config) {
    this.config = {...c, ...config};
  }

  ImgServer.prototype.getSignedURL = function (objectInfo) {
    return getSignedURL(this.config, objectInfo);
  };

  function getSignedURL(config, objectInfo) {
    const currentTime = new Date();
    const expires = Math.round(currentTime.setTime(currentTime.getTime() + 1000 * 60) / 1000);
    const signature = createSignature(config, objectInfo, expires);
    const signedURL = `${config.server_url}/user/${config.Username}/upload/${signature}/expires/${expires}/file/${objectInfo.Name}`;
    return signedURL;
  }

  function createSignature(config, objectInfo, expires) {
    const h = crypto.createHmac('sha256', config.SecretKey);
    h.update(config.Username);
    h.update(objectInfo.Name);
    h.update(objectInfo.ContentType);
    h.update(objectInfo.ContentLength.toString());
    h.update(expires.toString());
    const signature = h.digest();
    return signature.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
  }
  return ImgServer;
})();
