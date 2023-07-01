import { UserAgentApplication, AuthenticationParameters } from 'msal';
import { User } from '../types/user';

const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_AZURE_CLIENT_ID,
    authority: process.env.REACT_APP_AZURE_AUTHORITY,
    redirectUri: process.env.REACT_APP_AZURE_REDIRECT_URI,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  }
};

const myMSALObj = new UserAgentApplication(msalConfig);

const loginRequest: AuthenticationParameters = {
  scopes: ["user.read"]
};

const authService = {
  login: async (): Promise<User | null> => {
    try {
      const loginResponse = await myMSALObj.loginPopup(loginRequest);
      if (loginResponse.account) {
        const user: User = {
          name: loginResponse.account.name,
          username: loginResponse.account.userName,
          email: loginResponse.account.idToken.email,
        };
        return user;
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  logout: (): void => {
    myMSALObj.logout();
  },

  getToken: async (): Promise<string | null> => {
    try {
      const response = await myMSALObj.acquireTokenSilent(loginRequest);
      return response.accessToken;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};

export default authService;