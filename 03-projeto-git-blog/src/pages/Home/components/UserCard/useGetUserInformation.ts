import { useEffect, useState } from "react";
import { GIT_USER_NAME } from "../../../../domains/gitValues";
import { GithubServices } from "../../../../services/githubServices";

interface UserInfo {
  name: string;
  company: string;
  bio: string;
  followers: number;
  login: string;
  url: string;
  avatar_url: string;
  userIsLoading: boolean;
  userIsError: boolean;
}

const userInfoInitialState: UserInfo = {
  name: "",
  company: "",
  bio: "",
  followers: 0,
  login: "",
  url: "",
  avatar_url: "",
  userIsLoading: false,
  userIsError: false,
};

export function useGetUserInformation() {
  const [userInfo, setUserInfo] = useState<UserInfo>(userInfoInitialState);

  async function getUserInfo() {
    try {
      setUserInfo((state) => ({
        ...state,
        userIsLoading: true,
        userIsError: false,
      }));
      const userInfoResponse = await GithubServices.getUser(GIT_USER_NAME);

      setUserInfo({
        ...userInfoResponse.data,
        userIsLoading: false,
        userIsError: false,
      });
    } catch (e) {
      setUserInfo((state) => ({
        ...state,
        userIsLoading: false,
        userIsError: true,
      }));
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return userInfo;
}
