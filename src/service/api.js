import { apis } from "service";

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
