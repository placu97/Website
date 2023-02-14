import { apis } from "service";

export const postAccountsSignInWithPassword = (payload) =>
  apis.post(
    `https://identitytoolkit.googleapis.com/v1/accounts${payload?.path?.signInWithPassword}`,
    {
      ...payload,
      params: {
        key: "AIzaSyAHqFEaxGMSxzMO9iDaI9F-vwUCKuG89oc",
        ...payload?.params,
      },
    }
  );

export const postAccountsSignUp = (payload) =>
  apis.post(
    `https://identitytoolkit.googleapis.com/v1/accounts${payload?.path?.signUp}`,
    {
      ...payload,
      params: {
        key: "AIzaSyAHqFEaxGMSxzMO9iDaI9F-vwUCKuG89oc",
        ...payload?.params,
      },
    }
  );
