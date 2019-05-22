
import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'toddmckenzie.auth0.com',
    clientID: 'HxBuAA5KWyF2XhzsqRae2Qb1FpaHKkTQ',
    redirectUri: 'http://localhost:3000/tweet',
    responseType: 'token id_token',
    scope: 'openid'
  });

  userProfile;

  accessToken;


  // AUTH 0 ATTEMPT:
  // HARD CODED TOKEN FROM URL:
 // accessToken = 'aHl70lyV16fuz2P8Un6VD6Hmd4dbEgQV';
  accessToken = 'HxBuAA5KWyF2XhzsqRae2Qb1FpaHKkTQ';

  constructor() {
    this.getProfile = this.getProfile.bind(this);
    // this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  // handleAuthentication() {
  //   this.auth0.parseHash((err, authResult) => {
  //     if (authResult && authResult.accessToken && authResult.idToken) {
  //       // this.setSession(authResult);
  //       this.accessToken = 'aHl70lyV16fuz2P8Un6VD6Hmd4dbEgQV';
  //     } else if (err) {
  //       // history.replace('/home');
  //       console.log(err);
  //       alert(`Error: ${err.error}. Check the console for further details.`);
  //     }
  //   });
  // }

  getProfile(cb) {
    // console.log(this.props);
    // this.handleAuthentication()
    this.auth0.client.userInfo(this.accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  logout() {
    // Remove user profile
    this.userProfile = null;
  }

  login() {
    this.auth0.authorize();
  }
}
