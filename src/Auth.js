import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
      domain: "gustavo-isturiz.auth0.com",
      clientID: "WYhn9XBGcR2XR73jYXbWwfmGUfxm0E1U",
      redirectUri: "http://localhost:3000/tweet",
      audience: "https://gustavo-isturiz.auth0.com/userinfo",
      responseType: "token id_token",
      scope: "openid"

  });

  constructor(){
    this.login = this.login.bind(this);
  }

  login(){
      this.auth0.authorize();
  }

}
